// setTimeout(function[, delay, arg1, arg2, ...])
// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
// Return value
// The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to ***clearTimeout()*** to cancel the timeout.
function setTimeout() {
    let timerID = 0;
    function sayHelloTimer(seconds, name) {
        timerID = setTimeout(sayHello, seconds * 1000, name);
    }

    sayHello = (name) => console.log(`Hello ${name}`);
}

// setInterval(func, [delay, arg1, arg2, ...]);
// The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling ***clearInterval()***.
function setInterval() {
    function myCallBack(a, b) {
        console.log(a, b);
    }
    let intervalID = setInterval(myCallBack, 500, `parameter 1`, `parameter 2`);
}
