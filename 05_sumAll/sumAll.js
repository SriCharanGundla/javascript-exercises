const sumAll = function (a, b) {
  let max, min;
  max = a > b ? a : b;
  min = a < b ? a : b;
  if (min < 0 || max < 0) {
    return "ERROR";
  } else if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  } else {
    let sum = 0;
    let i;
    for (i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
