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

    // resets the board to a new game
    resetGame :  function () {
        this.lettersGuessed = "";
        this.gameInProgress = true;
        this.answer = wordTable.getRandomWord();
    },

    // adjudicates one guess and updates game state
    playRound : function (guess) {
        guessesLeft--;
        boardState = "F O O  - - - ";
        lettersGuessed = "F, O"
        lettersGuessed = guess;
    }
};
