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

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem); 
        button.addEventListener('click', function(){
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon){
        console.log (pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem

    };


})()

pokemonRepository.getAll().forEach(function(pokemon){
 pokemonRepository.addListItem(pokemon);   
});

