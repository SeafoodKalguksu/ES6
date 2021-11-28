// Spread operator
// The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.

const global = {
    user: { name: 'Mike' },
    info: { age: 30 },
    fe: ['JavaScript', 'React'],
    langs: ['Korean', 'English'],
};

// ES5 style
function es5() {
    let user = Object.assign({}, global.user, global.info, { skills: [] });
    global.fe.forEach((e) => user.skills.push(e));
    global.langs.forEach((e) => user.skills.push(e));
}

// ES6+ style
function es6() {
    const user = {
        ...global.user,
        ...global.info,
        skills: [...global.fe, ...global.langs],
    };
}
