export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let index = nums.indexOf(n);
  if (nums[index] === n) {
    if (index !== nums.length - 1) {
      return nums[index + 1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  let count = str.split("").reduce(
    function (acc, cur) {
      if (cur === "1") {
        acc[1]++;
      } else if (cur === "0") {
        acc[0]++;
      }
      return acc;
    },
    { 1: 0, 0: 0 }
  );
  return count;
  // console.log('The Count of 0 and 1 are: ' + JSON.stringify(count)); // {ones: 6, zeros: 16}
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  let reversed = n.toString().split("").reverse().join("");
  return Number(reversed);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  let conCatArray = [];
  arrs.map((x) => conCatArray.push(...x));
  let sumArray = conCatArray.reduce((acc, curr) => acc + curr, 0);

  return sumArray;
  // console.log("The mix array is : " + sumArray);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length < 2) return arr;
  let first = arr.shift();
  let last = arr.pop();
  arr.unshift(last);
  arr.push(first);
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  // val.toLowerCase().includes(search) || val.includes(search);
  let regex = new RegExp(searchTerm, "i");

  return Object.values(haystack).some((val) =>
    val.toString().includes(searchTerm)
  );
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  let s = str.replace(/[^\w\s]/gi, "");
  let words = s.toLowerCase().match(/\b[a-z']+\b/g);
  let frequency = {};

  //Alternative way via for loop

  // for (var i = 0; i < words.length; i++) {
  //   var word = words[i];
  //   if (frequency[word]) {
  //     frequency[word]++;
  //   } else {
  //     frequency[word] = 1;
  //   }
  // }

  words.forEach((w) => {
    frequency[w] = frequency[w] || 0;
    frequency[w]++;
  });

  return frequency;
};
