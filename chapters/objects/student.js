// Schrijf hier je code
function getAge(person) {
    return person.age;
}

function bmi(person) {
    return Math.round((person.weight/(person.length/100)**2));
}

function paternalAncestor(person, n) {
    while (n > 0) {
        person = person.father;
        --n;
    }
    return person.name;
}

function substitute(xs, dictionary) {
    const result = new Array(xs.length);
    for (let i = 0; i !== xs.length; ++i) {
        result[i] = dictionary[xs[i]];
    }
    return result;
}

function cycle(obj, start) {
    const result = [start];
    let current = obj[start];
    while (current !== start) {
        result.push(current);
        current = obj[current];
    }
    return result;
}

//KEYS TERUGGEVEN OOK MET "Return Object.keys(obj)" MET KEYS IS GELIJK AAN DE FUNCTIENAAM

function keys(obj) {
    const result = [];
    for (const key in obj) {
        result.push(key);
    }
    return result;
}

//OBJECTS TERUGGEVEN OOK MET "Return Object.values(obj)" MET values IS GELIJK AAN DE FUNCTIENAAM

function values(obj) {
    const result = [];
    for (const key in obj) {
        const value = obj[key];
        result.push(value);
    }
    return result;
}

function fixedPoints(obj) {
    const result = [];
    for (const key in obj) {
        const value = obj[key];
        if (key === value) {
            result.push(key);
        }
    }
    return result;
}

function commonKeys(x, y) {
    const result = [];
    for (const key in x) {
        if (key in y) {
            result.push(key);
        }
    }
    return result;
}

function frequencies(xs) {
    const result = {};
    for (let x of xs) {
        if (!(x in result)) {
            result[x] = 0;
        }
        result[x]++;
    }
    return result;
}

//      function copy(obj) {
//          return {
//                  ...obj
//         };
//      }

function copy(obj) {
    const copy = {};
    for (const key in obj) {
        const value = obj[key];
        copy[key] = value;
    }
    return copy;
}

//function update(obj, key, value) {
//    return {
//        ...obj,
//        key: value
//    };
//}

function update(obj, key, value) {
    const result = copy(obj);
    result[key] = value;
    return result;
}

//function merge(x, y) {
//    return {
//        ...x,
//        ...y
//    };
//}

function merge(x, y) {
    const result = copy(x);
    for (const key in y) {
        const value = y[key];
        result[key] = value;
    }
    return result;
}

function findTranslation(xs, ys) {
    const result = {};
    for (let i = 0; i !== xs.length; ++i) {
        const x = xs[i];
        const y = ys[i];
        if (x in result) {
            if (result[x] !== y) {
                return undefined;
            }
        } else {
            result[x] = y;
        }
    }
    return result;
}

function containsCycle(obj, start) {
    const visited = [];
    let current = start;
    while (current !== undefined) {
        if (visited.includes(current)) {
            return true;
        }
        visited.push(current);
        current = obj[current];
    }
    return false;
}

function pairs(obj) {
    const result = [];
    for (let key in obj) {
        const value = obj[key];
        result.push([key, value]);
    }
    return result;
}

function isInvertible(obj) {
    const inv = {};
    for (const key of keys(obj)) {
        const value = obj[key];
        if (value in inv) {
            return false;
        } else {
            inv[value] = true;
        }
    }
    return true;
}

function reverseLookup(map, value) {
    for (const key in map) {
        const v = map[key];
        if (value === v) {
            return key;
        }
    }
    return '';
}

function reverseMap(map) {
    const result = {};
    for (const key in map) {
        const value = map[key];
        if (!(value in result)) {
            result[value] = [];
        }
        result[value].push(key);
    }
    return result;
}

function touches4(p, q) {
    const dx = Math.abs(p.x - q.x);
    const dy = Math.abs(p.y - q.y);
    return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
}

function touches8(p, q) {
    const dx = Math.abs(p.x - q.x);
    const dy = Math.abs(p.y - q.y);
    return (dx === 0 || dx === 1) && (dy === 0 || dy === 1) && (dx !== 0 || dy !== 0);
}

function intersection(x, y) {
    const result = {};
    for (const key in x) {
        if (key in y && x[key] === y[key]) {
            result[key] = x[key];
        }
    }
    return result;
}