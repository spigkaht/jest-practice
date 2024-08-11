const capitalize = require("./capitalize");

test("capitalizes the first letter of string", () => {
  expect(capitalize("melbourne")).toBe("Melbourne");
});
test("capitalizes the first letter of string", () => {
  expect(capitalize("mElBOuRne")).toBe("MElBOuRne");
});
