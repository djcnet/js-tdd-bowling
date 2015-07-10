
var BowlingGame = require('../compiled/BowlingGame.js');

describe("I can calculate a ten pin bowling game", function() {

    it('can construct new object', function() {
       var bowling = new BowlingGame();
        expect(bowling).toBeTruthy();
    });
});
