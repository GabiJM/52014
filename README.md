Esta gramática define un lenguaje simple para bucles do-while con solo 3 funcionalidades esenciales:

-Estructura básica de bucle:

	do { ... } while (0|1);

-El cuerpo se ejecuta al menos una vez

-La condición solo acepta 0 (falso) o 1 (verdadero)

-Operaciones disponibles dentro del bucle:

    puts("texto") --> Imprime cadenas entre comillas (soporta caracteres básicos como letras, números y símbolos comunes)

    break; --> Termina el bucle inmediatamente

-Reglas estrictas de sintaxis:

    Requiere punto y coma (;) después de cada instrucción

    Usa llaves {} para el cuerpo del bucle

    Paréntesis () para condiciones y argumentos de puts

Como usar el prográma:

1. Abre una ventana de comandos (Cmd, PowerShell, o terminal en Linux).

2. Clona el proyecto desde el repositorio GitHub utilizando el siguiente comando:
	
	git clone https://github.com/GabiJM/52014.git

3. Cambia al directorio raíz del proyecto con el comando:

	cd 52014/Proyecto Node JS

4. Inicia el prográma con el comando:

	npm start

5. Luego te pedirá ingresar una cadena que quieras analizar.

Salida del prográma:

-Te mostrara la tabla de tokens con sus respectivos lexemas.

-Si la entrada es valida mostrará el arbol de derivación de dicha entrada, su traducción a JavaScript y lo ejecutará.

-Si la entrada no es valida indicara cual es el error y en que linea se encuentra.
