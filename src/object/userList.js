const pokemonListData = {
    name: '',
    imagePokemon: '',
    setData(pokemonsList){
        this.name = pokemonsList.results.name
        this.url = pokemonsList.results
        console.log(this)
    }
}

export default pokemonListData