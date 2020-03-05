const leftRotate = (string, rotateBy) => {
  const rotatedString1 = string.substring(rotateBy) + string.substring(0, rotateBy);
  return rotatedString1;
};
const rotatedString = (string1, string2) => {
  if (string1.length !== string2.length) { return false; }

  if (string1 === string2) { return false; }

  let isRotated;

  for (let i = 1; i < string2.length; i += 1) {
    const leftRotatedStringByi = leftRotate(string2, i);
    if (string1 === leftRotatedStringByi) {
      isRotated = true;
      return isRotated;
    }
    isRotated = false;
  }
  return isRotated;
};

export { rotatedString };
