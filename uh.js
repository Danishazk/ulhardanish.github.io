// soal 1 membuat function dgn retun string




function cetakfunction(a){
    return `halo nama saya ` + a
}
console.log(cetakfunction("Danish Azka Rahmat   "));

//no2
function myFunction (a, b){

    return a+b;
}
let angka1 = 20;
let angka2 = 7;
let output = myFunction (angka1, angka2);


console.log(output);

//no 3
function  haii(){
    let a = "Hello"
    return "Hello";
}
let hai = haii((mao) => mao.a === "Hello" )
console.log(hai);


//no 4

let obj = {
    Name    : "john",
    umur    : "22",
    bahasa  : "indonesia",
    showName: function (){
        console.log(`bahasa ${this.bahasa} `);
    }
}
obj.showName();

//o 5

 let arrayDaftarPeserta = ["john doe","laki-laki","1992","baca buku"]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    kelahiran : arrayDaftarPeserta[2],
    hobi : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta);

//no 6

const buah = [
{
    nama : "nanas",
    warna : "kuning",
    adaBijiny : "tidak ada",
    harga : "9000"
},
{
    nama : "jeruk",
    warna : "oren",
    adaBijiny : " ada",
    harga : "8000"
},
{
    nama : "semangka",
    warna : "merah & hijau",
    adaBijiny : "ada",
    harga : "10000"
},
{
    nama : "pisang",
    warna : "kuning",
    adaBijiny : "tidak ada",
    harga : "7000"
},
]
const buahBerbiji = buah.filter ((biji) => biji.adaBijiny == "tidak ada")
console.log(buahBerbiji);