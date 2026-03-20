# Registro de Asistencia a Eventos - Mario Antonio Salamanca Romero (SMSS085424)

## Situación problemática
**Enunciado:**  
En la universidad, cuando se organizan eventos como conferencias, talleres o charlas, el control de asistencia suele hacerse con listas en papel o archivos sueltos en Excel. Esto termina generando varios problemas: se pierden hojas, los datos se escriben mal, no hay forma rápida de saber cuántas personas asistieron a cada evento y al final todo queda desordenado. Además, cuando los organizadores necesitan información para reportes o para planificar futuros eventos, tienen que revisar manualmente todo, lo cual toma mucho tiempo y puede tener errores.

**Sector al que va dirigido:**  
- Instituciones educativas (universidades, institutos, escuelas)  
- Organizadores de eventos estudiantiles o académicos  
- Grupos que realizan talleres, capacitaciones o actividades extracurriculares  

**Solución:**  
Se desarrolló una pequeña aplicación web que permite registrar a los participantes de manera rápida y ordenada. Solo se necesita ingresar el nombre, correo y el evento al que asistirán. La aplicación valida que los datos estén correctos para evitar errores, muestra la lista de registrados en tiempo real, permite filtrar por evento para ver grupos específicos y también da la opción de eliminar algún registro si es necesario. Todo esto ayuda a mantener un control más limpio, sin perder información y con la posibilidad de obtener datos organizados sin tanto esfuerzo.

---

## Preguntas Del Laboratorio 1 Cómputo 2

### 1. ¿Qué es Vue.js y cuál es su función dentro de la página web desarrollada?

Vue.js es un framework progresivo de JavaScript utilizado para construir interfaces de usuario. En esta aplicación, Vue.js permite manejar el estado de los datos (participantes, formulario, filtros) de forma reactiva, actualizando automáticamente la interfaz cuando los datos cambian, sin necesidad de manipular directamente el DOM.

### 2. Variables reactivas utilizadas y su función

- `nuevoNombre`: Almacena el nombre ingresado en el input.
- `nuevoCorreo`: Almacena el correo ingresado.
- `nuevoEvento`: Almacena el evento seleccionado en el select.
- `participantes`: Array que guarda todos los participantes registrados.
- `filtroEvento`: Almacena el valor seleccionado para filtrar participantes por evento.
- `mensajeError` / `mensajeExito`: Controlan los mensajes de validación y éxito.

### 3. Diferencia entre v-bind y v-model

- **v-bind**: Vincula un atributo HTML a una variable reactiva de forma unidireccional (JS → HTML). Ejemplo: `:class="claseDinamica"`.
- **v-model**: Crea un enlace bidireccional entre un input y una variable reactiva (JS ↔ HTML). Ejemplo: `v-model="nuevoNombre"`.

### 4. Evento utilizado dentro de la aplicación

Se utiliza el evento `@submit.prevent="agregarParticipante"` en el formulario. Este evento captura el envío del formulario, evita la recarga de la página y ejecuta la función de registro con validaciones.

### 5. Uso de v-for

La directiva `v-for` se utiliza para recorrer el array `participantesFiltrados` y mostrar cada participante en una lista. Esto permite generar dinámicamente los elementos HTML según los datos existentes.

### 6. Uso de v-if

Se utiliza `v-if` para mostrar condicionalmente mensajes cuando la lista está vacía (`v-if="participantes.length === 0"`) y también para mostrar mensajes de error o éxito. Resuelve el problema de mostrar información solo cuando es necesario, mejorando la experiencia de usuario.

### 7. Validación de datos

Las validaciones se realizan dentro de la función `agregarParticipante()`:
- Nombre no vacío.
- Correo no vacío y con formato válido (regex).
- Evento seleccionado.

Es importante validar los datos para evitar registros incompletos o erróneos que afecten la integridad de la información y la experiencia del usuario.
