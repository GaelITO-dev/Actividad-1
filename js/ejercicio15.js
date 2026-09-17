const entradaNombre = document.querySelector('#nombre');
const entradaCalificacion = document.querySelector('#calificacion');
const btnAgregar = document.querySelector('#btn-agregar');
const btnCalcular = document.querySelector('#btn-calcular');

const salidaPromedio = document.querySelector('#promedio');
const salidaMejor = document.querySelector('#mejor-estudiante');
const salidaPeor = document.querySelector('#peor-estudiante');
const mensaje = document.querySelector('#mensaje');
let estudiantes = [];

btnAgregar.addEventListener('click', () => {
    const nombreIngresado = entradaNombre.value.trim();
    const calificacionIngresada = entradaCalificacion.value.trim();
    const calificacionNumero = Number(calificacionIngresada);

    if (nombreIngresado === '' || calificacionIngresada === '') {
        mensaje.textContent = 'Error: Debes ingresar tanto el nombre como la calificación.';
        return;
    }

    if (!Number.isFinite(calificacionNumero) || calificacionNumero < 0) {
        mensaje.textContent = 'Error: Ingresa una calificación numérica válida.';
        return;
    }

    let nuevoEstudiante = {
        nombre: nombreIngresado,
        calificacion: calificacionNumero
    };

    estudiantes.push(nuevoEstudiante);

    entradaNombre.value = '';
    entradaCalificacion.value = '';
    entradaNombre.focus();
    mensaje.textContent = `Estudiante ${nombreIngresado} agregado con éxito. (Total: ${estudiantes.length})`;
});

btnCalcular.addEventListener('click', () => {
    if (estudiantes.length === 0) {
        mensaje.textContent = 'Error: Agrega al menos un estudiante antes de calcular.';
        return;
    }

    const sumaCalificaciones = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    const promedio = sumaCalificaciones / estudiantes.length;

    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    const estudianteMejor = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudiantePeor = estudiantes.find(e => e.calificacion === calificacionMinima);

    salidaPromedio.value = Number(promedio.toFixed(2));
    salidaMejor.value = estudianteMejor.nombre;
    salidaPeor.value = estudiantePeor.nombre;

    mensaje.textContent = 'Cálculos realizados correctamente.';
});