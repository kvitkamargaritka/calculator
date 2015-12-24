$(function() {
    // * инициализация * //
    var total = $('.field'),
        numbers = $('.numbers'),
        operators = $('.operators'),
        clear = $('.clear'),
        equals = $('.equals'),

        oldNumber = '',
        newNumber = '',
        operator = '';

    // * события * //
    total.val('0');

    numbers.click(function () {
        oldNumber += $(this).val();
        total.val(oldNumber);
    });

    operators.click(function () {
        operator = $(this).val();
        newNumber = oldNumber;
        oldNumber = '';
        total.val('0');
    });

    clear.click(function () {
        total.val('0');
        oldNumber = '';
        newNumber = '';
    });

    equals.click(function(){

        var result;

        oldNumber = parseInt(oldNumber, 10);
        newNumber = parseInt(newNumber, 10);

        if (operator === "+") {
            result = sum(oldNumber, newNumber);
        }

        else if (operator === "-") {
            result = minus(newNumber, oldNumber);
        }

        else if (operator === "/") {
            result = division(oldNumber, newNumber);
        }

        else if (operator === "*") {
            result = multi(oldNumber, newNumber);
        }

        else if (operator === "%") {
            result = percentage(newNumber, oldNumber);
        }

        result.toString();
        total.val(result);
        oldNumber ='';
        newNumber ='';
    });


    // * вычисления * //
    function sum (a, b) {
        return a + b;
    }

    function minus (a, b) {
        return a - b;
    }

    function division (a, b) {
        return a / b;
    }

    function multi (a, b) {
        return a * b;
    }

    function percentage (a, b) {
        return (a / 100) * b;
    }

});


