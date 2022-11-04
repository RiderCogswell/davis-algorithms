const twoSum = (array, targetSum) => {
  // sort (asc) for speed
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right]
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }

  }
  return [];
}

const threeSum = (array: number[], targetSum: number): number[] => {
  // declare a global variable
  let triplets = [];
  // for speed, well sort before adding any sums
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length -2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if ( currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        left++;
        right--
      } else if (currentSum < targetSum) {
        left++
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [(sum - max), (sum - min)]
} 