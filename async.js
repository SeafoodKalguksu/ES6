// async function
// An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// async function [name]([param1[, param2[, ..., paramN]]]) {
//     statements
// }
function asyncFunc() {
    async function getName() {
        return Promise.resolve('Tom'); // return 'Mike';
        // throw new Error('err..');
    }

    getName()
        .then((name) => {
            console.log(name);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log('finished from getName()');
        });
}

// await
// The await operator is used to wait for a Promise.
// The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.
// If the Promise is rejected, the await expression throws the rejected value.
// If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
function awaitOperator() {
    function getName() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Mike');
            }, 1000);
        });
    }

    async function showName() {
        // ***It can only be used inside an async function*** within regular JavaScript code; however it can be used on its own with JavaScript modules.
        // [rv] = await expression
        // expression: a Promise or any value to wait for.
        // rv: returns the fulfilled value of the promise, or the value itself if it's not a Promise.
        const value = await getName();
        console.log(`value in showName() = ${value}`);
    }
}

function example() {
    const p1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('p1 done');
            }, 1000);
        });
    };

    // msg = 'p1 done'
    const p2 = (msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('p2 done');
                // reject('fail');
            }, 3000);
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

    console.log('start');
    async function order() {
        try {
            // const value1 = await p1();
            // const value2 = await p2(value1);
            // const value3 = await p3(value2);
            // console.log(value3);
            const values = await Promise.all([p1(), p2(), p3()]);
            console.log(values);
        } catch (error) {
            console.log(error);
        }

        console.log('end');
    }
}
