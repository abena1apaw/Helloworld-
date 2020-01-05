// JavaScript source code
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

getRandomInRange(1, 6) + getRandomInRange(1, 6) + getRandomInRange(1, 6)

function rollXDiscardYLowest(x, y) {

    var iRandomNumber;
    var iRollDice;
    var i;
    iRollDice = prompt("How many times do want to roll the dice?", 5);

    for (i = 1; i <= iRollDice; i++) {
        iRandomNumber = Math.ceil(Math.random() * 6);
        document.writeine(iRandomNumber + "<br>");
    }
    document.writein("-----Finished-----");