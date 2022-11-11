// demonstration algo for UK bootcamp

const stringScan = (str: string, sub: string): void => { 
  if (str.includes(sub)) {
    console.log(true);
  } else {
    console.log(false);
  }

  // switch (str.includes(sub)) {
  //   case str.includes(sub):
  //     return true;
  //   default:
  //     return false;
  // }
}

stringScan('lotus', 'x')