const numeros = [1, 2, 3 ,4, 5]
const resultado = numeros.find(numero=> numero > 3)

const resultadoReduce = numeros.reduce((acumulador, item)=>{
    return acumulador + item
},0)

console.log(resultadoReduce)