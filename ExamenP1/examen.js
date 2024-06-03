//Ejercicio 1

numeros = [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6];
pares = [];

async function recorrer(){
    for (let i = 0; i<=numeros.length; i++) {
        console.log(numeros[i]);
            if (numeros[i] % 2 == 0){
                pares.push(numeros[i]);
            }
    
    }
}

recorrer();

console.log(numeros)
console.log(pares)

//Ejercicio 2

estudiantes = [
    {
        name: 'Mane',
        age: 15
    },
    {
        name: 'Andrea',
        age: 22,
    },
    {
        name: 'Alma',
        age: 19
    },
    {
        name: 'Emma',
        age: 29
    },
    {
        name: 'Maria',
        age: 13
    },
    {
        name: 'Luis',
        age: 16
    },
    {
        name: 'Yair',
        age: 21
    }
];

arreglonuevo = [];

async function reccorerEstudiantes(){
    for (let i = 0; i<=estudiantes.length; i++) {
            if (estudiantes[i].age >= 18){
                arreglonuevo.push(estudiantes[i].name);
            }
    }
}

reccorerEstudiantes();

console.log(estudiantes)
console.log(arreglonuevo)