// Section 1

// What types are these?

/* 1.1 */ 1; number
/* 1.2 */ "cat"; string
/* 1.3 */ true; boolean
/* 1.4 */ []; object
/* 1.5 */ {};object
/* 1.6 */ 1.1; number
/* 1.7 */ var myVariable; variable


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; true
/* 2.2 */ "cat"; true
/* 2.3 */ true; true
/* 2.4 */ NaN; false
/* 2.5 */ []; true
/* 2.6 */ {}; true
/* 2.7 */ undefined; false
/* 2.8 */ ""; false
/* 2.9 */ 0; false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number 
var x = 4
// 3.2 Assign a variable that is a string
var x = "cat"
// 3.3 Assign a variable that is a boolean
var x = true
// 3.4 Assign a variable that is an object
var x = myCat


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

console.log(3 ? "Hello" : "bye")

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var x = animal[0]

// 5.2. Assign the last element to a variable
var x = animal[3]
var x = animal[animal.length - 1]

// 5.3. Assign the length of an array to a variable
var x = animal.length

// 5.4. Add an item to the end of the array
animal.push()

// 5.5. Add an item to the start of the array
animal.shift()
animal.splice(0,1)

// 5.6. Assign the index of hedgehog to a variable
var x = animal.indexOf("hedgehog")

// Section 6

// 6.1 Create an array of 5 vegetables
var x = ["tomato", "egg plant", "cabbage", "celery", "carrot"]

// 6.2 Loop over the array and write to the console using a "while"
var i = 0;
while (i < x.length) {
  console.log(x[i]);
  i++;
}

// 6.3 Loop again using a "for" with a counter
for (var i=0; i < x.length; i++) {
  console.log(x[i]);
}

// 6.4 Loop again using a "for of"
for ( var i of x) {
  console.log(i)
}

// Section 7

var accounts = [50.00, 30.00, 10000.00, 50.76, 1.00];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
// 7.2 Find the index of the account with the largest balance
// 7.3 Find the index of the account with the smallest balance
// 7.4 Calculate the average bank account value

var accounts = [50.00, 30.00, 10000.00, 50.76, 1.00];

var sum = 0;

var total = function() {
  for (var i = 0; i < accounts.length; i++) {
    sum = accounts[i] + sum;
  } 
}

account.sort().reverse()[0]

account.sort()[0]

total()/account.length



