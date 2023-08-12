// Merge two objects

let obj1 = {
    name: 'Akshay'
}
let obj2 = {
    age: 23
}

let output = {
    ...obj1,
    ...obj2
}

console.log('output is: ', output);