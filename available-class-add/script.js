var assortmentData = [
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    },
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    }
];



var checkGoods = function (products) {
    var elements = document.querySelectorAll('.good');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var product = products[i];
        var availableGoods = 'good--available';

        if (!product.inStock) {
            availableGoods = 'good--unavailable';
        }
        element.classList.add(availableGoods);

        if (product.isHit) {
            element.classList.add('good--hit');
        }

    }
}

checkGoods(assortmentData);

