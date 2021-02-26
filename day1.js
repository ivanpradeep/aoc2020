'use strict';

/**
 * the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

979
366
299
675
1721
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
 */

const fixExpense = function (arr, sum) {
  const entmap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (entmap.has(arr[i])) {
      const index = entmap.get(arr[i]);
      return arr[index] * arr[i];
    }
    entmap.set(sum - arr[i], i);
  }
  return 'No entries found';
};

//console.log(fixExpense([979, 366, 299, 675, 1721, 1456], 2020));
console.log(
  fixExpense(
    [
      979,
      366,
      299,
      675,
      1722,
      1456,
      1111,
      2222,
      32,
      65,
      78,
      96,
      74,
      85,
      96,
      20,
      312,
      452,
      698,
      475,
      2030,
      100,
      200,
      300,
      400,
      550,
      669,
      6881,
      1721,
    ],
    2020
  )
);
//[979,366,299,675,1721,1456] =2020
//[1041,1654,1721,1345,]
