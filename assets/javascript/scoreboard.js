// Board - tracks the overall number of games
var scoreboard = {
    // Scoreboard Attributes
    wins : 0,
    losses: 0,

    // Scoreboard Functions 
    won : function () {
        this.wins++;
    },

    lost : function () {
        this.losses++;
    }

};
