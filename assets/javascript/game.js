// Game - tracks the current game in progress
var game = {

    // object variables 
    gameInProgress: false, // flags that the game is in progress
    solution: [], // the secret word, no cheating!!
    maxGuesses: 10, // number of tries use gets before game ends
    guessesLeft: 10, // number of guesses remaining in game
    boardState: [], // the partially revealed solution based on user guesses
    lettersGuessed: [], // array of user guesses

    // game object functions

    // wonGame() - checks to see if the user found our word
    wonGame: function () {
        var won = false;

        if (this.boardState.toUpperCase() === this.solution.toUpperCase()) {
            console.log("User wins game");
            won = true;
        }

        return won;
    },

    // checks to see if the guess limit is reached
    gameOver: function () {
        return (this.guessesLeft <= 0);
    },

    // resets the board to a new game
    resetGame: function () {
        this.gameInProgress = true;
        this.guessesLeft = this.maxGuesses;
        this.lettersGuessed = [];
        this.boardState = [];

        this.solution = wordTable.getRandomWord();

        // Map the current board state to match the template of the new word
        // Substitute underscores for letters, but preserve the non-letters
        // Note:  uses regex expression matching, thank you gods of Unix!
        this.boardState = this.solution;
        this.boardState = this.boardState.replace(/[a-z|A-Z]/g, '_');

        console.log("The board looks like: [" + this.boardState + "]");
    },

    // saveGuess() - saves the guess into our array and returns whether it was a valid guess (wasn't 
    // previously guessed)
    saveGuess(letter) {
        var foundLetter = false;

        // Loop through the array and compare this guess against each element
        // Note:  Need to check why this didn't work: if (letter in this.lettersGuessed === false) {...}
        this.lettersGuessed.forEach(function (guess) {
            if (guess == letter) {
                foundLetter = true;
                console.log("game.saveGuess() -- found letter: " + letter);
            }
        });


        // if not previously guessed, add it to the array
        if (!foundLetter) {
            this.lettersGuessed.push(letter);
            console.log("game.saveGuess() -- new letter: " + letter);
        }

        // If we found the letter, return it an invalid guess
        return (!foundLetter);
    },

    // playRouund() - adjudicates one guess and updates game state, returns true if the round was valid
    playRound: function (guess) {
        var matched = false;

        // Save the guess
        if (this.saveGuess(guess) == false) {
            // not a valid guess, fail out gracefully
            return false;
        }

        // See if guess matches the solution
        for (i=0; i<this.solution.length; i++) {
            if (this.solution[i].toLowerCase() === guess) {
                matched = true;

                // update our board state
                this.boardState = this.replaceAt(this.boardState, i, guess);
                console.log("playRound() - match! \'" + guess + "\' at position: " + i);
            }
        }

        // Decrement the guesses only if they missed
        if (matched == false)
            this.guessesLeft--;



        // Valid round
        return true;
    },

    // replaceAt() - Utility function to allows us to subtitute one character in a string
    // Strings are immutable, so it returns a copy of it
    replaceAt : function(str, index, replacement) {
        return str.substr(0, index) + replacement+ str.substr(index + replacement.length);
    }
    
};

