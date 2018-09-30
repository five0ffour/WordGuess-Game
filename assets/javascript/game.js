// Game - tracks the current game in progress
var game = {
    
    // object variables 
    gameInProgress : false,     // flags that the game is in progress
    solution       : [],        // the secret word, no cheating!!
    maxGuesses     : 20,        // number of tries use gets before game ends
    guessesLeft    : 20,        // number of guesses remaining in game
    boardState     : [],        // the partially revealed solution based on user guesses
    lettersGuessed : [],        // array of user guesses

    // game object functions

    // resets the board to a new game
    resetGame :  function () {
        this.gameInProgress = true;
        this.boardState = "";
        this.guessesLeft = this.maxGuesses;
        this.solution = wordTable.getRandomWord();

        // Empty the array of guesses
        for (i=0; (i < 26); i++)
            lettersGuessed[i] = " ";
    },

    // playRouund() - adjudicates one guess and updates game state, returns true if the round was valid
    playRound : function (guess) {
        this.boardState = "F O O  - - - ";

        if (this.saveGuess(guess)) {
            // Valid guess, decrement counts
            this.guessesLeft--;
            return true;
        }
    
        return false;
    },

    // saveGuess() - saves the guess into our array and returns whether it was a valid guess (wasn't 
    // previously guessed)
    saveGuess(letter) {
        var foundLetter = false;

        // Loop through the array and compare this guess against each element
        this.lettersGuessed.forEach( function (guess) {
            if (guess == letter) {
                foundLetter = true;
                console.log("game.saveGuess() -- found letter: " + letter)
            }
        });


        // if not previously guessed, add it to the array
        if (!foundLetter)  {
            this.lettersGuessed.push(letter);
            console.log("game.saveGuess() -- new letter: " + letter);
        }
        
        // If we found the letter, return it an invalid guess
        return (!foundLetter);
    }
};
