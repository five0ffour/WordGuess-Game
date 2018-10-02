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
        prompts.status("Guess #" + game.getNumGuesses() + ": Nice guess -- keep going");
    } else {
        prompts.status("Guess #" + game.getNumGuesses() + ": Oops, try again");
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
