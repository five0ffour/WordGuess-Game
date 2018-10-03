# WordGuess-Game

##Sci-Fi Word Guess Game

Sci-Fi Word Guess is a politically corrected version of the classic hangman game. That is, you won't see any multilated stick figures hanging from  imaginary gallows.  That being said, we have givien it a Science Fiction theme.  The dictionary only holds examples of science fiction themed television shows and movies.

The game plays as you might expect.  The computer selects a random word and shows how many characters are in it.  It "gifts" you the numbers and any non-alphanumeric characters such as dashes, ampersands and colons.   You win by correctly guessing characters one by one that match a space on the board.  The program will reveal the spots where the character matches.    If you happen to guess incorrectly, it decrements you remaining guesses count.   Unlike hangman,  we don't put a stick figure up,  it  runs a countdown.   But, just like Hangman,  you only get 5 mistakes,  if you miss a sixth time, you'll lose the round.  (e.g., 1 head, 1 body, 2 arms and 2 legs = 6).   All of these stas are shown on the "Current Game" card.

he "Scoreboard Card" shows you how you're doing as part of a series.  It records the total games play, wins and losses.   It also adds a banking twist to the game to make it a Solitaire challenge.   It seeds you 30 credits to start the game.  Every guess you get correctly nets you 2 credits.  Every mistaken guess costs 5.   Now those short words will really sting! 

Getting Started
To get started,  copy the program to a clean directory and run "index.html" in your browser.   The program will prompt you to press any key to start.  From there,  simply use your keyboard to enter your guesses each round.   The game will automatically restart after a win or loss.

##Prerequisites
A modern browser and an internet connection.   Chrome works best, but others should be fine too.
A modern IDE - it was developed using Visual Studio Code, but any text editor would work, including notepad.
GitHub 
GitBash installed locally

##Installing
1.  Find a Locate an empty directory on your hard drive
2.  Open a bash terminal in that directory
3.  Clone the WordGuess-Game repo down using  Git   
         "git clone https://github.com/five0ffour/WordGuess-Game.git"
4.  Open Index.html in your favorite browser
        It should display the game board and prompt you for an entry

##Built With
Bootstrap - The CSS framework used
Google Fonts

##Authors
Michael Galanreau - Initial work - Five0fFour

##Acknowledgments
www.subtlepatterns.com  - wallpaper image
scifi banner 