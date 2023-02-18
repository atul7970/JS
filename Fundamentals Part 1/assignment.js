/*1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country(population in millions)
2. Log their values to the console
LECTURE:

let Country = 'India';
let CountryContinent = '29';
let CountryPopoulation = '137 Cr.';

console.log(Country);
console.log(CountryContinent);
console.log(CountryPopoulation);

1. Declare a variable called 'isIsland' and set its value according to your
country.The variable should hold a Boolean value.Also declare a variable
'language', but don't assign it any value yet 
let IsLand = true;
console.log(typeof IsLand);

IsLand = '28 States';
console.log(typeof IsLand);
let Language;
console.log(typeof Language);

const ageJohns = 2037 - 1990;
const monki = 2001 - 2022;
console.log(ageJohns, monki);

const MarkMAss = 78;
const JohnMass = 92;

const MarkHeight = 1.69;
const JohnHeight = 1.95;

const BMI1 = MarkMAss / MarkHeight ** 2;
const BMI2 = JohnMass / (JohnHeight * JohnHeight);

if(BMI1>BMI2){
    console.log(`Mark BMI is better`);
}
else{
    console.log(`John BMI is better`);
}

console.log(`Mark BMI is ${BMI1}`);
console.log(`John BMI is ${BMI2}`);

const money=0;
if(money){
    console.log("Don't spend so much money");
}
else{
    console.log("You should get a job");
}
*/
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);



// Comparison operators
const ageJonas=28;
const ageSarah=20;
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
const now=2000;
console.log(now - 1991 > now - 2018);



// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}
if (favourite !== 23) console.log('Why not 23?');


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else 
    console.log('Someone else should drive...')
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}



const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);