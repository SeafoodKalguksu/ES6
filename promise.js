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
    // state: pending                →            state: fulfilled (or rejected)
    //                          in 3 seconds
    // result: undefined             →            result: 'accepted.' (or error)

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

function callbackHell() {
    const f1 = (func) =>
        setTimeout(() => {
            console.log('f1');
            func();
        }, 1000);

    const f2 = (func) =>
        setTimeout(() => {
            console.log('f2');
            func();
        }, 3000);

    const f3 = (func) =>
        setTimeout(() => {
            console.log('f3');
            func();
        }, 2000);

    console.log('start');
    f1(function () {
        f2(function () {
            f3(function () {
                console.log('end');
            });
        });
    });
}

// Chaining
// A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.
// const promise = doSomething();
// const promise2 = promise.then(successCallback, failureCallback);
function promiseChaining() {
    const f1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('f1 done');
            }, 1000);
        });
    };

    // msg = 'f1 done'
    const f2 = (msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('f2 done');
            }, 3000);
        });
    };

    // msg = 'f2 done'
    const f3 = (msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('f3 done');
            }, 2000);
        });
    };

    f1()
        .then((result) => f2(result))
        .then((result) => f3(result))
        .then((result) => console.log(result))
        .catch(console.log('error occurred!'))
        .finally(() => {
            console.log('everything is done.');
        });
}
promise();
