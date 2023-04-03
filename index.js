var nthFib = function (n) {
    if (n <= 1) {
        return n;
    }
    return nthFib(n - 1) + nthFib(n - 2);
};
var nthFibIteratively = function (n) {
    var base = [0, 1];
    for (var i = 2; i <= n; i++) {
        base.push(base[i - 2] + base[i - 1]);
    }
    return base[n];
};
var mergeSort = function (arr) {
    // Write your code here
    mergeSortRange(arr, 0, arr.length - 1);
};
var mergeSortRange = function (arr, l, r) {
    // Write your code here 
    if (l >= r)
        return;
    var m = Math.floor(l + (r - l) / 2);
    mergeSortRange(arr, l, m);
    mergeSortRange(arr, m + 1, r);
    merge(arr, l, m, r);
};
var merge = function (arr, l, m, r) {
    var res = arr.slice(l, r + 1);
    var i = l;
    var j = m + 1;
    var k = 0;

    while (i <= m && j <= r) {
        const v1 = res[i - l];
        const v2 = res[j - l];

        if (v1 < v2) {
            arr[k++] = v1;
            ++i;
        } else {
            arr[k++] = v2;
            ++j;
        }
    }
    
    while (i <= m) arr[k++] = res[i++ - l];
    while (j <= m) arr[k++] = res[j++ - l];
        
    console.log(arr);
};

mergeSort([346, 756, 6, 654, 345, 900, 549, 45]);

var vowelCount = function(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      let letter = str[i].toLowerCase();
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        count++;
      }
    }
    return count;
  };
  
  console.log(vowelCount('hello world'));