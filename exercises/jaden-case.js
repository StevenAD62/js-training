'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase (input) {
    let words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
    } return words.join(' ');
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('salut toi'), 'Salut Toi')
assert.strictEqual(jadenCase('s'), 'S')
assert.strictEqual(jadenCase('comment vas tu'), 'Comment Vas Tu')
assert.strictEqual(jadenCase(''), '')
// End of tests */
