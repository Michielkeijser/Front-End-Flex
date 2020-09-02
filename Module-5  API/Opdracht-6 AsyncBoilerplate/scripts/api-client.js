const API_KEY = "379498bcba09f0a80b9e7107330feed6";
const base_endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

const getData = async () => {
  try {
    const response = await fetch(base_endpoint, { method: "GET" });
    const data = await response.json();
    console.log("lijst met data:", data);
    return data;
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};
