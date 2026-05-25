const { getInitials } = require("./function");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Gozzi Manuel")).toBe("G.M.");
  expect(getInitials("gozzi manuel")).toBe("G.M.");
});
