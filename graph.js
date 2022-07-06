// single cycle 
const hasSingleCycle = (array) => {
  let visitedCount = 0;
  let currentIndex = 0;
  // loop through while array.length >  
  while (visitedCount < array.length) {
    if (visitedCount > 0 && currentIndex === 0) return false;
    // else
    visitedCount++ 
    currentIndex = getNextIndex(currentIndex, array)
  }
  return currentIndex === 0;
}

const getNextIndex = (currentIndex, array) => {
  const jump = array[currentIndex];
  const nextIndex = (currentIndex + jump) % array.length;
  return nextIndex > 0 ? nextIndex : nextIndex + array.length
}