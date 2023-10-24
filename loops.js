// LOOPS // 

// II. Loops
// A. The Basics
// Remember: USE letwhen you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let i =0; i< 10; i++)
//     console.log(i)
// // Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i < 400; i++)
//     console.log(i)
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i < 4000; i +=3) 
//     console.log(i);

// B. Get even
// Print out the numbers that are within the range of 1 - 100
for (let i =1; i <100; i++)
console.log(i)
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number" 
for (let i =1; i < 100; i++)
    if (i % 2 === 0) {
        console.log("<---- is an even number");
    } else {
        console.log(i);
    }
