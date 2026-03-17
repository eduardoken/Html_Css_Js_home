const baseUrl = 'https://ghibliapi.vercel.app'

// const loadSingleMovie = async (id) => {
//     try {
//         //o id é recebido no parametro da função, e é utilizado para montar a url da requisição
//         const response = await fetch(`${baseUrl}/films/${id}`)

//         //faz a conversão do json para um objeto javascript
//         const movie = await response.json()

//         console.log(movie.title)
//     }catch (error) {
//         console.error('Erro ao carregar o filme:', error)
//     }
// }

// loadSingleMovie()


const loadMultipleMoviesAll = async (movieIds) => {
    try {
        //o id é recebido no parametro da função, e é utilizado para montar a url da requisição
        const promises = movieIds.map(async (id) => {
            const response = await fetch(`${baseUrl}/films/${id}`)

            if (!response.ok) {
                throw new Error(`Erro ao carregar o filme com id: ${id}`)
            }

            return response.json()
        })

        //quando todos os dados obrigatório para continuar a execução do código
        const movies = await Promise.all(promises)
        console.log(movies)
    }catch (error) {
        console.error('Erro ao carregar o filme:', error)
    }
}

const movieIds = [
"2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky 
"id inválido",
"58611129-2dbc-4a81-a72f-77ddfc1b1b49" // My Neighbor Totoro
]

// loadMultipleMoviesAll(movieIds)

const loadMultipleMoviesAllSettled = async (moviesIds) => {
    try {
        //o id é recebido no parametro da função, e é utilizado para montar a url da requisição
        const promises = moviesIds.map(async (id) => {
            const response = await fetch(`${baseUrl}/films/${id}`)

            if (!response.ok) {
                throw new Error(`Erro ao carregar o filme com id: ${id}`)
            }

            return response.json()
        })

        // usar quando quer aproveitar o que deu certo e lidar individualmente com o código
        const movies = await Promise.allSettled(promises)

        console.log(movies)

        console.log('Relatório final:')

        movies.forEach((movies,index) => {
            if(movies.status === 'fulfilled'){
                console.log('OK:', movies.value.title)
            }else {
                console.log(`ERRO no filme ${moviesIds[index]}`, movies.reason.message)
            }
        })
    }catch (error) {
        console.error('Erro ao carregar o filme:', error)
    }
}

loadMultipleMoviesAllSettled(movieIds)