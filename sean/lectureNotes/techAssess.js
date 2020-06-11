//x3 => fizz
//x5 => buzz
//15 => fizzbuzz

function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        let print = ''
        switch (0) {
            case i % 15:
                print += 'fizzbuzz'
                break
            case i % 3:
                print += 'fizz';
                break
            case i % 5:
                print += 'buzz';
                break
            default :
                print = i;
                break
        }
        console.log(print);
    }
};


// function formats string
//takes format string and array of string replacements
//format uses placeholders of 

function formatString(str, arr){
    const strMatch = /\{\d+\}/;
    while(str.search(strMatch) > -1){
        str = str.replace(strMatch,
              arr[Number(str.match(strMatch)[0].substring(1,-1))])
    }
    console.log(str)
    return str;
}

formatString(`Chromebooks are {0} that {4}, and if more {2} tried to use {3}, they might find that they aren't so {1}.`,
['not', 'bad', 'people', 'them', 'inflexible'])