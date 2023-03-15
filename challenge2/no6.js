// Function untuk mencari angka terbesar kedua dalam sebuah array
function getAngkaTerbesarKedua(dataNumbers) {
  // Validasi parameter input harus berupa array
  if (!Array.isArray(dataNumbers)) {
    return "Parameter harus berupa array";
  }
  // Validasi parameter input tidak boleh kosong
  if (!dataNumbers || dataNumbers.length === 0) {
    return "Parameter tidak boleh kosong";
  }
  // Validasi array harus memiliki minimal 2 angka
  if (dataNumbers.length < 2) {
    return "Array harus memiliki minimal 2 angka";
  }

  const uniqueNumbers = [...new Set(dataNumbers)]; // Menghapus duplikat angka
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a); // Mengurutkan angka dari terbesar ke terkecil
  return sortedNumbers[1]; // Mengambil angka terbesar kedua
}

// Contoh penggunaan function getAngkaTerbesarKedua
const dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataNumbers));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
