// // localStorage.setItem('name', 'Eduardo Kenzo')
// // localStorage.setItem('age', '21')

// const usuario = {
//     name: 'Eduardo Kenzo',
//     age: 21,
//     email: 'eduardo@example.com'
// }

// localStorage.setItem('usuario', JSON.stringify(usuario))

// const produtos = [
//    { id: 1, nome: 'Produto 1', preco: 90 },
//    { id: 2, nome: 'Produto 2', preco: 60 },
//    { id: 3, nome: 'Produto 3', preco: 80 },
//    { id: 4, nome: 'Produto 4', preco: 120 },
//    { id: 5, nome: 'Produto 5', preco: 150 },
// ]


// localStorage.setItem('produtos', JSON.stringify(produtos))

// const userName = localStorage.getItem('name')
// // console.log(userName)

// const userJson = localStorage.getItem('usuario')
// // console.log(userJson)
// // console.log(typeof userJson)

// const userObject = JSON.parse(userJson)
// console.log(userObject)
// console.log(typeof userObject)

// const productsJson = localStorage.getItem('produtos')
// const productsArray = JSON.parse(productsJson)
// console.log(productsArray[3])
// console.log(typeof productsArray)

// localStorage.removeItem('produtos')

// // localStorage.clear()

const toggle = document.getElementById('theme-toggle')

const body = document.body

const savedTheme = localStorage.getItem('theme')

if(savedTheme) {
    body.classList.add(savedTheme)
    toggle.checked = true
}

toggle.addEventListener('click', () => {
    if(toggle.checked) {
        body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        body.classList.remove('dark')
        localStorage.removeItem('theme')
    }
})