// Schrijf hier je code
function isValidBoard(xs)
{
    if ( xs.length === 0 ) {
    
        return false;
    }

    for ( let x of xs )
    {
        if ( x !== 0 &&  x !== 1 &&  x !== 2 )
        {
            return false;
        }
    }

    return true;
}

function copy(xs) {
    return [...xs];
}
   
function mitosis(board, from, to)
{
    xs = [...board];

    const ik = board[from];
    const hij = board[to];

    hij = me;

    if (from<to) {
        
    }
    
}