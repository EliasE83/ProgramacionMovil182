let animales = ["perro", "gato", "loro"];

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}

// cambiar un valor del array
animales[1] = "pez";

console.log(animales);

// agregar un valor al final del array

animales.push("tigre");

console.log(animales);

console.log(animales.length);