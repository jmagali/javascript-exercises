const removeFromArray = function(arr, ...remove) {
    const result = [];

    for (item of arr) {
        if(!remove.includes(item)) {
            result.push(item);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
