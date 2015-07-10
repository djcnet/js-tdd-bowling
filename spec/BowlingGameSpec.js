jest.autoMockOff();
import BowlingGame from '../src/BowlingGame.js';

describe("I can calculate a ten pin bowling game", function() {

    it('can construct new object', function() {
       var bowling = new BowlingGame();
        expect(bowling).toBeTruthy();
    });
});
