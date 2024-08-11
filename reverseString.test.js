const reverseString = require("./reverseString");

test("reverses all characters of string", () => {
  expect(reverseString("the quick brown fox")).toBe("xof nworb kciuq eht");
})
test("reverses all characters of string", () => {
  expect(reverseString("The quick brown fox!")).toBe("!xof nworb kciuq ehT");
})
