import { movies } from './movies-data.js';

export const generateMoviesHTML = () => {
    let movieHTML = '';
 
    for (const movie of movies) {
        movieHTML += `
            <article class="movie">
                <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
                <div class="movie__details">
                    <h2 class="movie__title">${movie.title}</h2>
                    <p class="movie__description">${movie.description}</p>
                </div>
            </article>
        `;
    }
 
    return movieHTML
 };
 /*define a function generateMoviesHTML using an arrow function.
  Inside, we initialize an empty string movieHTML to store the HTML markup.
   Using a for...of loop, we iterate over the movies array. 
   For each movie, we generate an HTML structure with template literals,
    including an <article> element with the class "movie," an <img> for the poster,
    <div> with movie details like the title (<h2>) and description (<p>).
  Each movie's HTML is concatenated to movieHTML, which is then returned containing the markup for all movies */
