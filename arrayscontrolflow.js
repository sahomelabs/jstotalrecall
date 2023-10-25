// A. Talk about it:
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?

//Question B.
// Easy Does it Create an array that contains three quotes and store it in a variable called quotes
// let quotes = ["Trust in the Lord wiht all your heart, and do not lean on your own understanding",
//     "Fear not I am with you; be not dismayed, for i am your God; I will strengthen you, I will help you, I will uuphold you with my righteouus right hand",
//     "Give thanks to thee lord, for He is good; his love enduures forever"
//     ];
//     console.log(quotes);


// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();  
const randomThings = [1, 10, "Hello", true];
const firstElement = randomThings[0];  
console.log("The first element of the array is", firstElement);
randomThings[2] = "World";
console.log(randomThings);


// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]