console.log('Hello World!');

// function suma(a, b) {
//     return a + b;
// }   

// Fat Arrow functions
//const suma = (a, b) => {return a+b;}

// Fat Arrow functions - Simplificada
const suma = (a, b) => a+b;

console.log(suma(2, 3));

const usuario = {
    nombre: 'Elias',
    apellido: 'Mayor',
    edad: 22,
    direccion: {
        pais: 'Mexico',
        ciudad: 'Queretaro',
        calle: 'Calle 123',
    },
    amigos: ['Alan', 'Pablo', 'Monse'],
    estatus: true,
    enviaCorreo: enviarCorr=()=>'Enviando correo...',  
}

console.log(usuario);

//Metodos
//console.log(usuario.enviaCorreo());

//Trabajo con el DOM

const titulo = document.createElement('h1');
titulo.innerHTML = 'Soy un título creado JS';
document.body.append(titulo);

const boton = document.createElement('button');
boton.innerText = 'Clickeame';
document.body.append(boton);

boton.addEventListener('click', () => {
    //console.log('Me clickeaste');
    titulo.innerHTML = 'Me clickeaste';
    alert('Me clickeaste');
});

// Trabajo con Arreglos

const nombres = ['Elias', 'Alan', 'Pablo', 'Monse'];

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }

// nombres.forEach(function (nombre){
//     console.log(nombre);
// });

// funcion MAP, genera un nuevo arreglo con los elementos modificados

const array2 = nombres.map(function (nombre){
    console.log(nombre);
    return nombre;
});

console.log(nombres);
console.log(array2);

// Funcion FIND, busca un elemento en el arreglo

const resultado = nombres.find(function (nombre){
    if (nombre === 'Alan') {
        return nombre;
    }
});

// Funcion FILTER, filtra elementos del arreglo

const resultado2 = nombres.filter(function (nombre){
    if (nombre != 'Alan') {
        return nombre;
    }
});

console.log(resultado);
console.log(resultado2);

// Funcion Concat: 
const edades = [22, 23, 24, 25];
console.log(nombres.concat(edades));

//Spread Operator
console.log([...nombres, ...edades]);

// MODULOS: Importar y Exportar

import * as calc from "./calculadora.js";
console.log(calc.sumar(2, 3));