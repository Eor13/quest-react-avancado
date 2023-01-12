const pokemonData = {
    imagePokemon: '',
    name: '',
    movesList: [],
    abilitiesList:[],
    types:[],
    // Lista de habilidades do pokemon (abilities)
    // a lista de habilidades deve apresentar o nome e o texto
    // descritivo da habilidade
    // Tipo do pokemon (type)
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