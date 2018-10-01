//------
// scoreboard - tracks the resulst of all of the games
//------
var scoreboard = {
    //-----------------------
    // Scoreboard variables
    //-----------------------
    wins : 0,
    losses: 0,

    //-----------------------
    // Scoreboard Functions 
    //-----------------------
    won : function () {
        this.wins++;
    },

    lost : function () {
        this.losses++;
    }

};
