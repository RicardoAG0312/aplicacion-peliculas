document.getElementById("searchButton").addEventListener("click", searchMovie);
let apiKey = "8ddade45710af96a87f7a04a579c1767";
let urlBase = "https://api.themoviedb.org/3/search/movie";
let urlImg = "https://image.tmdb.org/t/p/w200";

function searchMovie () {
    let searchInput = document.getElementById("searchInput").value;
    fetch(`${urlBase}?query=${searchInput}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies (movies) {
    let contenedorResultado = document.getElementById("results");
    contenedorResultado.innerHTML = "";
    if (contenedorResultado.length === 0) {
        contenedorResultado.innerHTML = "<p> No se ha encontrado resultados para su búsqueda </p>";
        return;
    }
    movies.forEach(movie => {
        let contenedorMovie = document.createElement("div");
        contenedorMovie.classList.add("movie");
        let tituloMovie = document.createElement("h2");
        tituloMovie.innerHTML = movie.title;
        let lanzamientoMovie = document.createElement("p");
        lanzamientoMovie.innerHTML = "Fecha de lanzamiento: " + movie.release_date;
        let reseñaMovie = document.createElement("p");
        reseñaMovie.innerHTML = movie.overview;
        let posterPath = urlImg + movie.poster_path;
        let imagenMovie = document.createElement("img");
        imagenMovie.src = posterPath;
        contenedorMovie.appendChild(imagenMovie);
        contenedorMovie.appendChild(tituloMovie);
        contenedorMovie.appendChild(lanzamientoMovie);
        contenedorMovie.appendChild(reseñaMovie);
        contenedorResultado.appendChild(contenedorMovie);
    });
}