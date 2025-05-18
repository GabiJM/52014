import InstructionsVisitor from './generated/InstructionsVisitor.js';

class CustomInstructionsVisitor extends InstructionsVisitor {
    constructor() {
        super();
        this.jsCode = []; // Almacena el código JS generado
        this.hasBreak = false; // Bandera para detectar breaks
    }

    // Punto de entrada principal
    visitPrograma(ctx) {
        this.visitChildren(ctx); // Procesa todo el árbol
        return this.jsCode.join('\n'); // Devuelve el código completo
    }

    // Bloques de instrucciones
    visitInstrucciones(ctx) {
        let result = [];
        for (let i = 0; i < ctx.children.length; i++) {
            result.push(this.visit(ctx.children[i]));
        }
        return result.join('\n');
    }

    // Manejo de bucles do-while
    visitBucle(ctx) {
        this.hasBreak = false; // Resetear bandera antes de procesar el cuerpo
        
        const cuerpo = this.visit(ctx.sentencia());
        const condicion = this.visit(ctx.condicion());
        
        // Generar código con break efectivo
        const loopCode = `do {\n${cuerpo}\n${this.hasBreak ? '  break;\n' : ''}} while (${condicion});`;
        
        this.jsCode.push(loopCode);
        return loopCode;
    }

    // Manejo de sentencias (puts/break)
    visitSentencia(ctx) {
        let code = '';
        for (let i = 0; i < ctx.children.length; i++) {
            code += this.visit(ctx.children[i]);
        }
        return code;
    }

    // Traducción de puts a console.log
    visitSalida(ctx) {
        const mensaje = ctx.CADENA().getText();
        return `  console.log(${mensaje});\n`;
    }

    // Detección de break
    visitTerminar(ctx) {
        this.hasBreak = true; // Activar bandera
        return ''; // No generamos break aquí, lo manejamos en visitBucle
    }

    // Manejo de condiciones
    visitCondicion(ctx) {
        return ctx.CERO() ? 'false' : 'true';
    }
}

export default CustomInstructionsVisitor;
