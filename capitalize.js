function capitalize(string) {
  const containsNumber = /[0-9]/.test(string);
  if (containsNumber) {
    return "Input has to be a string";
  }
  return string.split("")[0].toUpperCase() + string.slice(1).toLowerCase();
}

export default capitalize;
