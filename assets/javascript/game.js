//this is the array of the alaphabet for the psychic game
var alaphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

//this is where wins, losses, guesses left, and guessed letters will be stored.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var computerChoice;

// Restarts the game

var restart = function () {
  guessesLeft = 10;
  guessedLetters = [];
  computerChoice = alaphabet[Math.floor(Math.random() * alaphabet.length)];
  console.log(computerChoice);
};
//this generates a random number
computerChoice = alaphabet[Math.floor(Math.random() * alaphabet.length)];
console.log(computerChoice);

// this is the function when a user presses a key
document.onkeyup = function (event) {
  var userGuess = event.key;
  userGuess = userGuess.toLowerCase();

  if (alaphabet.indexOf(userGuess) !== -1) {
    guessedLetters.push(userGuess);
  }
  if (userGuess === computerChoice) {
    wins++;
    guessesLeft = 10;
    guessedLetters = [];

    alert(
      "Why yes, you have won this round. You're destined to be a fortune teller!"
    );
  } else {
    guessesLeft--;
    restart();
  }
  if (guessesLeft === 0) {
    losses++;
    guessesLeft = 10;
    guessedLetters = [];

    alert('YOU ARE NOT A SOOTHSAYER! ATTEMPT AGAIN!');
  }
  document.getElementById('wins').innerHTML = 'Wins: ' + wins;
  document.getElementById('losses').innerHTML = 'Losses: ' + losses;
  document.getElementById('guessesLeft').innerHTML =
    'Guesses Left: ' + guessesLeft;
  document.getElementById('guessedLetters').innerHTML =
    'Guessed Letters: ' + guessedLetters;
};
