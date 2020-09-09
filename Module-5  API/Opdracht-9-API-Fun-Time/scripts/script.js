const getQuoteButton = document.querySelector("#quote-button");
const getMemeButton = document.querySelector("#meme-button");
const displayResults = document.querySelector("#display-quote");

const getRandomQuoteCall = async function () {
  const data = await getRandomQuote();
  let html = ``;
  html += `<li class="quote-item">${data.value}</li>`;
  displayResults.innerHTML = html;
};

getQuoteButton.addEventListener("click", () => {
  getRandomQuoteCall();
});
