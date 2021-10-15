const getRandomPositiveFloat = (firstNum, secondNum, digits = 1) => {
  const lower = Math.min(Math.abs(firstNum), Math.abs(secondNum));
  const upper = Math.max(Math.abs(firstNum), Math.abs(secondNum));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const getRandomPositiveInteger = (firstNum, secondNum) => {
  const lower = Math.ceil(Math.min(Math.abs(firstNum), Math.abs(secondNum)));
  const upper = Math.floor(Math.max(Math.abs(firstNum), Math.abs(secondNum)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomPositiveFloat, getRandomPositiveInteger};
