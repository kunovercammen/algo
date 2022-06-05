function first (xs) {
    return xs[0];
}

function last(xs) {
    return xs[xs.length - 1];
}

function sum(ns) {
    let result = 0;

    for (let index = 0; index < ns.length; index++) {
        result += ns[index];
        
    }
    return result;
}

function contains(value, xs) {
    for (let i = 0; i < xs.length; i++) {
        if(xs[i] === value) {
            return true;
        }
    }
    return false;
}

function all(bs) {
    for (let i = 0; i < bs.length; i++) {
        if ( bs[i] !== true) {
            return false;
        }
    }
    return true;
}

function any(bs) {
    for (let i = 0; i < bs.length; i++) {
        if ( bs[i] === true) {
            return true;
        }
    }
    return false;
}

function repeat (n, x) {
    let result = new Array(n)

    for (let i = 0; i < result.length; i++) {
        result[i] = x;
    }
    return result;
}

function range(from, to) {
    if (to < from) {
        return [];
    } else {
        const length = to - from + 1;
        const result = new Array(length);
        for (let i = 0; i !== length; ++i) {
            result[i] = from + i;
        }
        return result;
    }
}

function incrementEach(ns) {
    for (let index = 0; index < ns.length; index++) {
        ns[index] += 1;
    
}
}

function clamp(ns, min, max) {

    for (let index = 0; index < ns.length; index++) {
        if (ns[index] < min) {
            ns[index] = min;
        } else if (ns[index]> max) {
            ns[index] = max;
        }
    
    }
}

function trimZeros(ns) {
    while (ns.length > 0 && ns[0] === 0) {
        ns.shift();
    }
    while (ns.length > 0 && last(ns) === 0) {
        ns.pop();
    }
}

function cut(xs, size) {
    while (xs.length > size) {
        xs.pop();
    }
}

function repeat2(n, xs) {
    let result = [];
    for (let i = 0; i !== n; i++) {
        result = [...result, ...xs];
    }
    return result;
}

function count(value, xs) {
    let result = 0;
    for (let i = 0; i !== xs.length; ++i) {
        if (xs[i] === value) {
            result++;
        }
    }
    return result;
}

function minimum(ns) {
    let result = Number.POSITIVE_INFINITY;
    for (let i = 0; i !== ns.length; i++) {
        if (result > ns[i]) {
            result = ns[i];
        }
    }
    return result;
}

function allEqual(xs) {
    for (let i = 1; i < xs.length; ++i) {
        if (xs[i] !== xs[0]) {
            return false;
        }
    }
    return true;
}

function allDifferent(xs) {
    for (let i = 0; i !== xs.length; ++i) {
        for (let j = i + 1; j < xs.length; ++j) {
            if (xs[i] === xs[j]) {
                return false;
            }
        }
    }
    return true;
}

function missingNumber(ns) {
    for (let i = 0; i < ns.length - 1; i++) {
        if (ns[i] + 1 !== ns[i + 1]) {
            return ns[i] + 1;
        }
    }
    return 0;
}

function restaurant(entrees, mainCourses, desserts, budget) {
    let selection = [0, 0, 0];
    let selectionSum = 0;
    for (const papi738 of entrees) {
        for (const mainCourse of mainCourses) {
            for (const dessert of desserts) {
                const sum = papi738 + mainCourse + dessert;
                if (selectionSum < sum && sum <= budget) {
                    selection = [papi738, mainCourse, dessert];
                    selectionSum = sum;
                }
            }
        }
    }
    return selection;
}

function indexOf(xs, x) {
    for (let i = 0; i !== xs.length; ++i) {
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(xs, x) {
    for (let i = xs.length - 1; i >= 0; --i) {
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}

function maximum(ns) {
    let result = Number.NEGATIVE_INFINITY;
    for (let i = 0; i !== ns.length; i++) {
        if (result < ns[i]) {
            result = ns[i];
        }
    }
    return result;
}

function smallJumps(ns) {
    for (let i = 1; i < ns.length; ++i) {
        if (Math.abs(ns[i] - ns[i - 1]) > 1) {
            return false;
        }
    }
    return true;
}

function reverse(xs) {
    const result = [];
    for (const x of xs) {
        result.unshift(x);
    }
    return result;
}

function reverseInPlace(xs) {
    for (let i = 0; i < xs.length / 2; ++i) {
        const j = xs.length - i - 1;
        const temp = xs[i];
        xs[i] = xs[j];
        xs[j] = temp;
    }
}

function isPalindrome(xs) {
    let i = 0;
    let j = xs.length - 1;
    while (i < j) {
        if (xs[i] !== xs[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function equalArrays(xs, ys) {
    if (xs.length !== ys.length) {
        return false;
    } else {
        for (let i = 0; i !== xs.length; ++i) {
            if (xs[i] !== ys[i]) {
                return false;
            }
        }
        return true;
    }
}

function isPermutation(xs, ys) {
    if (xs.length !== ys.length) {
        return false;
    } else {
        const used = repeat(xs.length, false);
        for (let i = 0; i !== xs.length; ++i) {
            let found = false;
            let j = 0;
            while (!found && j !== ys.length) {
                if (!used[j] && xs[i] === ys[j]) {
                    used[j] = true;
                    found = true;
                } else {
                    ++j;
                }
            }
            if (!found) {
                return false;
            }
        }
        return true;
    }
}

function repeat(n, x) {
    const result = new Array(n);
    for (let i = 0; i !== n; ++i) {
        result[i] = x;
    }
    return result;
}

function removeRuns(xs) {
    if (xs.length === 0) {
        return [];
    } else {
        const result = [xs[0]];
        for (let i = 1; i < xs.length; ++i) {
            if (xs[i - 1] !== xs[i]) {
                result.push(xs[i]);
            }
        }
        return result;
    }
}

function removeRunsInPlace(xs) {
    let i = 0;
    while (i < xs.length) {
        let j = i + 1;
        while (xs[i] === xs[j] && j < xs.length) {
            ++j;
        }
        xs.splice(i, j - i, xs[i]);
        ++i;
    }
}

function mostFrequent(xs) {
    const cs = counts(xs);
    const maxCount = Math.max(...cs);
    return findWithCount(xs, maxCount);
}

function count(value, xs) {
    let result = 0;
    for (const x of xs) {
        if (x === value) {
            result++;
        }
    }
    return result;
}

function counts(xs) {
    const result = [];
    for (const x of xs) {
        const xCount = count(x, xs);
        result.push(xCount);
    }
    return result;
}

function findWithCount(xs, targetCount) {
    for (const x of xs) {
        if (count(x, xs) === targetCount) {
            return x;
        }
    }
    return undefined;
}

function mostFrequent2(xs) {
    const cs = counts(xs);
    const maxCount = Math.max(...cs);
    return findWithCount(xs, maxCount);
}

function counts(xs) {
    const result = [];
    for (const x of xs) {
        const xCount = count(x, xs);
        result.push(xCount);
    }
    return result;
}

function findWithCount(xs, targetCount) {
    const result = [];
    for (const x of xs) {
        if (!result.includes(x) && count(x, xs) === targetCount) {
            result.push(x);
        }
    }
    return result;
}

function count(value, xs) {
    let result = 0;
    for (const x of xs) {
        if (x === value) {
            result++;
        }
    }
    return result;
}

function isIncreasing(ns) {
    for (let i = 1; i < ns.length; ++i) {
        if (ns[i - 1] > ns[i]) {
            return false;
        }
    }
    return true;
}

function isDecreasing(ns) {
    for (let i = 1; i < ns.length; ++i) {
        if (ns[i - 1] < ns[i]) {
            return false;
        }
    }
    return true;
}

function missingNumber2(ns) {
    const first = minimum(ns);
    const last = maximum(ns);
    let expectedTotal = sum(range(first, last));
    let actualTotal = sum(ns);
    return expectedTotal - actualTotal;
}

function minimum(ns) {
    let result = Number.POSITIVE_INFINITY;
    for (let n of ns) {
        if (result > n) {
            result = n;
        }
    }
    return result;
}

function maximum(ns) {
    let result = Number.NEGATIVE_INFINITY;
    for (let n of ns) {
        if (result < n) {
            result = n;
        }
    }
    return result;
}

function sum(ns) {
    let total = 0;
    for (let i = 0; i !== ns.length; ++i) {
        total += ns[i];
    }
    return total;
}

function range(from, to) {
    if (to < from) {
        return [];
    } else {
        const length = to - from + 1;
        const result = new Array(length);
        for (let i = 0; i !== length; ++i) {
            result[i] = from + i;
        }
        return result;
    }
}

function longestIncreasingSubsequence(ns) {
    if (ns.length === 0) {
        return [];
    } else {
        let current = [ns[0]];
        let longest = current;
        for (let i = 1; i < ns.length; ++i) {
            const n = ns[i];
            if (last(current) <= n) {
                current.push(n);
                if (current.length > longest.length) {
                    longest = current;
                }
            } else {
                current = [n];
            }
        }
        return longest;
    }
}

function last(xs) {
    return xs[xs.length - 1];
}

function uniq(xs) {
    const result = [];
    const used = repeat(xs.length, false);
    for (let i = 0; i !== xs.length; ++i) {
        if (!used[i]) {
            result.push(xs[i]);
            used[i] = true;
            for (let j = i + 1; j < xs.length; ++j) {
                if (xs[j] === xs[i]) {
                    used[j] = true;
                }
            }
        }
    }
    return result;
}

function repeat(n, x) {
    const result = new Array(n);
    for (let i = 0; i !== n; ++i) {
        result[i] = x;
    }
    return result;
}

function uniqInPlace(xs) {
    for (let i = 0; i < xs.length; ++i) {
        for (let j = xs.length - 1; j > i; --j) {
            if (xs[j] === xs[i]) {
                xs.splice(j, 1);
            }
        }
    }
}

function mastermind(xs, ys) {
    const usedXs = repeat(xs.length, false);
    const usedYs = repeat(xs.length, false);
    let placedCorrectly = 0;
    let placedIncorrectly = 0;
    for (let i = 0; i !== xs.length; ++i) {
        if (xs[i] === ys[i]) {
            ++placedCorrectly;
            usedXs[i] = true;
            usedYs[i] = true;
        }
    }
    for (let i = 0; i !== xs.length; ++i) {
        if (!usedXs[i]) {
            let found = false;
            let j = 0;
            while (j !== ys.length && !found) {
                if (!usedYs[j] && xs[i] === ys[j]) {
                    placedIncorrectly++;
                    usedXs[i] = true;
                    usedYs[j] = true;
                    found = true;
                }
                ++j;
            }
        }
    }
    return [placedCorrectly, placedIncorrectly];
}

function repeat(n, x) {
    const result = new Array(n);
    for (let i = 0; i !== n; ++i) {
        result[i] = x;
    }
    return result;
}

function isSubsequenceOf(xs, ys) {
    let i = 0;
    let j = 0;
    while (i < xs.length && j < ys.length) {
        if (xs[i] === ys[j]) {
            ++i;
        }
        ++j;
    }
    return i == xs.length;
}

function countTurns(ns) {
    if (ns.length < 3) {
        return 0;
    } else {
        const ds = deltas(ns);
        let lastSign = Math.sign(ds[0]);
        let count = 0;
        for (let i = 1; i < ds.length; ++i) {
            const sign = Math.sign(ds[i]);
            if (sign !== 0 && sign !== lastSign) {
                count++;
                lastSign = sign;
            }
        }
        return count;
    }
}

function deltas(ns) {
    const result = new Array(ns.length - 1);
    for (let i = 1; i !== ns.length; ++i) {
        result[i - 1] = ns[i] - ns[i - 1];
    }
    return result;
}

function removeLastOfEach(ns) {
    const result = [];
    for (let i = 0; i !== ns.length; ++i) {
        if (ns.slice(i + 1).includes(ns[i])) {
            result.push(ns[i]);
        }
    }
    return result;
}

function common(ks, ns) {
    const result = [];
    ns = [...ns];
    for (const k of ks) {
        const index = indexOf(ns, k);
        if (index !== -1) {
            result.push(k);
            ns = dropNth(ns, index);
        }
    }
    return result;
}

function indexOf(xs, x) {
    for (let i = 0; i !== xs.length; ++i) {
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}

function dropNth(xs, index) {
    return [...xs.slice(0, index), ...xs.slice(index + 1)];
}