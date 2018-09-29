// Board - tracks the overall number of games
var board = {
    wins : 0,
    losses: 0,
};

// Game - tracks the current game in progress
var game = {
    
    // object variables 
    gameInProgress : false,
    currentWord : "",
    maxGuesses:  20,
    guessesLeft: 20,
    boardState  : [],
    lettersGuessed:  [],

    // game object functions
    resetGame :  function () {
        this.letterGuessed = "";
        this.gameInProgress = true;
        this.answer = wordTable.getRandomWord();
    }
};

