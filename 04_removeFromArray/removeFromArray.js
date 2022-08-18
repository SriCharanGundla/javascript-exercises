const removeFromArray = function (arr, ...args) {
  /*let len = arr.length;
  const newArr = [];
  let j = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] != arg1) {
      newArr[j] = arr[i];
      j++;
    }
  }*/
  args.forEach((arg) => {
    const index = arr.indexOf(arg);
    if (index > -1) {
      arr.splice(index, 1);
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
