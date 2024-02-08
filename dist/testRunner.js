"use strict";
const { Solution } = require("./solutions/128.longest-consecutive-sequence"); // Adjust the path as needed
function testRunner() {
    const solution = new Solution();
    // const examples = [
    //   ["neet", "code", "love", "you"],
    //   ["we", "say", ":", "yes"],
    //   [],
    //   ["", "", ""],
    //   ["a", "ab", "abc"],
    // ];
    const examples = [100, 4, 200, 1, 3, 2];
    examples.forEach((example, index) => {
        // const encoded = solution.encode(example);
        // const decoded = solution.decode(encoded);
        const longest = solution.longestConsecutive(example);
        console.log(`Example ${index + 1}:`);
        // run example, for instance:
        // console.log("Input:", example);
        // console.log("Encoded:", encoded);
        // console.log("Decoded:", decoded);
        // console.log(
        //   "Is valid:",
        //   JSON.stringify(example) === JSON.stringify(decoded)
        // );
        console.log(longest);
        console.log("-----------------------------------");
    });
}
testRunner();
