const { wordpicker } = require("./functies.js");
const { chosenLetterExists } = require("./functies.js");
const { updateTries } = require("./functies.js");
const { guessedLetters } = require("./functies.js");
const { gameOver } = require("./functies.js");
const { remainingLetters } = require("./functies.js");

const testlist = ["test"];
const testlistSplit = ["t", "e", "s", "t"];

test("Kiest een Random word uit de array", () => {
  expect(wordpicker(testlist)).toEqual(testlistSplit);
});

test("Vergelijkt de inputletter met de letter uit het gekozen woord", () => {
  expect(chosenLetterExists(testlistSplit, "t")).toBe(true);
});

test("updated het aantal pogingen bij een fout antwoord", () => {
  expect(updateTries(testlistSplit, "q")).toBe(false);
});

test("updaten van de lijst met fout geraden letters", () => {
  expect(guessedLetters(testlistSplit, ["q"])).toEqual(["q"]);
});

test("stoppen van het spel na 5 pogingen", () => {
  expect(gameOver(5)).toBe(true);
});

test("Winnen van de game", () => {
  expect(remainingLetters(testlistSplit, testlistSplit)).toBe(true);
});
