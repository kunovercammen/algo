function width(grid)
{
    return grid[0].length;
}

function height(grid)
{
    return grid.length;
}

function isInsideGrid(grid, {x, y})
{
    return 0 <= x && x < width(grid) && 0 <= y && y < height(grid);
}

function acceptsLetter(grid, {x, y})
{
    return isInsideGrid(grid, {x, y}) && grid[y][x] !== '*';
}

function leftOf({x, y})
{
    return { x: x-1, y };
}

function rightOf({x, y})
{
    return { x: x+1, y };
}

function above({x, y})
{
    return { x, y: y-1 };
}

function below({x, y})
{
    return { x, y: y+1 };
}

function needsIndex(grid, position)
{
    return acceptsLetter(grid, position) && (startsHorizontalWord() || startsVerticalWord());


    function startsHorizontalWord()
    {
        return !acceptsLetter(grid, leftOf(position)) && acceptsLetter(grid, rightOf(position));
    }

    function startsVerticalWord()
    {
        return !acceptsLetter(grid, above(position)) && acceptsLetter(grid, below(position))
    }
}

function indexPosition(grid, index)
{
    let i = 0;

    for ( let y = 0; y !== height(grid); ++y )
    {
        for ( let x = 0; x !== width(grid); ++x )
        {
            const pos = { x, y };

            if ( needsIndex(grid, pos) )
            {
                i++;

                if ( index === i )
                {
                    return pos;
                }
            }
        }
    }

    return 'invalid';
}

function clear(grid)
{
    return grid.map(row => [...row].map(x => x === '*' ? '*' : '.').join(''));
}

const range = (a, b) => a < b ? [a, ...range(a+1, b)] : [];

function createGrid(width, height, blocks)
{
    const result = range(0, height).map(y => range(0, width).map(x => '.'));

    for ( const {x, y} of blocks )
    {
        result[y][x] = '*';
    }

    return result.map(row => row.join(''));
}

function fits1(grid, {x, y}, word)
{
    return fits4(grid, {x, y}, true, word);
}

function fits4(grid, {x, y}, horizontal, word)
{
    const [ dx, dy ] = horizontal ? [ 1, 0 ] : [ 0, 1 ];
    word = word.toUpperCase();

    if ( !needsIndex(grid, {x, y}) )
    {
        return false;
    }

    for ( const letter of word )
    {
        if ( !acceptsLetter(grid, {x, y}) )
        {
            return false;
        }

        const c = grid[y][x].toUpperCase();

        if ( c === '*' || (c !== letter && c !== '.') )
        {
            return false;
        }

        x += dx;
        y += dy;
    }

    return !acceptsLetter(grid, {x, y});
}

function fits2(...args) { return fits4(...args); }
function fits3(...args) { return fits4(...args); }

function eraseAt(string, indices)
{
    if ( indices.length === 0 )
    {
        return string;
    }
    else
    {
        const [i, ...is] = indices;
        const left = string.substring(0, i);
        const right = string.substring(i + 1);
        const newString = `${left}.${right}`;

        return eraseAt(newString, is);
    }
}