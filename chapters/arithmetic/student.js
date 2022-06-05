function five() {
    return 5;
}

function average() {
    return (135+471)/2;
}

function average2(x,y) {
    return (x+y)/2;
}

function average3(x,y,z) {
    return (x+y+z)/3;
}

function distance (x,y) {
    return (x**2+y**2)**(1/2);
}

function busesNeeded(people, busCapacity) {
    return Math.ceil(people/busCapacity);
}

function sugar(pies) {
    return Math.ceil(pies * 0.25);
}

function candyPerChild(children, candy) {
    return Math.floor(candy / children);
}

function leftoverCandy(children, candy) {
    return candy % children;
}

function hours(totalMinutes) {
    return Math.floor(totalMinutes / 60);
}

function minutes(totalMinutes) {
    return totalMinutes%60;
}

function communicationCosts(seconds) {
    return Math.ceil(seconds / 60) * 0.2;
}

function distance2(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return (dx ** 2 + dy ** 2) ** 0.5;
}

function cake(eggs) {
    return Math.floor (eggs/3);
}

function cake2(eggs, flour) {
    let maxByEggs = Math.floor(eggs / 4);
    let maxByFlour = Math.floor(flour / 250);
    return Math.min(maxByEggs, maxByFlour);
}

function cake3(eggs, flour, sugar, butter) {
    let maxByEggs = Math.floor(eggs / 4);
    let maxByFlour = Math.floor(flour / 250);
    let maxBySugar = Math.floor(sugar / 250);
    let maxByButter = Math.floor(butter / 250);
    return Math.min(maxByEggs, maxByFlour, maxBySugar, maxByButter);
}

function roundToMultiple(n, multipleOf) {
    return Math.round(n / multipleOf) * multipleOf;
}

function middle(a, b, c) {
    return a + b + c - Math.min(a, b, c) - Math.max(a, b, c);
}

function boxArea(width, height, depth) {
    return (width * height + width * depth + height * depth) * 2;
}

function toPercent(k, n) {
    return k/n*100;
}

function percentOf(p, n) {
    return p*n/100;
}

function totalMinutes(hours, minutes) {
    return (hours*60) +minutes;
}

function timeDifference (h1, m1, h2, m2) {
    return totalMinutes(h2,m2)-totalMinutes(h1,m1);
}

function lastDigit(n) {
    return n % 10;
}

function dropLastDigit(n) {
    return Math.floor(n / 10);
}

function penultimateDigit(n) {
    return lastDigit(Math.floor(n / 10));
}

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function nextPlayer(currentPlayer, playerCount) {
    return (currentPlayer + 1) % playerCount;
}

function previousPlayer(currentPlayer, playerCount) {
    return (currentPlayer + playerCount - 1) % playerCount;
}

function nextPlayer2(currentPlayer, playerCount) {
    return currentPlayer % playerCount + 1;
}

function previousPlayer2(currentPlayer, playerCount) {
    return (currentPlayer - 2 + playerCount) % playerCount + 1;
}

function vat(amount) {
    return amount+amount*0.21;
}

function coins(amount) {
    let coins5 = Math.floor(amount / 5);
    amount -= coins5 * 5;
    let coins2 = Math.floor(amount / 2);
    amount -= coins2 * 2;
    return coins5 + coins2 + amount;
}

function abs(n) {
    return Math.max(n, -n);
}

function sign(n) {
    return n / abs(n);
}