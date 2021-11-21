const global = {
    user: { name: 'Mike' },
    info: { age: 30 },
    fe: ['JavaScript', 'React'],
    langs: ['Korean', 'English'],
};

let user = Object.assign({}, global.user, global.info, { skills: [] });

// ES5 style
function es5() {
    global.fe.forEach((e) => user.skills.push(e));
    global.langs.forEach((e) => user.skills.push(e));
}

// ES6+ style
function es6() {
    user = {
        ...global.user,
        ...global.info,
        skills: [...global.fe, ...global.langs],
    };
}
