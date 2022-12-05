function preenchertela(data) {
    document.getElementById('nome').innerText = data.species.name
    let foto = data.sprites.other
    foto = foto['official-artwork'].front_default
    document.getElementById('foto').src = foto
}

function buscarpokemon() {
    const buscar = document.getElementById('pokemon').value
    console.log(buscar)

    fetch('https://pokeapi.co/api/v2/pokemon/' + buscar)
        .then(response => response.json())
        .then(data => {
            console.log(data.species.name);
            preenchertela(data);
        })
}

