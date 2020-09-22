const wordpicker = list => {
  const index = Math.floor(Math.random() * list.length);
  return list[index].split("");
};

const chosenLetterExists = (word, inputLetter) => word.includes(inputLetter);

let tries = 0;
const updateTries = (word, inputLetter) => {
  if (word.includes(inputLetter)) {
    return true;
  } else {
    tries++;
    return false;
  }
};

const guessedLetters = (word, inputs) => {
  const wrongLetters = inputs.filter(letter => {
    return !word.includes(letter);
  });
  return wrongLetters;
};

const gameOver = tries => {
  if (tries === 5) {
    return true;
  } else {
    return false;
  }
};

const remainingLetters = (word, inputs) => {
  let remaining = word.filter(letter => {
    return !inputs.includes(letter);
  });

  return remaining.length === 0;
};

module.exports = {
  wordpicker,
  chosenLetterExists,
  updateTries,
  guessedLetters,
  gameOver,
  remainingLetters,
};
