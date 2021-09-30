const getRandomInt = function(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

getRandomInt();

const getRandomFractional = function(min, max, afterDecimal) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand + Number(Math.random().toFixed(afterDecimal));
};

getRandomFractional();
