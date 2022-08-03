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
            return computer.basicPrice;
        }
    };

    return computer;
};

let myComputer = buildComputer(8, 13, 'i7');
console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());
