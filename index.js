// 1. A closure gives you access to an outer function's scope from an inner function. A closure is a function having access to the parent scope, even after the parent function has closed.  CLOSURES RETURN A FUNCTION!!

// 2.
function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();

// 2a. The closure is being used in lines 4 and 8 with the parameter "name".Because the inner function is using the parameter from the outer function.

// 2b. It's ALWAYS a number between 1 and 6, but the number itself could change to any integer between 1 and 6.

// 2c. The lexical scope of newRoll is in the inner scope because that is where it was created.

// 3.
function createBase(number) {
  return function (inner) {
    return console.log(inner + number);
  };
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// function createBase(number) {
//     return function (inner) {
//       return inner + number;
//     };
//   }

//   const addSix = createBase(6);
//   console.log(addSix(10)); // returns 16
//   console.log(addSix(21)); // returns 27
