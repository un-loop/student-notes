//Sean O'Dell 06/08/2020

//sensei: parceval

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (strng) {
//gets appending number string
    const digitCheck = /\d+$/;
    const numSearch = strng.match(digitCheck);
    //checks for special case of no appending numbers
    if(!numSearch){
        return strng + '1'
    };
    //increments number string
    let num = Number(numSearch[0]) + 1;
    num = num.toString();
    //reappends leading 0's
    while(num.length < numSearch[0].length){
        num = '0' + num;
    }
    //reappends number string
    return strng.substring(0, numSearch.index) + num;
}