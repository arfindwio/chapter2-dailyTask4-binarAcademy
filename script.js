// import sum from "./penjumlahan";

const { sum, sum2 } = require("./penjumlahan");
const { kurang, kurang2 } = require("./pengurangan");
const { kali } = require("./perkalian");
const { bagi } = require("./pembagian");
const { hargaTotal } = require("./hargaTotal");

// console.log(sum(10, 100));
// console.log(sum2(20, 200, 2000));

// console.log(kurang(100, 10));
// console.log(kurang2(1000, 100, 10));

const readline = require("readline");
const { hargaTotal } = require("./hargaTotal");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What is your name? ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

// 1 hasil tambah inputan user (done)
rl.question("Angka pertama yang mau di jumlahkan? ", (angka1) => {
  rl.question("Angka kedua yang mau di jumlahkan? ", (angka2) => {
    const hasil1 = sum(parseInt(angka1), parseInt(angka2));
    console.log(`hasil dari penjumlahan ${angka1} and ${angka2} adalah ${hasil1}`);

    rl.close();
  });
});

// 2 hasil kurang inputan user
rl.question("Angka pertama yang mau di kurangkan? ", (angka1) => {
  rl.question("Angka kedua yang mau di kurangkan? ", (angka2) => {
    const hasil2 = kurang(parseInt(angka1), parseInt(angka2));
    console.log(`hasil dari pengurangan ${angka1} and ${angka2} adalah ${hasil2}`);

    rl.close();
  });
});

// 3 hasil kali inputan user
rl.question("Angka pertama yang mau di kalikan? ", (angka1) => {
  rl.question("Angka kedua yang mau di kalikan? ", (angka2) => {
    const hasil3 = kali(parseInt(angka1), parseInt(angka2));
    console.log(`hasil dari perkalian ${angka1} and ${angka2} adalah ${hasil3}`);

    rl.close();
  });
});

// 4 hasil bagi inputan user
rl.question("Angka pertama yang mau di bagikan? ", (angka1) => {
  rl.question("Angka kedua yang mau di bagikan? ", (angka2) => {
    const hasil4 = bagi(parseInt(angka1), parseInt(angka2));
    console.log(`hasil dari pembagian ${angka1} and ${angka2} adalah ${hasil4}`);

    rl.close();
  });
});

// 5 hasil total harga kali quantitas barang
rl.question("Angka pertama untuk total harga? ", (price) => {
  rl.question("Angka kedua untuk quantity? ", (quantity) => {
    const hasil5 = hargaTotal(parseInt(price), parseInt(quantity));
    console.log(`hasil dari Total Harga ${price} and ${quantity} adalah ${hasil5}`);

    rl.close();
  });
});
