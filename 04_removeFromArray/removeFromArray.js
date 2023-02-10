const removeFromArray = function(words, trash) {
  args = Array.from(arguments);
  trash = args.slice(1, args.length + 1);
  let result = words.filter((words) => !trash.includes(words));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
