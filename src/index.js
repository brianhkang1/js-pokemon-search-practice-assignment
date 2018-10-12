document.addEventListener("DOMContentLoaded", function() {
  //pokemons is a variable imported from db.json via index.html as a script tag
  searchBarFunction()
  console.log(pokemons)
})

function searchBarFunction(){
  document.querySelector("#pokemon-search-input").addEventListener("keyup", pokemonSearch)

  function pokemonSearch(){
    let searchInput = document.querySelector("#pokemon-search-input").value
    let container = document.querySelector("#pokemon-container")
    while (container.firstChild){
      container.removeChild(container.firstChild)
    }

    let arrayOfPokemon = pokemons.filter(pokemon => pokemon.name.includes(searchInput))
    for(const pokemon of arrayOfPokemon){
      render(pokemon)
    }
  }
}

function render(pokemon){
    let container = document.querySelector("#pokemon-container")
    let pokeDiv = document.createElement("div")
    pokeDiv.innerHTML = `<div class="pokemon-container">
            <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img id=this_image src="${pokemon["sprites"]["front"]}">
              </div>
            </div>
            <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
            </div>
          </div>`

      container.appendChild(pokeDiv)

      pokeDiv.querySelector(".flip-image").addEventListener('click', function(){
        let this_image = pokeDiv.querySelector('#this_image');
        if (this_image.src == `${pokemon["sprites"]["front"]}`) {
          this_image.src = `${pokemon["sprites"]["back"]}`
        } else {
          this_image.src = `${pokemon["sprites"]["front"]}`
        }
    })

}
