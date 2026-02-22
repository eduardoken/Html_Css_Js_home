// filter - vai filtrar os elementos de um array com base em uma condição

const products = [
    {id: 1, name: "Notebook", price:3000},
    {id: 2, name: "Mouse", price:20},
    {id: 3, name: "Keyboard", price:50},
    {id: 4, name: "Monitor", price:700},
    {id: 5, name: "Cadeira", price:150}
]

const priceGreatherThanOneHundred = products.filter(product=> product.price > 100)

console.log(priceGreatherThanOneHundred)