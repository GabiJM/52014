grammar Instructions;

// Reglas del parser
programa: instrucciones;

instrucciones:
    instruccion
    | instrucciones instruccion
    ;

instruccion: bucle;

bucle:
    DO LLAVE_IZQ sentencia LLAVE_DER WHILE PAREN_IZQ condicion PAREN_DER SEMI
    ;

sentencia:
    salida
    | salida sentencia
    | terminar
    ;

salida:
    PUTS PAREN_IZQ CADENA PAREN_DER SEMI
    ;

terminar:
    BREAK SEMI
    ;

condicion:
    CERO
    | UNO
    ;

// Reglas del lexer
DO: 'do';
WHILE: 'while';
PUTS: 'puts';
BREAK: 'break';

LLAVE_IZQ: '{';
LLAVE_DER: '}';
PAREN_IZQ: '(';
PAREN_DER: ')';
SEMI: ';';

CERO: '0';
UNO: '1';

CADENA: '"' ( ~["\\\r\n] | '\\' ["\\] )* '"';

LETRA: [a-zA-Z];
DIGITO: [0-9];
SIMBOLO: [.,!?:];

// Ignorar espacios en blanco
WS: [ \t\r\n]+ -> skip;