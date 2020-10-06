const wordpicker = list => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
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
  return tries === 5;
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
