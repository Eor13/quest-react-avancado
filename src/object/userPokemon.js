const pokemonData = {
    imagePokemon: '',
    name: '',
    movesList: [],
    abilitiesList:[],
    types:[],
    setData(dataSearched, resultsAbilities){
        this.imagePokemon = dataSearched.sprites.front_default
        this.name = dataSearched.name
        this.movesList = dataSearched.moves
        this.abilitiesList = resultsAbilities
        this.types = dataSearched.types
    }
}

export default pokemonData