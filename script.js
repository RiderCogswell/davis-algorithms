const containerEl = document.getElementById('container');

const clickHandler = function(event) {
	if (event.target.matches('button')) {
		event.target.textContent = 'Clicked!';
    };
};

containerEl.addEventListener('click', clickHandler)



// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
// 	let count = 0;

// 	return function() {
// 		count++;
// 		this.textContent = `Clicks: ${count}`;
// 	}
// }

// buttonEl.addEventListener('click', clickHandler())

// // to add closure to all next buttons
// const buttons = document.getElementByTagName('button');

// For (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', clickHandler())
// }

// // in closures the function call in the event listener must actually be called = example

// function isEven(int) {
//   if (int % 2 == 0 ) {
//     return true;
//   }
//   return false;
// }

// isEven(4)


// // linear search
// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// function findIndex(num) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] === num) {
//       console.log(`${num} found at index ${i}`);
//       return;
//     }
//   }
// }

// findIndex(23)

// // regular
// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// const binarySearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);
  
//   if (num === arr[middle]) {
//     return 'found it';
//   } 
//   else if (num < arr[middle]) {
//     right = middle;
//     return `bring right down to ${right}`;
//   }
//   else if (num > arr[middle]) {
//     left = middle + 1;
//     return `bring left up to ${left}`;
//   }
// };

// console.log(binarySearch(data, 71));

// // recursive 
// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// const binarySearch = (arr, num, left, right) => {
//   let middle = Math.floor((left + right) / 2);
  
//   if (left > right) {
//     return -1;
//   }
//   else if (num === arr[middle]) {
//     return middle;
//   } 
//   else if (num < arr[middle]) {
//     // call again with a new right value
//     return binarySearch(arr, num, left, middle - 1);
//   }
//   else {
//     // call again with a new left value
//     return binarySearch(arr, num, middle + 1, right);
//   }
// };

// console.log(binarySearch(data, 0, 0, data.length - 1));