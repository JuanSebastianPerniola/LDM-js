const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.question('Dime si es Farenheit [F]o Celsisus [C]',(TipoDeTemperatura)=>{
    rl.question('Dame la temperatura en Celsius :', (answer) => {
        // TODO: Log the answer in a database
        const answerC = (answer*9/5)+32;
        const answerF = (answer-32)*5/9;
          if(TipoDeTemperatura=='C'){
              console.log(`Este es tu Celsius a Farenheint : ${answerC}`);
          }
          if(TipoDeTemperatura==F){
              console.log(`Este es tu Farenheint a Celsius : ${answerF}`);
          }
        rl.close();
})});


// C*9/5)+32  
// − 32 × 5/9.