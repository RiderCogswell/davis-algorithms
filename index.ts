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

const mergeSort = (arr: number[]): number[] => {
  // Write your code here 
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  