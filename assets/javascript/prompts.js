//--------
// prompts - holds the references to the DOM HTML elements and updates them with the passed game stats
//--------
var prompts = {

    //-------------------
    // prompts Variables 
    //-------------------
    keyPrompt      : "",
    wins           : 0,
    losses         : 0,
    currentWord    : "",
    lettersGuessed : "",
    guessesLeft    : 0,

    //------------------
    // prompts Methods 
    //------------------

    //---
    // getElementIds() - holds the references to the DOM elements to update 
    //---
    getElementIds : function (document) {
         this.keyPrompt      = document.getElementById("keyPrompt");
         this.wins           = document.getElementById("wins");
         this.losses         = document.getElementById("losses");
         this.currentWord    = document.getElementById("currentWord");
         this.lettersGuessed = document.getElementById("lettersGuessed");
         this.guessesLeft    = document.getElementById("guessesLeft");
     }, 

    //---
    // reportResutls() - updates the stored DOM display elements with the passed results
    //---
    reportResults : function (game, scoreboard) {
        this.wins.textContent           = scoreboard.wins;
        this.losses.textContent         = scoreboard.losses;
        this.currentWord.textContent    = game.boardState;
        this.lettersGuessed.textContent = game.lettersGuessed;
        this.guessesLeft.textContent    = game.guessesLeft;
    },

    //---
    // status() - updates the DOM status display with the passed messge
    //---
    status : function (msg) {
        this.keyPrompt.textContent      = msg;
    }
}
