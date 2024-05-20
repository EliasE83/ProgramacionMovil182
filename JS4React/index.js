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