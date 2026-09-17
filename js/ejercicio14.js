const formulario = document.querySelector('#formulario-arreglos');
const entradaNumeros = document.querySelector('#numeros');
const salidaMayor = document.querySelector('#mayor');
const salidaMenor = document.querySelector('#menor');
const salidaPromedio = document.querySelector('#promedio');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); 

    const valorIngresado = entradaNumeros.value.trim();

    if (valorIngresado === '') {
        limpiarResultados();
        mensaje.textContent = 'El campo no puede estar vacío.';
        return;
    }

    let arregloCadenas = []; 
    let numeros = [];        
    arregloCadenas = valorIngresado.split(',');
    
    numeros = arregloCadenas.map(Number);

    const contieneErrores = numeros.some(numero => !Number.isFinite(numero));

    if (contieneErrores) {
        limpiarResultados();
        mensaje.textContent = 'Error: Asegúrate de ingresar solo números separados por comas.';
        return;
    }

    const numeroMayor = Math.max(...numeros);
    const numeroMenor = Math.min(...numeros);
    const suma = numeros.reduce((acc, valor) => acc + valor, 0);
    const promedio = suma / numeros.length;

    salidaMayor.value = numeroMayor;
    salidaMenor.value = numeroMenor;
    salidaPromedio.value = Number(promedio.toFixed(2)); 
    
    mensaje.textContent = 'Cálculos realizados correctamente.';
});

function limpiarResultados() {
    salidaMayor.value = '';
    salidaMenor.value = '';
    salidaPromedio.value = '';
}