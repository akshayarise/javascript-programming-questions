// merge two objects without overwriting the keys.

let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    b: 3,
    c: 4,
    d: 5
}

let output = {
    ...obj1,
    ...obj2,
    b: [obj1.b, obj2.b],
    c: [obj1.c, obj2.c]
}

console.log('output is: ', output);