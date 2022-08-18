const ftoc = function (f) {
  /*let cels;
  let temp = (temperature - 32) * (5 / 9);
  if (Number.isInteger(temp)) {
    cels = temp;
  } else {
    cels = Math.round(temp * 10) / 10;
  }

  return cels;*/
  return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (c) {
  /*let fahr;
  let temp = 32 + temperature * (9 / 5);
  if (Number.isInteger(temp)) {
    fahr = temp;
  } else {
    fahr = Math.round(temp * 10) / 10;
  }
  return fahr;*/
  return Math.round(((c * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
