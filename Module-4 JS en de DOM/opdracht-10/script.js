const theBigFive = document.querySelectorAll(".big-five-list-item");
let spottedAnimals = document.querySelector("#spotted-animals-list");
const removeFirst = document.querySelector("#remove-first-item-button");
const removeAll = document.querySelector("#remove-all-button");

theBigFive.forEach((item) => {
  item.addEventListener("click", () => {
    let spottedAnimals = document.querySelector("#spotted-animals-list");
    const move = document.querySelector("#spotted-animals-list");
    move.append(item);
  });
});

removeFirst.addEventListener("click", () => {
  const firstChild = spottedAnimals.getElementsByTagName("li")[0];
  spottedAnimals.removeChild(firstChild);
});

removeAll.addEventListener("click", () => {
  spottedAnimals.innerHTML = "";
});
