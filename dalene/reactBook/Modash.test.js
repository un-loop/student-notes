import Modash from './Modash';

describe('Modash', () => {
    describe('`truncate()`', () => {
        const string = 'there was one catch, and that was CATCH-22';

        it('truncates a string', () => {
            expect(
                Modash.truncate(string, 19)
        ).toEqual('there was one catch...');
    });

        it('no-ops id <= length', () => {
            expect(
                Modash.truncate(string, string.length)
            ).toEqual(string);
        });
    });

    describe('capitalize()', () => {
        it('capitalizes first letter, lowercases rest', ()=> {
            const string = 'there was one catch, and that was CATCH-22';
            expect(
                Modash.capitalize(string)
            ).toEqual(
                'There was one catch, and that was catch-22'
            );
        });
    });

    describe('camelCase()', () => {
        it('camelizes string with spaces', () => {
            const string = 'customer responded at';
            expect(
                Modash.camelCase(string)
            ).toEqual('customerRespondedAt');
        });

        it('camelizes string with underscores', () => {
            const string = 'customer_responded_at';
            expect(
                Modash.camelCase(string)
            ).toEqual('customerRespondedAt');
        });
    });
});
// describe('My testy suite', () => {
//     it('`true` should be `true`', () => {
//         expect(true).toBe(true);
//     });

//     it('`false` should be `false`', () => {
//         expect(false).toBe(false);
//     });
// });


// function assertEqual(description, atual, expected) {
//     if (actual === expected) {
//         console.log(`[PASS] ${description}`);
//     } else {
//         console.log(`[FAIL] ${description}`);
//         console.log(`\tactual: '${actual}'`);
//         console.log(`\texpected: '${expected}'`);
//     }
// }

// let actual;
// let expected;
// let string;

// string = 'there was one catch, and that was CATCH-22';
// actual = Modash.truncate(string, 19);
// expected = 'there was one catch...';

// assertEqual('`truncate()`: truncates a string', actual, expected);

// actural = Modash.truncate(string, string.length);
// expected = string;

// assertEqual('`truncate()`: no-ops if <= length', actura, expected);

// actual = Modash.capitalize(string);
// expected = 'There was one catch, and that was catch-22';

// assertEqual('`capitalize()`: capitalizes the string', actual, expected);

// string = 'custome responded at';
// actual = Modash.camelCase(string);
// expected = 'customerRespondedAt';

// assertEqual('`camelCase()`: string with spaces', actual, expected);

// string = 'customer_responded_at';
// actual = Modash.camelCase(string);
// expected = 'customerRespondedAt';

// assertEqual('`camelCase()`: string with underscores', actual, expected);


// // const string = 'there was one catch, and that was CATCH-22';
// // const actual = Modash.truncate(string, 19);
// // const expected = 'there was one catch...';

// // if (actual !== expected) {
// //     console.log(
// //         `[FAIL] Expected \`truncate()\` to return '${expected}', got '${actual}'`
// //     );
// // } else {
// //     console.log('[PASS] `truncate()`.');
// 