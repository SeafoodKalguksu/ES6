const global = {
    user: { name: 'Mike' },
    info: { age: 30 },
    fe: ['JavaScript', 'React'],
    langs: ['Korean', 'English'],
};

// Differences between ES5 and ES6+
function es5() {
    // ES5 style
    let user = Object.assign({}, global.user, info, { skills: [] });
    fe.forEach((e) => user.skills.push(e));
    langs.forEach((e) => user.skills.push(e));

    // ES6+ style
    user = {
        ...global.user,
        ...global.info,
        skills: [...global.fe, ...global.langs],
    };
}
