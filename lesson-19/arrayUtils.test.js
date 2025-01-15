const cleanArray = require("./arrayUtils");

describe("clean up an array", () => {
  test("cleans out null and empty strings", () => {
    const input = ["", "hej", null, "", "då", 3];
    const output = ["hej", "då", 3];

    const res = cleanArray(input);
    expect(res).toEqual(output);
  });
});
