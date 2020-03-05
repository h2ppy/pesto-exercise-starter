const decodeCharacter = (character) => {
  const rotShifter = 13;
  if (!character.match(/[A-Z]/)) return character;

  if (character.charCodeAt() >= 78) return String.fromCharCode((character.charCodeAt() - rotShifter));
  return String.fromCharCode((character.charCodeAt() + rotShifter));
};


function rot13(stringToDecode) {
  const charactersArray = stringToDecode.split('');
  const decodedCharactersArray = charactersArray.map(decodeCharacter);
  return decodedCharactersArray.join('');
}

export {
  rot13,
};
