let pokemonRepository = (function () {

    let pokemonList = [
        {name: 'Dragonair', type: 'dragon', height: '4', isTall: true },
        {name: 'Dragonite', type: ['dragon', 'flying'], height: '2.2', isTall: true},
        {name: 'Charizard', type: ['fire', 'flying'], height: '1.7', isTall: true},
        {name: 'Gengar', type: ['ghost', 'poison'], height: '1.5', isTall: false},
        {name: 'Clefable', type: 'fairy', height: '1.3', isTall: false},
    ]

    function getAll () {
        return pokemonList;
    };

    function add (pokemon) {
        pokemonList.push(pokemon);
    };

    return {
        getAll: getAll,
        add: add
    };

    function getPokemonByName(name) {
        const result = pokemonRepository.getAll().filter (pokemon => pokemon.name == name);
        console.log(result);
    };

})()



pokemonRepository.add({ name: 'Pikachu', type: 'electric', height: '0.4', isTall: false}); //adds a pokemon to the list 
// console.log(pokemonRepository.getAll()); 

Object.keys(pokemonRepository.getAll()).forEach(function(property) {
    console.log(pokemonRepository.getAll()[property]); // displays properties in console log
});

pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height > 1.5) {
        document.write(pokemon.name + ' is ' + pokemon.height + ' - wow, this Pokemon is tall! </br>')
    } 
    // if pokemon is over 1.5 tall then the message will appear next to it
    else
        document.write( pokemon.name + ' is ' + pokemon.height + '<br />');
    //if the pokemon is not over 1.5 tall, no message will appear
});