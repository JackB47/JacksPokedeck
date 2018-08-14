$("#search_form").submit(function(event) {
    event.preventDefault();
    const name_pokemon = $("#name_pokemon").val();

    getPokemon(name_pokemon);
})

function getPokemon (pokemon) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    console.log("Calling...");

    $.get(url, function(data) {
        const props = { name, height, weight, stats } = data;
        const Pokemon = {
            name,
            height,
            weight,
            stats,
        };

        // TODO: Write this data to the HTML
        /**
         * $(selector).html(`
         *  <div class="card">
         *    <h1 class="card__heading">${Pokemon.name}</h1>        
         *  </div>
         * `);
         */

    })
    .fail(function(err) {
        console.log(err);
    
        if(err.status === 404) {
            console.log("Pokemon Not Found");
        }
    })
    .always(function() {
        console.log("Finished");
    });
}