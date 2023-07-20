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

})()



pokemonRepository.add({ name: 'Pikachu', type: 'electric', height: '0.4', isTall: false}); //adds a pokemon to the list 
// console.log(pokemonRepository.getAll()); 

Object.keys(pokemonRepository.getAll()).forEach(function(property) {
    console.log(pokemonRepository.getAll()[property]); // displays properties in console log
});

function getheightDescription(isTall) {
    return isTall ? '- This Pokemon is huge!' : '';
}; // if pokemon is tall, statement will appear

function getPokemonDescription(pokemon) {
	// let nameDescription = getNameDescription(pokemon.name);
	let heightDescription = getheightDescription(pokemon.isTall); 
	
	return pokemon.name + ' is ' + pokemon.height + 'm tall ' + heightDescription + '</br>';
};

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(getPokemonDescription(pokemon));
});

function getPokemonByName(name) {
const result = pokemonRepository.getAll().filter (pokemon => pokemon.name == name);
console.log(result);
};

getPokemonByName("Gengar");
// calls function and writes returned statement in document