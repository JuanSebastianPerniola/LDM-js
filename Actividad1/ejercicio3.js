//crear  un script q haga operaciones basicas 
//calcular : suma del array
// ""      : media 
// encontra el num min y el max
// mostrar resultado por consola 
//font : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//array with bunch of numbers
const arr = [0, 1, 2, 3, 4, 8, 90, 498, 2, 123, 13233];
// funcion para calcular el min
const min = Math.min(...arr);
//funcion para calcualr el max
const max = Math.max(...arr);
//funcion para calcular el sum total
//esto es un loop
let total = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}


// let sum = arr.reduce((previus, current) => current += previus);
//function to calculate the avrg N 
let avg = total / arr.length;
console.log(min);
console.log(max);
console.log(total);
console.log(avg);