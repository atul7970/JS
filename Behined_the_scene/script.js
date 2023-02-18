"use strict";

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstname} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with the same name as output
      const firstname = "Steven";
      const str = `Oh, and you're a millenial, ${firstname}`;
      console.log(str);
      const output = "NEW OUTPUT!";
    }
    
    console.log(millenial);
    //console.log(str);
    //console.log(add(2, 3)); 
    console.log(output);
  }
  printAge();

  return age;
}

const firstname = "Jonas";
calcAge(1991);
//console.log(age);
*/

//variables
/*console.log(me);
//console.log(job);
//console.log(year);

var me = "Jonas";
let job = "Teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var x = 1;
let y = 2;
const z = 3;*/
/*
// The this Keyword in Practice
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
const f = jonas.calcAge;
f();*/
///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);