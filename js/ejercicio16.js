const entradaNum1 = document.querySelector('#numero1');
const entradaNum2 = document.querySelector('#numero2');
const salidaResultado = document.querySelector('#resultado');

const btnSumar = document.querySelector('#btn-sumar');
const btnRestar = document.querySelector('#btn-restar');
const btnMultiplicar = document.querySelector('#btn-multiplicar');
const btnDividir = document.querySelector('#btn-dividir');


const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const valor1 = entradaNum1.value.trim();
    const valor2 = entradaNum2.value.trim();

    if (valor1 === '' || valor2 === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor, ingresa un valor en ambos campos numéricos.'
        });
        return;
    }

    const num1 = Number(valor1);
    const num2 = Number(valor2);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valores inválidos',
            text: 'Asegúrate de ingresar únicamente números.'
        });
        salidaResultado.value = ''; 
        return;
    }

    let resultadoCalculo;

    switch (operacion) {
        case 'suma':
            resultadoCalculo = sumar(num1, num2);
            break;
        case 'resta':
            resultadoCalculo = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultadoCalculo = multiplicar(num1, num2);
            break;
        case 'division':
            resultadoCalculo = dividir(num1, num2);
            
            if (typeof resultadoCalculo === 'string') {
                Swal.fire({
                    icon: 'error',
                    title: 'Operación Matemática Inválida',
                    text: resultadoCalculo
                });
                salidaResultado.value = '';
                return;
            }
            break;
    }

    salidaResultado.value = parseFloat(resultadoCalculo.toFixed(4));
};

btnSumar.addEventListener('click', () => calcularOperacion('suma'));
btnRestar.addEventListener('click', () => calcularOperacion('resta'));
btnMultiplicar.addEventListener('click', () => calcularOperacion('multiplicacion'));
btnDividir.addEventListener('click', () => calcularOperacion('division'));