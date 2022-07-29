export function minimumWaitingTime(queries: number[]): number {
  queries.sort((a, b) => a - b);  // sort through array

  let totalTime = 0; // declare a count variable

  for (let i = 0; i < queries.length; i++) { // loop through array
    const duration = queries[i]; // create a variable of iteration
    const queriesLeft = queries.length - (i + 1); // create a variable that keeps track of how many queries are left
    totalTime += duration * queriesLeft;
  }

  return totalTime;
}

export function nonCunstructibleChange(coins: number[]): number {
  coins.sort((a, b) => a - b);  // sort through array

  let currentChange = 0; // declare a count variable
  for (const coin of coins) { // loop through array
    if (coin > currentChange + 1) return currentChange + 1;
    currentChange += coin
  }
  return currentChange + 1;
}