const repeatString = function(word, number) {
  let result = [];

  if (number == 0) {
    result = '';
  } else if (number < 0) {
    result = 'ERROR';
  } else if (word == '') {
    result = '';
  } else {
    for (i = 0; i < number; i++) {
      result += word;
    }
  }

	return result;
};

// Do not edit below this line
module.exports = repeatString;
