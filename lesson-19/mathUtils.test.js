const { add, divide } = require("./mathUtils");

describe("testing math stuff", () => {
  test("add two numbers", () => {
    const result = add(2, 4);
    expect(result).toBe(6);
  });

  test("only accept numbers", () => {
    const result = () => add("a", 2);
    expect(result).toThrow("The value recieved was not a number");
  });

  test("divide two numbers", () => {
    const result = divide(4, 2);
    expect(result).toBe(2);
  });

  test("only accept dividable numbers", () => {
    const result = () => divide(7, 2);
    expect(result).toThrow("Cannot divide number");
  });
});
