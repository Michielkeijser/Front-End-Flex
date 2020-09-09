const calculateAverageAgeForCountry = country => {
  const peoplePerCountry = randomPersonData.filter(person => person.region === country);

  const totalAge = peoplePerCountry.reduce((sum, current) => {
    return sum + current.age;
  }, 0);
  const totalPopulation = peoplePerCountry.length;
  //   console.log(totalPopulation);
  return Math.round(totalAge / totalPopulation);
};

const gemiddeldeLeeftijdButton = document.querySelector("#gemiddelde-leeftijd-button");

gemiddeldeLeeftijdButton.addEventListener("click", () => {
  let list = ``;
  getPersonRegionOrdered().forEach(region => {
    list += `<input type="button" class="person-${region}" value="${region}" />`;
    displayResults.innerHTML = list;
  });
});

const gemiddeldeLeeftijd = document.querySelector("#gemiddelde-leeftijd");

const regionButtons = document.querySelectorAll("#display-results");
regionButtons.forEach(button => {
  button.addEventListener("click", function (e) {
    const age = calculateAverageAgeForCountry(e.target.value);
    let list = ``;
    list += `<li class="average-age-item">The average age of ${e.target.value} is ${age} </li>`;
    gemiddeldeLeeftijd.innerHTML = list;
  });
});
