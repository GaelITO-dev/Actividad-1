const formulario = document.querySelector('#formulario-conversor');
const entradaCelsius = document.querySelector('#celsius');
const salidaFahrenheit = document.querySelector('#fahrenheit');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const valorCelsius = entradaCelsius.value.trim();
    const celsius = Number(valorCelsius.replace(',', '.'));

    if (valorCelsius === '') {
        salidaFahrenheit.value = '';
        mensaje.textContent = 'Ingresa una temperatura en grados válido.';
        entradaCelsius.focus();
        return;
    }

    if (!Number.isFinite(celsius)) {
        salidaFahrenheit.value = '';
        mensaje.textContent = 'Ingresa un valor de grados válido.';
        entradaCelsius.focus();
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    salidaFahrenheit.value = `${fahrenheit} °F`;
    mensaje.textContent = 'Conversion Realizada';
});