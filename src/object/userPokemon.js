const pokemonData = {
    imagePokemon: '',
    name: '',
    movesList: [],
    abilitiesList:[],
    types:[],
    setData(dataSearched){
        this.imagePokemon = dataSearched.sprites.front_default
        console.log(this)
        this.name = dataSearched.name
        this.movesList = dataSearched.moves
        this.abilitiesList = dataSearched.abilities
        this.types = dataSearched.types
    }
}

export default pokemonData