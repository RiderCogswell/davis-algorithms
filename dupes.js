const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];

// find the most duplicates! O(n^2) because of the nested loop
const mostDuplicates = (arr) => {
    let appearingMost; 
    let appearingCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let counter = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }

        if (counter > appearingCount) {
            appearingMost = arr[i];
            appearingCount = counter;
        }
    }

    return `${appearingMost} appeared ${appearingCount} times.`
}

console.log(mostDuplicates(numbers));

const optimizedDuplicates = (arr) => {
    // Create empty Object Map
    const map = {};

    // loop over the array
    for (let i = 0; i < arr.length; i++) {
        // set value to index
        const value = arr[i];

        // if arr[i] not in map
        if (map[value] === undefined) {
            // create new value pair on map = 1
            map[value] = 1;    
        // else 
        } else {
            // value pair++
            map[value]++;
        }
    }

    // create variable for most appearring
    // create variable for most count
    let mostValue;
    let mostCount = 0;

    // loop over the object
        // if the value > current most
            // update most variables to match 
    for (const value in map) {
        if (map[value] > mostCount) {
            mostCount = map[value];
            mostValue = value;
        }
    }
    // return the value that is repated the most times and its count
    return `${mostValue} appeared ${mostCount} times.`;
}

const removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
        let nextNode = currentNode.next;
        while (nextNode !== null && nextNode.value === currentNode.value) {
            nextNode = nextNode.next;
        }
        currentNode.next = nextNode;
        currentNode = nextNode;
    }
    return linkedList;
}

console.log(optimizedDuplicates(numbers))

module.exports = { mostDuplicates, optimizedDuplicates };




    
        






