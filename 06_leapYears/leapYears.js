const leapYears = function (year) {
  /*let bool = false;
  if (year % 4 === 0) {
    bool = true;
    if (year % 100 == 0) {
      bool = false;
      if (year % 400 === 0) {
        bool = true;
      }
    }
  }
  return bool;*/
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
