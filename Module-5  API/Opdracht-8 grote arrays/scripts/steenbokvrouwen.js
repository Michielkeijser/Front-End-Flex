const getCapricorns = () => {
  const capricorns = randomPersonData
    .filter(person => person.age > 30 && person.gender === "female")
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(array => {
      return (
        (new Date(array.birthday.mdy).getMonth() == 0 &&
          new Date(array.birthday.mdy).getDate() < 19) ||
        (new Date(array.birthday.mdy).getMonth() == 11 &&
          new Date(array.birthday.mdy).getDate() >= 22)
      );
    });
  console.log(capricorns);
  return capricorns;
};

const steenbokvrouwen = document.querySelector("#steenbokvrouwen-button");

steenbokvrouwen.addEventListener("click", () => {
  let list = ``;
  getCapricorns().forEach(person => {
    list += ` <li class="steenbokvrouwen-item">${person.name} ${person.surname} <img src="${person.photo}" alt="photo of ${person.name}"></li> `;
    displayResults.innerHTML = list;
  });
});
