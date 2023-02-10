# Prueba técnica de ReactJs

Documentación básica para iniciar el proyecto con anotaciones

## Instalación de paquetes 

Debe ejecutar el siguiente comando:

### `npm i`

Esto instalara todos los paquetes necesarios para la ejecucion del mismo.

## Ejecución de servidor en local

Debe ejecutar el siguente comando:

### `npm start`

El servidor se ejecutara en ambiente de desarrollo.
Abra [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

## Anotaciones

Estos son los criterios de aceptacion que yo he usado para hacer la prueba técnica:

- Si Edita un articulo y deja vacio alguno de los campos, saldra una notificacion de advertencia (campos obligatorios).
- No se puede agregar un nuevo articulo (ya que no se podria según lo planteado, y asociarlo a un grupo).
- Cada vez que se Edita o se Elimina un articulo, saldra un mensaje abajo a la izquierda como notificación.
- Antes de eliminar un articulo, sale una ventana dialogo para confirmar la eliminación o cancelarlo.
- Se le añadio la funcionalidad de "Eliminar", aunque en la prueba se indico que solo se realizarian las siguientes acciones: ·Listar, ·Filtrar, ·Editar (mostrar y guardar cambios)