package main

import "fmt"

func main() {
	twoSum([]int{7, 15, 11, 2}, 9)
	// threeSum([]int{2, 11, 7, 15, 14, 5, 32, 3, -26}, 18)
	evenAndOdd([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
	removeDuplicatesFromLinkedList(&LinkedList{1, &LinkedList{1, &LinkedList{3, &LinkedList{4, &LinkedList{4, &LinkedList{4, &LinkedList{5, &LinkedList{6, &LinkedList{6, nil}}}}}}}}})
}

func twoSum(nums []int, target int) []int {
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
	if len(nums) < 3 {
		return []int{}
	}
	return []int{}
}

func evenAndOdd(nums []int) {
	for _, val := range nums {
		if val%2 == 0 {
			fmt.Printf("%v is even\n", val)
		} else {
			fmt.Printf("%v is odd\n", val)
		}
	}
}

type LinkedList struct {
	Value int
	Next  *LinkedList
}

func removeDuplicatesFromLinkedList(linkedList *LinkedList) *LinkedList {
	curr := linkedList
	for curr.Next != nil {
		if curr.Value == curr.Next.Value {
			curr.Next = curr.Next.Next
		} else {
			curr = curr.Next
		}
	}
	return linkedList
}

// recursive solution
func nThFibonacci(n int) int {
	if n == 1 {
		return 0
	}
	if n == 2 {
		return 1
	}
	return nThFibonacci(n-1) + nThFibonacci(n-2)
}

// iterative solution
func nThFib(n int) int {
	if n == 1 {
		return 0
	}

	num1, num2 := 0, 1
	for i := 3; i <= n; i++ {
		num1, num2 = num2, num1+num2
	}
}