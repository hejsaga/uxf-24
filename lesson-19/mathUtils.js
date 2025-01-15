const add = (a, b) => {
  if (isNaN(a || b)) throw new Error("The value recieved was not a number");
  return a + b;
};

const divide = (a, b) => {
  if (a % b !== 0) throw new Error("Cannot divide number");
  return a / b;
};

module.exports = { add, divide };
