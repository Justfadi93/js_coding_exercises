// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

// let a="asdklasnd";
// a.charAt(0);

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  const para = word.substring(0, 1).toUpperCase();

  return para + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return (
    firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase()
  );
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  let finalvalue = (vatRate / 100) * originalPrice;

  if (Number.isInteger(originalPrice)) {
    finalvalue = finalvalue + originalPrice;
    return finalvalue;
  } else {
    finalvalue = finalvalue + originalPrice;

    let newvalue = numberRoundDecimal(finalvalue, 2);
    return newvalue;
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  originalPrice = originalPrice.toFixed(2);
  let reducevalue = (reduction / 100) * originalPrice;

  originalPrice = originalPrice - reducevalue;

  let newvalue = numberRoundDecimal(originalPrice, 2);
  return newvalue;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let strlength = str.length;

  if (strlength % 2 == 0) {
    strlength = strlength / 2;
    let result = str.substring(strlength - 1, strlength + 1);
    return result;
  } else {
    strlength = strlength / 2;
    let result = str.substring(strlength, strlength + 1);
    return result;
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  // return reverseWord(words);

  return words.split("").reverse().join("");
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  const count = users.filter((item) => item.type === "Linux").length;

  if (count > 0) {
    return count;
  } else {
    return 0;

    // console.log(0);
  }
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let mean = 0;
  let scoreLength = scores.length;
  let sum = scores.reduce(function (a, b) {
    return a + b;
  });
  mean = sum / scoreLength;
  if (mean.isInteger) {
    return mean;
  } else {
    let newmean = numberRoundDecimal(mean, 2);
    return newmean;
  }
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 != 0) {
    return "fizz";
  }
  if (n % 5 === 0 && n % 3 != 0) {
    return "buzz";
  }
  if (n % 3 != 0 && n % 5 != 0) {
    return n;
  }
  if (n % 3 === 0 && n % 5 === 0) {
    // console.log("fizbuzz number"+n);
    return "fizzbuzz";
  }
}

// Round any number value to 2 decimals. it will take 2 arguments (Number, decimals points)
function numberRoundDecimal(num, decimals) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
