// console.log(movies);

// Function
const filteredMovies = (title, year) => {
  let list = ``;
  const displayMovies = document.getElementById("movies--display");
  movies
    .filter(movie => movie.Title.includes(title))
    .filter(movie => parseInt(movie.Year) >= year)
    .forEach(filtered => {
      list += ` <li class="movies--item">
      <a href=https://www.imdb.com/title/${filtered.imdbID} target='_blank'>
      <img src=${filtered.Poster}></img></a></li> `;
      displayMovies.innerHTML = list;
    });
};
filteredMovies("", "");

// Radio Buttons
const radioBtns = document.querySelectorAll("input");
radioBtns.forEach(button => {
  button.addEventListener("change", function (e) {
    console.log(e.target.value);

    switch (e.target.value) {
      case "nieuw":
        filteredMovies("", 2014);
        break;
      case "avengers":
        filteredMovies("Avengers", "");
        break;
      case "x-men":
        filteredMovies("X-Men", "");
        break;
      case "princess":
        filteredMovies("Princess", "");
        break;
      case "batman":
        filteredMovies("Batman", "");
        break;
      case e.target.value:
        filteredMovies(e.target.value, "");
        break;
      default:
        filteredMovies("", "");
    }
  });
});
