
async function completeListOfPokemons(quantityPokemons){
    let offSet = 0
    let fullList = `https://pokeapi.co/api/v2/pokemon?limit=${quantityPokemons}&offset=${offSet}`
    const response = await fetch(`${fullList}`)
    return await response.json()
}

async function searchPokemons(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    if(response.status === 404){
        return response.status
    }
    const result =  await response.json()
    return result
}


async function searchTypes(typeName){
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
    const result =  await response.json()
    return result
}



export {completeListOfPokemons , searchPokemons, searchTypes}
