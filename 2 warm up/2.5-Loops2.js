// Find Smallest In a Array

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

// console.log(findSmallest(array));
//----------------------------------------------------------

// Find Second Largest

let array = [-12, 43, 23, 233, 2354];

function findSecondLargest(arr) {
  let firstLargest = -Infinity; 
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(findSecondLargest(array));
