// Generated from c:/Users/Usuario/Analizador/Proyecto Node JS/Instructions.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,91,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,
1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,5,11,72,8,11,10,11,12,11,75,
9,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,4,15,86,8,15,11,15,12,
15,87,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
11,23,12,25,13,27,14,29,15,31,16,1,0,6,4,0,10,10,13,13,34,34,92,92,2,0,34,
34,92,92,2,0,65,90,97,122,1,0,48,57,5,0,33,33,44,44,46,46,58,58,63,63,3,
0,9,10,13,13,32,32,93,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,
0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
1,0,0,0,1,33,1,0,0,0,3,36,1,0,0,0,5,42,1,0,0,0,7,47,1,0,0,0,9,53,1,0,0,0,
11,55,1,0,0,0,13,57,1,0,0,0,15,59,1,0,0,0,17,61,1,0,0,0,19,63,1,0,0,0,21,
65,1,0,0,0,23,67,1,0,0,0,25,78,1,0,0,0,27,80,1,0,0,0,29,82,1,0,0,0,31,85,
1,0,0,0,33,34,5,100,0,0,34,35,5,111,0,0,35,2,1,0,0,0,36,37,5,119,0,0,37,
38,5,104,0,0,38,39,5,105,0,0,39,40,5,108,0,0,40,41,5,101,0,0,41,4,1,0,0,
0,42,43,5,112,0,0,43,44,5,117,0,0,44,45,5,116,0,0,45,46,5,115,0,0,46,6,1,
0,0,0,47,48,5,98,0,0,48,49,5,114,0,0,49,50,5,101,0,0,50,51,5,97,0,0,51,52,
5,107,0,0,52,8,1,0,0,0,53,54,5,123,0,0,54,10,1,0,0,0,55,56,5,125,0,0,56,
12,1,0,0,0,57,58,5,40,0,0,58,14,1,0,0,0,59,60,5,41,0,0,60,16,1,0,0,0,61,
62,5,59,0,0,62,18,1,0,0,0,63,64,5,48,0,0,64,20,1,0,0,0,65,66,5,49,0,0,66,
22,1,0,0,0,67,73,5,34,0,0,68,72,8,0,0,0,69,70,5,92,0,0,70,72,7,1,0,0,71,
68,1,0,0,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,76,
1,0,0,0,75,73,1,0,0,0,76,77,5,34,0,0,77,24,1,0,0,0,78,79,7,2,0,0,79,26,1,
0,0,0,80,81,7,3,0,0,81,28,1,0,0,0,82,83,7,4,0,0,83,30,1,0,0,0,84,86,7,5,
0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,
0,89,90,6,15,0,0,90,32,1,0,0,0,4,0,71,73,87,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class InstructionsLexer extends antlr4.Lexer {

    static grammarFileName = "Instructions.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'do'", "'while'", "'puts'", "'break'", "'{'", 
                         "'}'", "'('", "')'", "';'", "'0'", "'1'" ];
	static symbolicNames = [ null, "DO", "WHILE", "PUTS", "BREAK", "LLAVE_IZQ", 
                          "LLAVE_DER", "PAREN_IZQ", "PAREN_DER", "SEMI", 
                          "CERO", "UNO", "CADENA", "LETRA", "DIGITO", "SIMBOLO", 
                          "WS" ];
	static ruleNames = [ "DO", "WHILE", "PUTS", "BREAK", "LLAVE_IZQ", "LLAVE_DER", 
                      "PAREN_IZQ", "PAREN_DER", "SEMI", "CERO", "UNO", "CADENA", 
                      "LETRA", "DIGITO", "SIMBOLO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

InstructionsLexer.EOF = antlr4.Token.EOF;
InstructionsLexer.DO = 1;
InstructionsLexer.WHILE = 2;
InstructionsLexer.PUTS = 3;
InstructionsLexer.BREAK = 4;
InstructionsLexer.LLAVE_IZQ = 5;
InstructionsLexer.LLAVE_DER = 6;
InstructionsLexer.PAREN_IZQ = 7;
InstructionsLexer.PAREN_DER = 8;
InstructionsLexer.SEMI = 9;
InstructionsLexer.CERO = 10;
InstructionsLexer.UNO = 11;
InstructionsLexer.CADENA = 12;
InstructionsLexer.LETRA = 13;
InstructionsLexer.DIGITO = 14;
InstructionsLexer.SIMBOLO = 15;
InstructionsLexer.WS = 16;



