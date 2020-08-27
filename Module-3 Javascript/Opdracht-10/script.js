let guess = prompt('pick a number between 0 and 25');
let answer = Math.floor(Math.random() * Math.floor(26));

for (let i = 0; i < 10; i++) {
  if (answer == guess) {
    alert('You guessed the number!')
    break
  } else {
    guess = prompt('Try again')
  }
}
