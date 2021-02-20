///// M V P ///////

/******************************************************************************\
	Task 1: `counterMaker`
\******************************************************************************/
/****** INSTRUCTIONS TASK 1 ******/
/* 
 * Study the code below for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 
 Counter one uses a closure  as the inner function has access to the outer parent function
 
 * 2. Which of the two uses a closure? How can you tell?
 
 Number One because the inner function access the variable on the parent function (count=0)
 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 
 Counter 1 code would preferable in scenarios where there would be different functions that are console.log
 for the parent function. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/******************************************************************************\
	Task 2: Get Motivated
\******************************************************************************/

/****** INSTRUCTIONS TASK 2 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */


  //Uncommment this to return the value of your invoked message function
  //return message();

}

motivation('Mohamed', 'Ali'); // 'You're doing awesome keep it up Mohamed Ali.



function motivation (first, last, phrase)
{return phrase(first, last)}

const phrases = function(first, last)
{return `You're doing great, keep it up ${first} ${last}`}
motivation("mohamed", "ali", phrases)

/******************************************************************************\
 Task 3: Find Your Friends
 \******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */

var friends = ["Ahmed", "Khadijo", "Farah"];
var secondLevelFriends = ["Mahad", "Farah", "Mohamed"];
var allUsers = ["Ahmed", "Khadijo", "Farah", "Mahad", "Mohamed", "Bashir", "Ali"];

function findPotentialFriends(existingFriends) {

}

var isNotAFriend = findPotentialFriends( friends );
// isNotAFriend(allUsers[0]); // false
// isNotAFriend(secondLevelFriends[2]); // true


var friends = ["Ahmed", "Khadijo", "Farah"];
var secondLevelFriends = ["Mahad", "Farah", "Mohamed"];
var allUsers = ["Ahmed", "Khadijo", "Farah", "Mahad", "Mohamed", "Bashir", "Ali"];

function areThey(users, list, cb)
{return cb(users, list)}

let checkIt = function(users, list)
{console.log(users,list)
for (let i=0; i< list.length; i++)
{console.log(list[i].indexOf(users))
if (list[i].indexOf(users) ==-1)
{return false}
else {return true}}
}
console.log(areThey("Ahmed", allUsers, checkIt))

/******************************************************************************\
	Task 4: Keep a log
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.
 Fix the code below to log the desired output.
 */

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function() {
    	console.log(i)
	}, i * 1000)
  }
}
timeOutCounter();


/******************************************************************************\
	Task 5: Check if name exists
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/


const array= ["Hashi", "Sumaya", "Abdi", "Faduma", "Farhiya"]

function findNames(user, family, cb)
{return cb(user, family)}

let findtheNames = function(user, family) {
  console.log(user, family)

  for (let i=0; i < family.length; i++)
{ console.log(family[i].indexOf(user))

if (family[i].indexOf(user) == -1)

{return false} else {return true}}
}
console.log(findNames("Hashi", array, findtheNames))

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
  };
  // Example usage: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  
  // ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
  };
