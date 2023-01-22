export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // let newarr = Object.values(sandwich.fillings);
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester" ? true : false;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  var countOfSheeps = arr.filter((x) => x === "sheep").length;

  return countOfSheeps === 0 ? 0 : countOfSheeps;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  let postCode = person.address.postCode;

  const manchesterPostcodes = [
    "M1",
    "M2",
    "M3",
    "M4",
    "M5",
    "M11",
    "M12",
    "M13",
    "M14",
    "M15",
    "M16",
    "M17",
    "M18",
    "M19",
    "M20",
    "M21",
    "M22",
    "M23",
    "M24",
    "M25",
    "M26",
    "M27",
    "M28",
    "M29",
    "M30",
    "M31",
    "M32",
    "M33",
    "M34",
    "M35",
    "M38",
    "M40",
    "M41",
    "M43",
    "M44",
    "M45",
    "M46",
    "M50",
    "M60",
    "M90",
    "M99",
  ];

  // switch (postCode) {
  //   case postCode.startsWith("M") || manchesterPostcodes.includes(postCode):
  //     return true;

  //   case postCode.startsWith("M") && !manchesterPostcodes.includes(postCode):
  //     return false;

  //   case !postCode.startsWith("M"):
  //     return false;
  // }

  if (postCode.startsWith("M") && manchesterPostcodes.includes(postCode)) {
    return true;
  }
  if (postCode.startsWith("M") && !manchesterPostcodes.includes(postCode)) {
    return false;
  }
  if (!postCode.startsWith("M")) {
    return false;
  }
}
