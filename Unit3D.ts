/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-05
 * @fileoverview This program calculates the total cost of a meal at a restaurant,
 * including tax and tip, and divides it equally among the number of people splitting the bill.
*/

// initialize constants
const HST_RATE: number = 0.13;
const TIP_RATE: number = 0.15;

// INPUT
// user-provided numbers
const mealCost: number = 315.99;
const numPeople: number = 5;

// PROCESS
// calculate tax, tip, total, and cost per person
let taxAmount: number = mealCost * HST_RATE;
let tipAmount: number = mealCost * TIP_RATE;
let totalCost: number = mealCost + taxAmount + tipAmount;
let costPerPerson: number = totalCost / numPeople;

// OUTPUT
// display all calculated results
console.log("The subtotal is: $" + mealCost);
console.log("The tax amount (13%) is: $" + taxAmount);
console.log("The tip amount (15%) is: $" + tipAmount);
console.log("The total cost (including tax and tip) is: $" + totalCost);
console.log("The total cost per person (" + numPeople + " people) is: $" + costPerPerson);

console.log("\nDone.");