const caeserCipher = require("./caeserCipher");

test("converts ciphered string with shift of provided shift value", () => {
  expect(caeserCipher("The quick brown fox", 7)).toBe("Aol xbpjr iyvdu mve");
})
