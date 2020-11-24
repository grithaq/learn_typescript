// OBJECT //

const lion = {  // cara penulisan object yang ke - 1
    name : "Simba",
    gender : "Male",
}
console.log("mengakses properti name dari object lion : "+lion.name)

const person : { //cara penulisan object yang ke - 2
    name:string;
    age:number;
}= {
    name : "Apip",
    age : 22
}

console.log(person)
console.log(person.name)
console.log(person.age)

// ARRAY //

//Merupakan data yang bersifat flexibel
// declare menggunakan 2 cara --> [] atau Array<elemType>

const angka : number[] = [1,2,3,4,5] // jika memasukan nilai selain number maka akan error
const kata : string[] = ['halo','hai','selamat pagi'] 

console.log('declare menggunakan number array / number[] : '+angka)
console.log('declare menggunakan number array / string[] : '+kata)

const hero = {
    name : 'Arthur',
    gender : 'Male',
    abilities:["Righteous", "Holy Guard", "Deep Impact"], //properti ability memiliki type array string (sting[])
    role : ['tank','warior',1,true] // properti role memiliki type array (string | number| boolean)[]
};
console.log('properti ability ' + hero.abilities);

for (const ability of hero.abilities){
    console.log('ability : '+ability);
}
