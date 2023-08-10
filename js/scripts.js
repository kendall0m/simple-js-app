let pokemonRepository = (function () {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    
    function addListItem(pokemon) {
      let pokemonList = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      listItem.classList.add('list-group-item');
      button.classList.add ('btn', 'btn-primary');

      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#exampleModal");

      button.innerText = pokemon.name;

      listItem.appendChild(button);
      pokemonList.appendChild(listItem); 
      button.addEventListener('click', function(){
          showDetails(pokemon);
      });
    }

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      })
        .then(function (json) {
           json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.name = details.name;
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        showModal(item);
      }).catch(function (e) {
        console.error(e);
      });
    }

    function getAll () {
        return pokemonList;
    };

    function add (pokemon) {
        pokemonList.push(pokemon);
    };

    function showDetails(pokemon) {
      loadDetails(pokemon);
    }

    function showModal(pokemon) {

      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");
      
      // let modalContainer = document.querySelector('#modal-container');
    
      // Clear all existing modal content
      modalBody.empty();
      modalTitle.empty();
      modalHeader.empty();

      let nameElement = $("<h1>" + pokemon.name + "</h1>");
      let imageElement = $('<img class="modal-img" style="width:50%">');
      imageElement.attr("src", pokemon.imageUrl);
      let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
    
      modalHeader.append(nameElement);
      modalBody.append(imageElement);
      modalBody.append(heightElement);
    }


    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      showModal: showModal,
    };
  })();
    

    pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
      });
  });
