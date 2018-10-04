//---
// document.onkeyup() - Main controller loop -  processes all of the keyboard engine.
//---

/*--------------------------------------------------------------------------*/
/* Global Event Handler - Game Engine Controller:  Process the input events */
/*--------------------------------------------------------------------------*/
document.onkeyup = function (event) {

    // Get keystroke
    var userGuess = event.key.toLowerCase();

    // Create a new game if none in progress
    if (game.inProgress() == false) {

        // Clear the board -- set difficulty mode based on user selection
        game.setGameMode(userGuess);

        game.resetGame();

        // Write out the starting state
        prompts.reportResults(game, scoreboard);
        prompts.status("Let's do this!! - Choose a letter")
        return;
    };

    // Validate input - confirm they entered a letter
    if (input.validKey(userGuess) == false) {
        prompts.status("Guess #" + game.getNumGuesses() + ": Oops, invalid key, we only need letters");
        return;
    }

    // Play a round
    if (game.playRound(userGuess)) {

        // Valid guess - return message depending on whether they found a letter or not
        if (game.matched()) {
            // Right Guess
            scoreboard.creditWin(); // we pay on good guesses
            prompts.status("Guess #" + game.getNumGuesses() + ": Good job -- keep going!");
        } else {
            // Wrong Guess
            scoreboard.debitLoss(); // we charge for mistakes
            prompts.status("Guess #" + game.getNumGuesses() + ": Not quite -- try again!");
        }
    } else {
        // Invalid guess - ignored, ask them to try again
        prompts.status("Guess #" + game.getNumGuesses() + ": Oops, I don't recognize that key, try again");
    }

    // Score the results - win or lose
    if (game.wonGame()) {
        scoreboard.won();
        game.stopGame();
        prompts.status("Congratulations!  You won!! -- Press any key to start again (or 'e' for  easy and 'h' = hard)");
    } else if (game.gameOver()) {
        scoreboard.lost();
        game.stopGame();
        prompts.status("Sorry! It was: [ " + game.solution +
            " ] Better luck next time! -- Press any key to start again (or 'e' for  easy and 'h' = hard)");
    }

    // Update the display with the new state
    prompts.reportResults(game, scoreboard);
};


//---
// input - helper function utility class for parsing and validating input keystrokes
//---
var input = {

    //---
    // validKey() - Determine if this an acceptable keystroke.
    //              We only accept [a-z] or [A-Z]
    //              May consider adding a quit key (Escape) and hint key (?)
    //---
    validKey: function (key) {

        // Regex expression parsing,  accept alphanumerics only, upper or lower case
        if (!/^[a-zA-Z]*$/g.test(key)) {
            console.log("input.validKey() - invalid character [" + key + "]");
            return false;
        }

        return true;
    }

};