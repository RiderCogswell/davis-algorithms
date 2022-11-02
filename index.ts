const fib = (n: number): number => {
  let base = [0, 1];

  for (let i = 2; i <= n; i++) {
    base.push(base[i - 2] + base[i - 1]);    
  }

  return base[n];
};