jest.autoMockOff();
import BowlingGame from '../src/BowlingGame.js';

describe("Hello World Server", function() {

    it('can construct new object', function() {
       var bowling = new BowlingGame();
        expect(bowling).toBe(true);
    });
});
