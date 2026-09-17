const formulario = document.querySelector('#formulario-votar');
const entradaEdad = document.querySelector('#edad');
const salidaResultado = document.querySelector('#resultado');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const valorEdad = entradaEdad.value.trim();
    const edad = Number(valorEdad);

    if (valorEdad === '') {
        salidaResultado.value = '';
        mensaje.textContent = 'Ingrese su edad.';
        entradaEdad.focus();
        return;
    }

    if (!Number.isFinite(edad)) {
        salidaResultado.value = '';
        mensaje.textContent = 'Ingresa un valor numérico válido.';
        entradaEdad.focus();
        return;
    }

    if (edad <= 0) {
        salidaResultado.value = '';
        mensaje.textContent = 'Ingrese una edad mayor a cero.';
        entradaEdad.focus();
        return;
    }

    if (edad >= 18) {
        salidaResultado.value = 'Puedes votar';
        mensaje.textContent = 'Verificación completada con éxito.';
    } else {
        salidaResultado.value = 'No puedes votar';
        mensaje.textContent = 'Verificación completada con éxito.';
    }
});