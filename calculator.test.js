const calculator = require("./calculator");

test("adds two numbers together", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test("subtracts one number from the other", () => {
  expect(calculator.subtract(3, 2)).toEqual(1);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(2, 4)).toEqual(8);
});

test("divides one number by the other", () => {
  expect(calculator.divide(8, 2)).toEqual(4);
});
