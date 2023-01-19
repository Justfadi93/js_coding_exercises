export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  // Your code here!
  let checkArray = Array.isArray(nums) && nums.length === 0;
  // console.log("Here is array"+checkArray);
  if (checkArray == true) {
    return [];
  } else {
    return nums.map((x) => Math.pow(x, 2));
  }
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  // let mewwords = words.split(',');

  let newstr = words.replace(/\b[a-z]/g, (x) => x.toUpperCase());

  console.log("Hello ", newstr);

  // for (let i = 1; i < mewwords.length; i++)
  // {
  //   mewwords[i] = mewwords[i][0].toUpperCase() + mewwords[i].slice(1);
  // }
  // return mewwords.join('');

  // if(words.length>1)
  // {
  //  let newarr= words.split(",");
  //  array.forEach(element => {
  //   newarr.push(element[0].subsubstr( 0, 1 ).toLowerCase() + element.substr( 1 ));

  //   console.log(newarr);
  //   return newarr;
  // });

  // }else{
  //   newarr.push(words.charAt[0].toLowerCase() + words.substr( 1 ));

  //   console.log(newarr);
  //   return newarr;
  // }
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
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
  // Your code here!
  // let result = menu.ingredients.indexOf(ingredient) !== -1;

  let result = menu.ingredients.includes(ingredient);

  console.log("The menu ingredients are: " + result);

  // menu.forEach((element) => {
  //   if (element.ingredients.length > 0) {
  //     element.ingredients[element] == ingredient;
  //     console.log(" The console is  ", element.ingredients[element]);

  //     // console.log(
  //     //   "the ingredients are : " + element.ingredients.includes(ingredient)
  //     // );
  //     // return true;
  //   } else {
  //     // console.log(" Else the ingredients are : " + element.ingredients);
  //     // return false;
  //   }
  //   // menu.some(car => car.color === "red" && car.type === "cabrio");
  // });
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!

  let commonArray = arr1.filter((x) => arr2.includes(x));
  let removeDuplicates = commonArray.filter(
    (item, index) => commonArray.indexOf(item) === index
  );
  return removeDuplicates.sort();

  // console.log("The filtered array is : " + commonArray);

  // return arr1.filter((x) => arr2.includes(x));
}
