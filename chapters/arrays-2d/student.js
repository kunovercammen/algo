// Schrijf hier je code
function longest(xss) {
    let result = [];
    for (let xs of xss) {
        if (xs.length > result.length) {
            result = xs;
        }
    }
    return result;
}

function flatten(xss) {
    let result = [];
    for (let xs of xss) {
        result = [...result, ...xs];
    }
    return result;
}

function zip(xs, ys) {
    const length = Math.min(xs.length, ys.length);
    const result = new Array(length);
    for (let i = 0; i !== length; ++i) {
        result[i] = [xs[i], ys[i]];
    }
    return result;
}

function orderedPairs(xs) {
    const result = new Array(xs.length ** 2);
    let index = 0;
    for (let i = 0; i !== xs.length; ++i) {
        for (let j = 0; j !== xs.length; ++j) {
            result[index] = [xs[i], xs[j]];
            index++;
        }
    }
    return result;
}

function unorderedPairs(xs) {
    const result = [];
    for (let i = 0; i !== xs.length; ++i) {
        for (let j = i + 1; j !== xs.length; ++j) {
            result.push([xs[i], xs[j]]);
        }
    }
    return result;
}   

function prefixes(xs) {
    const result = new Array(xs.length + 1);
    for (let i = 0; i !== result.length; ++i) {
        result[i] = xs.slice(0, i);
    }
    return result;
}

function pascal(n) {
    const result = new Array(n);
    result[0] = [1];
    for (let i = 1; i < n; ++i) {
        result[i] = nextRow(result[i - 1]);
    }
    return result;

    function nextRow(ns) {
        const result = new Array(ns.length + 1);
        ns = [0, ...ns, 0];
        for (let i = 0; i !== result.length; ++i) {
            result[i] = ns[i] + ns[i + 1];
        }
        return result;
    }
}

function intersection(xss) {
    if (xss.length === 0) {
        return [];
    } else {
        const result = [];
        const [first, ...rest] = xss;
        for (const x of first) {
            if (containedInEachOfRest(x)) {
                result.push(x);
            }
        }
        return result;

        function containedInEachOfRest(x) {
            for (const xs of rest) {
                if (!xs.includes(x)) {
                    return false;
                }
            }
            return true;
        }
    }
}

