onlyUnique = (items, item) => {
  if (!Array.isArray(items)) items = [];
  if (!items.includes(item)) items.push(item);
  return items;
};

const getPersonRegionOrdered = () => {
  const regions = randomPersonData
    .map(person => person.region)
    .reduce(onlyUnique)
    .sort();
  return regions;
};

console.log(getPersonRegionOrdered());

const landenlijst = document.querySelector("#regions-button");
const displayResults = document.querySelector("#display-results");

landenlijst.addEventListener("click", () => {
  let list = ``;
  getPersonRegionOrdered().forEach(region => {
    list += ` <li class="landenlijst-item">${region}</li> `;
    displayResults.innerHTML = list;
  });
});
