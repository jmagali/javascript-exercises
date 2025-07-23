const palindromes = function (string) {
    const valid = "abcdefghijklmnopqrstuvwxyz0123456789";

    const validStr = string
    .toLowerCase()
    .split("")
    .filter(char => valid.includes(char))
    .join("");

    const reverseStr = validStr.split("").reverse().join("");

    if (reverseStr === validStr) {
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = palindromes;
