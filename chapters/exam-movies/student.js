// Schrijf hier je code
function actorCount(movie) {
    return (movie.actors).length;
}

function formatTime(runtime) {
    const aantalUur = Math.floor(runtime / 60);
    const aantalMinuten = runtime % 60;

    if (runtime < 60) {
        return `${aantalMinuten}min`;
    } else {
    return `${aantalUur}h ${aantalMinuten}min`;
    } 
}

function moviesWithActor(movies, actor) {
    let result = [];



    for (let movie of movies) {
        let lijst = movie.actors;
        let naam = movie.title
        if (lijst.indexOf(actor) !== -1) {
            result.push(naam);
        }
    }

    return result;
}

function directors(movies) {
    let result = [];

    if (movies.length === 0) {
        return result;
    }

    for (let movie of movies) {
        let regisseur = movie.director;
        if (result.indexOf(regisseur) === -1) {
            result.push(regisseur);
        }
    }
    return result;
}

function actors(movies) {
    let result = [];

    if (movies.length === 0) {
        return result;
    }

    for (let movie of movies) {
        let lijst = movie.actors
        for (let i = 0; i < lijst.length; i++) {
            if (result.indexOf(lijst[i]) === -1) {
                result.push(lijst[i]);
            }
            
        }
    }
    return result;
}

function moviesByActor(movies) {
    let result = {}
    let lijst = actors(movies);

    for (let acteur of lijst) {
        let filmlijst = [];
        for (let movie of movies) {
            if (movie.actors.indexOf(acteur) !== -1) {
                filmlijst.push(movie.title);
            }
        }
        result[acteur] = filmlijst;
    }

    return result;
}

function actorWithMostMovies(movies) {
    let  besteacteur = "";
    let hoogste = 0;
    let lijst = moviesByActor(movies);

    for (let key in lijst) {
        if (lijst[key].length > hoogste) {
            besteacteur =  key;
            hoogste = lijst[key].length;
        }
    }
    return besteacteur;
}

function totalMinutesDirected(movies) {
    let result = {};
    let lijst = directors(movies);

    for (let regisseur of lijst) {
        let speeltijd = 0
        for (let movie of movies) {
            if (movie.director.indexOf(regisseur) !== -1) {
                speeltijd += movie.runtime;    
            }
        }
        result[regisseur] = speeltijd;
    }

    return result;
}