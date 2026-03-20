const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // Variables.
        const nuevoNombre = ref('');
        const nuevoCorreo = ref('');
        const nuevoEvento = ref('');
        const participantes = ref([]);
        const filtroEvento = ref('');
        const mensajeError = ref('');
        const mensajeExito = ref('');

        // Para filtrar participantes.
        const participantesFiltrados = computed(() => {
            if (!filtroEvento.value) {
                return participantes.value;
            }
            return participantes.value.filter(p => p.evento === filtroEvento.value);
        });

        // Función para validar el email del asistente.
        const validarEmail = (email) => {
            const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
            return re.test(email);
        };

        // Función para agregar a los nuevos asistentes.
        const agregarParticipante = () => {
            // Limpiar mensajes previos.
            mensajeError.value = '';
            mensajeExito.value = '';

            // Validaciones que deben cumplir con el registro del asistente.
            if (!nuevoNombre.value.trim()) {
                mensajeError.value = 'El nombre es obligatorio';
                return;
            }
            if (!nuevoCorreo.value.trim()) {
                mensajeError.value = 'El correo es obligatorio';
                return;
            }
            if (!validarEmail(nuevoCorreo.value)) {
                mensajeError.value = 'El correo no es válido';
                return;
            }
            if (!nuevoEvento.value) {
                mensajeError.value = 'Debe seleccionar un evento';
                return;
            }

            // Función para agregar a los participantes.
            participantes.value.push({
                nombre: nuevoNombre.value.trim(),
                correo: nuevoCorreo.value,
                evento: nuevoEvento.value
            });

            // Función para limpiar el formulario.
            nuevoNombre.value = '';
            nuevoCorreo.value = '';
            nuevoEvento.value = '';

            mensajeExito.value = 'Participante registrado correctamente';
            
            // Ocultar el mensaje de éxito después de unos tres segundos.
            setTimeout(() => {
                mensajeExito.value = '';
            }, 3000);
        };

        // Función para eliminar un participante.
        const eliminarParticipante = (index) => {
            participantes.value.splice(index, 1);
            mensajeExito.value = 'Participante eliminado';
            setTimeout(() => {
                mensajeExito.value = '';
            }, 2000);
        };

        return {
            nuevoNombre,
            nuevoCorreo,
            nuevoEvento,
            participantes,
            filtroEvento,
            mensajeError,
            mensajeExito,
            participantesFiltrados,
            agregarParticipante,
            eliminarParticipante
        };
    }
}).mount('#app');