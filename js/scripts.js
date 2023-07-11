let pokemonList = [
    {name: 'Charizard', type: ['fire', 'flying'], height: '1.7'},
    {name: 'Gengar', type: ['ghost', 'poison'], height: '1.5'},
    {name: 'Clefable', type: 'fairy', height: '1.3'},
];

console.log(pokemonList);

let text = '';


for (let i = 0; i<pokemonList.length; i++){
    if (pokemonList[i].height > 1.5) {
        document.write(text + pokemonList[i].name + ' is ' + pokemonList[i].height + ' - wow, this Pokemon is tall! </br>')
    } 
    // if pokemon is over 1.5 tall then the message will appear next to it
    else
    text = text + pokemonList[i].name + ' is ' + pokemonList[i].height + '<br />';
    //if the pokemon is not over 1.5 tall, no message will appear
  

    
}

console.log(text);
document.write(text);