package main

import "fmt"

func main() {
	// twoSum([]int{2, 11, 7, 15}, 9)
	threeSum([]int{2, 11, 7, 15, 14, 5, 32, 3, -26}, 18)
}

func twoSum(nums []int, target int) []int {
	// Write your code here
	if len(nums) < 2 {
		return []int{}
	}

	// Create a map to store the values
	// and their indices
	m := make(map[int]int)

	// Loop through the array
	for i, v := range nums {
		// Check if the target minus the current value
		// is in the map
		if j, ok := m[target-v]; ok {
			// If it is, return the indices
			fmt.Println([]int{j, i})
		}
		// Otherwise, add the value and its index
		// to the map
		m[v] = i
	}
	return []int{}
}

func threeSum(nums []int, target int) []int {
	// Write your code here
	if len(nums) < 3 {
		return []int{}
	}
	return []int{}
}