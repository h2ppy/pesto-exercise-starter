const PUSH = 1;
const POP = 0;
function checkForBracesAndGetOperation(character) {
  if (character === '{' || character === '(' || character === '[') return PUSH;
  return POP;
}
function isMatchingPair(char1, char2) {
  if (char1 === '(' && char2 === ')') return true;
  if (char1 === '{' && char2 === '}') return true;
  if (char1 === '[' && char2 === ']') return true;
  return false;
}
function balancedBraces(string) {
  const onlyBracesString = string.replace(/[^{}()\[\]]/g, '');
  const stack = [];
  for (let i = 0; i < onlyBracesString.length; i += 1) {
    const element = onlyBracesString[i];
    const stackOperation = checkForBracesAndGetOperation(element);
    if (stackOperation) stack.push(element);
    else {
      if (!stack.length) return false;
      if (stack.length) {
        const poppedElement = stack.pop();
        if (!isMatchingPair(poppedElement, element)) return false;
      }
    }
  }

  if (stack.length) return false;
  return true;
}

export {
  balancedBraces,
};
