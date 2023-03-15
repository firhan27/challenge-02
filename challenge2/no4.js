// Function isValidPassword dengan satu parameter givenPassword
function isValidPassword(givenPassword) {
  // Validasi jika parameter kosong
  if (givenPassword === undefined) {
    return "Error: Parameter tidak boleh kosong";
  }
  // Validasi jika parameter bukan string
  if (typeof givenPassword !== "string") {
    return "Error: Parameter harus berupa string";
  }
  // Inisialisasi variabel untuk validasi karakter password
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(givenPassword);
  const hasLowerCase = /[a-z]/.test(givenPassword);
  const hasNumber = /\d/.test(givenPassword);

  // Return nilai boolean true jika password valid, false jika tidak
  return givenPassword.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
}

// Contoh penggunaan fungsi dengan beberapa input
console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
