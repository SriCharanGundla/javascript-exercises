const ftoc = function (temperature) {
  let cels;
  let temp = (temperature - 32) * (5 / 9);
  if (Number.isInteger(temp)) {
    cels = temp;
  } else {
    cels = Math.round(temp * 10) / 10;
  }

  return cels;
};

const ctof = function (temperature) {
  let fahr;
  let temp = 32 + temperature * (9 / 5);
  if (Number.isInteger(temp)) {
    fahr = temp;
  } else {
    fahr = Math.round(temp * 10) / 10;
  }
  return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
