//---
// document.onkeyup() - Main controller loop -  processes all of the keyboard engine.
//---

/*----------------------------------------*/
/* Game Engine:  Process the input events */
/*----------------------------------------*/
document.onkeyup = function (event) {

    // Get keystroke
    var userGuess = event.key.toLowerCase();

    // Create a new game if none in progress
    if (game.inProgress() == false) {

        // Clear the board 
        game.resetGame();

        // Write out the starting state
        prompts.reportResults(game, scoreboard);
        prompts.status("Let's do this!! - Choose a letter")
        return;
    };

    // Validate input - confirm they entered a letter
    if (game.validKey(userGuess) == false) {
        prompts.status("Guess #" + game.getNumGuesses() + ": Oops, invalid key, we only need letters");
        return;
    }

    // Play a round
    if (game.playRound(userGuess)) {
        //* Valid guess - return message depending on whether they found a letter or not
        if (game.matched()) { 
            scoreboard.creditWin();   // we pay on good guesses
            prompts.status("Guess #" + game.getNumGuesses() + ": Good job -- keep going!");
        }
        else {
            scoreboard.debitLoss();   // we charge for mistakes
            prompts.status("Guess #" + game.getNumGuesses() + ": Not quite -- try again!");    
        }
    } else {
        // Invalid guess - ignored, ask them to try again
        prompts.status("Guess #" + game.getNumGuesses() + ": Oops, I don't recognize that key, try again");
    }

    // Score the results
    if (game.wonGame()) {
        scoreboard.won();
        game.stopGame();
        prompts.status("Congratulations!  You won!! -- Press any key to start again");
    } else if (game.gameOver()) {
        scoreboard.lost();
        game.stopGame();
        prompts.status("Sorry! It was: [ " + game.solution +
            " ] Better luck next time! -- Press any key to start again");
    }

    // Update the display with the new state
    prompts.reportResults(game, scoreboard);
};
