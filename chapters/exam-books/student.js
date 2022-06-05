function titles(books) {
    if (books.length === 0) {
        return [];
    }

    let result = [];

    for( let book of books) {
        let titel = book.title;
        result.push(titel);
    }

    return result;
}

function titlesBetween(books, startYear, endYear) {
    let result = [];

    for (let book of books) {
        let titel = book.title;
        let datum = book.publicationYear;
        if (datum>= startYear && datum<= endYear) {
            result.push(titel);
        }
    }

    return result;
}


function bookCountBetween(books, startYear, endYear) {
    let result = 0;
    let aantalBoeken = titlesBetween(books, startYear, endYear)
    result = aantalBoeken.length;
    return result;
}

function jaren(books) {
    if (books.length === 0) {
        return [];
    }

    let result = [];

    for( let book of books) {
        let jaar = book.publicationYear;
        result.push(jaar);
    }

    return result;
}

function yearsActive(books) {
    let lijst = jaren(books);
    let jaartallen = [...lijst];

    return Math.max(...jaartallen) - Math.min(...jaartallen)+1;
}

function bookCountByAuthor(books) {
    let result = {};

    for (let book of books) {
        let auteur = book.author;
        if (!(auteur in result)) {
            result[auteur] = 1
        } else if (auteur in result) {
            result[auteur] += 1;
        }
    }

    return result;

}

function capitalizeWord(word){
    const first = word[0]
    const rest = word.slice(1)
    return `${first.toUpperCase()}${rest.toLowerCase()}`
}

function capitalizeTitle(title){
    const words = title.split(" ")
    const cap = words.map(capitalizeWord);
    return cap.join (" ");
}

function distribute(xs, n){
    const result = repeat_array(n, [])

    for (let i = 0; i < xs.length; i++){
        result[i % n].push(xs[i])
    }
    return result
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

function center (pageWidth, lines) {
    let result = []

    for (let i = 0; i < pageWidth; i++) {
        result.push(' '); //vult een array met aantal spaties gelijk aan pageWidth
    }
    result = repeat_array(lines.length, result);
    
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
           
            result[i][Math.floor((pageWidth - lines[i].length) / 2) + j] = lines[i][j];
            
        }
        
    }
    return result;
}

function mask(string){
    if (string.length === 0){
        return ""
    }
    const first = string.substr(0, 1)
    const rest = string.substr(1, string.length-1)
    const maskedrest = mask(rest)
    if (first === " "){
        return ` ${maskedrest}`
    }
    else {
        return `*${maskedrest}`
    }
}
