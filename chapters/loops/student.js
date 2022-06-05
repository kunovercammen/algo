function sum(n) {
    let acc = 0;
    let i = 1;
    while (i <= n) {
        acc += i;
        i++;
    }
    return acc;
}

function sumRange(from, to) {
    let total = 0;
    let i = from;
    while (i <= to) {
        total += i;
        i++;
    }
    return total;
}

function factorial(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

function multiply(a, b) {
    let result = 0;
    while (a > 0) {
        result += b;
        a--;
    }
    return result;
}

function power(a, b) {
    let result = 1;
    while (b > 0) {
        result *= a;
        b--;
    }
    return result;
}

function thanos(population, target) {
    let count = 0;
    while (population > target) {
        population = Math.ceil(population / 2);
        count++;
    }
    return count;
}

function amazon(n) {
    let a = 50;
    let b = 50;
    while (n > 0) {
        const nextA = b * 0.95;
        const nextB = a * 1.1;
        a = nextA;
        b = nextB;
        n--;
    }
    return b;
}

function digitSum(n) {
    let acc = 0;
    while (n > 0) {
        acc += lastDigit(n);
        n = removeLastDigit(n);
    }
    return acc;
}

function lastDigit(n) {
    return n % 10;
}

function removeLastDigit(n) {
    return Math.floor(n / 10);
}

function divisibleBy3(n) {
    while (n > 10) {
        n = digitSum(n);
    }
    return n === 0 || n === 3 || n === 6 || n === 9;
}

function sum2(n) {
    let result = 0;

    for (let index = n; index > 0; index--) {
        result += index;
        
    }

    return result;
}

function factorial2(n) {
    let result = 1;

    for (let i = n; i > 1; i--) {
        result *= i;
        
    }

    return result;
}

function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; ++i) {
        const next = a + b;
        a = b;
        b = next;
    }
    return a;
}

function countDivisors(n) {
    let result = 0;

    for (let index = 1; index <= n; index++) {
        if (n % index === 0) {
            result++;
        }
        
    }
    return result;

}

function gcd(x, y) {
    const start = Math.min(x, y);
    for (let i = start; i > 1; --i) {
        if (isDivisorOf(i, x) && isDivisorOf(i, y)) {
            return i;
        }
    }
    return 1;
}

function isDivisorOf(x, y) {
    return y % x === 0;
}

function lcm(x, y) {
    let i = Math.max(x, y);
    while (!(isDivisorOf(x, i) && isDivisorOf(y, i))) {
        ++i;
    }
    return i;
}

function dice2(targetSum) {
    let count = 0;
    for (let i = 1; i <= 6; ++i) {
        for (let j = 1; j <= 6; ++j) {
            if (i + j === targetSum) {
                count++;
            }
        }
    }
    return count;
}

function dice3(targetSum) {
    let count = 0;
    for (let i = 1; i <= 6; ++i) {
        for (let j = 1; j <= 6; ++j) {
            for (let k = 1; k <= 6; ++k) {
                if (i + j + k === targetSum) {
                    count++;
                }
            }
        }
    }
    return count;
}

function isPrime(n) {
    for (let i = 2; i < n; ++i) {
        if (isDivisorOf(i, n)) {
            return false;
        }
    }
    return n > 1;
}

function countPrimes(n) {
    let result = 0;
    for (let i = 0; i <= n; ++i) {
        if (isPrime(i)) {
            result++;
        }
    }
    return result;
}

function power2(a, b) {
    let result = 1;
    for (let i = 0; i < b; ++i) {
        result *= a;
    }
    return result;
}

function sumRange2(from, to) {
    let total = 0;
    for (let i = from; i <= to; ++i) {
        total += i;
    }
    return total;
}

function invest(years) {
    let result = 1000;

    for (let i = 0; i < years ; i++) {
        result *= 1.05;
        result += 100;
    }

    return result;
}

function invest2(goal) {
    let amount = 1000;
    let years = 0;
    while (amount < goal) {
        amount *= 1.05;
        amount += 100;
        ++years;
    }
    return years;
}

function dice4(targetSum) {
    let count = 0;
    for (let i = 1; i <= 6; ++i) {
        for (let j = 1; j <= 6; ++j) {
            for (let k = 1; k <= 6; ++k) {
                for (let m = 1; m <= 6; ++m) {
                    if (i + j + k + m === targetSum) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

function sqrt(n) {
    let min = 0;
    let max = n;
    while (max - min > 0.01) {
        const middle = (min + max) / 2;
        if (middle ** 2 > n) {
            max = middle;
        } else if (middle ** 2 < n) {
            min = middle;
        } else {
            return middle;
        }
    }
    return (min + max) / 2;
}