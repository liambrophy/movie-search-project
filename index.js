const movieElement = document.querySelector(".movies__container");

async function onSearchChange(event){
    const search = event.target.value;
    renderResults(search);
}

async function renderResults(search){

    const result = await fetch(`https://www.omdbapi.com/?apikey=6758702f&s=${search}`);
    const resultData = await result.json();
    movieElement.innerHTML = resultData.Search.map((movie) => movieHTML(movie)).join("");
}

function movieHTML(movie){
    return `
    <div class="movie">
        <img src="${movie.Poster}" alt="" class="movie__img">
        <h4 class="movie__info">Title: ${movie.Title}</h4>
        <h4 class="movie__info">Year: ${movie.Year}</h4>
    </div>`
}

renderResults(search);