// Schrijf hier je code
function isPositive(x) {
    if (x>=0) {
        return true;
    }
    return false;
}

function isNegative(x) {
    if (x<=0) {
        return true;
    }
    return false;
}

function isDivisibleBy(x, y) {
    if (x%y===0) {
        return true;
    }
    return false;
}

function inRange(x, min, max) {
    if (x<=max && min<= x) {
        return true;
    }
    return false;
}

function pingPong(score1, score2) {
    if (score1>=11 && score1>=score2+2) {
        return true;
    }
    return false;
}

function freeTicket(age) {
    if (age<12 || age>=65) {
        return true;
    }
    return false;
}

function has30Days(month) {
    return month === 4 || month === 6 || month === 9 || month === 11;
}

function has31Days(month) {
    return month === 1 || month === 3 || month === 5 || month === 7 || month == 8 || month == 10 || month == 12;
}

function isLeapYear(year) {
    return isDivisibleBy(year, 4) && (!isDivisibleBy(year, 100) || isDivisibleBy(year, 400));
}

function isDivisibleBy(x, y) {
    return x % y === 0;
}

function has28Days(month, year) {
    return month === 2 && !isLeapYear(year);
}

function has29Days(month, year) {
    return month === 2 && isLeapYear(year);
}

function isValidDate(day, month, year) {
    return inRange(month, 1, 12) &&
        ((has31Days(month) && inRange(day, 1, 31)) ||
            (has30Days(month) && inRange(day, 1, 30)) ||
            (has28Days(month, year) && inRange(day, 1, 28)) ||
            (has29Days(month, year) && inRange(day, 1, 29)));
}

function majority(x, y, z) {
    return (x && y) || (x && z) || (y && z);
}

function isHigherCard(x, y) {
    return (x === 1 && y !== 1) || (x > y && y !== 1);
}

function earlier(h1, m1, h2, m2) {
    return h1 * 60 + m1 < h2 * 60 + m2;
}
//of function isInteger(x) {
//    return x === Math.round(x);}

function isInteger(x) {
    return x % 1 === 0;
}

function isPerfectSquare(x) {
    return isInteger(x ** 0.5);
}