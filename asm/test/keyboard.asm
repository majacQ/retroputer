;
; Test the keyboard device without a kernel
;

.data 0x0B000

.var key
.db 0x00

.var cursor-pos
.dw 0x0000

.var cursor-enabled
.db 0x01

.var cursor-blink-enabled
.db 0x01
.var cursor-blink-counter
.db 30
.var cursor-blink-toggle
.db 30

.code 0x1000
start:
    NOP
end:
    HALT 0x00
    BR :end

;
; FRAME handler 
.code 0xFE00

.def tile-page-0 0x30000

FRAME-start:

    ; we need to be good citizens; push what we muck about with
    PUSHA

    ; disable interrupts for the duration of this frame 
    CLR I

    ; set up destination bank (0x03)
    LDI A, bank(#tile-page-0)
    MOV DB, A

    ; zero A and set up source bank
    XOR A, A
    MOV SB, A

cursor-blink-start:
    ; check if we should blink our cursor at all
    LDS AL, [addr(&cursor-blink-enabled)]
    ; if zero, blinking is disabled, so don't do anything
    IF Z
        BR :render-cursor
    ; otherwise, we can blink!
    LDS AL, [addr(&cursor-blink-counter)]
    IF Z
        BR :cursor-blink-toggle
    DEC A
    STS AL, [addr(&cursor-blink-counter)]
    BR :render-cursor

cursor-blink-toggle:
    LDS AL, [addr(&cursor-blink-toggle)]
    STS AL, [addr(&cursor-blink-counter)]

    LDI AL, 0b00000010
    MOV B, A
    LDS AL, [addr(&cursor-blink-enabled)]
    XOR A, B
    STS AL, [addr(&cursor-blink-enabled)]

render-cursor:
    XOR A, A
    LDS AL, [addr(&cursor-enabled)]
    IF Z
        BR :check-for-keypress

    LDI AL, 0x03
    MOV B, A
    LDS AL, [addr(&cursor-blink-enabled)]
    IFNR AL, 0b00000010
        BR :render-cursor-off

render-cursor-on:
    LDS A, [addr(&cursor-pos)]
    MOV X, A
    LDI A, 0x0400
    MOV Y, A
    LDI A, 0x00FF
    STD AL, [addr(#tile-page-0)+X+Y]
    LDI A, 0x0800
    MOV Y, A
    LDI A, 0x0000
    STD AL, [addr(#tile-page-0)+X+Y]
    BR :render-cursor-end

render-cursor-off:
    LDS A, [addr(&cursor-pos)]
    MOV X, A
    LDI A, 0x0400
    MOV Y, A
    LDI A, 0x0000
    STD AL, [addr(#tile-page-0)+X+Y]
    LDI A, 0x0800
    MOV Y, A
    LDI A, 0x00FF
    STD AL, [addr(#tile-page-0)+X+Y]
    BR :render-cursor-end

render-cursor-end:
check-for-keypress:
    ; zero B so that we can see if the user typed something
    IN AL, 0x10

    ; If no key pressed, get out!
    IF E
        BR :FRAME-end

    ; 
    ; key pressed, let's store it, write it to the screen, and increment address
    ;

    ; Save key
    MOV C, A
    STS AL, [addr(&key)]

    ; get pos and write key to screen
    LDS A, [addr(&cursor-pos)]
    MOV X, A
    MOV A, C
    STD AL, [addr(#tile-page-0)+X]

    ; make sure the cursor is hidden
    LDI A, 0x0400
    MOV Y, A
    LDI A, 0x0000
    STD AL, [addr(#tile-page-0)+X+Y]
    LDI A, 0x0800
    MOV Y, A
    LDI A, 0x00FF
    STD AL, [addr(#tile-page-0)+X+Y]

    ; increment pos
    INC X
    MOV A, X
    STS A, [addr(&cursor-pos)]

FRAME-end:
    POPA                                ; interrupts will be re-enabled
    RET
