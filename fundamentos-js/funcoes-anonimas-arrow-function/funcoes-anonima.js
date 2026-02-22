// função anonima é uma função que não tem nome
// const saudacao = function(nome) {
//     console.log(`Olá, tudo bem? ${nome}`)
// }
    
// saudacao("Eduardo")

//função nomeada - sofre hoisting, ou seja, ela pode ser chamada antes de ser declarada
// saudacao()
// function saudacao() {
//     console.log("Olá, tudo bem?")
// }

//funções de seta - arrow functions
const saudacao = (nome) => {
    return`Olá tudo bem?, ${nome}`
}
console.log(saudacao("João"))