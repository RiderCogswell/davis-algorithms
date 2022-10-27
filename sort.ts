// O(n^2) - Quadratic Complexity * not an efficient function because the needless loops through the data - bubble sorts are not a great algorithm

// IF ARRAY IS ALREADY SORTED HOWEVER BUBBLE SORTS ONLY NEEDS TO TRAVERSE ONCE, RESULTING IN O(n)
export const bubbleSort = (arr: number[]): number[] => {
    let sorted = false;

    // allows the function to loop
    while (!sorted) {
        // when the function is done, set as sorted for good
        sorted = true;
    
        // loop through arr
        for (let i = 0; i < arr.length - 1; i++) {
            // compare indexes
            if (arr[i] > arr[i +1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                // say that sorted is false to loop again
                sorted = false;
            }
        }
    }

    return arr;
};

// O(n log n) - Not exactly a logarithmic complexity, because the data is shrinking on each iteration, but it still performs a linear traversal on those smaller data sets. this is a very efficient algorithm but that does not always make it the best for each
export const quickSort = (arr: number[]): number[] => {
    // don't quick sort a small array
    if (arr.length <= 1) {
        return arr;
    }

    // use first index as the pivot point
    let pivot = arr[0];
    let left = [];
    let right = [];

    // start at index 1 to ignore the pivot
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // merge all arrays
    return quickSort(left).concat(pivot, quickSort(right));  
};

// Counting Sort 

const countingSort = (arr: number[]): number[] => {
    // Write your code here
    let count = Array(100).fill(0);
    
    // loop through and every number add 1 
    for (let num of arr) {
        count[num]++
    }
    return count
}

countingSort([ 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])