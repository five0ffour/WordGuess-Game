// prompts - updates the HTML with the current game stats
var prompts = {
    keyPrompt      : "",
    wins           : 0,
    losses         : 0,
    currentWord    : "",
    lettersGuessed : "",
    guessesLeft    : 0,

    // prompt object functions
     getElementIds : function (document) {
         this.keyPrompt      = document.getElementById("keyPrompt");
         this.wins           = document.getElementById("wins");
         this.losses         = document.getElementById("losses");
         this.currentWord    = document.getElementById("currentWord");
         this.lettersGuessed = document.getElementById("lettersGuessed");
         this.guessesLeft    = document.getElementById("guessesLeft");
     }, 

     // updates the display with the results
     reportResults : function (game, scoreboard) {
        this.keyPrompt.textContent      = "Your turn to guess a letter";
        // this.wins.textContent           = scoreboard.wins;
        // this.losses.textContent         = scoreboard.losses;
        // this.currentWord.textContent    = game.currentWord;
        // this.lettersGuessed.textContent = game.lettersGuessed;
        // this.guessesLeft.textContent    = game.guessesLeft;
        this.wins.textContent           = "wins";
        this.losses.textContent         = "losses";
        this.currentWord.textContent    = "current word";
        this.lettersGuessed.textContent = "letters guessed";
        this.guessesLeft.textContent    = "guesses left";

    }
}
