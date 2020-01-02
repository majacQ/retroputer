import React from 'react';

/*
const lazy = (path) => {
    return React.lazy(() => import(`./${path}`));
}

const paths = [
    "README.md",
    "using-the-web-version.md",
    "technical/technical-overview/README.md",
    "technical/technical-overview/memory-layout.md",
    "technical/technical-overview/1125-sound-generator.md",
    "technical/technical-overview/6516-central-processing-unit/README.md",
    "technical/technical-overview/6516-central-processing-unit/6516-cpu.md",
    "technical/technical-overview/6516-central-processing-unit/flags.md",
    "technical/technical-overview/6516-central-processing-unit/addressing-modes.md",
    "technical/technical-overview/6516-central-processing-unit/system-bus.md",
    "technical/technical-overview/6448-video-generator-1/README.md",
    "technical/technical-overview/6448-video-generator-1/specifications.md",
    "technical/technical-overview/6448-video-generator-1/palette.md",
    "technical/technical-overview/6448-video-generator-1/colors.md",
    "technical/technical-overview/6448-video-generator-1/tile-sets.md",
    "technical/technical-overview/6448-video-generator-1/layers.md",
    "technical/technical-overview/6448-video-generator-1/hardware-sprites.md",
    "technical/technical-overview/9800-persistent-storage-interface.md",
    "technical/devices-1/README.md",
    "technical/devices-1/i-o-bus.md",
    "technical/devices-1/console.md",
    "technical/devices-1/keyboard.md",
    "technical/devices-1/hardware-timers.md",
    "technical/devices-1/mouse.md",
    "technical/devices-1/controllers.md",
    "assembly-language/untitled.md",
    "assembly-language/numbers.md",
    "assembly-language/identifiers.md",
    "assembly-language/directives.md",
    "assembly-language/subroutine-calling-convention.md",
    "assembly-language/assembler-error-messages.md",
    "assembly-language/accessing-memory.md",
    "assembly-language/instructions.md",
    "kernel/what-is-the-kernel.md",
    "kernel/screen-routines.md",
];

export const pages = paths.reduce((pages, path) => {
    pages[path] = lazy(path);
    return pages;
}, {});
*/
export const pages = {
    "README.md": React.lazy(() => import(`./README.md`)),
    "using-the-web-version.md": React.lazy(() => import(`./using-the-web-version.md`)),
    "technical/technical-overview/README.md": React.lazy(() => import("./technical/technical-overview/README.md")),
    "technical/technical-overview/memory-layout.md": React.lazy(() => import("./technical/technical-overview/memory-layout.md")),
    "technical/technical-overview/1125-sound-generator.md": React.lazy(() => import("./technical/technical-overview/1125-sound-generator.md")),
    "technical/technical-overview/6516-central-processing-unit/README.md": React.lazy(() => import("./technical/technical-overview/6516-central-processing-unit/README.md")),
    "technical/technical-overview/6516-central-processing-unit/6516-cpu.md": React.lazy(() => import("./technical/technical-overview/6516-central-processing-unit/6516-cpu.md")),
    "technical/technical-overview/6516-central-processing-unit/flags.md": React.lazy(() => import("./technical/technical-overview/6516-central-processing-unit/flags.md")),
    "technical/technical-overview/6516-central-processing-unit/addressing-modes.md": React.lazy(() => import("./technical/technical-overview/6516-central-processing-unit/addressing-modes.md")),
    "technical/technical-overview/6516-central-processing-unit/system-bus.md": React.lazy(() => import("./technical/technical-overview/6516-central-processing-unit/system-bus.md")),
    "technical/technical-overview/6448-video-generator-1/README.md": React.lazy(() => import("./technical/technical-overview/6448-video-generator-1/README.md")),
    "technical/technical-overview/6448-video-generator-1/specifications.md": React.lazy(() => import("./technical/technical-overview/6448-video-generator-1/specifications.md")),
    "technical/technical-overview/6448-video-generator-1/palette.md": React.lazy(() => import("./technical/technical-overview/6448-video-generator-1/palette.md")),
    "technical/technical-overview/6448-video-generator-1/colors.md": React.lazy(() => import("./technical/technical-overview/6448-video-generator-1/colors.md")),
    "technical/technical-overview/6448-video-generator-1/tile-sets.md": React.lazy(() => import("./technical/technical-overview/6448-video-generator-1/tile-sets.md")),
    "technical/technical-overview/6448-video-generator-1/layers.md": React.lazy(() => import("./technical/technical-overview/6448-video-generator-1/layers.md")),
    "technical/technical-overview/6448-video-generator-1/hardware-sprites.md": React.lazy(() => import("./technical/technical-overview/6448-video-generator-1/hardware-sprites.md")),
    "technical/technical-overview/9800-persistent-storage-interface.md": React.lazy(() => import("./technical/technical-overview/9800-persistent-storage-interface.md")),
    "technical/devices-1/README.md": React.lazy(() => import("./technical/devices-1/README.md")),
    "technical/devices-1/i-o-bus.md": React.lazy(() => import("./technical/devices-1/i-o-bus.md")),
    "technical/devices-1/console.md": React.lazy(() => import("./technical/devices-1/console.md")),
    "technical/devices-1/keyboard.md": React.lazy(() => import("./technical/devices-1/keyboard.md")),
    "technical/devices-1/hardware-timers.md": React.lazy(() => import("./technical/devices-1/hardware-timers.md")),
    "technical/devices-1/mouse.md": React.lazy(() => import("./technical/devices-1/mouse.md")),
    "technical/devices-1/controllers.md": React.lazy(() => import("./technical/devices-1/controllers.md")),
    "assembly-language/untitled.md": React.lazy(() => import("./assembly-language/untitled.md")),
    "assembly-language/numbers.md": React.lazy(() => import("./assembly-language/numbers.md")),
    "assembly-language/identifiers.md": React.lazy(() => import("./assembly-language/identifiers.md")),
    "assembly-language/directives.md": React.lazy(() => import("./assembly-language/directives.md")),
    "assembly-language/subroutine-calling-convention.md": React.lazy(() => import("./assembly-language/subroutine-calling-convention.md")),
    "assembly-language/assembler-error-messages.md": React.lazy(() => import("./assembly-language/assembler-error-messages.md")),
    "assembly-language/accessing-memory.md": React.lazy(() => import("./assembly-language/accessing-memory.md")),
    "assembly-language/instructions.md": React.lazy(() => import("./assembly-language/instructions.md")),
    "kernel/what-is-the-kernel.md": React.lazy(() => import("./kernel/what-is-the-kernel.md")),
    "kernel/screen-routines.md": React.lazy(() => import("./kernel/screen-routines.md")),
};