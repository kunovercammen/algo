// Schrijf hier je code
function allPositive (ns) {
    for (let n of ns) {
        if ( n < 0) {
            return false;
        }
    }
    return true;
}

function allNegative(ns) {
    for (let n of ns) {
        if (n > 0) {
            return false;
        }
    }
    return true;
}

function allOdd(ns) {
    for (let n of ns) {
        if (n % 2 === 0) {
            return false;
        }
    }
    return true;
}

function isPositive(x) {
    if ( x > 0) {
        return true;
    }

    return false;
}

function allPositive2(ns) {
    return ns.every(isPositive);
}

function isNegative(x) {
    if ( x > 0) {
        return false;
    }

    return true;
}

function allNegative2(ns) {
    return ns.every(isNegative);
}

function isOdd(x) {
    if (x%2 === 0) {
        return false;
    }
    return true;
}

function allOdd2(ns) {
    return ns.every(isOdd);
}

function isZero(x) {
    if (x === 0) {
        return true;
    }
    return false;
}

function isRowZero (ns) {
    return ns.every(isZero);
}

function allZero(nss) {
    return nss.every(isRowZero);
}

function somePositive(ns) {
    return ns.some(isPositive);
}

function isSomeRowZero (ns) {
    return ns.some(isZero);
}

function someZero(nss) {
    return nss.some(isSomeRowZero);
}

function allEqualTo(xs, value) {
    return xs.every(equalToX);

    function equalToX(y) {
        return value === y;
    }
}

function contains (xs, value) {
return xs.some(equalToValue);

function equalToValue(y) {
    return value === y;
}
}

function contains2(xs, value) {
    return xs.some( y => value === y );
}

function isUpperBound(ns, k) {
    return ns.every(y => k>= y);
}

function maximum(ns) {
    return ns.find(k => isUpperBound(ns, k));
}

function allEqual(xs) {
    return xs.every(y => y === xs[0]);
}

function isSubset(xs, ys) {
    return xs.every(x => ys.includes(x));
}

function inflation(prices) {
    return prices.map(p => Math.round(1.1*p));
} 

function toSeconds(durations) {
    return durations.map(duration => duration[0]*3600 + duration[1]*60 + duration[2]);
}

function flipAll(xs) {
    return xs.map(pair => [pair[1], pair[0]]);
}

function toSeconds2(durations) {
    return durations.map(([h, m, s]) => h * 3600 + m * 60 + s);
}

function flipAll(xs) {
    return xs.map(([a,b]) => ([b,a]))
}

function findFirstPositive(ns) {
   return ns.find(x => x>0);
}

function findLastPositive(ns) {
    const kopie = [...ns];
    kopie.reverse();
    return kopie.find(x => x>0); 
}

function ranking(ns, n) {
    const index = ns.findIndex(k => n > k);
    if (index === -1) {
        return ns.length + 1;
    } else {
        return index + 1;
    }
}

function longestString(strings) {
    return [...strings].sort((s1, s2) => s2.length - s1.length)[0];
}

function countOccurrences(xs, value) {
    return xs.filter(x => x === value).length;
}

function findTriple(xs) {
    return xs.find(x => countOccurrences(xs, x) === 3);
}

function divisors(n) {
    return range(1, n).filter(k => n % k === 0);
}

function range(from, to) {
    const result = [];
    for (let i = from; i <= to; ++i) {
        result.push(i);
    }
    return result;
}

function isPrime(n) {
    return divisors(n).length == 2;
}

function divisors(n) {
    return range(1, n).filter(k => n % k === 0);
}

function primes(n) {
    return range(2, n).filter(isPrime);
}

function findImposter(bodyLocation, playerLocations) {
    playerLocations = [...playerLocations];
    playerLocations.sort(([p1, x1, y1], [p2, x2, y2]) => distance([x1, y1], bodyLocation) - distance([x2, y2], bodyLocation));
    return playerLocations[0][0];
}

function distance(p, q) {
    const [x1, y1] = p;
    const [x2, y2] = q;
    const dx = x2 - x1;
    const dy = y2 - y1;
    return (dx ** 2 + dy ** 2) ** 0.5;
}

function zip(xs, ys) {
    return range(0, xs.length - 1).map(i => [xs[i], ys[i]]);
}

function allDifferent(xs) {
    const indices = range(0, xs.length - 1);
    return indices.every(i => indices.every(j => i === j || xs[i] !== xs[j]));
}

function isSumPossible(ns, target) {
    if (target < 0) {
        return false;
    }
    if (target === 0) {
        return true;
    }
    return ns.some(n => isSumPossible(ns, target - n));
}

function isSumPossible2(ns, target) {
    return target === 0 || range(0, ns.length).some(i => isSumPossible2(ns.slice(i + 1), target - ns[i]));


function range(from, to) {
    const result = [];
    for (let i = from; i < to; ++i) {
        result.push(i);
    }
    return result;
}
}

function isbn10(code) {
    const digits = [...code].filter(c => c !== '-').map(c => parseInt(c));
    const weights = range(0, 9).map(i => 10 - i);
    const pairs = zip(digits, weights);
    const products = pairs.map(([x, y]) => x * y);
    const productsSum = sum(products);
    return productsSum % 11 === 0;
}

function range(from, to) {
    const result = [];
    for (let i = from; i <= to; ++i) {
        result.push(i);
    }
    return result;
}

function zip(xs, ys) {
    return range(0, xs.length - 1).map(i => [xs[i], ys[i]]);
}

function sum(ns) {
    let result = 0;
    for (const n of ns) {
        result += n;
    }
    return result;
}