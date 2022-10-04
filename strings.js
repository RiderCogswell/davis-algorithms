const vowelsNum = (string) => {
  let count = 0;

  for (let i in string) {
    let val = string[i].toLowerCase()
    if (val === 'a' || val === 'i' || val === 'u' || val === 'e' || val === 'o') {
      count++
    }
  }

  console.log(count)
}



vowelsNum('AAAAUUAUAUAUAUUAUAUAUA')