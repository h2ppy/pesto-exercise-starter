function getTupleFromIndex(sizeOfTuple, list, indexToStartFrom) {
  const endingIndex = indexToStartFrom + sizeOfTuple;
  return list.slice(indexToStartFrom, endingIndex);
}
function aperture(sizeOfTuple, list) {
  if (sizeOfTuple > list.length) {
    return [];
  }
  const indexToStartFrom = 0;
  const result = [];
  while (indexToStartFrom <= list.length - sizeOfTuple) {
    result.push(getTupleFromIndex(sizeOfTuple, list, indexToStartFrom));
  }
  return result;
}


export { aperture };
