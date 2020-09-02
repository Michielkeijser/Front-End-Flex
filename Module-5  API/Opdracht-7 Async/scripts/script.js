const getMoviesByGenre = async function () {
  let list = ``;
  const listItem = document.querySelector(".genre__display");
  const data = await getMovieGenres();
  data.genres.forEach(item => {
    list += `<li class="genres__item"> Genre name: ${item.name}, Id: ${item.id}  </li> `;
    listItem.innerHTML = list;
  });
};

getMoviesByGenre();

const getMoviesById = async function () {
  let list = ``;
  const listItem = document.querySelector(".top__movie");
  const data = await getMovieId();
  data.movie_results.forEach(item => {
    list += `<p class="top__movie--item" >${item.title}, Id: ${item.id}  </p> `;
    listItem.innerHTML = list;
  });
};

getMoviesById();

const getMoviesTopRated = async function () {
  let list = ``;
  const listItem = document.querySelector(".top__rated");
  const data = await getMovieTopRated();
  data.results.slice(0, 10).forEach(item => {
    list += `<li class="top__rated--item" >${item.title}, Id: ${item.id}  </li> `;
    listItem.innerHTML = list;
  });
};

getMoviesTopRated();

const getMoviesByYear = async function () {
  let list = ``;
  const listItem = document.querySelector(".movies__1975");
  const data = await getMovieByYear();
  data.results.slice(0, 10).forEach(item => {
    list += `<li class="movies__1975--li" >${item.title}, Id: ${item.id}  </li> `;
    listItem.innerHTML = list;
  });
};

getMoviesByYear();
