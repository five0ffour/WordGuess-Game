//-----
// game object - tracks the current state of the game in progress
//-----
var game = {

    //------------------
    // object variables 
    //------------------
    gameInProgress: false,  // flags that the game is in progress
    letterMatched: false,   // flag each round if user guessed correctly or not
    maxGuesses: 6,          // number of *wrong* guesses user gets before game ends
    guessesLeft: 6,         // number of *wrong* guesses remaining in game
    actualGuesses: 0,       // number of *valid* guesses actually taken (right or wrong)
    lastGuess: "",          // stores the last letter guessed for reporting puroposes
    solution: [],           // the secret word, no cheating!!
    boardState: [],         // the partially revealed solution based on user guesses
    lettersGuessed: [],     // array of user guesses

    //-----------------------
    // game object functions
    //-----------------------

    //---
    // getNumGuesses() - helper functoin to return the round we're in based on the valid guesses
    //---
    getNumGuesses : function () {
        return this.actualGuesses;
    },

    //---
    // getLastGuess() - helper funciton to return the last played letter
    //
    getLastGuess : function () {
        return this.lastGuess;
    },

    //---
    // inProgress() - responds if we are in the middle of a game
    //               (and need to keep track of state changes)
    inProgress : function () {
        return this.gameInProgress;
    },

    //---
    // stopGame() - sets flag to stop the game (to stop tracking state)
    //---
    stopGame : function () {
        this.gameInProgress = false;
    },

    //---
    // matched() - helper funciton to return if we had a good letter guessed last round
    //
    matched : function () {
        return this.letterMatched;
    },

    //---
    // validKey() - Determine if this an acceptable keystroke.
    //              We only accept [a-z] or [A-Z]
    //              May consider adding a quit key (Escape) and hint key (?)
    //---
    validKey: function (key) {

        if (!/^[a-zA-Z]*$/g.test(key)) {
            console.log("game.validKey() - invalid character [" + key + "]");
            return false;
        }

        return true;
    },

    //---
    // wonGame() - checks to see if the user found our word
    //---
    wonGame: function () {
        var won = false;

        if (this.boardState.toUpperCase() === this.solution.toUpperCase()) {
            console.log("game.wonGame() - User wins game");
            won = true;
        }

        return won;
    },

    //---
    // gameOver() - checks to see if the guess limit was reached
    //---
    gameOver: function () {
        return (this.guessesLeft <= 0);
    },

    //---
    // resetGame() - resets the board to a new game
    //---
    resetGame: function () {
        this.gameInProgress = true;
        this.guessesLeft = this.maxGuesses;
        this.actualGuesses = 0;
        this.lettersGuessed = [];
        this.boardState = [];
        this.lastGuess = "";

        this.solution = wordTable.getRandomWord();

        // Map the current board state to match the template of the new word
        // Substitute underscores for letters, but preserve the non-letters
        // Note:  uses regex expression matching, thank you gods of Unix!
        this.boardState = this.solution;
        this.boardState = this.boardState.replace(/[a-z|A-Z]/g, '_');

        console.log("game.resetGame() - The board looks like: [" + this.boardState + "]");
    },

    //---
    // saveGuess() - saves the guess into our array and returns whether it was a valid guess (wasn't 
    //               previously guessed)
    //---
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

        // If we found the letter, return it an invalid repeat guess
        return (!foundLetter);
    },

    //---
    // playRouund() - adjudicates one guess and updates game state, returns true if the round was valid
    //---
    playRound: function (guess) {
        
        this.letterMatched = false;
        this.lastGuess = guess;

        // Save the guess and look to see if it's a repeat
        if (this.saveGuess(guess) == false) {
            // not a valid guess, fail out gracefully
            return false;
        }

        // Record this as a valid guess for reporting
        this.actualGuesses++;

        // See if the fresh guess matches a slot in the solution set
        for (i=0; i<this.solution.length; i++) {
            if (this.solution[i].toLowerCase() === guess) {
                this.letterMatched = true;

                // update our board state in the correct position
                this.boardState = this.replaceAt(this.boardState, i, guess);
                console.log("game.playRound() - match! \'" + guess + "\' at position: " + i);
            }
        }

        // Decrement the guesses only if they missed
        if (this.letterMatched == false) 
            this.guessesLeft--;

        // Valid round
        return true;
    },

    //---
    // replaceAt() - Utility function to allows us to subtitute one character in a string
    //               Strings are immutable, so it returns a copy of it
    //---
    replaceAt : function(str, index, replacement) {
        return str.substr(0, index) + replacement+ str.substr(index + replacement.length);
    }
    
};

