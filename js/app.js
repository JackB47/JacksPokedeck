$("#search_form").submit(function(event) {
    event.preventDefault();
    const name_pokemon = $("#name_pokemon").val();

    getPokemon(name_pokemon);
})

function getPokemon (pokemon) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    console.log("Calling ye olde API...");

    $.get(url, function(data) {
        const props = { name, height, weight, stats, sprites } = data;
        const Pokemon = {
            name,
            height,
            weight,
            stats,
            image: sprites.front_default,
        };

        // TODO: Write this data to the HTML
        /**
         * $(selector).html(`
         *  <div class="card">
         *    <h1 class="card__heading">${Pokemon.name}</h1>        
         *  </div>
         * `);
         */
        $('.card-generic-info').html(`
            <div class="card">
                <h1 class="card__heading">
                    Pokémon Name:   
                    <span class="card__name">${Pokemon.name}</span>
                </h1>
                <img class="card__image" src="${Pokemon.image}" alt="Picture of ${Pokemon.name}" />
                <p class="card__height">
                    Height:
                    <span class="card__dataH">${Pokemon.height}</span>
                </p>
                <p class="card__weight">
                    Weight:
                    <span class="card__dataW">${Pokemon.weight}</span>
                </p>
                <p class="card__stats">
                    Stats:
                </p>
            </div>
        `);

        $('.card-stats').html('');

        // Now get the stats and write to the stats list
        Pokemon.stats.forEach((s) => {
            const name = s.stat.name;
            $('.card-stats').append(`
                <li>${name}:  
                <span class="base_stats">${s.base_stat}</span></li>

            `)
            console.log(s);
        })
    })
    .fail(function(err) {
        console.log(err);
    
        if(err.status === 404) {
            console.log("Pokemon Not Found");
            $('.card-generic-info').html(`
            <div class="error">
                <h1>POKÉMON NOT FOUND</h1>
                <p class="error_message">Please Enter a Valid Pokémon</p>
            </div>
            `);
        }
    })
    .always(function() {
        console.log("Finished Calling!");
    });
}