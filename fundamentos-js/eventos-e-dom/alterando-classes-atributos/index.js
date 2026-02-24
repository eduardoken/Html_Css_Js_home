// mexendo com classe nos elementos HMTL usando class list

const quadrado = document.querySelector(".quadrado")

// quadrado.classList.remove("azul")

// quadrado.classList.add("preto")

// quadrado.classList.toggle("preto") //add
// quadrado.classList.toggle("preto") //delete

const hasBlue = quadrado.classList.contains("azul")

if(hasBlue){
    console.log("quadrado tem a classe azul")
} else{
    console.log("quadrado não tem a classe azul")
}

// mexendo com atributos do HTML

// setAttribute - define um atributo
// getAttribute - obtem um valor de um atributo
// removeAttribute - remove um atributo

const inputCor = document.getElementById ("cor")

inputCor.setAttribute("placeholder", "Digite uma cor")

const valorPlaceholder = inputCor.getAttribute("placeholder")

console.log(valorPlaceholder)
inputCor.removeAttribute("placeholder")
