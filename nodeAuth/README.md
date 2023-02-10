# Prueba técnica de NodeJs

Documentación básica para iniciar el proyecto con anotaciones

## Instalación de paquetes 

Debe ejecutar el siguiente comando:

### `npm i`

Esto instalara todos los paquetes necesarios para la ejecucion del mismo.

## Ejecución de servidor en local

Debe ejecutar el siguente comando:

### `node server`

El servidor se ejecutara en ambiente de desarrollo: [http://localhost:8080](http://localhost:8080).

## EndPoint

La ruta habilitada para el uso es: [http://localhost:8080/api](http://localhost:8080/api) mediante POST.

## Anotaciones

Estos son los criterios de aceptacion que yo he usado para hacer la prueba técnica:

- Debe enviar en formato JSON mediante POST.
- Los parametros obligatorios son: "usuario" y "password".
- Si no envia uno de estos campos, saldra un mensaje de error { "message": "Parametros Invalidos" }(200).
- Si no encuentra el usuario con la contraseña enviada, retornara { "message": "Usuario y/o password incorrecta." }(200).
- Si hubiera algun problema de conexión con la BD, retornara { "message": " Error al buscar el usuario: XXXXX" }(500).
- Si encuentra el usuario y corresponde su password, retornara { "nombreCompleto": "XXXXX" }(200), siendo XXXXX el nombre completo.