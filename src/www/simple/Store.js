import Stats from 'stats.js';
import { toHex, toHex2, toHex4, toHex5, STATE, Diagnostics, numToString, round } from "../../core/Diagnostics.js";

import { Computer, TIMING_METHODS } from "../../core/Computer.js";
import { SimpleConsoleDevice } from "./SimpleConsole.js";
import { Screen } from "../../devices/Screen.js";
import { DMA } from "../../devices/DMA.js";

import rom from "../../roms/kernel.js";

export class Store {
    constructor() {
        const stats = new Stats();
        stats.showPanel(0);
        stats.dom.style.cssText = "";
        this.stats = stats;

        const screenFPS = new Stats();
        screenFPS.showPanel(0);
        screenFPS.dom.style.cssText = "";
        this.fps = screenFPS;

        const computer = new Computer({ 
            performance, 
            debug: true, 
            timingMethod: TIMING_METHODS.FIXED, 
            //timingMethod: TIMING_METHODS.AUTO, 
            sliceTime: 16, 
            sliceGranularity: 4096
            //sliceGranularity: 0xFF 
        });
        computer.memory.loadFromJS(rom, true);
        const diagnostics = new Diagnostics(computer);
        const simpleConsole = new SimpleConsoleDevice({
            device: 8,
            length: 16,
            controller: computer.controller,
            memory: computer.memory,
            clock: computer.clock
        });

        const screen = new Screen({
            device: 1,
            length: 32,
            controller: computer.controller,
            memory: computer.memory,
            clock: computer.clock,
            performance,
            stats: this.fps
        });

        const dma = new DMA({
            device: 13,
            length: 16,
            controller: computer.controller,
            memory: computer.memory,
            clock: computer.clock
        });


        this.computer = computer;
        this.diagnostics = diagnostics;
        this.devices = {
            console: simpleConsole,
            screen,
            dma
        };

        this.config = {
            panels: {
                canvas: true,
                state: true,
                code: true,
                console: false,
                control: true
            },
            code: localStorage.getItem("code") || (`
            .segment code 0x02000 {
                ld al, 0
            top:
                ld x, 0
                ld c, 768
                ld bl, 0xff
                ld dl, 0
                do {
                    st [0x10000,x], al
                    st [0x11000,x], bl
                    st [0x12000,x], dl
                    inc al
                    inc x
                    dec c
                } while !z
                dec al
                br top
                brk
            }
            `.split("\n").map(l => l.substr(12)).join("\n"))
        }
    }

    get code() {
        return this.config.code;
    }

    set code(v) {
        this.config.code = v;
        localStorage.setItem("code", v);
    }
}