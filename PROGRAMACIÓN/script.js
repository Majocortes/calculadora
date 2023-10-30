function validarNumero(input) {
    var valor = input.value;
    var numeros = /^[0-9]+$/;

    if (!valor.match(numeros) && valor !== '') {
        alert('Por favor, ingrese solo números enteros. Los puntos decimales no están permitidos.');
        input.value = valor.slice(0, -1);
    }
}

function calcularIMC() {
    var seleccion = document.getElementById('seleccion').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value) / 100;
    var resultado = peso / (altura * altura);
    var mensaje = '';

    if (seleccion === 'adulto') {
        if (resultado < 18.5) {
            mensaje = 'Desnutrición';
        } else if (resultado < 24.9) {
            mensaje = 'Peso Normal';
        } else if (resultado < 29.9) {
            mensaje = 'Sobrepeso';
        } else {
            mensaje = 'Obesidad';
        }
    } else if (seleccion === 'niño') {
        if (resultado < 5) {
            mensaje = 'Desnutrición';
        } else if (resultado < 85) {
            mensaje = 'Peso Normal';
        } else if (resultado < 95) {
            mensaje = 'Sobrepeso';
        } else {
            mensaje = 'Obesidad';
        }
    }

    document.getElementById('mensaje').innerHTML = 'Tu IMC es: ' + resultado.toFixed(2) + ' - ' + mensaje;
    document.getElementById('resultado').style.display = 'block';
}

function mostrarInformacion() {
    alert('El Índice de Masa Corporal (IMC) es una medida que indica si tienes un peso saludable para tu altura.');
}

function borrarTodo() {
    document.getElementById('seleccion').value = 'adulto';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('mensaje').innerHTML = '';
}

