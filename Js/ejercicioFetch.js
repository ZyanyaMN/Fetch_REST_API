//Fetch

const BASE_URL = 'https://pokeapi.co/api/v2/'; //CONSTANTE GLOBAL PARA CÓDIGO MÁS LIMPIO

// FETCH ASYNC 
const fetchPokemon = async (pokemon) => {
    try {
        //const response =await fetch (BASE_URL + 'pokemon/ditto');
        const response = await fetch (`${BASE_URL}pokemon/${pokemon}`)
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch(err) {
        console.error(err); 
    }
}

//OBTENER POKEMON
document.getElementById('get-btn')
    .addEventListener('click' , async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId',pokemon.id);
        console.log(pokemon.name);

        //EJECUTAR FUNCIÓN DE TARJETA
        pokemonInfo(pokemon);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);

    //EJECUTAR FUNCIÓN DE TARJETA
    pokemonInfo(pokemon);
})

//Obtener el anterior y el siguiente
//Anterior

document.getElementById('previous-btn')
.addEventListener('click', async () =>{
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.max(1, currentPokeId -1);
    const pokemon = await fetchPokemon(newId);
    console.log(pokemon.name);
    localStorage.setItem('currentPokeId',pokemon.id);
    
    //EJECUTAR FUNCIÓN DE TARJETA
    pokemonInfo(pokemon);
})


//Siguiente

document.getElementById('next-btn')
.addEventListener('click', async () =>{
    const currentPokeId =parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.min(1017,currentPokeId + 1);
    const pokemon = await fetchPokemon(newId);
    console.log(pokemon.name);
    localStorage.setItem('currentPokeId',pokemon.id);
    
    //EJECUTAR FUNCIÓN DE TARJETA
    pokemonInfo(pokemon);
})



// Tarjeta
function pokemonInfo(pokemon) {
    document.getElementById('name').textContent = (`Name: ${pokemon.name}`);
    document.getElementById('id').textContent = (`Id: ${pokemon.id}`);
    document.getElementById('weight').textContent = (`Weight: ${pokemon.weight} units`);
    document.getElementById('image').src = pokemon.sprites.front_default;
}








//EJERCICIOS
//ARREGLAR EL POKEMON EN LOCALSTORAGE PARA QUE SI SE GUARDE 
// MANIPULAR EL DOM Y AGREGAR UNA TARJETA DEL POKEMON 
// -EL TAMAÑO E INFO DE LA TARJETA ES A CONSIDERACIÓN PERSONAL
// TITULO, NOMBRE, ID, DESCRIPCIÓN, PESO (LO QUE YO GUSTE)
//  LA TARJETA DEBE VENIR DEL LOCAL STORAGE NO DEL FETCH
// LA TARJETA DEBE MANTENERSE EN LA PANTALLA
// LA INFO --> JALAS DE LOCALSTORAGE -->FETCH 
// 


/*Ejercicios

Arreglar Pokemon en localStorage *
Manipular DOM y agregar una tarjeta del pokemon
El tamaño y la información de la tarjeta es a consideración personal. 
Al menos mostrar el nombre, id y peso del pokemon. Puntos extra si se muestra una imagen.
La tarjeta debe cargarse en pantalla aún si se cierra la ventana del navegador.
Para obtener la información recuerda localStorage y nuestro método asíncrono de Fetch glhf;*/




