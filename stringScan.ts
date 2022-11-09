// demonstration algo for UK bootcamp
type scan = (str: string, sub: string) => boolean;

const stringScan = (str: string, sub: string): scan => { 
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

stringScan('lotus', 'l')