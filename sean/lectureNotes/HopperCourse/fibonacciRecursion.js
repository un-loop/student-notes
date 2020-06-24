//iterate over huffman tree to create index key

//.split() str to be compressed 

//unshift() array and use return value to concat binary str onto compressed form

//turn string into binary number


//returns the nth number in the fibonacci sequence
//called using limitedFib(n) 
function limitedFib (n, seq = [1,1]){
    //validates input
    if (typeof n !== number){
        return 'non-number input';
    };
    //console.log(n[1]);

    //if we havn't reached the nth number in the sequence, replace the seq array with
    //the second value and the sum of values and decrement the tracking value n
    return (n <= 2) ? seq[1] : fib(n - 1,[seq[1], seq[0] + seq[1]]);
};

//infinitely prints fibonacci numbers in sequence to console
//called with fib()
function fib (seq = [1,1]){
    console.log(seq[1]);
    return fib([seq[1], seq[0] + seq[1]]);
};