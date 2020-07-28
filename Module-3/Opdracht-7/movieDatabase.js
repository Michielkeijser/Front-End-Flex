const movieDatabase = {
  title: 'The rock',
  duration: '2h 16min',
  stars: 'Sean Connery, Nicolas Cage, Ed Harris'
}

const logMovie = function(movie) {
console.log(movie.title + ' lasts for ' + movie.duration + '.');
console.log('Stars: ' + movie.stars);
}


logMovie(movieDatabase)
