const decodeCharacter = (char) => {
  const rotShifter = 13;
  if (!char.match(/[A-Z]/)) return char;

  if (char.charCodeAt() >= 78) 
    return String.fromCharCode((char.charCodeAt() - rotShifter));
  else 
    return String.fromCharCode((char.charCodeAt() + rotShifter));
};


function rot13(stringToDecode) {
  const charactersArray = stringToDecode.split('');
  const decodedCharactersArray = charactersArray.map(decodeCharacter);
  return decodedCharactersArray.join('');
}

export {
  rot13,
};
