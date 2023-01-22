export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallNumberArray;
  smallNumberArray = nums.filter((x) => x < 1);
  // smallNumberArray = Object.values(nums.filter((x) => x < 1));

  return smallNumberArray;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let namesArray = [];
  namesArray = names.filter((x) => x.startsWith(char));
  return namesArray;
  // console.log(namesArray);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let verbsArray = [];
  verbsArray = words.filter((x) => x.startsWith("to "));

  // console.log("The verbs are: " + verbsArray);
  return verbsArray;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let integerArray = [];
  integerArray = nums.filter((x) => Number.isInteger(x));
  return integerArray;
}

//tough one
export function getCities(users) {
  if (!users) throw new Error("users is required");

  let newcities = [];
  // newcities = users
  //   .filter((x) => x.data.city)
  //   .map(({ city: { displayName } }) => city);

  newcities = users.map(
    ({
      data: {
        city: { displayName },
      },
    }) => displayName
  );
  return newcities;
  // console.log("The cities are: " + newcities);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  // let num1 = [9, 77, 12];
  let squareRootArray = [];
  squareRootArray = nums.map((x) => Math.sqrt(x));

  let toDecmialArray = squareRootArray;
  // toDecmialArray.map((x) => Math.round(x * 100) / 100);

  let len = toDecmialArray.length;
  let x = 0;

  while (x < len) {
    toDecmialArray[x] = Math.round(toDecmialArray[x] * 100) / 100;
    x++;
  }

  // console.log("Hello : " + toDecmialArray);

  return toDecmialArray;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let regex = new RegExp(str, "i");

  return sentences.filter((x) => x.includes(x.match(regex)));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let longestSides = triangles.map((sides) => Math.max.apply(null, sides));

  return longestSides;
}
