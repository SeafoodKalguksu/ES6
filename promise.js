// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation was completed successfully.
// - rejected: meaning that the operation failed.
// You will also hear the term resolved used with promises — this means that the promise is settled or “locked-in” to match the state of another promise.
// https://mzl.la/3nHrfBn and https://bit.ly/3r6y6Xg

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

function promise() {
    // Chained Promises
    // The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.
    function chainedPromises() {
        const order = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('accepted.'); // reject(new Error('error..'))
            }, 3000);
        });
        // state: pending            →          state: fulfilled (or rejected)
        //                      in 3 seconds
        // result: undefined         →          result: 'accepted.' (or error)

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

    const p1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('p1 done');
            }, 3000);
        });
    };

    // msg = 'p1 done'
    const p2 = (msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('p2 done');
                reject('fail');
            }, 1000);
        });
    };

    // msg = 'p2 done' (or fail)
    const p3 = (msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('p3 done');
            }, 2000);
        });
    };

    // Chaining
    // A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.
    // const promise = doSomething();
    // const promise2 = promise.then(successCallback, failureCallback);
    function promiseChaining() {
        console.time('promise chaining: ');
        p1()
            .then((result) => p2(result))
            .then((result) => p3(result))
            .then((result) => console.log(result))
            .catch(console.log)
            .finally(() => {
                console.log('finished');
                console.timeEnd('promise chaining: ');
            });
    }

    // Promise.all(iterable)
    // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
    function promiseAll() {
        console.time('Promise.all(): ');
        Promise.all([p1(), p2(), p3()]).then((result) => {
            console.log(result);
            console.timeEnd('Promise.all(): ');
        });
    }

    // Promise.race(iterable)
    // The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
    function promiseRace() {
        console.time('Promise.race(): ');
        Promise.race([p1(), p2(), p3()])
            .then((result) => {
                console.log(result);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                console.log('finished');
                console.timeEnd('Promise.race(): ');
            });
    }

    // Promise.any(iterable) ES2021
    // Promise.any() takes an iterable of Promise objects. It returns a single promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
    function promiseAny() {
        console.time('Promise.any(): ');
        Promise.any([p1(), p2(), p3()])
            .then((result) => {
                console.log(result);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                console.log('finished');
                console.timeEnd('Promise.any(): ');
            });
    }
}
