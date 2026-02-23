const input = document.getElementById("nome")
const button = document.getElementById("btn")
const fromBusca = document.getElementById("form-busca")

// console.log(input)
// console.log(button)


const validate = () => {
    console.log("clicou")
}

button.addEventListener("click", validate)

input.addEventListener("input", () => {
    // console.log("digitou")

    // const value = input.value
    // console.log(value)
    
})

fromBusca.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(input.value);
    
})