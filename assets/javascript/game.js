// Game - tracks the current game in progress
var game = {
    
    // object variables 
    gameInProgress : false,     // flags that the game is in progress
    solution       : "",        // the secret word, no cheating!!
    maxGuesses     : 20,        // number of tries use gets before game ends
    guessesLeft    : 20,        // number of guesses remaining in game
    boardState     : "",        // the partially revealed solution based on user guesses
    lettersGuessed : "",        // array of user guesses

    // game object functions

    // resets the board to a new game
    resetGame :  function () {
        this.gameInProgress = true;
        this.boardState = "";
        this.lettersGuessed = "";
        this.guessesLeft = this.maxGuesses;
        this.solution = wordTable.getRandomWord();
    },

    // adjudicates one guess and updates game state
    playRound : function (guess) {
        this.guessesLeft--;
        this.boardState = "F O O  - - - ";
        this.lettersGuessed = "F, O"
    }
};
