"use strict";
const { Solution } = require("./solutions/271.encode-and-decode-strings"); // Adjust the path as needed
function testEncodeAndDecode() {
    const solution = new Solution();
    const examples = [
        ["neet", "code", "love", "you"],
        ["we", "say", ":", "yes"],
        [],
        ["", "", ""],
        ["a", "ab", "abc"],
    ];
    examples.forEach((example, index) => {
        const encoded = solution.encode(example);
        const decoded = solution.decode(encoded);
        console.log(`Example ${index + 1}:`);
        console.log("Input:", example);
        console.log("Encoded:", encoded);
        console.log("Decoded:", decoded);
        console.log("Is valid:", JSON.stringify(example) === JSON.stringify(decoded));
        console.log("-----------------------------------");
    });
}
testEncodeAndDecode();
