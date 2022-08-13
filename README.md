# SistemaInscripcionDeMaterias
Un sistema de inscripción de materias creado a partir de MySQL, Node.JS, React, Angular, Prisma, y Ionic.

## Pasos de Instalación

1) Descarga el repositorio.
2) Elimina la carpeta `node modules`. 
3) Ejecuta el comando `npm Install`.
4) Si no desea eliminar la carpeta ejecuta `npm update`.
5) En el archivo .env modifica la conexión para tu base de datos. 
`DATABASE_URL="$TIPO://root:@{{URL}}:{{PORT}}/mydb?schema=public"`.
6) Ejecuta `npx prisma migrate dev --name init`.
7) Validar si se creo el archivo de migración (y se ejecuto en la DB), de lo contrario, ejecute el archivo SQL almacenado en el repositorio.

Puerto Default: 4000
Info Swagger: http://localhost:4000/api-doc/
