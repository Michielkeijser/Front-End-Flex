// Opdracht 1
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// Opdracht 2
const superheroesFind = superheroes.find((item) => {
  return item.name === "Spiderman";
});
console.log(superheroesFind);

// Opdracht 3
const doubleArrayValues = [1, 2, 3];
doubleArrayValues.forEach((element) => {
  console.log(element * 2);
});

// Opdracht 4
const containsNumbersBiggerthan = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];
const containsNumberBiggerThan = containsNumbersBiggerthan.some((item) => {
  return item > 10;
});
console.log(containsNumberBiggerThan);

const containsNumbersSmallerthan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const containsNumberSmallerThan = containsNumbersSmallerthan.some((item) => {
  return item > 10;
});
console.log(containsNumberSmallerThan);

// Opdracht 5
const isItalyInTheGreat7 = [
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States",
];
const isItalyInTheGreat = isItalyInTheGreat7.some((item) => {
  return item === "Italy";
});
console.log(isItalyInTheGreat);

// Opdracht 6
const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const below100 = isBelow100.every((item) => {
  return item < 100;
});
console.log(below100);

// Opdracht 7
const bigSum = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  11,
  77,
  84,
  98,
  101,
  206,
  234,
];

const total = bigSum.reduce((currentTotal, item) => {
  return item + currentTotal;
}, 0);
console.log(total);
