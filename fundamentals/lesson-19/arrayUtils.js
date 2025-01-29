const cleanArray = (array) => {
  const result = array.filter((item) => item !== null && item !== "");
  return result;
};

module.exports = cleanArray;
