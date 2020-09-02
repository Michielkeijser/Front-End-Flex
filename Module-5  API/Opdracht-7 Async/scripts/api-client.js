const API_KEY = "?api_key=379498bcba09f0a80b9e7107330feed6";
const mod_endpoint = "genre/movie/list";
// const base_endpoint = `https://api.themoviedb.org/3/${mod_endpoint}${API_KEY}`;

const getMovieGenres = async () => {
  const base_endpoint = `https://api.themoviedb.org/3/${mod_endpoint}${API_KEY}`;
  try {
    const response = await fetch(base_endpoint, { method: "GET" });
    const data = await response.json();
    console.log("lijst met data:", data);
    return data;
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};

const getMovieId = async () => {
  const mod_endpoint = "find/tt0117500";
  const base_endpoint = `https://api.themoviedb.org/3/${mod_endpoint}${API_KEY}&external_source=imdb_id`;
  try {
    const response = await fetch(base_endpoint, { method: "GET" });
    const data = await response.json();
    console.log("lijst met data:", data);
    return data;
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};

const getMovieTopRated = async () => {
  const mod_endpoint = "discover/movie";
  const base_endpoint = `https://api.themoviedb.org/3/${mod_endpoint}${API_KEY}&sort_by=popularity.desc&page=1&with_genres=28`;
  try {
    const response = await fetch(base_endpoint, { method: "GET" });
    const data = await response.json();
    console.log("lijst met data:", data);
    return data;
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};

const getMovieByYear = async () => {
  const mod_endpoint = "discover/movie";
  const base_endpoint = `https://api.themoviedb.org/3/${mod_endpoint}${API_KEY}&sort_by=popularity.desc&page=1&year=1975`;
  try {
    const response = await fetch(base_endpoint, { method: "GET" });
    const data = await response.json();
    console.log("lijst met data:", data);
    return data;
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};
