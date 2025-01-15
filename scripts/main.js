import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.js';

const movieHTML = generateMoviesHTML(); // calls the generateMovieHTML function

renderMoviesToDOM(movieHTML); // calls the renderMoviesToDOM function passing movieHTML as an argument