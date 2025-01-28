# Amigo Secreto

Este proyecto es una aplicación web simple que permite a los usuarios gestionar una lista de amigos y realizar un sorteo de "Amigo Secreto".

## Funcionalidades

- **Agregar Amigo:** Permite al usuario agregar amigos a la lista.
- **Listar Amigos:** Muestra la lista actual de amigos, indicando si ya han sido sorteados.
- **Verificar Paridad:** Asegura que la lista de amigos tenga un número par de elementos antes de realizar el sorteo.
- **Sortear Amigo:** Realiza el sorteo de un amigo al azar de la lista de amigos.

## Estructura del Código

### Variables Globales

- `let listaAmigos = [];` : Lista de amigos agregados.
- `let amigosSorteados = [];` : Lista de amigos que ya han sido sorteados.

### Funciones

- `asignarTextoElemento(subtitulo, texto)`:
  - Asigna un texto a un elemento HTML identificado por su selector.

- `agregarAmigo()`:
  - Agrega un amigo a la lista, verificando que el nombre no esté vacío y no esté en la lista más de dos veces.
  - Actualiza la lista de amigos en la interfaz.

- `listadoDeAmigos()`:
  - Actualiza la lista de amigos en la interfaz, mostrando los nombres y tachando los ya sorteados.

- `verificarParidad()`:
  - Verifica que la lista de amigos tenga un número par de elementos.

- `sortearAmigo()`:
  - Realiza el sorteo de un amigo al azar, asegurándose de no repetir nombres ya sorteados.
  - Actualiza la lista de amigos en la interfaz.

- `condicionesIniciales()`:
  - Asigna los textos iniciales a los elementos de la interfaz.

### Eventos

- `document.addEventListener('DOMContentLoaded', condicionesIniciales);`:
  - Ejecuta las condiciones iniciales una vez que el documento HTML ha sido cargado.

## Uso

1. Abra el archivo HTML en su navegador.
2. Ingrese los nombres de los amigos en el campo de entrada y presione el botón "Agregar Amigo".
3. Una vez que haya agregado todos los amigos, presione el botón "Sortear Amigo" para realizar el sorteo.

¡Disfrute organizando su sorteo de Amigo Secreto!

