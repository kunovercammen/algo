// Schrijf hier je code
function myFirstFunction(bike) {
    forward(bike);
}
function twiceForward(bike) {
    forward(bike);
    forward(bike);
}
function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
}
function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}
function forward5(bike) {
    let i = 5;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}
function forward10(bike) {
    let i = 10;

    while (i>0) {
        forward(bike);
        i=i-1;
    }
}
function right(bike) {
    turnRight(bike);
    forward(bike);
}
function ellShape(bike) {
    forward5(bike);
    turnRight(bike);
    forward4(bike);
}
function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}
function forwardN(bike, steps) {
    let i = steps;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}
function crookedUTurn (bike) {
    forwardN(bike, 7);
    turnRight(bike);
    forwardN(bike,9);
    turnRight(bike);
    forwardN(bike,3);
}
function forwardUntilWall(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
}
function smartEllShape(bike){
    while (!sensor(bike)) {
        forward (bike);
    }
    turnRight(bike);
    while (!sensor(bike)) {
        forward(bike);
    }
}
function spiral(car) {
    let i=18;

    while (i>0) {
        forwardUntilWall(car);
        turnRight(car);
        i=i-1
    }
}
function turnLeft(car){
    turnRight(car);
    turnRight(car);
    turnRight(car);
}
function left(car) {
    turnLeft(car);
    forwardUntilWall(car);
}
function slalom(car) {
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}
function leftOrRight(car) {
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}
function incompleteU(car) {
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}
function whichDirection(car) {
    while (sensor(car)) {
        turnRight(car);
    }

    forwardUntilWall(car);
}
function sensorRight(car) {
    turnRight(car);
    let result = sensor(car);
    turnLeft(car);

    return result;
}
function firstRight(car){
    while (sensorRight(car)){
        forwardN(car,1);
    }
    turnRight(car);
    forwardUntilWall(car);
}
function sensorLeft(car) {
    turnLeft(car);
    let result = sensor(car);
    turnRight(car);

    return result;
}
function firstLeft(car) {
    while (sensorLeft(car)){
        forwardN(car,1);
    }
    turnLeft(car);
    forwardUntilWall(car);
}
function zigZag(car) {
    firstRight(car);
    turnLeft(car);
    twiceForward(car);
    firstLeft(car);
}
    function forwardUntilFreeRight(car) {
        while (sensorRight(car)) {
            forward(car);
        }
    }
    function secondRight(car) {
        forwardUntilFreeRight(car);
        forward(car);
        forwardUntilFreeRight(car);
        turnRight(car);
        forwardUntilWall(car);
    }
    function thirdRight(car) {
        forwardUntilFreeRight(car);
        forward(car);
        forwardUntilFreeRight(car);
        forward(car);
        forwardUntilFreeRight(car);
        turnRight(car);
        forwardUntilWall(car);
    }
    function forwardUntilNthRight(car, nrights) {
        let i = nrights;

        while (i > 0) {
            forward(car);

        if (!sensorRight(car)) {
        i = i - 1;
    }
        }
    }
function fourthRight(car){
    forwardUntilNthRight(car, 4);
    turnRight(car);
    forwardUntilWall(car);
}
function forwardUntilFreeLeft(car) {
    while (sensorLeft(car)) {
        forward(car);
    }
}
function forwardUntilNthLeft(car, nlefts) {
    let i = nlefts;

    while (i > 0) {
        forward(car);

    if (!sensorLeft(car)) {
    i = i - 1;
}
    }
}
function fifthLeft(car) {
    forwardUntilNthLeft(car, 5);
    turnLeft(car);
    forwardUntilWall(car);
}
function maze(car) {
    function L(n) {
        forwardUntilNthLeft(car, n);
        turnLeft(car);
    }

    function R(n) {
        forwardUntilNthRight(car, n);
        turnRight(car);
    }

    R(2);
    L(1);
    L(2);
    L(2);
    R(4);
    R(1);
    L(3);
    forwardUntilWall(car);

}