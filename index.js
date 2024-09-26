const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularNivelHeroi(xp) {
    if (xp <= 1000) {
        console.log("Ferro");
    } else if (1000 < xp && xp <= 2000) {
        console.log("Bronze");
    } else if (2000 < xp && xp <= 5000) {
        console.log("Prata Ouro");
    } else if (5000 < xp && xp <= 8000) {
        console.log("Platina Diamante");
    } else if (8000 < xp && xp <= 9000) {
        console.log("Ascendente");
    } else if (9000 < xp && xp <= 10000) {
        console.log("Imortal");
    } else if (xp >= 10001) {
        console.log("Radiante");
    }
}

rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite o xp do herói: ', (xp) => {
        calcularNivelHeroi(parseInt(xp));
        rl.close();
    });
});