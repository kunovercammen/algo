function titles(books)
{
    return books.map(b => b.title);
}

function isBookPublishedBetween(book, startYear, endYear)
{
    return startYear <= book.publicationYear && book.publicationYear <= endYear;
}

function booksBetween(books, startYear, endYear)
{
    return books.filter(book => isBookPublishedBetween(book, startYear, endYear));
}

function titlesBetween(books, startYear, endYear)
{
    return titles(booksBetween(books, startYear, endYear));
}

function bookCountBetween(books, startYear, endYear)
{
    return booksBetween(books, startYear, endYear).length;
}

function yearsActive(bibliography)
{
    const years = bibliography.map(b => b.publicationYear);
    const earliest = Math.min(...years);
    const latest = Math.max(...years);

    return latest - earliest + 1;
}

function bookCountByAuthor(books)
{
    const result = {};

    for ( const book of books )
    {
        const author = book.author;

        if ( !(author in result) )
        {
            result[author] = 0;
        }

        result[author]++;
    }

    return result;
}

function capitalizeWord(string)
{
    const firstLetter = string[0];
    const remainingLetters = string.slice(1);

    return `${firstLetter.toUpperCase()}${remainingLetters.toLowerCase()}`;
}

function capitalizeTitle(title)
{
    const words = title.split(' ');
    const capitalizedWords = words.map(capitalizeWord)

    return capitalizedWords.join(' ');
}

function repeat(n, x)
{
    const result = [];

    for ( let i = 0; i !== n; ++i )
    {
        result.push(x);
    }

    return result;
}

function repeat_array(n, xs)
{
    const result = [];

    for ( let i = 0; i !== n; ++i )
    {
        const copy = [...xs];
        result.push(copy);
    }

    return result;
}

function distribute(xs, n)
{
    const result = repeat_array(n, []);

    for ( let i = 0; i !== xs.length; ++i )
    {
        result[i % n].push(xs[i]);
    }

    return result;
}

function create_empty_page_row(width)
{
    return repeat(width, ' ');
}

function create_empty_page(width, height)
{
    const empty_row = create_empty_page_row(width);

    return repeat_array(height, empty_row);
}

function center(pageWidth, lines)
{
    const pageHeight = lines.length;
    const page = create_empty_page(pageWidth, pageHeight);

    for ( let i = 0; i !== pageHeight; ++i )
    {
        const line = lines[i];
        const margin = Math.floor((pageWidth - line.length) / 2);

        for ( let j = 0; j !== line.length; ++j )
        {
            page[i][j + margin] = line[j];
        }
    }

    return page;
}

function mask(string)
{
    if ( string.length === 0 )
    {
        return '';
    }

    const first = string.slice(0, 1);
    const rest = string.slice(1);
    const maskedRest = mask(rest);

    if ( first === ' ' )
    {
        return ` ${maskedRest}`;
    }
    else
    {
        return `*${maskedRest}`;
    }
}