
//this is the array of the alaphabet for the psychic game
var psychicChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//this is where wins, losses, guesses left, and guesses so far will be stored.
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var attemptedLetters = [];


//the event listner
document.onekeyup = function(event){
    var userChoice = event.key;

//this is the function when the psychic (computer) picks 
    var computerChoice = psychicChoices[Math.floor(Math.random() * psychicChoices.length)]
    console.log("Your Psychic desired " + psychicChoices);
}

document.getElementById("letters").reset();{
    guessesLeft = 15;
    attemptedLetters =[];
}

//this is when the user is correct

if(userChoice !== computerChoices){
    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("letters").innerText = "ATTEMPT AGAIN!";
    attemptedLetters.push(userChoice);
    document.getElementById("attempedletters").innerText = attemptedLetters;
} else if(userChoice === computerChoice){
    wins++;
    alert("YOU CAN SEE THE FUTURE! YOU ARE A PSYCHIC!");
    document.getElementById("Wins")
} if (attemptedLetters === 0){
    losses++;
    document.getElementById("letters").innerText ="YOU DON'T HAVE A FUTURE! ATTEMPT AGAIN!";
    resize
}