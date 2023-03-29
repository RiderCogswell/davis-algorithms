const nthFib = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return nthFib(n - 1) + nthFib(n - 2);
}

const nthFibIteratively = (n: number): number => {
  let base = [0, 1];

  for (let i = 2; i <= n; i++) {
    base.push(base[i - 2] + base[i - 1]);    
  }

  return base[n];
}

const mergeSort = (arr: number[]) => { 
  // Write your code here
  mergeSortRange(arr, 0, arr.length - 1);
}

const mergeSortRange = (arr: number[], l: number, r: number) => {
  // Write your code here 
  if (l >= r) return;

  let m = Math.floor(l + (r - l) / 2); 
  mergeSortRange(arr, l, m);
  mergeSortRange(arr, m + 1, r);
  merge(arr, l, m, r);
}

const merge = (arr: number[], l: number, m: number, r: number) => {
  let res = arr.slice(l, r + 1);
  let i = l;
  let j = m + 1;
  let k = 0;

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
    
}

mergeSort([346, 756, 6, 654, 345, 900, 549, 45])