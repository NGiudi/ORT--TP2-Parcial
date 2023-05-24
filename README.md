# Parcial_TP2

## Consigna
Desarrollar un servidor MVC con Node.js y express.

Definir una ruta /ingreso que reciba notas en forma individual y que las incorpore al sistema de persistencia en Memoria ó File System (a elección). El formato de entrada de la nota será JSON, Ej. { nota: x }

Luego crear las siguientes rutas de consulta:

1. /listado retorna todas las notas ingresadas con el siguiente formato JSON.
Ej. { notas: [ x,y,z, ….. ] }

2. /promedio me devuelve el promedio de las notas ingresadas en formato JSON.
Ej: { promedio: xx }

3. /minmax retorna un objeto con el valor máximo y mínimo de las notas almacenadas
Ej. { min: yy, max: zz }

4. /cantidad devuelve la cantidad de notas guardadas en este formato JSON
Ej. { cantidad: X }

Todas las rutas descriptas anteriormente deben estar disponibles en un router con ruta base /notas

## Detalles

1. Uso de File System para persistir la información.

2. Se ha agregado un html muy simple que permite ingresar notas.

3. Se ha agregado print de la consola de thunder client para ver la respuesta de los endpoints. (Las imagenes está en la carpeta 'assets/imgs')

4. Se ha agregado manejo de errores en el controlar para evitar excepciones en el servidor, con un mensaje de error.