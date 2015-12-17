//$(function() {
//  console.log('rozetka');
//
//  //--задача--1
//  var ucFirst = "vasya";
//    console.log("ucFirst:::", ucFirst.charAt(0).toUpperCase() + ucFirst.slice(1));
//
//  //--задача--2
//  var checkSpam = function (str) {
//    if (~str.indexOf('xxx') || ~str.indexOf('viagra')) {
//      console.log('true::: ' );
//      return true;
//    } else {
//      console.log('false::: ' );
//      return false;
//    }
//  };
//  var str = "Hello, i'm xxx";
//  checkSpam(str);
//
//  //или
//
//  //function checkSpam(str) {
//  //  var str = str.toLowerCase();
//  //  if (str.indexOf('viagra') || str.indexOf('xxx'));
//  //    return true
//  //}
//  //checkSpam('buy ViAgRA now');
//  //  console.log(checkSpam);
//
//  //--задача--3
//  var truncate = function (str, maxlength){
//    var dot = '...';
//    if (str.length > maxlength) {
//      var newStr = str.substr(0, maxlength - 3) + dot;
//      console.log(newStr, newStr.length);
//    } else {
//      console.log('false::: ', str.length );
//    }
//  };
//  truncate('lorem lorem lorem', 10);
//
//
//
//  //function func (a, b) {
//  //  return a + b;
//  //}
//  //console.log( func(5,3) );
//
//  //function func (x) {
//  //  if (x % 2 == 0) {
//  //    return 'even';
//  //  }
//  //  return 'odd';
//  //}
//  //
//  //console.log( func(8) );
//
//  //function coffee (x) {
//  //  return x * 250;
//  //}
//  //console.log( coffee(20) );
//
//  //var arr = [1,2,3,4,5,6,7,8,9,10];
//  //function func (arr) {
//  //  var arr1 = [];
//  //  var i;
//  //    for (i in arr) {
//  //      if (arr[i] % 2 == 0) {
//  //        arr1.push(arr[i]);
//  //      }
//  //  }
//  //  return arr1;
//  //}
//  console.log( func(arr) );
//
//  var age = 25;
//    if (age === 18) {
//      console.log('вы взрослый');
//    } else if (age===21) {
//      console.log( 'Держите пиво' );
//    }  else if (age===25) {
//      console.log( 'Юность закончилась!' );
//    }
//
//
//  var value = '$120';
//  var extractCurrencyValue = function (str) {
//    str = str.replace(/\D/g,'');
//    return console.log(str);
//  }
//  extractCurrencyValue(value);
//
//
//});
//


