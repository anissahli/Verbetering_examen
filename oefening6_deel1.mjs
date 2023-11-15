import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som=0
for(let i=1;i<=3;i++){
    let getal=parseFloat(await userInput.question('Geef een getal in; '));
    if(getal>0){
        som+=getal;
    }else{
        process.exit;
    }
}

console.log(som)

process.exit