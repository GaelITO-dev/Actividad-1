const formulario = document.querySelector('#formulario-conversor');
const entradakilometros = document.querySelector('#kilometros');
const salidamillas = document.querySelector('#millas');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const valorkilometros = entradakilometros.value.trim();
    const kilometros = Number(valorkilometros.replace(',', '.'));

    if (valorkilometros === '') {
        salidamillas.value = '';
        mensaje.textContent = 'Ingrese una medida valida .';
        entradakilometros.focus();
        return;
    }

    if (!Number.isFinite(kilometros)) {
        salidamillas.value = '';
        mensaje.textContent = 'Ingresa un valor de kilometros válido.';
        entradakilometros.focus();
        return;
    }

    if(kilometros < 0){
        salidamillas.value='';
        mensaje.textContent='Ingrese un valor mayor a cero';
        entradakilometros.focus();
        return;
    }

    const millas = kilometros*(0.621371);
    salidamillas.value = `${millas} m`;
    mensaje.textContent = 'Conversion Realizada';
});