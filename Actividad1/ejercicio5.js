var intervalID = setInterval(myCallback, 500);

function myCallback() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  
  console.log("Número actual: " + randomNumber);

  if (randomNumber === 50) {
    console.log("Ha salido el número 50");
    clearInterval(intervalID); 
  }
}

