// snack 1

const { getInitials, createSlug, avarage } = require("./function");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Gozzi Manuel")).toBe("G.M.");
  expect(getInitials("gozzi manuel")).toBe("G.M.");
});

// Snack 2

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("StrIngA")).toBe("stringa");
});

// snack 3

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  const result = avarage([1, 5, 3, 6, 10]);
  expect(result).toBe(5);
});

// snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
  const result = createSlug("test stringa join");
  expect(result).toBe("test-stringa-join");
});
