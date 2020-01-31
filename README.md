# admisionImaginamos

A continuacion explicare brevemente la forma en la que se debe configurar el API.

Primero, se deben instalar todas las dependencias, para esto utilizamos el comando "npm install" en CLI

Para este ejercicio, trabajé con MySQL. en el archivo src/models/conexion.js encontrarán la seccion donde podrán diligenciar los datos de la DB.

Despues de llenar estos campos, podrán acceder al archivo db/db.sql, este archivo tendrá las queries que se deben ejecutar para la creacion de la base de datos y las tablas.

Al finalizar estos pasos podran ejecutar el comando "Node app.js" y el servidor se encontrará en linea.

El patron utilizado para este ejercicio fue una arquitectura MVC basada en el "Principio SOLID" para poder mantener el codigo mas limpio, mantenible y corto pensando a futuro.

En la carpeta "models" encontraremos los archivos que contienen las funciones que nos retornan los resultados de las queries dependiendo del metodo de peticion que estemos utilizando.

En la carpeta "routes" encontraremos la configuracion de cada una de las peticiones.

dentro del archivo app.js tendremos la configuracion de las rutas, el llamado a las dependencias que usaremos y la inicializacion del puerto.
