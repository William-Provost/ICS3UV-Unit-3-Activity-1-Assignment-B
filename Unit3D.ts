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
const taxAmount1: number = mealCost * HST_RATE;
const tipAmount: number = mealCost * TIP_RATE;
const totalCost1: number = mealCost + taxAmount1 + tipAmount;
const costPerPerson: number = totalCost1 / numPeople;

// OUTPUT
// display all calculated results
console.log("The subtotal is: $" + mealCost);
console.log("The tax amount (13%) is: $" + taxAmount1);
console.log("The tip amount (15%) is: $" + tipAmount);
console.log("The total cost (including tax and tip) is: $" + totalCost1);
console.log("The total cost per person (" + numPeople + " people) is: $" + costPerPerson);

console.log("\nDone.");
