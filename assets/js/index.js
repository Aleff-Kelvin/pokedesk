const Main = {
    init: () => {
       Main.postPokemons();
    },
    getPokemons: async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {
            method: 'get'
        });

        const pokeAPI = await response.json();
        console.log(pokeAPI);

        const pokemonsJSON = pokeAPI.results;
        console.log(pokemonsJSON);

        return pokemonsJSON;
    },
    postPokemons: async () => {
        const pokemonsList = await Main.getPokemons();

        pokemonsList.forEach(pokemon => {
            // const responsePokemon = fetch(`${pokemon.url}`, {
            //     method: 'get'
            // });

            // const pokemonInfo = responsePokemon.json();
            // console.log(pokemonInfo); 

            pokemonBox.innerHTML += `
            <div class="pokemons-item">
                <p class="pokemon-id">N° 001</p>
                <center>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" class="img">
                    <p class="pokemon-name">${pokemon.name}</p>
                    
                    <div class="pokemons-type">
                        <div class="type-item">
                            <p>type 1</p>
                        </div>
                        <div class="type-item">
                            <p>type 2</p>
                        </div>
                    </div>
                </center>
            </div>`;
        });
    }
}

window.onload = Main.init;