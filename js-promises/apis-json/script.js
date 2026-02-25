// isso é um objeto

const heroObject = {
    name: "Homen de ferro",
    age: 48,
    hasPower: false
}

console.log(heroObject.name);
console.log(typeof heroObject);

// isso é um json

const heroJson = '{"name": "Homem de ferro", "age": 48, "hasPower": false}'
console.log(heroJson.name)

// transforma json para objeto

const hero = JSON.parse(heroJson)
console.log(hero.name)

// transforma objeto para string(texto json)

const heroString = JSON.stringify(heroObject)
console.log(heroString)
console.log(typeof heroString)
