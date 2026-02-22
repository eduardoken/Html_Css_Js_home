// um objeto é uma estrutura de dados que amarzena valores em pares chave-valor
const user = {
    name: "Eduardo",
    age: 21,
    apresentar: function (){
        console.log(`Olá, meu nome é ${this.name},e eu tenho ${this.age} anos.`)
    }
}

console.log(user.name)
console.log(user["age"])

//adicionar nova propriedade
user.job = "Developer"
console.log(user.job)
console.log(user)

user.name = "Edu"
console.log(user.name)
console.log(user)

user["name"] = "Eduardo"
console.log(user.name)
console.log(user)

// user.apresentar()

const userEduardo = {
    name: "Eduardo",
    age: 21,
    apresentar: function (){
        console.log(`Olá, meu nome é ${this.name},e eu tenho ${this.age} anos.`)
    }
}

userEduardo.apresentar()

// arrays de objetos

const products = [
    {id:1, name:"Camisa", price:29.90},
    {id:2, name:"Calça", price:59.90},
    {id:3, name:"Tênis", price:89.90}
]
console.log(products[0].name)

products.forEach ( 
    (product) => {
    console.log(product.name)
    console.log(product.price)
}
)