import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som=0

for(let teller=1;teller<=3;teller++){
    let getal = parseFloat(await userInput.question('Geef een getal in? '));
    if(getal<=0){
        process.exit(); 
    }
    som+=getal;
}

console.log(som);
process.exit();












process.exit();
