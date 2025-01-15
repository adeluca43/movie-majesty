export const renderMoviesToDOM = (movieHTML) => {
    const movieList = document.getElementById('movie-list');
 
    if (movieList) {
        movieList.innerHTML = movieHTML;
    } else {
        console.error('Could not find element with id "movie-list"');
    }
 };
 /*define a function, renderMoviesToDOM, which takes movieHTML as a parameter 
 representing the HTML for movie cards. The function selects the DOM element with ID "movie-list" 
 using document.getElementById and stores it in the movieList variable.
  If movieList exists, its innerHTML is set to movieHTML, inserting the movie cards. 
 If not, an error is logged using console.error() to aid debugging missing or incorrect elements*/
 