function reverseSring(string) {
  if (Number(string)) return "Input has to be a string";
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
}

export default reverseSring;
