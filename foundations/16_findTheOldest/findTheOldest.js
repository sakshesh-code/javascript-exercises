const findTheOldest = function(people) {
   return people.reduce((oldest, person)=>{
            const currentDate = new Date().getFullYear();

            let currentBirth = person.yearOfBirth;
            let currentDeath = person.yearOfDeath || currentDate;

            let oldestBirth = oldest.yearOfBirth;
            let oldestDeath = oldest.yearOfDeath || currentDate;

            if(currentDeath - currentBirth > oldestDeath - oldestBirth){
                oldest = person;
            }

        return oldest;
    })
};


// Do not edit below this line
module.exports = findTheOldest;
