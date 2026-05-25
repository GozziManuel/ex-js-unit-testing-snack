function getInitials(name) {
  const parole = name.split(" ");
  const letteraUno = parole[0].charAt(0).toUpperCase();
  const letteraDue = parole[1].charAt(0).toUpperCase();
  return `${letteraUno}.${letteraDue}.`;
}

module.exports = { getInitials };
