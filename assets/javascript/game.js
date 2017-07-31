//game.js
//Brian Russell 
//2017

//Variables
var possible = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft;
var guessesMade;
var compLetter;

//Reset function: Generates random letter based on possible output and sets guesses counters back to default
resetVariables();

// Get user input
document.onkeyup = function(event) {
	// stores user input from keyboard, lowercase letter only
	var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log ("usr: " + keyPressed);

	//update user guess statistics
	guessesLeft--;
	//console.log(guessesLeft);

	guessesMade.push(keyPressed);
	//console.log(guessesMade);

	//Determine win or loss
	//compare user input to random letter and assign add to win of loss count
	if (keyPressed == compLetter) {
		wins++;
		resetVariables();
	} else {};	

	if (guessesLeft == 0){
		losses++;
		resetVariables();
	} else {};

	//text to be displayed
	var html = 
	"<p>Guess which letter I'm thinking of. <br />Press any letter.</p>"+
	"<p>Wins: "+ wins + "</p>" +
	"<p>Losses:" + losses + "</p>"+ 
	"<p>Guesses Left: " +  guessesLeft + "</p>" +
	"<p>Guesses Made So Far: " +  guessesMade + "</p>";

	//when user presses key, update html with new results
	document.querySelector(".game").innerHTML = html;

};//END: document.onkeyup = function(event) 

//Reset function: Generates random letter based on possible output and sets guesses counters back to default
function resetVariables(){
	guessesLeft = 9;
	guessesMade = [];
	compLetter = possible[Math.floor(Math.random()*possible.length)];
	console.log( "comp: " + compLetter);
};