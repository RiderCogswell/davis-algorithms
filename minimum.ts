export function minimumWaitingTime(queries: number[]): number {
  queries.sort((a, b) => a - b);  // sort through array

  let totalTime = 0; // declare a count variable

  for (let i = 0; i < queries.length; i++) { // loop through array
    const duration = queries[i]; // create a variable of iteration
    const queriesLeft = queries.length - (i + 1); // create a variable that keeps track of how many queries are left
    totalTime += duration * queriesLeft; // add (duration * queriesLeft)
  }

  return totalTime; // return totalTime
}

export function nonCunstructibleChange(coins: number[]): number {
  coins.sort((a, b) => a - b);  // sort through array

  let currentChange = 0; // declare a count variable
  for (const coin of coins) { // loop through array
    if (coin > currentChange + 1) return currentChange + 1; // if iteration is greater than currentChange, return cc+1
    currentChange += coin // add iteration value to currentChange
  }
  return currentChange + 1; // return currentchange + 1 because that is the minimum nonConstructibleChange
}

export const isNum = (input: any): boolean => {
  if (typeof input === "number" && input % 1 === 0) return true;
  return false
}

isNum(88.8)