const Benchmark = require('benchmark');
const { bubbleSort, quickSort } = require('./sort');

const numbers = [];
for (let i = 1; i <= 5000; i++) {
    numbers.push(i);
};

const suite = new Benchmark.Suite;

suite
    .add('bubble sort', function() {
        // benchmark generating a random #
       const testArray = [...numbers];
       bubbleSort(testArray);
    })
    .add('quick sort', function() {
        const testArray = [...numbers];

        quickSort(testArray);
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
    })
    .run();