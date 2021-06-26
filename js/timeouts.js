console.log('a');
let timmy = setTimeout(function () {
    console.log('b');
}, 1000);
let timothy = setTimeout(function () {
    console.log('c');
}, 10000);
let timer = setTimeout(function () {
    console.log('d');
}, 0);
console.log('e');

//a, e, d, b, c
