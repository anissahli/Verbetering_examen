import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Hoeveel willekeurige getallen wil je genereren? '));

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let gegenereerdeGetallen='';
let aantalEvenGetallen=0;

for(let i=1;i<=getal;i++){
    if (gegenereerdeGetallen!==''){
        gegenereerdeGetallen+=', ';
    }
    let randomGetal= random(1,10);
    gegenereerdeGetallen+=randomGetal;
    if(randomGetal%2==0){
        aantalEvenGetallen++;
    }
}

console.log(`De gegenereerde willekeurige getallen zijn ${gegenereerdeGetallen}.`);
console.log(`Van de gegenereerde getallen zijn er ${aantalEvenGetallen} even.`);
process.exit();