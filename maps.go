package main

import "fmt"

func main() {
	// twoSum([]int{7, 15, 11, 2}, 9)
	// // threeSum([]int{2, 11, 7, 15, 14, 5, 32, 3, -26}, 18)
	// evenAndOdd([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
	// removeDuplicatesFromLinkedList(&LinkedList{1, &LinkedList{1, &LinkedList{3, &LinkedList{4, &LinkedList{4, &LinkedList{4, &LinkedList{5, &LinkedList{6, &LinkedList{6, nil}}}}}}}}})
	// fmt.Println(nThFibonacci(6))
	// fmt.Println(nThFib(6))
	bubbleSort([]int{8, 5, 2, 9, 5, 6, 3})
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

	first, second := 0, 1
	for i := 3; i <= n; i++ {
		first, second = second, first+second
	}
	return second
}

// func mergeSort(array []int) []int {
// 	if len(array) == 1 {
// 		return array
// 	}
// 	mid := len(array) / 2
// 	left := mergeSort(array[:mid])
// 	right := mergeSort(array[mid:])
// 	return merge(mergeSort(left), mergeSort(right))
// }

// func merge(left, right []int) (result []int) {
// 	result := make([]int, len(left) + len(right))

// 	i := 0

// 	for len(left) > 0 && len(right) > 0 {
// 		if left[0] < right[0] {
// 			result[i] = left[0]
// 			left = left[1:]
// 		} else {
// 			result[i] = right[0]
// 			right = right[1:]
// 		}
// 		i++
// 	}

// 	for j := 0; j < len(left); j++ {
// 		result[i] = left[j]
// 		i++
// 	}
	
// 	for j := 0; j < len(right); j++ {
// 		result[i] = right[j]
// 		i++
// 	}
	
// 	return
// }

func bubbleSort(nums []int) []int {
	for i := len(nums); i > 0; i-- {
		for j := 0; j < i; j++ {
			if nums[j-1] > nums[j] {
				temp := nums[j]
				nums[j] = nums[j-1]
				nums[j-1] = temp
			}
		}
	}
	return nums
}