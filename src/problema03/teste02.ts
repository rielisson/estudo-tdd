import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function showMenuQuestion(callback: (answer: string) => void) {
    rl.question('menu: \nopção 1;\nopção 2;\nopção 3;\nopcao 4 (SAIR)\n', (answer: string) => callback(answer))
}

const optionsMenuCheck: Map<string, () => string> = new Map([
    ['1', () => 'voce selecionou a opção 1'],
    ['2', () => 'voce selecionou a opção 2'],
    ['3', () => 'voce selecionou a opção 3'],
    ['4', () => 'voce selecionou a opção 4'],
])

function checkOptionSelected(input: string) {
    // if (input == '1') {
    //     console.log('voce selecionou a opção 1');
    // } else if (input == '2') {
    //     console.log('voce selecionou a opção 2');
    // } else if (input == '3') {
    //     console.log('voce selecionou a opção 3');
    // } else if (input == '4') {
    //     console.log('voce selecionou a opção 4') ;
    //     rl.close()
    //     return;
    // }

    const option = optionsMenuCheck.get(input);

    if(option) {
        console.log(option());
    }

    if(input !== '4') {
        showMenuQuestion(checkOptionSelected);
    } else {
        rl.close();
    }

}

function start() {
    showMenuQuestion(checkOptionSelected);
}

start();