// *** LINK FOR THE CHALLENGES *** 
// http://csbin.io/callbacks

// console.log('Hello, world!');

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const result = [];

  for (let num of array) {
    result.push(callback(num));
  }

  return result;
}

function addTwo(num) {
  return num + 2;
}

// console.log(map([1, 2, 3, 4, 5, 6], addTwo));


// Challenge 4
function forEach(array, callback) {
  for (let num of array) {
    callback(num);
  }
}

// see for yourself if your forEach works!
forEach([1,2,3,4,5], function(num) { console.log(num)})


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const result = [];

  forEach(array, (num) => result.push(callback(num)));

  return result;
}

// console.log(mapWith([1,2,3,4,5], addTwo));


//Extension 2
function reduce(array, callback, initialValue) {
  for (let num of array) {
    initialValue = callback(initialValue, num);
  }

  return initialValue;
}

const add = (a,b) => a + b;

// console.log(reduce([1,2,3], add, 1));


// Extension 3
function intersection(...arrays) {
  function compareArrays(arr1, arr2) {
    let result = [];

    for (let num of arr2) {
      if (arr1.indexOf(num) > -1) {
        result.push(num)
      }
    }

    return result;
  }

  return reduce(arrays, compareArrays, arrays[0]);
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


//Extension 4
function union(...arrays) {
  const flattened = arrays.flat();
  // console.log(flattened);

  const result = [];

  flattened.forEach(function(item) {
    if(result.indexOf(item) < 0) {
      result.push(item);
    }
  });

  return result;
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


//Extension 5
function objOfMatches(array1, array2, callback) {
  const obj = {};

  array1.forEach(el => {
    if(array2.indexOf(callback(el)) !== -1) {
      obj[el] = callback(el);
    }
  });

  return obj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const obj = {};

  arrVals.forEach(el => {
    let arr = [];

    for (let callback of arrCallbacks) {
      arr.push(callback(el));
    }

    obj[el] = arr;
  });

  return obj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }