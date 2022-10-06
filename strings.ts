const vowelsNum = (str: string): number => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let val = str[i].toLowerCase()
    if (val === 'a' || val === 'i' || val === 'u' || val === 'e' || val === 'o') {
      count++
    }
  }

  return count;
}

vowelsNum('AAAAUUAUAUAUAUUAUAUAUA')

const palindromeCheck = (str: string): boolean => {
  let reversed = str.split('').reverse().join('')

  if (reversed === str) {
    return true;
  }

  return false;
}

palindromeCheck('racecar')