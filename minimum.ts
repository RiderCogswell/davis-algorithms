function minimumWaitingTime(queries: number[]): number {
  queries.sort((a, b) => a - b);

  let totalTime = 0;

  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    totalTime += duration * queriesLeft;
  }

  return totalTime;
}

export function nonCunstructibleChange(coins: number[]): number {
  coins.sort((a, b) => a - b);

  return 1;
}