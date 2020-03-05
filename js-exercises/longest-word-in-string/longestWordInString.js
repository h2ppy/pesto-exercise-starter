function longestWordInString(inputString) {
  const arrayOfSubstrings = inputString.split(' ');
  let longestWordLength = 0;
  arrayOfSubstrings.forEach(subString => {
    longestWordLength = Math.max(longestWordLength, subString.length);
  });
  return longestWordLength;
}

export { longestWordInString };
