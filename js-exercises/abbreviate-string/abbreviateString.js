import { isString } from 'util';

function abbreviateString(input) {
  if (!isString(input)) throw Error('Input is not string');
  const subStringArray = input.split(' ');
  const firstWord = subStringArray[0];
  const lastWord = subStringArray[subStringArray.length - 1];
  const abbreviatedString = `${firstWord} ${lastWord.charAt(0).toUpperCase()}.`;
  return abbreviatedString;
}

export { abbreviateString };
