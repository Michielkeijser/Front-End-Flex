const wordList = ["vis", "toeter", "developer", "telefoon", "moeder", "snoer", "geeuw"];

let word;
const wordpicker = list => {
  const index = Math.floor(Math.random() * list.length);
  return list[index].split("");
};

let inputs;
const remainingLetters = (word, inputs) => {
  let remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });

  return remaining.length === 0;
};

let gameOver;
const winTheGame = () => {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

const loseGame = () => {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

let tries = 0;

const guessedLetters = (word, inputs) => {
  let wrongLetters = inputs.filter(function (letter) {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const displayChosenWord = (word, inputLetterWords) => {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const chosenLetter = () => {
  if (gameOver) {
    return;
  }
  const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  if (!word.includes(input1)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(input1);
  displayChosenWord(word, inputs);
  guessedLetters(word, inputs);

  if (remainingLetters(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    loseGame();
  }
};

const startNewGame = () => {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordpicker(wordList);
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5;

  inputs = [];
  displayChosenWord(word, inputs);
  guessedLetters(word, inputs);
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", chosenLetter);
  document.querySelector(".restart").addEventListener("click", startNewGame);
  document.querySelector("input").addEventListener("keypress", e => {
    if (e.key === "Enter") {
      chosenLetter();
    }
  });

  startNewGame();
});
