const counter = () => {
  return randomPersonData
    .map(person => person.region)
    .reduce((total, letter) => {
      total[letter] ? total[letter]++ : (total[letter] = 1);
      return total;
    }, {});
};
console.log(counter());

const counterEntries = Object.entries(counter());
console.log(counterEntries);

const meesteMensenArray = counterEntries.map(item => ({
  region: item[0],
  people: item[1],
}));
console.log(meesteMensenArray);

const peopleOrdered = () => meesteMensenArray.sort((a, b) => b.people - a.people);

console.log(peopleOrdered());

const meesteMensen = document.querySelector("#meeste-mensen-button");

meesteMensen.addEventListener("click", () => {
  let list = ``;
  peopleOrdered().forEach(entry => {
    list += `<li class="meeste-mensen-item">${entry.region}: ${entry.people} </li>`;
    displayResults.innerHTML = list;
  });
});
