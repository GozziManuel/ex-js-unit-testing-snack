// snack 1
function getInitials(name) {
  const parole = name.split(" ");
  const letteraUno = parole[0].charAt(0).toUpperCase();
  const letteraDue = parole[1].charAt(0).toUpperCase();
  return `${letteraUno}.${letteraDue}.`;
}

// snack 2 & 4 & 6
function createSlug(string, postArray) {
  let contatore = 0;
  if (Array.isArray(string)) {
    const postSlug = string.map((el) => el.slug);
    const newPostSlug = postArray.map((el) => el.slug);
    const findingSameSlug = newPostSlug.forEach((element) => {
      if (postSlug.includes(element) === true) {
        contatore++;
      }
      return contatore;
    });
    return contatore;
  } else {
    const lowerString = string.toLowerCase();
    const array = lowerString.split(" ");
    if (string.trim() === "") {
      throw new Error("error title not valid");
    } else if (array.length > 0) {
      return array.join("-");
    } else {
      return lowerString;
    }
  }
}

// snack 3
function avarage(arrayNumber) {
  return arrayNumber.reduce((acc, num) => acc + num / arrayNumber.length, 0);
}

// snack 5
function isPalindrome(string) {
  const arrayString = string.split("");
  const reverseString = arrayString.reverse().join("").toLowerCase();

  return reverseString === string.toLowerCase();
}

// snack 7
function findPostById(array, number) {
  if (isNaN(number)) {
    throw new Error("id is not a number");
  }
  return array.find((el) => el.id === number) || null;
}

// Bonus 1 & bonus 2
function addPost(posts, post) {
  const arrayIds = posts.map((el) => el.id);
  const arraySlug = posts.map((el) => el.slug);

  if (arrayIds.includes(post.id) || arraySlug.includes(post.slug)) {
    throw new Error("id o slug già esistenti");
  }
  posts.push(post);
  return posts;
}
function removePost(posts, id) {
  return posts.filter((el) => el.id !== id).length;
}
module.exports = {
  getInitials,
  createSlug,
  avarage,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
};
