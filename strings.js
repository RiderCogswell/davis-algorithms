const vowelsNum = (str) => {
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

const palindromeCheck = (str) => {
  let reversed = str.split('').reverse().join('')
  if (reversed === str) {
    return true;
  }
  return false;
}
palindromeCheck('racecar')

const repeatingChar = (str) => {
  for (let i = 1; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      console.log(char);
      break;
    }
  }
  return '';
}

const firstNonRepeatingCharacter = (str) => {
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        // lastIndex returns the last index of the s that you pass into this method, SOOOOO
        if (str.indexOf(char) === str.lastIndexOf(char)) { // if theres a match, return the char
            return char;
        }
    }
    return '_';
};

firstNonRepeatingCharacter('the quick brown fox jumps over the calm kitten quietly');
