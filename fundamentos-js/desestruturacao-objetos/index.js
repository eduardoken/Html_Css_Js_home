// desestruturação de objetos
const user = {
    name: "Alice",
    age: 30,
    address: {
        street: "Rua Principal",
        number:123
    }
}

const {name: clientName, age, phone = "999999999", address:{street, number}} = user

console.log(clientName, age, street, number, phone)

//forma tradicional
// const showAge = (user) => {
//     console.log(user.age)
// }

// showAge(user)

//forma com desestruturação
const showAge = ({age}) => {
    console.log(age)
}

showAge(user)