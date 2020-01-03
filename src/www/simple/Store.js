import Stats from 'stats.js';
import { toHex, toHex2, toHex4, toHex5, STATE, Diagnostics, numToString, round } from "../../core/Diagnostics.js";

import { Computer, TIMING_METHODS } from "../../core/Computer.js";
import { TerminalConsoleDevice } from "./TerminalConsole.js";
import { Screen } from "../../devices/Screen.js";
import { DMA } from "../../devices/DMA.js";
import { Keyboard } from "../../devices/Keyboard.js";
import { Timers } from "../../devices/Timers.js";

import rom from "../../roms/kernel.js";

export class Store {
    constructor() {
        this.listeners = [];

        const stats = new Stats();
        stats.showPanel(0);
        stats.dom.style.cssText = "";
        this.stats = stats;

        const screenFPS = new Stats();
        screenFPS.showPanel(0);
        screenFPS.dom.style.cssText = "";
        this.fps = screenFPS;

        this.config = {};
        this.load();
        const computer = new Computer({ 
            performance, 
            debug: true, 
            timingMethod: this.config.options.timingMethod,
            sliceTime: this.config.options.sliceTime, 
            sliceGranularity: this.config.options.sliceGranularity
        });
        computer.memory.loadFromJS(rom, true);
        const diagnostics = new Diagnostics(computer);

        const timers = new Timers({
            device: 0,
            length: 16,
            controller: computer.controller,
            memory: computer.memory,
            clock: computer.clock,
            performance
        });

        const simpleConsole = new TerminalConsoleDevice({
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
        screen.adjustPerformance = this.config.options.ticksBetweenRasterLines === "AUTO";
        if (this.config.options.ticksBetweenRasterLines !== "AUTO") {
            screen.ticksBetweenRasterLines = Number(this.config.options.ticksBetweenRasterLines);
        }

        const dma = new DMA({
            device: 13,
            length: 16,
            controller: computer.controller,
            memory: computer.memory,
            clock: computer.clock
        });

        const keyboard = new Keyboard({
            device: 3,
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
            dma,
            keyboard,
            timers
        };

    }

    get code() {
        return this.config.code;
    }

    set code(v) {
        this.config.code = v;
        this.save();
    }

    get updateInterval() {
        return this.config.panels.updateInterval || 250;
    }
    
    set updateInterval(ms) {
        this.config.panels.updateInterval = ms;
        this.save();
    }

    get autoUpdate() {
        return this.config.panels.autoUpdate;
    }

    set autoUpdate(v) {
        this.config.panels.autoUpdate = v;
        this.save();
    }

    addListener(cb) {
        if (this.listeners.indexOf(cb) < 0) {
            this.listeners.push(cb);
        }
    }
    removeListener(cb) {
        this.listeners = this.listeners.filter(l => l !== cb);
    }

    notify() {
        this.listeners.forEach(l => l(this));
    }

    save() {
        localStorage.setItem("config", JSON.stringify(this.config));
    }

    load() {
        const savedConfigStr = localStorage.getItem("config");
        const savedConfig = savedConfigStr ? JSON.parse(savedConfigStr) : {};
        this.config = Object.assign({}, {
            options: {
                timingMethod: TIMING_METHODS.FIXED,
                sliceGranularity: 4096,
                sliceTime: 16,
                ticksBetweenRasterLines: "AUTO",
            },
            panels: {
                canvas: true,
                state: true,
                code: true,
                console: false,
                control: true,
                updateInterval: 250,
                autoUpdate: true
            },
            code: (`
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
        }, savedConfig);
    }
}