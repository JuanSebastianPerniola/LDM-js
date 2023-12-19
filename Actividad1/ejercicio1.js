// let nom = "Joan";
// const dataNaixament = 2000;

// let edad = 23;
// let nom2 = "";
// let estudiante = true;

//undefiend and null

// operadores logicos ==,!=,  !==, <,>
// === compara contenido y variable

// condicioneales if console.log else
//for(let i = 0;)
// while es igual
// functions saluda(nom){
//     console.log("Hola " + nom)
// }
// saluda("Anna")

// const suma = (a,b) => a+b; //arrow function

// console.log("hello world")

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Dime tu nombre :', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Este es tu nombre : ${answer}`);
  rl.close();
});

// ver en casa metodos asincronos 

