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