//------
// scoreboard - tracks the resulst of all of the games
//------
var scoreboard = {
    //-----------------------
    // Scoreboard variables
    //-----------------------
    wins        : 0,
    losses      : 0,
    gamesPlayed : 0, 
    credits     : 30,       // how much we have in the bank
    winCredit   : 2,        // how much we pay on every correct guess
    lossDebit   : 5,        // how much we charge for every mistake

    //-----------------------
    // Scoreboard Functions 
    //-----------------------
    won : function () {
        this.wins++;
        this.gamesPlayed++;
    },

    lost : function () {
        this.losses++;
        this.gamesPlayed++;
    },
    
    getCredits : function () {
        return this.credits;
    },

    creditWin : function () {
        this.credits += this.winCredit;
    },

    debitLoss : function () {
        this.credits -= this.lossDebit;
    }
};
