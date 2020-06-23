// We write the tests for the Modash library in
// this file in the Unit Testing chapter
import Modash from './Modash';

const string = 'there was one catch, and that was CATCH-22';
const actual = Modash.truncate(string, 19);
const expected = 'there was one catch...';

if (actual !== expected) {
    console.log(
        `[FAIL] Expected \`truncate()\` to return '${expected}', got '${actual}'`
    );
} else {
    console.log('[PASS] `truncate()`.');
}