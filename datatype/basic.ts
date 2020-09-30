// Output message
console.log('Hai gaess.. ketemu lagi bersama jarwo..');
const greeting=(person:string) => {
    console.log('Good day ' +person);
};
greeting('Apip');
// String //
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

let sentence1: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
" years old next month.";

let color:string = 'red';
color='blue';

/* NUMBER */
let decimal:number = 6;
let hex : number = 0xf00d;
let binary :number = 0b1010;
let octal : number = 0o744;
// let biginteger : number = 1234567890123456789012345678901234567890n;

// Array //
let list : number[]=[1,2,3];
let list2 :Array<number>=[4,5,6];

let jumlah : number = list[0]+list2[2];

let list3 : Array<unknown> = ['Hallo',1,true,4.2]

// TUPLE //
let x : [string,number];
x = ['Apip',10];

// ENUM
enum Color {
    Red = 1,
    Green=3,
    Blue=5,
};
let c : Color = Color.Green;

enum Warna {
    merah = 'Merah',
    biru = 'Biru',
    kuning = 'Kuning',
};
let w : Warna = Warna.merah;
let colorName : string = Color[3];
console.log(colorName);


