## Promises
# What is a promise?
- A Promise object is used for handling asynchronous computations which has some important guarantees that are difficult to handle with the callback method.
- A Promise object is simply a wrapper around a value that may or may not be known when the object is instantiated and provides a method for handling the value after it is known or is unavailable for failure reason
- Using a Promise object gives us the opportunity to associate functionality for an asynchronous operation's eventual success or failure
- It also allows us to treat these complex scenarios by using synchronous-like code
- **EX:** 
function getCurrentTime() {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            var didSucceed = Math.random() >= 0.5;
            didSucceed ? resolve(new Date()) : reject('Error');
        }, 2000);
        
    })
}
getCurrentTime()
.then(currentTime => getCurrentTime())
.then(currentTime => {
    console.log('The current time is:' + currentTime);
    return true;
})
.catch(err => console.log('There was an error:' + err))

- **IMPORTANT**
A promise only ever has one of three states at any given time:
1. pending
2. fulfilled (resolved)
3. rejected (error)
# Creating a promise
- To create a new promise use use the Promise constructor with two parameters:
1. The onSuccess (or resolve) function to be called on success resolution
2. The onFail (or reject) function to be called on failure rejection