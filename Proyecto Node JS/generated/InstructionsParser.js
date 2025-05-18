// Generated from c:/Users/Usuario/Analizador/Proyecto Node JS/Instructions.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import InstructionsListener from './InstructionsListener.js';
import InstructionsVisitor from './InstructionsVisitor.js';

const serializedATN = [4,1,16,59,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,24,8,1,10,1,12,1,
27,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,3,4,46,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,0,1,2,8,0,2,
4,6,8,10,12,14,0,1,1,0,10,11,53,0,16,1,0,0,0,2,18,1,0,0,0,4,28,1,0,0,0,6,
30,1,0,0,0,8,45,1,0,0,0,10,47,1,0,0,0,12,53,1,0,0,0,14,56,1,0,0,0,16,17,
3,2,1,0,17,1,1,0,0,0,18,19,6,1,-1,0,19,20,3,4,2,0,20,25,1,0,0,0,21,22,10,
1,0,0,22,24,3,4,2,0,23,21,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,
0,0,26,3,1,0,0,0,27,25,1,0,0,0,28,29,3,6,3,0,29,5,1,0,0,0,30,31,5,1,0,0,
31,32,5,5,0,0,32,33,3,8,4,0,33,34,5,6,0,0,34,35,5,2,0,0,35,36,5,7,0,0,36,
37,3,14,7,0,37,38,5,8,0,0,38,39,5,9,0,0,39,7,1,0,0,0,40,46,3,10,5,0,41,42,
3,10,5,0,42,43,3,8,4,0,43,46,1,0,0,0,44,46,3,12,6,0,45,40,1,0,0,0,45,41,
1,0,0,0,45,44,1,0,0,0,46,9,1,0,0,0,47,48,5,3,0,0,48,49,5,7,0,0,49,50,5,12,
0,0,50,51,5,8,0,0,51,52,5,9,0,0,52,11,1,0,0,0,53,54,5,4,0,0,54,55,5,9,0,
0,55,13,1,0,0,0,56,57,7,0,0,0,57,15,1,0,0,0,2,25,45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class InstructionsParser extends antlr4.Parser {

    static grammarFileName = "Instructions.g4";
    static literalNames = [ null, "'do'", "'while'", "'puts'", "'break'", 
                            "'{'", "'}'", "'('", "')'", "';'", "'0'", "'1'" ];
    static symbolicNames = [ null, "DO", "WHILE", "PUTS", "BREAK", "LLAVE_IZQ", 
                             "LLAVE_DER", "PAREN_IZQ", "PAREN_DER", "SEMI", 
                             "CERO", "UNO", "CADENA", "LETRA", "DIGITO", 
                             "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = InstructionsParser.ruleNames;
        this.literalNames = InstructionsParser.literalNames;
        this.symbolicNames = InstructionsParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, InstructionsParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.instrucciones(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, InstructionsParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, InstructionsParser.RULE_instrucciones);
	                this.state = 21;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 22;
	                this.instruccion(); 
	            }
	            this.state = 27;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, InstructionsParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, InstructionsParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(InstructionsParser.DO);
	        this.state = 31;
	        this.match(InstructionsParser.LLAVE_IZQ);
	        this.state = 32;
	        this.sentencia();
	        this.state = 33;
	        this.match(InstructionsParser.LLAVE_DER);
	        this.state = 34;
	        this.match(InstructionsParser.WHILE);
	        this.state = 35;
	        this.match(InstructionsParser.PAREN_IZQ);
	        this.state = 36;
	        this.condicion();
	        this.state = 37;
	        this.match(InstructionsParser.PAREN_DER);
	        this.state = 38;
	        this.match(InstructionsParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, InstructionsParser.RULE_sentencia);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.salida();
	            this.state = 42;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, InstructionsParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(InstructionsParser.PUTS);
	        this.state = 48;
	        this.match(InstructionsParser.PAREN_IZQ);
	        this.state = 49;
	        this.match(InstructionsParser.CADENA);
	        this.state = 50;
	        this.match(InstructionsParser.PAREN_DER);
	        this.state = 51;
	        this.match(InstructionsParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, InstructionsParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(InstructionsParser.BREAK);
	        this.state = 54;
	        this.match(InstructionsParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, InstructionsParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

InstructionsParser.EOF = antlr4.Token.EOF;
InstructionsParser.DO = 1;
InstructionsParser.WHILE = 2;
InstructionsParser.PUTS = 3;
InstructionsParser.BREAK = 4;
InstructionsParser.LLAVE_IZQ = 5;
InstructionsParser.LLAVE_DER = 6;
InstructionsParser.PAREN_IZQ = 7;
InstructionsParser.PAREN_DER = 8;
InstructionsParser.SEMI = 9;
InstructionsParser.CERO = 10;
InstructionsParser.UNO = 11;
InstructionsParser.CADENA = 12;
InstructionsParser.LETRA = 13;
InstructionsParser.DIGITO = 14;
InstructionsParser.SIMBOLO = 15;
InstructionsParser.WS = 16;

InstructionsParser.RULE_programa = 0;
InstructionsParser.RULE_instrucciones = 1;
InstructionsParser.RULE_instruccion = 2;
InstructionsParser.RULE_bucle = 3;
InstructionsParser.RULE_sentencia = 4;
InstructionsParser.RULE_salida = 5;
InstructionsParser.RULE_terminar = 6;
InstructionsParser.RULE_condicion = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InstructionsParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof InstructionsVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InstructionsParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof InstructionsVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InstructionsParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof InstructionsVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InstructionsParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(InstructionsParser.DO, 0);
	};

	LLAVE_IZQ() {
	    return this.getToken(InstructionsParser.LLAVE_IZQ, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	LLAVE_DER() {
	    return this.getToken(InstructionsParser.LLAVE_DER, 0);
	};

	WHILE() {
	    return this.getToken(InstructionsParser.WHILE, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(InstructionsParser.PAREN_IZQ, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PAREN_DER() {
	    return this.getToken(InstructionsParser.PAREN_DER, 0);
	};

	SEMI() {
	    return this.getToken(InstructionsParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof InstructionsVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InstructionsParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof InstructionsVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InstructionsParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(InstructionsParser.PUTS, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(InstructionsParser.PAREN_IZQ, 0);
	};

	CADENA() {
	    return this.getToken(InstructionsParser.CADENA, 0);
	};

	PAREN_DER() {
	    return this.getToken(InstructionsParser.PAREN_DER, 0);
	};

	SEMI() {
	    return this.getToken(InstructionsParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof InstructionsVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InstructionsParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(InstructionsParser.BREAK, 0);
	};

	SEMI() {
	    return this.getToken(InstructionsParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof InstructionsVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InstructionsParser.RULE_condicion;
    }

	CERO() {
	    return this.getToken(InstructionsParser.CERO, 0);
	};

	UNO() {
	    return this.getToken(InstructionsParser.UNO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InstructionsListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof InstructionsVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




InstructionsParser.ProgramaContext = ProgramaContext; 
InstructionsParser.InstruccionesContext = InstruccionesContext; 
InstructionsParser.InstruccionContext = InstruccionContext; 
InstructionsParser.BucleContext = BucleContext; 
InstructionsParser.SentenciaContext = SentenciaContext; 
InstructionsParser.SalidaContext = SalidaContext; 
InstructionsParser.TerminarContext = TerminarContext; 
InstructionsParser.CondicionContext = CondicionContext; 
