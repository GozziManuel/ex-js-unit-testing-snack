const {
  getInitials,
  createSlug,
  avarage,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
} = require("./function");

// Array posts
let posts;

// snack 1

describe("Prendi le iniziali", () => {
  test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Gozzi Manuel")).toBe("G.M.");
    expect(getInitials("gozzi manuel")).toBe("G.M.");
  });
});

// Snack 2 & 4 & 6
describe("Using slug in different method", () => {
  test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("StrIngA")).toBe("stringa");
  });
  test("La funzione createSlug sostituisce gli spazi con -.", () => {
    const result = createSlug("test stringa join");
    expect(result).toBe("test-stringa-join");
  });
  test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("error title not valid");
  });
  test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.", () => {
    expect(
      createSlug(posts, [
        {
          id: 1,
          title: "Introduzione a JavaScript",
          slug: "introduzione-a-javascript",
        },
        {
          id: 2,
          title: "Come usare gli Array di Oggetti",
          slug: "come-usare-gli-array",
        },
        {
          id: 3,
          title: "Guida pratica a Node.js",
          slug: "guida-pratica-a-node",
        },
      ]),
    ).toBe(1);
  });
});

// snack 3
describe("somma dell'array", () => {
  test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const result = avarage([1, 5, 3, 6, 10]);
    expect(result).toBe(5);
  });
});

// snack 5
describe("stringa palindroma", () => {
  test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Anna")).toBe(true);
    expect(isPalindrome("Paolo")).toBe(false);
  });
});

// snack 7

describe("using array object with find", () => {
  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 3)).toEqual({
      id: 3,
      title: "Guida pratica a Node.js",
      slug: "guida-pratica-a-node-js",
    });
    expect(() => findPostById(posts, "Stringa")).toThrow("id is not a number");
    expect(findPostById(posts, 5)).toBe(null);
    expect(() => findPostById(posts, [3, 4, 1])).toThrow("id is not a number");
  });
});

// BONUS 1 & bonus 2
beforeEach(() => {
  posts = [
    {
      id: 1,
      title: "Introduzione a JavaScript",
      slug: "introduzione-a-javascript",
    },
    {
      id: 2,
      title: "Come usare gli Array di Oggetti",
      slug: "come-usare-gli-array-di-oggetti",
    },
    {
      id: 3,
      title: "Guida pratica a Node.js",
      slug: "guida-pratica-a-node-js",
    },
  ];
});

afterEach(() => {
  posts = [];
});

test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
  expect(
    addPost(posts, {
      id: 4,
      title: "Guida pratica a vite.js",
      slug: "guida-pratica-a-vite-js",
    }),
  ).toHaveLength(4);
});

test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
  expect(removePost(posts, 2)).toBe(2);
});

test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
  expect(() =>
    addPost(posts, {
      id: 2,
      title: "Guida pratica a vite.js",
      slug: "guida-pratica-a-vite-js",
    }),
  ).toThrow("id o slug già esistenti");
  expect(() =>
    addPost(posts, {
      id: 4,
      title: "Guida pratica a vite.js",
      slug: "come-usare-gli-array-di-oggetti",
    }),
  ).toThrow("id o slug già esistenti");
});

// Bonus 3
