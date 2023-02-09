const reverseString = function(word) {
	let result = [];
	
	if (word == '') {
		return result = '';
	} else {
		for (i = 1; i <= word.length; i++) {
			result = result + word.substr(i - (i + i) ,1);
		}
	}

	return result;
};

// Do not edit below this line
module.exports = reverseString;
