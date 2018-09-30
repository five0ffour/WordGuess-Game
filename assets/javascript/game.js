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
        // TODO - Check  win criteria here
        return false;
    },

    // checks to see if the guess limit is reached
    gameOver: function () {
        return (this.guessesLeft <= 0);
    },

    // resets the board to a new game
    resetGame: function () {
        this.gameInProgress = true;
        this.boardState = "";
        this.guessesLeft = this.maxGuesses;
        this.solution = wordTable.getRandomWord();

        // Empty the array of guesses
        this.lettersGuessed = [];
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
                console.log("game.saveGuess() -- found letter: " + letter)
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

        // Save the guess
        if (this.saveGuess(guess) == false) {
            // not a valid guess, fail out gracefully
            return false;
        }

        // Valid guess, decrement counts
        this.guessesLeft--;

        // See if guess matches the solution
        for (i=0; i<this.solution.length; i++) {
            if (this.solution[i].toLowerCase() === guess) {
                // update our board state
                console.log("playRound() - match! \'" + guess + "\' at position: " + i);
            }
        }

        // Valid round
        return true;
    }
};
