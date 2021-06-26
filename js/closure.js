function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);
}

function f2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i);
    }
}

function f2() {
    for (var i = 0; i < 3; i++) {
        let _f = function (x) {
            console.log(x)
        };
        setTimeout(_f.bind(null, i), 1000 * i);
    }
}

f2()