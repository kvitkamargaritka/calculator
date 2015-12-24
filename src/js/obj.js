var Calculator = {
    // * проектируем приложение * //
    els: {
        total: null,
        numbers: null,
        operators: null,
        clear: null,
        equals: null
    },

    values: {
        oldNumber: null,
        newNumber: null,
        operator: null
    },

    // * инициализация * //
    InitElements: function () {
        this.els.total = $('.field');
        this.els.numbers = $('.numbers');
        this.els.operators = $('.operators');
        this.els.clear = $('.clear');
        this.els.equals = $('.equals');
    },

    initEvents: function () {

    },

    // * запускаем инициализацию * //
    initialize: function () {
        this.initEvents();
    },

    // * вычисления * //
    sum: function (a, b) {
        return a + b;
    },

    minus: function (a, b) {
        return a - b;
    }


};
