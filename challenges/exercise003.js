export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let checkArray = Array.isArray(nums) && nums.length === 0;
  if (checkArray == true) {
    return [];
  } else {
    return nums.map((x) => Math.pow(x, 2)); // calculating squares of every number
  }
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  // let newstr = words.replace(/\b[a-z]/g, (x) => x.toUpperCase());

  let camelCase = words.replace(/(\s+\w)/g, function (match) {
    return match[1].toUpperCase();
  });

  console.log("Hello ", camelCase);
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let subjectCounter = 0;
  let newarr = people.filter((x) => x.subjects.length);
  if (newarr.length == 0) {
    return 0;
  } else if (newarr.length == 1) {
    return 1;
  } else {
    people.forEach((element) => {
      subjectCounter += element.subjects.length;
    });

    return subjectCounter;
    // console.log("The subjects are: " + newarr.length);
  }
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  return menu.some((item) => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let commonArray = arr1.filter((x) => arr2.includes(x));
  let removeDuplicates = commonArray.filter(
    (item, index) => commonArray.indexOf(item) === index
  );
  return removeDuplicates.sort();
}
