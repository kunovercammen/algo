// Schrijf hier je code
function firstChar(string) {
    return string[0];
}

function lastChar(string) {
    return string[string.length - 1];
}

function isEmptyString(string) {
    return string.length === 0;
}

function formatTime(h, m, s, ms) {
    return `${h}:${m}:${s}.${ms}`;
}

function repeat(n, string) {
    let result = '';
    while (n > 0) {
        result = `${result}${string}`;
        n--;
    }
    return result;
}

function join(strings, separator) {
    let result = '';
    let isFirst = true;
    for (let string of strings) {
        if (isFirst) {
            result += string;
            isFirst = false;
        } else {
            result += separator + string;
        }
    }
    return result;
}

function prefix(str, n) {
    return str.substring(0,n);
}

function suffix (str, n) {
    return str.substring(str.length-n);
}

function startsWith(beginning, string) {
    return prefix(string, beginning.length) === beginning;
}

function endsWith(ending, string) {
    return suffix(string, ending.length) === ending;
}

function isSubstringOf(substring, string) {
    if (substring === '') {
        return true;
    }
    for (let i = 0; i !== string.length; ++i) {
        if (startsWith(substring, string.substring(i))) {
            return true;
        }
    }
    return false;
}

function split(string, separator) {
    let result = [];
    let currentWord = '';
    for (let char of string) {
        if (isSeparator(char)) {
            finishWord();
        } else {
            addToCurrentWord(char);
        }
    }
    finishWord();
    return result;

    function isSeparator(char) {
        return char === separator;
    }

    function finishWord() {
        result.push(currentWord);
        currentWord = '';
    }

    function addToCurrentWord(char) {
        currentWord += char;
    }
}

function split2(string, separator) {
    let result = [];
    let currentWord = '';
    for (let char of string) {
        if (isSeparator(char)) {
            finishWord();
        } else {
            addToCurrentWord(char);
        }
    }
    finishWord();
    return result;

    function isSeparator(char) {
        return char === separator;
    }

    function finishWord() {
        if (currentWord.length > 0) {
            result.push(currentWord);
            currentWord = '';
        }
    }

    function addToCurrentWord(char) {
        currentWord += char;
    }
}

function split3(string, separators) {
    let result = [];
    let currentWord = '';
    for (let char of string) {
        if (isSeparator(char)) {
            finishWord();
        } else {
            addToCurrentWord(char);
        }
    }
    finishWord();
    return result;

    function isSeparator(char) {
        for (let separator of separators) {
            if (char === separator) {
                return true;
            }
        }
        return false;
    }

    function finishWord() {
        if (currentWord.length > 0) {
            result.push(currentWord);
            currentWord = '';
        }
    }

    function addToCurrentWord(char) {
        currentWord += char;
    }
}

function balanced(string) {
    let count = 0;
    for (let char of string) {
        if (char === '(') {
            ++count;
        } else if (char === ')') {
            if (count === 0) {
                return false;
            } else {
                count--;
            }
        }
    }
    return count === 0;
}

function equalIgnoringSpaces(s1, s2) {
    return removeSpaces(s1) === removeSpaces(s2);
}

function removeSpaces(str) {
    let withoutSpaces = '';
    for (const char of str) {
        if (char !== ' ') {
            withoutSpaces += char;
        }
    }
    return withoutSpaces;
}

function lines(string) {
    return string.split('\n');
}

function padLeft(string, minimalLength, padding) {
    while (string.length < minimalLength) {
        string = `${padding}${string}`;
    }
    return string;
}

function formatTime2(h, m, s, ms) {
    return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}.${pad(ms, 3)}`;

    function pad(n, length) {
        return padLeft(`${n}`, length, '0');
    }
}

function mergeSpaces(string) {
    let result = '';
    for (let char of string) {
        if (isSpace(char)) {
            if (isEmptyString(result) || !isSpace(lastChar(result))) {
                result += char;
            }
        } else {
            result += char;
        }
    }
    return result;

    function isSpace(char) {
        return char === ' ';
    }
}

function reverse(string) {
    let result = '';
    for (let char of string) {
        result = `${char}${result}`;
    }
    return result;
}

function trimRight(string) {
    let i = string.length;
    while (i > 0 && string[i - 1] === ' ') {
        i--;
    }
    return prefix(string, i);
}

function trimLeft(string) {
    return reverse(trimRight(reverse(string)));
}

function trim(string) {
    return trimLeft(trimRight(string));
}

function toLowerCase(char) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i !== uppercase.length; ++i) {
        if (uppercase[i] === char) {
            return lowercase[i];
        }
    }
    return char;
}

function toUpperCase(char) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i !== uppercase.length; ++i) {
        if (lowercase[i] === char) {
            return uppercase[i];
        }
    }
    return char;
}

function fromAlphabetIndex(n) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[n];
}

function toAlphabetIndex(char) {
    const alphabetSize = 26;
    char = toUpperCase(char);
    for (let i = 0; i !== alphabetSize; ++i) {
        if (fromAlphabetIndex(i) === char) {
            return i;
        }
    }
    return k;
}

function caesarEncode(string, n) {
    let result = '';
    for (let char of string) {
        result += shift(char);
    }
    return result;

    function shift(char) {
        const index = toAlphabetIndex(char);
        if (index === -1) {
            return char;
        } else {
            const shiftedIndex = ((index + n) % 26 + 26) % 26;
            return fromAlphabetIndex(shiftedIndex);
        }
    }
}

function caesarDecode(string, n) {
    return caesarEncode(string, -n);
}

function matchingParentheses(string) {
    const result = new Array(string.length);
    const stack = [];
    for (let i = 0; i !== string.length; ++i) {
        const c = string[i];
        if (c === '(') {
            stack.push(i);
        } else if (c === ')') {
            const j = stack.pop();
            result[i] = j;
            result[j] = i;
        } else {
            result[i] = -1;
        }
    }
    return result;
}