const Benchmark = require('benchmark');
import { mostDuplicates, optimizedDuplicates } from './dupes';

const numbers = [];
for (let i = 1; i <= 10000; i++) {
    numbers.push(Math.floor(Math.random() * 10000) + 1);
};

const suite = new Benchmark.Suite;

suite
    .add('duplicates test', function() {
        mostDuplicates(numbers);
    })
    .add('optimized dupes test', function() {
        optimizedDuplicates(numbers)
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
    })
    .run();