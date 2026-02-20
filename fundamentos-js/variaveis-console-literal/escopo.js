//global - podemos usar as variáveis em qualquer lugar do código

let idade = 45

// local - variáveis ficam reservadas somente as funções onde foram criadas

function mostrarIdade() {
    let nome = 'João' //variável local
    console.log(nome);
    console.log(idade);

    // bloco - tudo dentro das chaves {} variáveis ficam resevadas ao bloco onde foram criadas

    if (idade > 18) {
        var podeDirigir = true;
        console.log("Maior de idade");
        console.log(podeDirigir)
    } else {
        console.log("Menor de idade")
    }

    console.log(podeDirigir)// a var vaza para fora do escopo / pratica ruim
}

mostrarIdade();