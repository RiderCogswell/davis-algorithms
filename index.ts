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

const mergeSortRange = (arr: number[], l: number, r: number) => {
  // Write your code here 
  if (l >= r) return;

  let m = Math.floor(l + (r - l) / 2); 
  mergeSortRange(arr, l, m);
  mergeSortRange(arr, m + 1, r);
  merge(arr, l, m, r);
}

const merge = (arr: number[], l: number, m: number, r: number) => {
  