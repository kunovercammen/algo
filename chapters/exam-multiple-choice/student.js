// Schrijf hier je code
function choices(nChoices){
    if (nChoices <= 0 || nChoices > 26){
        return
    }
    let result = ""
    const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < nChoices; i++){
        result = `${result}${string[i]}`
    }
    return result
}

function isValidAnswer(answer, nChoices) {
    const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const plaats = string.indexOf(answer);


    if (plaats>=nChoices || (plaats === -1 && answer !== "?")) {
        return false;
    }
    return true;

}

function isValidExam(answer, nChoices) {
    for (let i = 0; i < answer.length; i++) {
        if (!(isValidAnswer(answer[i], nChoices))) {
            return false;
        }
        
    }
    return true;
}

function grade(expected, actual, penalty) {
    if (actual === expected) {
        return 1
    } else if (actual === "?") {
        return 0;
    }

    return penalty;
}

function gradeStudent(expected, actual, penalty) {
    let result = [];

    for (let i = 0; i < expected.length; i++) { // result.push(grade(expected[i], actual[i], penalty))
        if (actual[i] === expected[i]) {
            result.push(1);
        } else if (actual[i] === "?") {
            result.push(0);
        } else {
            result.push(penalty);
        }  
    }
    return result;
}

function gradeClass(expected, actual, penalty) {
    let result = [];

    for (let i = 0; i < actual.length; i++) {
        result.push(gradeStudent(expected, actual[i], penalty));
    }
    return result;
}

function totalForStudent(gradeMatrix, studentIndex) {
    let result = 0;
    let lijst = gradeMatrix[studentIndex];

    for (let i = 0; i < lijst.length; i++) {
        result += lijst[i];
    }
    if (result<=0) {
        return 0;
    }

    return Math.round((result/lijst.length)*20);

}

function countCorrectAnswers(gradeMatrix, questionIndex) {
    let result = 0;

    for (let i = 0; i < gradeMatrix.length; i++) {
        if (gradeMatrix[i][questionIndex] === 1) {
            result += 1;
        }
    }
    return result;
}

function easiestQuestions(gradeMatrix){
    let bestepunten = 0
    let result = []
    for (let i = 0; i < gradeMatrix[0].length; i++){
        if (countCorrectAnswers(gradeMatrix, i) > bestepunten){
            bestepunten = countCorrectAnswers(gradeMatrix, i)
            result = []
            result.push(i)
        }
        else if (countCorrectAnswers(gradeMatrix, i) === bestepunten){
            result.push(i)
        }
    }
    return result
}











function canRookCapture(chessboard, rookPosition, attackedPosition) {
    if (findPieceAt(chessboard, rookPosition).type === "rook") {
        if(findPieceAt(chessboard, attackedPosition) !=="not found") {
            if (findPieceAt(chessboard, attackedPosition).isBlack !== findPieceAt(chessboard, rookPosition).isBlack) {
                if(onSameRow(rookPosition, attackedPosition)) {
                    if (rookPosition.x < attackedPosition.x) {
                        if (rookPosition.x + 1 === attackedPosition.x - 1) {
                            return true
                        } else {
                        for (let i = rookPosition.x + 1; i < attackedPosition.x; i++) {
        
                        if (!(findPieceAt(chessboard, {x: i, y: rookPosition.y})) !== "not found") {
                            return false;
                        }
                     }
                } else if (onSameColumn(rookPosition, attackedPosition)) {

                }
            }
        }
    }
    return false;
}