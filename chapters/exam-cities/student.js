// Schrijf hier je code
function isValidDistanceMatrix(nss) {
    if (nss.length === 0) {
        return false
    }

    for (let ns of nss) {
        if (ns.length !== nss.length) {
            return false;
        }
    }

    for ( let i = 0; i< nss.length; i++) {
        if (nss[i][i] !== 0) {
            return false;
        }
    }

    for (let j = 0; j < nss.length; j++) {
        for (let k = 0; k < nss.length; k++) {
            if (nss[j][k] !== nss[k][j]) {
                return false;
            }
        
        }
    }
    return true;
}

function distance(distances, cities, from, to) {
    const i = cities.indexOf(from);
    const j = cities.indexOf(to);
    if (i === -1 || j === -1) {
        return -1;
    } else {
        return distances[i][j];
    }
}

function areValidCities(cities, itinerary) {
    return itinerary.every(it=> cities.indexOf(it) !== -1);
}

function pairs (xs) {
  if (xs.length <= 1) {
      return [];
  }

  const [first, second, ...rest] = xs
  const pair = [first, second]
  const result = pairs([second, ...rest]);
  return [pair, ...result];
}

function isValidItinerary(distances, cities, itinerary) {
    if (areValidCities(cities, itinerary) !== true) {
        return false;
    }

    for (let index = 0; index < itinerary.length-1; index++) {
        if (distance(distances, cities, itinerary[index], itinerary[index+1]) === -1) {
            return false;
        }   
    }
    return true;
}

function totalDistance (distances, cities, itinerary) {
    if (isValidItinerary(distances,cities, itinerary) !== true) {
        return -1;
    }

    let afstand = 0;
    const paren = pairs(itinerary);
    for (let paar of paren) {
       afstand += distance(distances, cities, paar[0], paar[1])
    }
    return afstand;
}

function reachableFrom(distances, cities, from) {

   let result = {};

   for (let city of cities) {
       if (city !== from) {
           if (distance(distances,cities,from,city) !== -1) {
               result[city] = distance(distances,cities,from,city);
           }
       }
   }

   return result;
}

function copy(obj) {
    return {...obj};
}

function expand (distances, cities, itinerary) {
    if (cities.length <= 1) {
        return [];
    }

    
    let nieuwobject = copy(itinerary);
    const pad = itinerary.path
    const laatsteStad = pad[pad.length - 1]
    const bereikenSteden = reachableFrom(distances, cities, laatsteStad);
    
    
    nieuwobject.pad = ["a", bereikenSteden]
    nieuwobject.distance = 1;

    return nieuwobject;
    

}