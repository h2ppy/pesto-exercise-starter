const getDeletionsToMakeAlternatingString = string => {
  let deletionCount = 0;
  for (let i = 0; i < string.length; i += 1) {
    const presentCharacter = string[i];
    const nextCharacter = string[i + 1];
    if (presentCharacter === nextCharacter) deletionCount += 1;
  }
  return deletionCount;
};
function alternatingCharacters(arrayOfStrings) {
  const deletionCountArray = [];
  arrayOfStrings.forEach(string => {
    deletionCountArray.push(getDeletionsToMakeAlternatingString(string));
  });
  return deletionCountArray;
}

export { alternatingCharacters };
