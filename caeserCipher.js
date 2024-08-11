function caeserCipher(string, shift) {
  // num = string.charCodeAt(0);
  // char = String.fromCharCode(num);
  const map = string.split("").map(x => x.charCodeAt(0));
  console.log(map);
}

module.exports = caeserCipher;
