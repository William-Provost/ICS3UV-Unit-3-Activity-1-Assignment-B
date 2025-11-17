// Author: William Provost
// Version: 1.0.0
// Date: 2025-11-05
//
// This program calculates the total cost of a meal at a restaurant,
// including tax and tip, and divides it equally among the number of
// people splitting the bill.

package main

import "fmt"

func main() {
	// initialize constants
	const HSTRATE float64 = 0.13
	const TIPRATE float64 = 0.15

	// INPUT
	// user-provided values
	const mealCost float64 = 315.99
	const numPeople float64 = 5

	// PROCESS
	// calculate tax, tip, total, and cost per person
	taxAmount := mealCost * HSTRATE
	tipAmount := mealCost * TIPRATE
	totalCost := mealCost + taxAmount + tipAmount
	costPerPerson := totalCost / numPeople

	// OUTPUT
	// display all calculated results
	fmt.Println("The subtotal (cost before tax and tip) is: $", mealCost)
	fmt.Println("The tax amount (13%) is: $", taxAmount)
	fmt.Println("The tip amount (15%) is: $", tipAmount)
	fmt.Println("The total cost (including tax and tip) is: $", totalCost)
	fmt.Println("The total cost per person (", numPeople, " people) is: $", costPerPerson)

	fmt.Println("\nDone.")
}
