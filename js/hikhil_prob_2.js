let parentFn = function (i) {
    console.log("Execution started for parentFn");

    let fnExecutor = function (i) {
        if (i >= 0) {
            console.log('Starting fn', (i));
            let end = function () {
                console.log('Ending fn', (i));
                fnExecutor(i - 1);
            }
            setTimeout(end.bind(null, i), i * 1000);
        }
        else {
            console.log("Execution ended for parentFn");
        }
    }
    fnExecutor(i);

};

parentFn(5)