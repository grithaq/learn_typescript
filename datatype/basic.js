// Output message
console.log('Hai gaess.. ketemu lagi bersama jarwo..');
var greeting = function (person) {
    console.log('Good day ' + person);
};
greeting('Apip');
// String //
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
var sentence1 = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
var color = 'red';
color = 'blue';
/* NUMBER */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let biginteger : number = 1234567890123456789012345678901234567890n;
// Array //
var list = [1, 2, 3];
var list2 = [4, 5, 6];
var jumlah = list[0] + list2[2];
var list3 = ['Hallo', 1, true, 4.2];
// TUPLE //
var x;
x = ['Apip', 10];
// ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Warna;
(function (Warna) {
    Warna["merah"] = "Merah";
    Warna["biru"] = "Biru";
    Warna["kuning"] = "Kuning";
})(Warna || (Warna = {}));
;
var w = Warna.merah;
var colorName = Color[3];
console.log(colorName);
