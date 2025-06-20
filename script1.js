/*/ARRAYS
const friend1 = 'Samuel';
const friend2 = 'Mwene';
const friend3 = 'Austin';

const friends = ['Samuel', 'Mwene', 'Austin'];
console.log(friends);

const years = new Array(991, 1984,2088);

console.log[friends[0]];
console.log[friends[2]];

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'fridasam';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Fridasam', 2037-2002, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);



//EXERCISE

//function calculate age - functon declaration and function expression
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const yias = [2003, 4003, 2009, 2013];
const age1 = calcAge(yias[0]);
const age2 = calcAge(yias[1]);
const age3= calcAge(yias[yias.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(yias[0]), calcAge(yias[1]), calcAge(yias[yias.length-1])];
console.log(ages);


//ARRAYS METHODS

const friends = ['Samuel', 'Mwene', 'Austin'];
const newLength = friends.push('Karen');
console.log(friends);
console.log(newLength);


friends.unshift('John');
console.log(friends);

//remove elements
//pop- removes last element shift- removes first element
friends.pop();
const popped = friends.pop();
console.log(popped);

console.log(friends);



//OBJECTS
const fridasam = {
    firstName: 'Karimi',
    lastName: 'Muriithi',
    age: 2037 -2002,
    job: 'Doctor',
    friends:['Naomi', 'Blessis', 'Austin']
};
console.log(fridasam);
console.log(fridasam.firstName);
console.log(fridasam['firstName']);

const nameKey = 'Name';
console.log(fridasam['first' + nameKey]);

const interestedIn = prompt('What do you want to know about Fridasam');


if(fridasam[interestedIn]) {
    console.log(fridasam[interestedIn]);
} else {
    console.log('Wrong request! Choose between Fname,LName, job or friends');

}

fridasam.location = 'Portugal';
fridasam['twitter'] = '@Fridasam';
console.log(fridasam);
*/

//OBJECT METHODS
const fridasam = {
    firstName: 'Karimi',
    lastName: 'Muriithi',
    birthYear: 2002,
    job: 'Doctor',
    friends:['Naomi', 'Blessis', 'Austin'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};

console.log(fridasam.calcAge(2003));
