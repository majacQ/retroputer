.segment __current__ kmemmap.basic.code-start .append {
    expression-handlers:
        .word token-not-impl                  ,0x1014 # 128, ABS
        .word token-not-impl                  ,0x2006 # 129, AND
        .word token-not-impl                  ,0x1014 # 130, ASC
        .word token-not-impl                  ,0x1014 # 131, ATN
        .word handler-syntax-error            ,0x0000 # 132, AT
        .word handler-syntax-error            ,0x0000 # 133, CALL
        .word handler-syntax-error            ,0x0000 # 134, CATALOG
        .word token-not-impl                  ,0x2014 # 135, CHRS$
        .word token-not-impl                  ,0x1014 # 136, CHR$
        .word handler-syntax-error            ,0x0000 # 137, CLS
        .word handler-syntax-error            ,0x0000 # 138, CLOSE
        .word handler-syntax-error            ,0x0000 # 139, CONTINUE,CONT
        .word token-not-impl                  ,0x1014 # 140, COS
        .word handler-syntax-error            ,0x0000 # 141, DATA
        .word handler-syntax-error            ,0x0000 # 142, DEFFN
        .word handler-syntax-error            ,0x0000 # 143, DEFSUB
        .word handler-syntax-error            ,0x0000 # 144, DIM
        .word handler-syntax-error            ,0x0000 # 145, DO
        .word handler-syntax-error            ,0x0000 # 146, ELSEIF
        .word handler-syntax-error            ,0x0000 # 147, ELSE
        .word handler-syntax-error            ,0x0000 # 148, ENDSUB
        .word handler-syntax-error            ,0x0000 # 149, ENDFN
        .word handler-syntax-error            ,0x0000 # 150, ENDIF
        .word handler-syntax-error            ,0x0000 # 151, END
        .word token-not-impl                  ,0x1014 # 152, EXP
        .word handler-syntax-error            ,0x0000 # 153, FOR
        .word token-not-impl                  ,0x0014 # 154, GETKEY$
        .word handler-syntax-error            ,0x0000 # 155, GOSUB
        .word handler-syntax-error            ,0x0000 # 156, GOTO
        .word token-not-impl                  ,0x1014 # 157, HEX$
        .word handler-syntax-error            ,0x0000 # 158, HOME
        .word handler-syntax-error            ,0x0000 # 159, IF
        .word handler-syntax-error            ,0x0000 # 160, INPUT
        .word token-not-impl                  ,0x1014 # 161, INT
        .word handler-in-expr                 ,0x1014 # 162, IN
        .word token-not-impl                  ,0x2014 # 163, LEFT$
        .word token-not-impl                  ,0x1014 # 164, LEN
        .word handler-syntax-error            ,0x0000 # 165, LET
        .word handler-syntax-error            ,0x0000 # 166, LIST
        .word handler-syntax-error            ,0x0000 # 167, LOAD
        .word token-not-impl                  ,0x1014 # 168, LOG
        .word handler-syntax-error            ,0x0000 # 169, LOOP
        .word token-not-impl                  ,0x1014 # 170, LOWER$
        .word token-not-impl                  ,0x3014 # 171, MID$
        .word handler-syntax-error            ,0x0000 # 172, NEW
        .word handler-syntax-error            ,0x0000 # 173, NEXT
        .word token-not-impl                  ,0x1F11 # 174, NOT
        .word handler-syntax-error            ,0x0000 # 175, ON
        .word handler-syntax-error            ,0x0000 # 176, OPEN
        .word token-not-impl                  ,0x2005 # 177, OR
        .word handler-syntax-error            ,0x0000 # 178, OUT
        .word handler-peek-expr               ,0x2014 # 179, PEEK
        .word handler-syntax-error            ,0x0000 # 180, POKE
        .word handler-syntax-error            ,0x0000 # 181, PRINT,?
        .word handler-syntax-error            ,0x0000 # 182, READ
        .word handler-syntax-error            ,0x0000 # 183, REM,'
        .word handler-syntax-error            ,0x0000 # 184, RETURN
        .word token-not-impl                  ,0x2014 # 185, RIGHT$
        .word handler-rnd-expr                ,0x1014 # 186, RND
        .word handler-syntax-error            ,0x0000 # 187, RENAME
        .word handler-syntax-error            ,0x0000 # 188, REMOVE
        .word handler-syntax-error            ,0x0000 # 189, RESTORE
        .word handler-syntax-error            ,0x0000 # 190, RUN
        .word handler-syntax-error            ,0x0000 # 191, SAVE
        .word token-not-impl                  ,0x1014 # 192, SGN
        .word token-not-impl                  ,0x1014 # 193, SIN
        .word token-not-impl                  ,0x1014 # 194, SPC
        .word token-not-impl                  ,0x1014 # 195, SQR
        .word handler-syntax-error            ,0x0000 # 196, STEP
        .word handler-syntax-error            ,0x0000 # 197, STOP
        .word token-not-impl                  ,0x1014 # 198, STR$
        .word token-not-impl                  ,0x1014 # 199, TAB
        .word token-not-impl                  ,0x1014 # 200, TAN
        .word handler-syntax-error            ,0x0000 # 201, THEN
        .word handler-syntax-error            ,0x0000 # 202, TO
        .word handler-syntax-error            ,0x0000 # 203, UNTIL
        .word token-not-impl                  ,0x1014 # 204, UPPER$
        .word token-not-impl                  ,0x1014 # 205, USR
        .word token-not-impl                  ,0x1014 # 206, VAL
        .word handler-syntax-error            ,0x0000 # 207, WHILE
        .word handler-add-expr                ,0x200E # 208, +
        .word handler-sub-expr                ,0x200E # 209, -
        .word handler-neg-expr                ,0x1011 # 210, -
        .word handler-mul-expr                ,0x200F # 211, *
        .word handler-div-expr                ,0x200F # 212, /
        .word handler-mod-expr                ,0x200F # 213, %
        .word token-not-impl                  ,0x2F10 # 214, ^
        .word handler-neq-expr                ,0x200B # 215, <>,!=
        .word handler-lte-expr                ,0x200C # 216, <=,=<
        .word handler-gte-expr                ,0x200C # 217, >=,=>
        .word handler-lt-expr                 ,0x200C # 218, <
        .word handler-gt-expr                 ,0x200C # 219, >
        .word handler-equ-expr                ,0x200B # 220, =
        .word 0xFFFE                          ,0x2015 # 221, (
        .word 0xFFFF                          ,0x2015 # 222, )
        .word token-not-impl                  ,0x2014 # 223, [
        .word token-not-impl                  ,0x2014 # 224, ]
        .word token-not-impl                  ,0x0001 # 225, ,
        .word token-not-impl                  ,0x00FF # 226, ;
        .word token-not-impl                  ,0x00FF # 227, :
        .word token-not-impl                  ,0x0000 # 228, undefined
        .word token-not-impl                  ,0x0000 # 229, undefined
        .word token-not-impl                  ,0x0000 # 230, undefined
        .word token-not-impl                  ,0x0000 # 231, undefined
        .word token-not-impl                  ,0x0000 # 232, undefined
        .word token-not-impl                  ,0x0000 # 233, undefined
        .word token-not-impl                  ,0x0000 # 234, undefined
        .word token-not-impl                  ,0x0000 # 235, undefined
        .word token-not-impl                  ,0x0000 # 236, undefined
        .word token-not-impl                  ,0x0000 # 237, undefined
        .word token-not-impl                  ,0x0000 # 238, undefined
        .word token-not-impl                  ,0x0000 # 239, undefined
        .word token-not-impl                  ,0x0000 # 240, undefined
        .word token-not-impl                  ,0x0000 # 241, undefined
        .word token-not-impl                  ,0x0000 # 242, undefined
        .word token-not-impl                  ,0x0000 # 243, undefined
        .word token-not-impl                  ,0x0000 # 244, undefined
        .word token-not-impl                  ,0x0000 # 245, undefined
        .word token-not-impl                  ,0x0000 # 246, undefined
        .word token-not-impl                  ,0x0000 # 247, undefined
        .word token-not-impl                  ,0x0000 # 248, undefined
        .word token-not-impl                  ,0x00FF # 249, REAL
        .word token-not-impl                  ,0x00FF # 250, VARIABLE
        .word token-not-impl                  ,0x00FF # 251, CODE_STRING
        .word token-not-impl                  ,0x00FF # 252, STRING
        .word token-not-impl                  ,0x00FF # 253, DWORD
        .word token-not-impl                  ,0x00FF # 254, WORD
        .word token-not-impl                  ,0x00FF # 255, BYTE
}