// Input:  [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroLast(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count++;
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}
console.log(moveZeroLast([0, 1, 0, 3, 12]));

// Input: "abcabcbb"
// Output: 3  // "abc"

function findLongest(str) {
  let collectionWords = str.split("");
  let longest = 0;
  let max = 0;
  let result = [];
  for (let i = 0; i < collectionWords.length; i++) {
    for (let j = i; j < collectionWords.length; j++) {
      if (!result.includes(collectionWords[j])) {
        result.push(collectionWords[j]);
        max++;
      } else {
        if (max > longest) {
          longest = max;
        }
        max = 0;
        result = [];
      }
    }
  }
  return longest;
}
console.log(findLongest("abcabcbb"));

// Input: ["eat","tea","tan","ate","nat","bat"]

// Output:
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

function groupAnagram(arr) {
  let result = [[arr[0]]];
  let isFind = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[i][0].includes) {
        result[i].push(arr[i]);
        isFind = true;
      }
    }
    if (!isFind) {
      result.push([arr[i]]);
      isFind = false;
    }
  }

  return result;
}

// console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));

// Input: [1, [2, [3, [4]], 5]]
// Output: [1,2,3,4,5]

function flattenArray(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let returnval = flattenArray(arr[i], result);
      result = [...returnval];
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, [3, [4, [5]]], 6]], []));

// Input: "aabbcdd"
// Output: "c"

function firstNonRepeating(str) {
  let already = [];
  let first = [];
  let charList = str.split("");
  for (let i = 0; i < charList.length; i++) {
    if (already.includes(charList[i])) {
      let idx = first.indexOf(charList[i]);
      first.splice(idx, 1);
      continue;
    } else {
      already.push(charList[i]);
      first.push(charList[i]);
    }
  }
  return first[0];
}
console.log(firstNonRepeating("aabbcdd"));

// debounce function

let input = document.querySelector("input");
let searchInput = debounce(searchData, 2000);

input.addEventListener("input", searchInput);

function searchData(query) {
  console.log(input.value);
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// const obj = { a: { b: { c: 10 } } };
// get(obj, "a.b.c") → 10
// get(obj, "a.b.x") → undefined

function get(obj, findVal) {
  let path = findVal.split(".");
  let result = null;
  for (let i = 0; i < path.length; i++) {
    if (obj.hasOwnProperty(path[i])) {
      result = obj[path[i]];
      obj = result;
    } else {
      return;
    }
  }
  return result;
}
console.log(get({ a: { b: { c: 10 } } }, "a.b.c"));

// deep cloning wihtout some build in method or a feature we can do this

function deepCloning(obj) {
  let result = {};
  for (let val in obj) {
    if (typeof obj[val] == "object") {
      result[val] = deepCloning(obj[val], result);
    } else {
      result[val] = obj[val];
    }
  }
  return result;
}

let obj = {
  name: "lokesh",
  location: {
    lat: 8937,
    lng: 9879,
    written: { written: "lokehs is live here" },
  },
  passion: "Frontend Web Developer",
};

let result = deepCloning(obj);
