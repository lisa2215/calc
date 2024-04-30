const teclado = require (`prompt-sync`)();
let n1: number = 0;
let n2: number = 0;

function sair(): void{
    console.clear();
    console.log(`encerar calculadora...`);
    process.exit; 
}

function adicao(n1: number, n2:number): void{
    let resultado: number = n1 + n2;
    console.log(`a adição dos numeros ${n1} e ${n2} é... `)
    console.log(`${resultado} !!`);
    console.log();
    console.log(`aperte ENTER para continuar...`);
    teclado();
    menu();

}

function subtracao(n1: number, n2:number): void{
    let resultado: number = n1 - n2;
    console.log(`a subtração dos numeros ${n1} e ${n2} é...`)
    console.log(`${resultado} !!`);
    console.log();
    console.log(`aperte ENTER para continuar...`);
    teclado();
    menu();

}

function multiplicacao(n1: number, n2:number): void{
    let resultado: number = n1 * n2;
    console.log(`a multiplicação dos numeros ${n1} e ${n2} é...`)
    console.log(`${resultado} !!`);
    console.log();
    console.log(`aperte ENTER para continuar...`);
    teclado();
    menu();
}


function divisao(n1: number, n2:number): void{
    let resultado: number = n1 / n2;
    console.log(`a soma dos numeros ${n1} e ${n2} é...`)
    console.log(`${resultado} !!`);
    console.log();
    console.log(`aperte ENTER para continuar...`);
    teclado();
    menu();

}

function selecao(opcao: string):void{
    n1 = parseInt(teclado(`digite o primiro numero:  `));
    n2 = parseInt(teclado(`digite o segundo numero:  `));

    switch(opcao){
        case `+` : adicao(n1, n2); break;
        case `-` :subtracao(n1, n2); break;
        case `*` : multiplicacao(n1, n2); break;
        case `/` : divisao(n1, n2); break;
      


    }
}


function menu(): void{
    console.clear();
    console.log(`---------- CALCULADORA ----------`);
    console.log(`-------- selecione opção --------`);
    console.log();
    console.log(`digite a opção desejada`);
    console.log(` + -> adição`);
    console.log(` - -> subtração`);
    console.log(` * -> multiplicação`);
    console.log(` / -> divisão`);
    console.log(` s -> sair`);
    console.log();
    let opcao: string = teclado(`digite a opção -->  `);
    selecao(opcao);
}

menu();