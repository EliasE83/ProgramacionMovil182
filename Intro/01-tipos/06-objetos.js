// Personaje de TV
let nombre = "Naruto";
let anime = "Naruto";
let edad = 16;

let personaje = {
    nombre: "Naruto",
    anime: "Naruto",
    edad: 16,
};
// Acceder a las propiedades del objeto
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["nombre"]);

personaje.edad = 17;

console.log(personaje.edad);

//borrar propiedad
delete personaje.anime;