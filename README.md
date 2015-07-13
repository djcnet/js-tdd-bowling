#Bowling Game Class

For this exercise you will need to implement a Bowling Game class that simply calculates the total score of a complete game. A complete game has 10 frames. Each frame can consist of 1 or 2 rolls. The last frame can consist of up to 3 rolls, if the first roll was a strike. A perfect game (strike in every frame) consists of exactly 12 rolls.

###Scoring is as follows;
The default score for a 2 roll frame where less than 9 pins have been knocked down is simply number of pins in the first roll plus the number of pins in the second roll.
If all 10 pins are knocked down over 2 rolls then this is known as a spare and a bonus is applied. This bonus is the number of pins you knock down during your first next roll. For example, you knock down 8 pins in your first roll and 2 pins in your second roll. This is a spare. In the next frame on your first roll you get 7. The bonus applied to the previous frame is then (8+2) +7. You also still get the 7 for this frame. If you knock another 2 pins down on your next roll, the total score across those 2 frames is (8+2)+7 + (7+2) = 26
If all 10 pins are knocked down on your first roll of a frame then this is a strike and a bonus is applied. The bonus is the number of pins that are knocked down during the next 2 rolls. For example you knock down all 10 pins on roll one. In the next frame you get 4 on the first roll and 5 on the next roll. The bonus is (10+4+5) and you still get the (4+5) for this frame.
A perfect game (12 strikes) will give you 300 points

Using TDD write an ES6 class that has at least a roll method, a score method and a rolls array property. The roll method will accept an integer representing the numbers of pins knocked down. The score method when called will calculate the total score based on the current rolls. The number of rolls should not exceed a 10 frame game. For example,

```
var bowlingGame = new BolwingGame();
bowlingGame.roll(5);
bowlingGame.roll(4);
var score = bowlingGame.score();
```
score should = 9;
```
var bowlingGame = new BolwingGame();
bowlingGame.roll(5);
bowlingGame.roll(4);
bowlingGame.roll(7);
bowlingGame.roll(3);
bowlingGame.roll(2);
var score = bowlingGame.score();
```
score should = 23;

##Usage
The npm command is required to run the tests so you will need to install node <https://nodejs.org/download/>

```
git clone https://github.com/djcnet/js-tdd-bowling.git
cd ./js-tdd-bowling
npm install
```

To run the tests;
```
npm test
```
