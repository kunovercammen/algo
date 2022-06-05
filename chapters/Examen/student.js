// Schrijf hier je code
function onSameRow(position1, position2) {
    if (position1.y === position2.y) {
        return true;
    }
    return false;
}

function onSameColumn(position1, position2) {
    if (position1.x === position2.x) {
        return true;
    }
    return false;
}

function isSamePosition(position1, position2) {
    if (onSameRow(position1, position2) === true) {
        if (position1.x === position2.x) {
            return true;
        }
    }
    return false;
}

function numbersBetween(a,b) {

    if (a === b || a - 1 === b || a + 1 === b) {
        return [];
    } 

    let result = [];

    if ( a < b) {
        let beginwaarde = a + 1;
        for (let i = 1; i < b-a; i++) {
            result.push(beginwaarde);
            beginwaarde++;
        }
        return result;
    }

    if ( b < a) {
        let beginwaarde = b + 1
        for (let i = 1; i < a - b; i++) {
            result.push(beginwaarde);
            beginwaarde++;
        }
        return result;
    }
    return result;
}

function parsePosition(string) {

    let kopie = string;
    let zonderSpaties = kopie.trim();
    let stringZonderHaakjes = zonderSpaties.substring(1, kopie.length-1);
    let apart = stringZonderHaakjes.split(",");
    let result = {};
    
    for (let i = 0; i < apart.length; i++) {
        apart[i] = parseInt(apart[i]);
        if (i === 0) {
            result.x = apart[i];
        } else {
            result.y = apart[i];
        }
    }
    return result;
}

function findPieceAt(chessboard, position) {
    
    for (let i = 0; i < chessboard.length; i++) {
        if (isSamePosition(chessboard[i].position, position)) {
            return chessboard[i];
        }
    }

    return "not found";

}

function overlappingPieces(chessboard) {
    if (chessboard.length <= 1) {
        return false;
    }
    const kopie = chessboard;

    for (let i = 0; i < kopie.length; i++) {
        let positie1 = kopie[i].position;

        for (let j = i + 1; j < kopie.length; j++) {
            let positie2 = kopie[j].position;
            if (isSamePosition(positie1, positie2)) {
                return true;
            }
        }
    }
    return false;
}

function canRookCapture(chessboard, rookPosition, attackedPosition) {
    if (findPieceAt(chessboard, rookPosition).type === "rook") {
        if(findPieceAt(chessboard, attackedPosition) !=="not found") {
            if (findPieceAt(chessboard, attackedPosition).isBlack !== findPieceAt(chessboard, rookPosition).isBlack) {
                if(onSameRow(rookPosition, attackedPosition) || onSameColumn(rookPosition, attackedPosition)) {
                     return true;
                } 
            }
        }
    }
    return false;
}