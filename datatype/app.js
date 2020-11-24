// OBJECT //
var lion = {
    name: "Simba",
    gender: "Male"
};
console.log("mengakses properti name dari object lion : " + lion.name);
var person = {
    name: "Apip",
    age: 22
};
console.log(person);
console.log(person.name);
console.log(person.age);
// ARRAY //
//Merupakan data yang bersifat flexibel
// declare menggunakan 2 cara --> [] atau Array<elemType>
var angka = [1, 2, 3, 4, 5]; // jika memasukan nilai selain number maka akan error
var kata = ['halo', 'hai', 'selamat pagi'];
console.log('declare menggunakan number array / number[] : ' + angka);
console.log('declare menggunakan number array / string[] : ' + kata);
var hero = {
    name: 'Arthur',
    gender: 'Male',
    abilities: ["Righteous", "Holy Guard", "Deep Impact"],
    role: ['tank', 'warior', 1, true] // properti role memiliki type array (string | number| boolean)[]
};
console.log('properti ability ' + hero.abilities);
for (var _i = 0, _a = hero.abilities; _i < _a.length; _i++) {
    var ability = _a[_i];
    console.log('ability : ' + ability);
}
