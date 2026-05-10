// Find Smallest In a Array

let array = [-4, -54, -23, 454, 34343, 3454, 534, -343];

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallest(array));
