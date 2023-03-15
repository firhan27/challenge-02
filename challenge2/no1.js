//Nomor 1

// Function changeWord menerima tiga parameter: selectedText, changedText, dan text.
function changeWord(selectedText, changedText, text) {
  /*
  Function ini menggunakan RegExp constructor untuk membuat regular expression baru dengan opsi "gi" (g = global dan i = case-insensitive).
  Global akan mencari seluruh kemunculan selectedText pada text. Case-insensitive akan mencocokkan teks tanpa
  memperdulikan huruf besar atau kecil. 
  */
  const regex = new RegExp(selectedText, "gi");
  return text.replace(regex, changedText);
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
