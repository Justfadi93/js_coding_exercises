export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!

  let newarr = Object.values(sandwich.fillings);

  return newarr;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  let newarr = Object.values(person);
  if (newarr.includes("Manchester")) {
    return true;
  } else {
    return false;
  }
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  if (people != 0 && people <= 40) {
    return 1;
  } else if (people > 40 && people <= 80) {
    return 2;
  } else if (people > 80 && people <= 120) {
    return 3;
  } else if (people > 80) {
    return Math.ceil(people / 40);
  } else {
  }
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  var countOfSheeps = arr.filter((x) => x === "sheep").length;
  if (countOfSheeps === 0) {
    return 0;
  } else if (countOfSheeps === 1) {
    return 1;
  } else if (countOfSheeps === 2) {
    return 2;
  } else if (countOfSheeps === 5) {
    return 5;
  } else {
    return countOfSheeps;
  }
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  //let newPerson=person.address.postCode.startsWith("M");

  //console.log("The array is "+newPerson);
  if (person.address.postCode.startsWith("M")) {
    return true;
  } else if (
    person.address.postCode.startsWith("M") &&
    !person.address.city.includes("Manchester")
  ) {
    return false;
  } else {
    return false;
  }
}
