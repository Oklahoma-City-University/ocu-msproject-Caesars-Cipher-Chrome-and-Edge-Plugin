function encrypt(key) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetCAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let user_input = document.getElementById("inputField").value;
  let new_str = "";

  for (let i = 0; i < user_input.length; i++) {
    letter = user_input[i]
    if (alphabet.includes(letter)) {
      new_str += alphabet[((alphabet.indexOf(letter) + Number(key)) % 26)];
    }
    else if (alphabetCAP.includes(letter)) {
      new_str += alphabetCAP[((alphabetCAP.indexOf(letter) + key) % 26)];
    }
    else {
      new_str += letter;
    }
  }
  document.getElementById("outputField").value = new_str;
}

function copyClipboard() {
    navigator.clipboard.writeText(outputField.value);
}

document.getElementById("encryptButton").addEventListener("click", function() {
  encrypt(Number(document.getElementById("numbers").value))
});
document.getElementById("decryptButton").addEventListener("click", function() {
  encrypt(26 - Number(document.getElementById("numbers").value))
});
document.getElementById("copyToClipboardButton").addEventListener("click", copyClipboard);