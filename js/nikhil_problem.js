let parentFn = function (n) {
    console.log("Execution started for parentFn");

    let fnCreator = function (i) {
        return function () {
            console.log("Starting fn" + i);
            console.log('Delay sec', i);
            let endFn = function (i) {
                console.log("Ending fn" + i);
                console.log('------------------');
            };
            setTimeout(endFn.bind(null, i), i * 1000);
        };
    }

    let delayCalculatorFn = (i) => i * (i + 1) / 2;

    for (let i = 0; i < n; i++) {
        setTimeout(fnCreator(i), (delayCalculatorFn(i)) * 1000);
    }

    setTimeout(() => console.log("Execution ended for parentFn"), (delayCalculatorFn(n)) * 1000);
};

parentFn(5);
