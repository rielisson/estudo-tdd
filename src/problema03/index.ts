import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('digite algo:', (input) => {
    console.log(input);
    rl.close();
})