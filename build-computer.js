let processorPrice = {
    'i5': 5000,
    'i7': 10000
};

let displayPrice = {
    13: 5000,
    15: 10000
};

let memoryPrice = {
    8: 3000,
    16: 4000
};

let buildComputer = function (memory, display, processor) {
    let computer = {
        basicPrice: 5000,
        processor: processor,
        display: display,
        memory: memory,

        getDescription: function () {
            return 'компьютер с процессором ' + computer.processor + ', диагональю ' + computer.display + ', оперативной памятью ' + computer.memory;
        },

        getPrice: function () {
            return computer.basicPrice + processorPrice[computer.processor] + displayPrice[computer.display] + memoryPrice[computer.memory];
        }
    };

    return computer;
};

let myComputer = buildComputer(8, 13, 'i7');
console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());
