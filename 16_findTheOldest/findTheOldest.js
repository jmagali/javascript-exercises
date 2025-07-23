const findTheOldest = function(people) {
    return people.sort( (a, b) => {

        const currentDate = new Date();

        let aAge = (a.yearOfDeath ?? currentDate.getFullYear()) - a.yearOfBirth;
        let bAge = (b.yearOfDeath ?? currentDate.getFullYear()) - b.yearOfBirth;

        return bAge - aAge;
    })[0];
};  

// Do not edit below this line
module.exports = findTheOldest;
