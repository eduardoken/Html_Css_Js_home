// As condicionais são estruturas de controle de fluxo do nosso código

// const filme = "Homem Aranha"
// if(filme === "Harry Potter") { //false
//     console.log("Caiu no if do Harry Potter")
// } else if(filme === "Homem Aranha") { //true
//     console.log("Caiu no if do Homem Aranha")
// } else {
//     console.log("Caiu no else")
// }

const idade = 18
const cidade = "São Paulo"

if(idade >=18 && cidade === "São Paulo"){
    console.log("Pode entrar na festa")
} else {
    console.log("Não pode entrar na festa")

}

//operador ternário
//condição ? valor para verdadeiro : valor para falso

idade >= 18 ? "Pode entrar na festa" : "Não pode entrar na festa"
idade >= 18 
    ? console.log("Pode entrar na festa") 
    : console.log("Não pode entrar na festa")

const podeEntrarNaFesta = idade >= 18 
    ? "Pode entrar na festa" 
    : "Não pode entrar na festa"
    console.log(podeEntrarNaFesta)