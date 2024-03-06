// var TennisGame2 = function(player1Name, player2Name) {
//     this.P1point = 0;
//     this.P2point = 0;

//     this.P1res = "";
//     this.P2res = "";

//     this.player1Name = player1Name;
//     this.player2Name = player2Name;
// };


// delete P1res and P2res, instead create an array to hold the values assigned to the score variable
var TennisGame2 = function(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.P1point = 0;
    this.P2point = 0;
    this.scoreLabels = ["Love", "Fifteen", "Thirty", "Forty"];
};


// TennisGame2.prototype.getScore = function() {
//     var score = "";

//     if (this.P1point === this.P2point && this.P1point < 3) {
//         if (this.P1point === 0)
//             score = "Love";
//         if (this.P1point === 1)
//             score = "Fifteen";
//         if (this.P1point === 2)
//             score = "Thirty";
//         score += "-All";
//     }
//     if (this.P1point === this.P2point && this.P1point > 2)
//         score = "Deuce";

//     if (this.P1point > 0 && this.P2point === 0) {
//         if (this.P1point === 1)
//             this.P1res = "Fifteen";
//         if (this.P1point === 2)
//             this.P1res = "Thirty";
//         if (this.P1point === 3)
//             this.P1res = "Forty";

//         this.P2res = "Love";
//         score = this.P1res + "-" + this.P2res;
//     }
//     if (this.P2point > 0 && this.P1point === 0) {
//         if (this.P2point === 1)
//             this.P2res = "Fifteen";
//         if (this.P2point === 2)
//             this.P2res = "Thirty";
//         if (this.P2point === 3)
//             this.P2res = "Forty";

//         this.P1res = "Love";
//         score = this.P1res + "-" + this.P2res;
//     }

//     if (this.P1point > this.P2point && this.P1point < 4) {
//         if (this.P1point === 2)
//             this.P1res = "Thirty";
//         if (this.P1point === 3)
//             this.P1res = "Forty";
//         if (this.P2point === 1)
//             this.P2res = "Fifteen";
//         if (this.P2point === 2)
//             this.P2res = "Thirty";
//         score = this.P1res + "-" + this.P2res;
//     }
//     if (this.P2point > this.P1point && this.P2point < 4) {
//         if (this.P2point === 2)
//             this.P2res = "Thirty";
//         if (this.P2point === 3)
//             this.P2res = "Forty";
//         if (this.P1point === 1)
//             this.P1res = "Fifteen";
//         if (this.P1point === 2)
//             this.P1res = "Thirty";
//         score = this.P1res + "-" + this.P2res;
//     }

//     if (this.P1point > this.P2point && this.P2point >= 3) {
//         score = "Advantage player1";
//     }

//     if (this.P2point > this.P1point && this.P1point >= 3) {
//         score = "Advantage player2";
//     }

//     if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
//         score = "Win for player1";
//     }
//     if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
//         score = "Win for player2";
//     }
//     return score;
// };

// first refactor the all the if statements and nested if to a more readable code
// most of the lines are written twice, by converting the variables to an array we're able to eliminate a lot of lines of codes

TennisGame2.prototype.getScore = function () {
    let score = "";
    if (this.P1point === this.P2point) {
        if (this.P1point < 3) {
            score = this.scoreLabels[this.P1point] + "-All";
        } else {
            score = "Deuce";
        }
    } else if (this.P1point >= 4 || this.P2point >= 4) {
        const pointDifference = this.P1point - this.P2point;
        if (Math.abs(pointDifference) >= 2) {
            score = pointDifference > 0 ? "Win for " + this.player1Name : "Win for " + this.player2Name;
        } else {
            score = pointDifference > 0 ? "Advantage " + this.player1Name : "Advantage " + this.player2Name;
        }
    } else {
        score = this.scoreLabels[this.P1point] + "-" + this.scoreLabels[this.P2point];
    }
    return score;
};

// TennisGame2.prototype.SetP1Score = function(number) {
//     var i;
//     for (i = 0; i < number; i++) {
//         this.P1Score();
//     }
// };

// TennisGame2.prototype.SetP2Score = function(number) {
//     var i;
//     for (i = 0; i < number; i++) {
//         this.P2Score();
//     }
// };

// in this function, the two functions SetP1Score and SetP2Score are consolidated into one by adding an extra paramater for player name
// and the wonPoint function is called
TennisGame2.prototype.setPlayerScore = function(player, number) {
    // Set the score for the specified player based on the number of points won
    for (let i = 0; i < number; i++) {
        this.wonPoint(player);
    }
};

// TennisGame2.prototype.P1Score = function() {
//     this.P1point++;
// };

// TennisGame2.prototype.P2Score = function() {
//     this.P2point++;
// };


// TennisGame2.prototype.wonPoint = function(player) {
//     if (player === "player1")
//         this.P1Score();
//     else
//         this.P2Score();
// };


// this function here performs to actions
// 1) setting the value of P1point and P2point
// 2) it also check the type of player currently playing using the ternary operator
// the P2Score and P1Scroe are now redundant function
TennisGame2.prototype.wonPoint = function(player) {
    player === "player1" ? this.P1point++ : this.P2point++;
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}