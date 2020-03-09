
function lastIndexOf(elementToBeSearched, inputArray) {
  if (!Array.isArray(inputArray)) throw Error('Expected second argument to be array.');
  return inputArray.lastIndexOf(elementToBeSearched);
}

export {
  lastIndexOf,
};
