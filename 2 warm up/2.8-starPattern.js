/*
// let n = 4;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row + " * ";
  }
  // console.log(row);
}


 *  *  *  *
 *  *  *  *
 *  *  *  *
 *  *  *  *

 */
//---------------------------------
/*
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + " * ";
  }
  // console.log(row);
}


  *
  *  *
  *  *  *
  *  *  *  *

 */
//---------------------------------
/*
for (let i = 0; i < 5; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  // console.log(row);
}

 1
 12
 123
 1234
 12345
*/
//---------------------------------

/*
let num1 = 5;
for (let i = 0; i < num1; i++) {
  row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}
//  1
//  22
//  333
//  4444
//  55555
*/

//---------------------------------
/*
let n = 5;

// 1st method

for (let i = n; i > 0; i--) {
  let row = " ";
  for (let j = 0; j < i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// 2nd method
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1); // if j + 1 = " * " so star
  }
  console.log(row);
}

//  12345
//  1234
//  123
//  12
//  1
*/
//---------------------------------
/*
let n = 5;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - (i + 1); j++) {
    row += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row += "*";
  }
  console.log(row);
}
//      *
//     **
//    ***
//   ****
//  *****

*/
//---------------------------------
/*
let n = 6;
for (let i = 0; i < n; i++) {
  let row = " ";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}
//  1
//  10
//  101
//  1010
//  10101
//  101010
*/
//---------------------------------

let toggle = 1;
for (let i = 0; i < 5; i++) {
  let row = " ";
  for (let j = 0; j < i; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}
