document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".pokemon").forEach(pokedex =>{
  
            pokedex.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?pokedex.classList.remove("filtro")
              :pokedex.classList.add("filtro")
        })
    }  
  })
const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 12; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');
    let fondo = poke.types.map((type) => `<div class="${type.type.name}2 fondo">`);
    fondo = fondo.join('');
    let pokeId = poke.id.toString();
    


    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    ${fondo}
        <div class="row">
            <div class="col-6 pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">#${pokeId}</p>
                    <h2 class="pokemon-nombre">${poke.name}</h2>
                </div>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
            </div>
            <div class="col-6 pokemon-imagen">
                <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
            </div>
        </div>
    </div>
    `;
    listaPokemon.append(div);
}
