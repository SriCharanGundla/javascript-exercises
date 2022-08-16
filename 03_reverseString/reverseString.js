const reverseString = function (string) {
  let reverse = "";
  let stringArray = Array.from(string);
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += stringArray[i];
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
