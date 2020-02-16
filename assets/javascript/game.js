//this is the array of the alaphabet for the psychic game
var alaphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//this is where wins, losses, guesses left, and guesses so far will be stored.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters= [];

var computerChoice = alaphabet[Math.floor(Math.random() * alaphabet.length)];
    console.log(computerChoice) 

document.onkeypress = function(event) {
    var userGuess = event.key;

    if (userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    } if (guesses === 0){
        losses++
    }
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guessed-letters").innerHTML = "Guesses Left: " + guessedLetters;
}