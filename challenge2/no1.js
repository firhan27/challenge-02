//Nomor 1

// Function changeWord menerima tiga parameter: selectedText, changedText, dan text.
function changeWord(selectedText, changedText, text) {
  /*
  Function ini menggunakan const regex yang memiliki parameter selectedText.
  Setelah itu akan ada sebuah kondisi yang akan me-return text.replace yang memiliki dua parameter yaitu regex(selectedText) dan changedText.
  Yang berfungsi untuk mengganti kalimat yang telah di selected(SelectedText) dan akan diganti dengan changedTexted.
  Lalu akan menampilkan parameter text setelah nilai parameter sudah diubah.
  */
  const regex = new RegExp(selectedText);
  return text.replace(regex, changedText);
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
