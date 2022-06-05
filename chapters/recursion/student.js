// Schrijf hier je code
function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function sum(ns) {
    if (ns.length === 0) {
        return 0;
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        return first + sum(rest);
    }
}

function minimum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        restMinimum = minimum(rest);
        
        if (first<restMinimum) {
            return first;
        } else {
            return restMinimum;
        }
    }
}

function maximum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const [first, ...rest] = ns;
        restMaximum = maximum(rest);

        if (first>restMaximum) {
            return first;
        } else {
            return restMaximum;
        }

    }
}

function isIncreasing(ns) {
    if (ns.length < 2) {
            return true;
    } else {
            const [first, second, ...rest] = ns;
            return first <= second && isIncreasing([second, ...rest]);
    }
}

function contains(xs, x) {
    if (xs.length === 0) {
        return false;
    } else {
        const [first, ...rest] = xs;
        return first === x || contains(rest, x);
    }
}

function allPositive(ns) {
    if (ns.length === 0) {
        return true;
    } else {
        const [first, ...rest] = ns;
        return first > 0 && allPositive(rest);
    }
}

function count(xs, x) {
    if (xs.length === 0) {
        return 0;
    } else {
        const [first, ...rest] = xs;
        const countInRest = count(rest, x);
        if (x === first) {
            return countInRest + 1;
        } else {
            return countInRest;
        }
    }
}

function repeat(n, x) {
    if (n === 0) {
        return [];
    } else {
        return [x, ...repeat(n - 1, x)];
    }
}

function range(from, to) {
    if (from>to) {
        return [];
    } else {

        return [from, ...range(from+1, to)]
    }
}

function indexOf(xs, x) {
    if (xs[0] === x) {
        return 0;
    } else {
        return indexOf(xs.slice(1), x) + 1;
    }
}

function replaceAt(xs, index, x) {
    if (index === 0) {
        const rest = xs.slice(1);
        return [x, ...rest];
    } else {
        const [first, ...rest] = xs;
        const replacedRest = replaceAt(rest, index - 1, x);
        return [first, ...replacedRest];
    }
}

function equalArrays(xs, ys) {
    if (xs.length === 0) {
        return ys.length === 0;
    } else if (ys.length === 0) {
        return false;
    } else {
        return xs[0] === ys[0] && equalArrays(xs.slice(1), ys.slice(1));
    }
}

function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    } else {
        const first = string[0];
        const last = string[string.length - 1];
        if (first === last) {
            const middle = string.slice(1, string.length - 1);
            return isPalindrome(middle);
        } else {
            return false;
        }
    }
}

function startsWith(beginning, string) {
    if (beginning.length === 0) {
        return true;
    } else if (string.length === 0) {
        return false;
    } else {
        return beginning[0] === string[0] && startsWith(beginning.substring(1), string.substring(1));
    }
}

function endsWith(ending, string) {
    if (ending.length === 0) {
        return true;
    } else if (string.length === 0) {
        return false;
    } else {
        return lastChar(ending) === lastChar(string) && endsWith(dropLastChar(ending), dropLastChar(string));
    }

    function lastChar(s) {
        return s[s.length - 1];
    }

    function dropLastChar(s) {
        return s.substring(0, s.length - 1);
    }
}

function isSubstring(sub, string) {
    if (string.length === 0) {
        return sub.length === 0;
    } else {
        return startsWith(sub, string) || isSubstring(sub, string.substring(1));
    }
}

function trimLeft(string) {
    if (string.length === 0) {
        return "";
    } else if (string[0] === ' ') {
        return trimLeft(string.substring(1));
    } else {
        return string;
    }
}

function trimRight(string) {
    if (string.length === 0) {
        return "";
    } else if (string[string.length - 1] === ' ') {
        return trimRight(string.substring(0, string.length - 1));
    } else {
        return string;
    }
}

function incrementAll(ns) {
    if (ns.length === 0) {
        return [];
    } else {
        const [first, ...rest] = ns;
        const incrementedFirst = first + 1;
        const incrementedRest = incrementAll(rest);
        return [incrementedFirst, ...incrementedRest];
    }
}

function reverse(xs) {
    if (xs.length <= 1) {
        return xs;
    } else {
        const [eerste, ...rest] = xs;
        const restReversed = reverse(rest);
        return [...restReversed, eerste];
    }
}

function isSubsequenceOf(xs, ys) {
    if (xs.length === 0) {
        return true;
    } else if (ys.length === 0) {
        return false;
    } else {
        if (xs[0] === ys[0]) {
            return isSubsequenceOf(xs.slice(1), ys.slice(1));
        } else {
            return isSubsequenceOf(xs, ys.slice(1));
        }
    }
}

function canMakeSum(ns, target) {
    if (target === 0) {
        return true;
    } else if (ns.length === 0) {
        return false;
    } else {
        const [first, ...rest] = ns;
        return canMakeSum(rest, target) || canMakeSum(rest, target - first);
    }
}

function countSumCombinations(ns, target) {
    if (target === 0) {
        return 1;
    } else if (ns.length === 0) {
        return 0;
    } else {
        const [first, ...rest] = ns;
        return countSumCombinations(rest, target) + countSumCombinations(rest, target - first);
    }
}

function blackjack(cards) {
    return aux(0, cards);

    function aux(acc, cards) {
        if (acc > 21) {
            return 0;
        } else if (cards.length === 0) {
            return acc;
        } else {
            const [first, ...rest] = cards;
            if (first === 1) {
                const asOne = aux(acc + 1, rest);
                const asEleven = aux(acc + 11, rest);
                return Math.max(asOne, asEleven);
            } else {
                return aux(acc + first, rest);
            }
        }
    }
}

function dice(nDice, targetSum) {
    if (nDice === 0) {
        if (targetSum === 0) {
            return 1;
        } else {
            return 0;
        }
    } else {
        let result = 0;
        for (let i = 1; i <= 6; ++i) {
            result += dice(nDice - 1, targetSum - i);
        }
        return result;
    }
}

function split(string, separator) {
    return aux(string, [], '');

    function aux(string, words, currentWord) {
        if (string.length === 0) {
            return [...words, currentWord];
        } else if (string[0] === separator) {
            return aux(string.substring(1), [...words, currentWord], '');
        } else {
            return aux(string.substring(1), words, `${currentWord}${string[0]}`);
        }
    }
}

function removeFirst(xs, x) {
    if (xs.length === 0) {
        return [];
    } else {
        const [first, ...rest] = xs;
        if (first === x) {
            return rest;
        } else {
            return [first, ...removeFirst(rest, x)];
        }
    }
}

function remove(xs, x) {
    if (xs.length === 0) {
        return [];
    } else {
        const [first, ...rest] = xs;
        const removedRest = remove(rest, x);
        if (first === x) {
            return removedRest;
        } else {
            return [first, ...removedRest];
        }
    }
}

function isPermutation(xs, ys) {
    if (xs.length === 0) {
        return ys.length === 0;
    } else {
        const [first, ...rest] = xs;
        return contains(ys, first) && isPermutation(rest, removeFirst(ys, first));
    }
}

function uniq(xs) {
    if (xs.length === 0) {
        return [];
    } else {
        const [first, ...rest] = xs;
        return [first, ...uniq(remove(rest, first))];
    }
}

function googleKnight(start, n) {
    const reachable = {
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [3, 9, 0],
        5: [],
        6: [1, 7, 0],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
        0: [4, 6],
    };
    return aux(start, n);

    function aux(position, n) {
        if (n === 0) {
            return 1;
        } else {
            let result = 0;
            for (const to of reachable[position]) {
                result += aux(to, n - 1);
            }
            return result;
        }
    }
}

function longestIncreasingSubsequence(ns) {
    return aux(Number.NEGATIVE_INFINITY, ns);

    function aux(n, ns) {
        if (ns.length === 0) {
            return [];
        } else {
            const [first, ...rest] = ns;
            const withoutFirst = aux(n, rest);
            const withFirst = first >= n ? [first, ...aux(first, rest)] : [];
            if (withoutFirst.length > withFirst.length) {
                return withoutFirst;
            } else {
                return withFirst;
            }
        }
    }
}