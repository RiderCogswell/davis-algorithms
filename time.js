function timeConversion(s) { // s = '1:00:05PM'
  // Write your code here
  let amPm = s.charAt(8); // find the 'A' || 'P' letter
  let milTime = '';
  
  if (amPm === 'A') {
      if (s.substring(0, 2) === '12') { // 
          milTime = '00'
      } else {
          milTime = s.substring(0, 2)
      }
  } else { // 'P'
      if (s.substring(0, 2) === '12') {
          milTime = s.substring(0, 2);
      } else {
          milTime = parseInt(s.substring(0, 2), 10) + 12;
      }
  }
  
  return (milTime + s.substring(2, 8))
} 
