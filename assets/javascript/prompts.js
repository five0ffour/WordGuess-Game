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
        this.keyPrompt.textContent      = "Press any letter key to play your turn"
        this.wins.textContent           = scoreboard.wins;
        this.losses.textContent         = scoreboard.losses;
        this.currentWord.textContent    = game.currentWord;
        this.lettersGuessed.textContent = game.lettersGuessed;
        this.guessesLeft.textContent    = game.guessesLeft;
    }
}
