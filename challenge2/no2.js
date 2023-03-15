//Nomor 2

function checkTypeNumber(givenNumber) {
  //Sebagai validasi apakah diberikan parameter atau tidak
  if (givenNumber === undefined) {
    return "Error: Bro where is the parameter?";
  }
  //Jika parameter yang diberikan bukan sebuah angka, maka akan mengeluarkan output "Error: Invalid data type"
  if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  }
  /*
  Jika parameter yang diberikan ketika di modulo 2 dapat menghasilkan angka 0, maka sudah dipastikan bahwa parameter tersebut angka genap.
  Dan itu akan mengembalikan nilai output genap. Lalu jika parameter yang diberikan ketika di modulo 2 menghasilkan angka selain 0, maka sudah
  dipastikan bahwa parameter tersebut angka ganjil.
  */
  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
