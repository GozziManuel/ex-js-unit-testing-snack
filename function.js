// snack 1
function getInitials(name) {
  const parole = name.split(" ");
  const letteraUno = parole[0].charAt(0).toUpperCase();
  const letteraDue = parole[1].charAt(0).toUpperCase();
  return `${letteraUno}.${letteraDue}.`;
}

// snack 2
function createSlug(string) {
  const lowerString = string.toLowerCase();
  const array = lowerString.split(" ");
  if (array.length > 0) {
    return array.join("-");
  } else {
    return lowerString;
  }
}

// snack 3
function avarage(arrayNumber) {
  return arrayNumber.reduce((acc, num) => acc + num / arrayNumber.length, 0);
}
module.exports = { getInitials, createSlug, avarage };
