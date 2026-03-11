const orderPizza = async (hasIngredients) => {
    console.log("Pedido da pizza enviado para a cozinha")

    if (!hasIngredients) {
        throw new Error("Ingredientes insuficientes para preparar a pizza")
    }

    await new Promise((resolve, reject) => 
        setTimeout(() => {
            // Simular uma chance de 40% de dar erro
            const hasError = Math.random() < 0.4
            
            if (hasError) {
                reject("Erro ao preparar a pizza")
            } else {
                resolve("Pizza pronta!")
            }
        }, 3000)
    )    
        
    return "Pizza pronta!"
}
//  simular uma api de entrega de pizza
const deliverPizza = () => {
    return new Promise((resolve) => {
        console.log("A pizza está a caminho...")

        setTimeout(() => {
            resolve("Pizza entregue")
        }, 3000)
    })
}

const makeOrder = async () => {

    try {
        const pizzaMessage = await orderPizza(true)
        console.log(pizzaMessage)

        const deliveryMessage = await deliverPizza()
        console.log(deliveryMessage)
    } catch (error) {
        console.error("Ocorreu um erro:", error)
    } finally {
        console.log("Processo de pedido finalizado")
    }
}

makeOrder()