const formulario = document.querySelector('#formulario-conversor');
const entradapesos = document.querySelector('#pesos');
const salidadolares = document.querySelector('#dolares');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const valorpesos = entradapesos.value.trim();
    const pesos = Number(valorpesos.replace(',', '.'));

    if (valorpesos === '') {
        salidadolares.value = '';
        mensaje.textContent = 'Ingrese una cantidad valida .';
        entradapesos.focus();
        return;
    }

    if (!Number.isFinite(pesos)) {
        salidadolares.value = '';
        mensaje.textContent = 'Ingresa un valor de pesos valido';
        entradapesos.focus();
        return;
    }

    if(pesos < 0){
        salidadolares.value='';
        mensaje.textContent='Ingrese un valor mayor a cero';
        entradapesos.focus();
        return;
    }

    const dolares = pesos*(0.055);
    salidadolares.value = `${dolares.toFixed(2)} USD`;
    mensaje.textContent = 'Conversion Realizada';
});