const sumAll = function(start, end) {
  let result = 0;
  if (start < 0 || end < 0) {
      result = "ERROR";
  } else if (start === String(start) || end === String(end)) {
      result = "ERROR";
  } else if (typeof start === typeof [] || typeof end === typeof []) {
      result = "ERROR";
  } else {
      if (start > end) {
          for (i = end; i <= start; i++) {
              result = result + i;
          }
      } else if (start < end) {
          for (i = start; i <= end; i++) {
              result = result + i;
          }
      }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
