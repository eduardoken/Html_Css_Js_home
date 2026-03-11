const orderPizza = () => {
    return new Promise((resolve) => {
        console.log("Pedido da pizza enviado para a cozinha")
        
        setTimeout(() => {
            resolve("Pizza pronta!")
        },3000)
    })
}

//  simular uma api de entrega de pizza
const deliverPizza = () => {
    return new Promise((resolve) =>{
        console.log("A pizza está a caminho...")

        setTimeout(() => {
            resolve("Pizza entregue")
        },3000)
    })
}

const makeOrder = async () => {
    const pizzaMessage = await orderPizza()
    console.log(pizzaMessage)

    const deliveryMessage = await deliverPizza()
    console.log(deliveryMessage)
}

makeOrder()