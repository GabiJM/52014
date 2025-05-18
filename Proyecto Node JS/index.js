import InstructionsLexer from "./generated/InstructionsLexer.js";
import InstructionsParser from "./generated/InstructionsParser.js";
import CustomInstructionsVisitor from "./CustomInstructionsVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';
import vm from 'vm';

async function main() {
    let input;

    // Lectura de entrada (archivo o consola).
    try {
        input = fs.readFileSync('input.js', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log("Entrada recibida:", input);
    }

    // Análisis léxico.
    const inputStream = CharStreams.fromString(input);
    const lexer = new InstructionsLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const tokens = lexer.getAllTokens();

    // Mostrar tokens.
    console.log("\n🔎 Tabla de Tokens:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");
    tokens.forEach(token => {
        const tipo = InstructionsLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        console.log(`| ${token.text.padEnd(14)} | ${tipo.padEnd(30)}|`);
    });
    console.log("--------------------------------------------------");

    // Análisis sintáctico.
    lexer.reset();
    const parser = new InstructionsParser(tokenStream);
    const tree = parser.programa();

    // Validación sintáctica.
    if (parser.syntaxErrorsCount > 0) {
        console.error("\n❌ Entrada inválida: Errores de sintaxis.");
        return;
    } else {
        console.log("\n✅ Entrada válida.");
        console.log("🌳 Árbol de derivación:", tree.toStringTree(parser.ruleNames));
    }

    // Traducción a JS.
    const visitor = new CustomInstructionsVisitor();
    const jsCode = visitor.visit(tree);
    console.log("\n🔥 Código generado:\n" + jsCode);

    // Ejecución.
    try {
        console.log("\n🚀 Ejecución:");
        vm.runInNewContext(jsCode, { console });
    } catch (error) {
        console.error("❌ Error al ejecutar:", error.message);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question("Ingrese el código: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
