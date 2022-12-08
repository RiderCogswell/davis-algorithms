var twoSum = function (array, targetSum) {
    // sort (asc) for speed
    array.sort(function (a, b) { return a - b; });
    var left = 0;
    var right = array.length - 1;
    while (left < right) {
        var currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        }
        else if (currentSum < targetSum) {
            left++;
        }
        else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
};
var threeSum = function (array, targetSum) {
    // declare a global variable
    var triplets = [];
    // for speed, well sort before adding any sums
    array.sort(function (a, b) { return a - b; });
    for (var i = 0; i < array.length - 2; i++) {
        var left = i + 1;
        var right = array.length - 1;
        while (left < right) {
            var currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            }
            else if (currentSum < targetSum) {
                left++;
            }
            else if (currentSum > targetSum) {
                right--;
            }
        }
    }
    console.log(triplets);
    return triplets;
};
threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
function miniMaxSum(arr) {
    var sum = arr.reduce(function (a, b) { return a + b; });
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    return [(sum - max), (sum - min)];
}
