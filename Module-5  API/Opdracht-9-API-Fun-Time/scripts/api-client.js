const getRandomQuote = async () => {
  const mod_endpoint = `/random/quote`;
  const base_endpoint = `https://tronalddump.io${mod_endpoint}`;

  try {
    const response = await fetch(base_endpoint, { method: "GET" });
    const data = await response.json();
    console.log("lijst met data:", data);
    return data;
  } catch (error) {
    console.log("dit gaat er fout:", error);
  }
};
