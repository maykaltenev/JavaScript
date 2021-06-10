function addAndRemove(commands) {
    let num = 1;
    let res = commands.reduce((a, c) => { c === 'add' ? a.push(num) : a.pop(); num++; return a}, []);
    return res.length !== 0 ? res.forEach(el => console.log(el)) : 'Empty';
}
    console.log(addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']));
