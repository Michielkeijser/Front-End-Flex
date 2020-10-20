const { wordpicker } = require("./functies.js");
const { chosenLetterExists } = require("./functies.js");
const { updateTries } = require("./functies.js");
const { guessedLetters } = require("./functies.js");
const { gameOver } = require("./functies.js");
const { remainingLetters } = require("./functies.js");

const testWord = ["vis"];
const testWordSplit = ["v", "i", "s"];
const wordList = ["vis", "toeter", "developer", "telefoon", "moeder", "snoer", "geeuw"];

test("Kiest een Random word uit de array", () => {
  expect(wordList).toContainEqual(wordpicker(wordList));
});

test("Gekozen woord staat niet in de array", () => {
  expect("wordList").not.toContainEqual(wordpicker(testWord));
});

test("Vergelijkt de inputletter met de letter uit het gekozen woord", () => {
  expect(chosenLetterExists(testWordSplit, "v")).toBe(true);
});

test("updated het aantal pogingen bij een fout antwoord", () => {
  expect(updateTries(testWordSplit, "q")).toBe(false);
});

test("updaten van de lijst met fout geraden letters", () => {
  expect(guessedLetters(testWordSplit, ["q"])).toEqual(["q"]);
});

test("stoppen van het spel na 5 pogingen", () => {
  let tries = 5;
  expect(gameOver(tries)).toBe(true);
});

test("controleren of er nog pogingen over zijn", () => {
  let tries = 4;
  expect(gameOver(tries)).toBe(false);
});

test("controleren of alle leters zijn geraden", () => {
  expect(remainingLetters(testWordSplit, ["v", "i", "s"])).toBe(true);
});

test("controleren of er nog letters niet zijn geraden", () => {
  expect(remainingLetters(testWordSplit, ["v", "i", "t"])).toBe(false);
});
