// variáveis globais

const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next"); 
let searchPokemon = 0;


// conectando com a API

const fetchPokemon= async (pokemon)=> {
const APIResponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

if (APIResponse.status===200) {
    const data = await APIResponse.json();

    return data;

} else {

    
}

}

// renderizar os dados da API

const renderPokemon = async (pokemon)=> {
    pokemonName.innerHTML = "CAREGANDO...";
    pokemonNumber.innerHTML = "";

const data = await fetchPokemon (pokemon);

if (data) {

    pokemonName.innerHTML=data.name
    pokemonNumber.textContent=data.id;
    pokemonImage.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    searchPokemon = data.id;
    input.value ="";
    
} else {

    pokemonName.innerHTML = "Não encontrado :C";
    input.value = "";
    pokemonImage.src = "";    
}

    console.log(data);

}

//Capture Pokemon Pelo Input

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});


//Eventos dos Botões Prev e Next

btnNext.addEventListener("click", ()=>{
    searchPokemon += 1
    renderPokemon(searchPokemon);

});

btnPrev.addEventListener("click", ()=>{    
    if (searchPokemon > 1) {
        searchPokemon -= 1
    renderPokemon(searchPokemon)
        
    } 
})

renderPokemon(200);

