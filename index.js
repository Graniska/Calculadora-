// // Em Javascript faça uma calculadora:

// 1. Pergunte para o usuário dois números;
// 2. Pergunte para o usuário a operação que deseja, deve possuir as opções de adição, subtração, multiplicação, divisão e porcentagem;
// 3. Resolva a operação com os números informados;
// 4. Mostre para o usuário o resultado da operação;
// 5. Valide a entrada do usuário e trate os possíveis erros (exceções tanto da lógica do código como também casos especiais da matemática).

// Entregue nesta atividade:

// 1. A pasta em formato compactado do seu projeto (.zip ou .rar);
// 2. Um link para o repositório do código;
// 3. Um video de até 90 segundos, mostrando o seu código e a explicação do mesmo (porque foi feito da forma que foi feito).


const prompt = require ('prompt-sync')();

while(true) {
    console.log ("======CALCULADORA======")
    let num1 = +prompt("Digite o primeiro numero: ")
    let num2 = +prompt("Digite o segundo numero: ")
    console.log ("Escolha a operação: " +
        "\n (1) Adição " +
        "\n (2) Subtração " +
        "\n (3) Multiplicação " +
        "\n (4) Divisão " +
        "\n (5) Porcentagem ")
        let operacao = prompt().toLowerCase().trim()

    switch (operacao) {
        case '1':
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            break;
        case '2':
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            break;
        case '3':
            console.log(`${num1} x ${num2} = ${num1 * num2}`)
            break;
        case '4':
            if (num2 !== 0) {
              console.log(`${num1} / ${num2} = ${num1 / num2}`)
                break;
            } else {
                console.log("ERRO: divisão por 0 não é permitida")
            }
        case '5':
            console.log(`${num1} % ${num2} = ${num1 * num2 / 100}`)
                break;
            default:
                console.log("Operação invalida: tente novamente")
                operacao = undefined
            break;
    }   let sair = prompt("Deseja sair? sim/nao").toLowerCase().trim()
        if (sair == "sim") {
            break;
        }
    }
