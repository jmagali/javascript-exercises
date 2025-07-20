const sumAll = function(a, b) {

    if ((a < 0 || b < 0) 
        || !(Number.isInteger(a) && Number.isInteger(b)) 
        || (typeof a !== "number" && typeof b !== "number")) {
        return "ERROR";
    }

    let sum = 0;

    if (a > b) {
        max = a;
        min = b;
    }
    else {
        max = b;
        min = a;
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
