
/*
function logger() {
    console.log ('my name is fridasam');
}
//invoking functions
logger();
logger();

function fruitProcessor(apples,oranges) {
    console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges,`;
    return juice;
}

const appleJuice = fruitProcessor(5, 4);
console.log(appleJuice);

//reuse function
const appleOrangeJuice = fruitProcessor(3,4);
console.log(appleOrangeJuice);


//convert string into a number
const num = Number('23');
console.log(num);


//function calculate age - functon declaration and function expression
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const age1 = calcAge1(2002);
console.log(age1);

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2005);
console.log(age1,age2);

//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

//Retirement
const yearsUntilRetirement = (birthYear, firstName) => {
    const age =  2037 -birthYear;
    const retirement = 65 - age;
    return retirement;
    //returns firt name
    return `${firstName} retires in ${retirement}years`;
}
console.log(yearsUntilRetirement(2006, `Fridasam`));
console.log(yearsUntilRetirement(2004, `Karimi`));
*/

//FUNCTION CALLING

function cutFruitsPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples,oranges) {

    const applePieces = cutFruitsPieces(apples);
    const orangePieces = cutFruitsPieces(oranges);

    console.log(apples, oranges);

    const juice = `Juice with ${applePieces} pieces of apple ${orangePieces} pieces of oranges,`;
    return juice;
};

console.log(fruitProcessor(4,60));


