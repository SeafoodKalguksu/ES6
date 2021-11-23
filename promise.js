// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation was completed successfully.
// - rejected: meaning that the operation failed.
// You will also hear the term resolved used with promises — this means that the promise is settled or “locked-in” to match the state of another promise.
// https://mzl.la/3nHrfBn and https://bit.ly/3r6y6Xg

// Chained Promises
// The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.
function chainedPromises() {
    const order = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('accepted.'); // reject(new Error('error..'))
        }, 3000);
    });
    // state: pending                →            state: fulfilled or rejected
    //                          in 3 seconds
    // result: undefined             →            result: OK or error

    order
        .then(function (result) {
            console.log('your order is ' + result);
        })
        .catch(function (err) {
            console.log(err + ': please place an order again!');
        })
        .finally(function () {
            console.log('promise done...'); // let a loading page disappear
        });
}
