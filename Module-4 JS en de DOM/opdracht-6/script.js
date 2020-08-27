// Opdracht 1
const addTheWordCool = ["nice", "awesome", "tof"];
addTheWordCool.push("Cool");
console.log("Het woord Cool toegevoegd: " + addTheWordCool);

// Opdracht 2
const amountOfElementsInArray = ["appels", "peren", "citroenen"];
console.log("De lengte van het array is: " + amountOfElementsInArray.length);

// Opdracht 3
const selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];
console.log(
  "Het eerste element uit de array is: " + selectBelgiumFromBenelux[0]
);

// Opdracht 4
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];
console.log(
  "Het laaste element uit de array is: " + lastElementInArray.slice(-1)[0]
);

// Opdracht 5
const presidents = ["Trump", "Obama", "Bush", "Clinton"];
console.log(presidents.slice(1));
console.log(presidents.splice(1));
// Met slice blijft het intakt, splice verwijderd data uit de array

// Opdracht 6
const stringsTogether = ["Winc", "Academy", "is", "leuk", ";-}"];
console.log(stringsTogether.join(" "));
