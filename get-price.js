let getPrice = function (time, isQuickly) {
    let rate = 1500;
    if (isQuickly) {
        rate *= 2.5;
        time /= 2;
    }
    if (time > 150) {
        rate -= 250;
    }
    return time * rate;
};

