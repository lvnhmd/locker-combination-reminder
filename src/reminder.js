const { sum } = require('lodash');
// function getCombinations(coins, change, purse, bag) {
//   if (change == 0) {
//     bag.push(purse);
//     console.log('Could it be ', purse);
//     // if (
//     //   purse.length === 5 &&
//     //   new Set(purse).size < 5 &&
//     //   purse[0] * purse[1] === 24 &&
//     //   purse[3] * 3 === purse[1] &&
//     //   purse[3] + purse[4] === purse[0] + purse[2]
//     // ) {
//     //   return purse;
//     // }

//     purse = [];
//     return 1;
//   }

//   if (change < 0) {
//     return 0;
//   }

//   for (var i = 0; i < coins.length; i++) {
//     // if purse have got more than 5 coins,
//     getCombinations(coins, change - coins[i], purse.concat(coins[i]), bag);
//   }

//   return bag;
// }

// n coins of given denominations
// const coins = [1, 2, 3, 4, 5]; //, 5, 6, 7, 8, 9];

// Total Change required
// const change = 20;

// console.log(">>>> ", getCombinations(coins, change, [], []));

//     // if (
//     //   combination.length === 5 &&
//     //   new Set(combination).size < 5 &&
//     //   combination[0] * combination[1] === 24 &&
//     //   combination[3] * 3 === combination[1] &&
//     //   combination[3] + combination[4] === combination[0] + combination[2]
//     // ) {
//     //   lock = combination;
//     //   console.log('*** LOCK ', lock);
//     // } else {
//     //   combination = getCombination(digits, 26);
//     // }

//   console.log('----------------LOCK--------------------------', locks);
// // };

// // remind();

//   purse.length === 5 &&
//   new Set(purse).size < 5 &&
//   purse[0] * purse[1] === 24 &&
//   purse[3] * 3 === purse[1] &&
//   purse[0] + purse[2] === purse[3] + purse[4]
//   sum(purse) === 26
// based on the rules, what is the first digit likely to be ?
// which of the digits[0,1,2,3,4,5,6,7,8,9] multiplied will give me 24 ?
// 3 or 8

// What numbers can you multiply to get 24?
//  3 x 8, and 4 x 6.

// [ [ 3, 8, 0, 0, 0 ],
//   [ 4, 6, 0, 0, 0 ],
//   [ 6, 4, 0, 0, 0 ],
//   [ 8, 3, 0, 0, 0 ] ]

//   [ [ 0, 0, 0, 0, 0 ],
//   [ 0, 3, 0, 1, 0 ],
//   [ 0, 6, 0, 2, 0 ],
//   [ 0, 9, 0, 3, 0 ] ]

// function canBeMerged(arr1,arr2) {
//   let canBe = false;
//   for(i=0;i<arr1.length;arr++) {
//     if( (arr1[i] === 0 || arr2[i] === 0)  || (arr1[i] === arr2[i]) ) {
//       canBe = true;
//       // merge the second into first and push into another array
//     }
//   }
//   return canBe;
// }

function mergeArrays(arr1, arr2) {
  const merged = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) merged.push(arr1[i]);
    else if (arr2[i] > 0) merged.push(arr2[i]);
    else merged.push(0);
  }
  // console.log('MERGED ', merged);
  return merged;
}

function lala() {
  //let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const templates1 = [];
  const templates2 = [];
  const templates3 = [];
  const t = [];
  const lock = [0, 0, 0, 0, 0];
  // let one, two, three, four, five;
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      if (i * j === 24) {
        templates1.push([i, j, 0, 0, 0]);
      }
      if (i * 3 === j) {
        templates2.push([0, j, 0, i, 0]);
      }
      for (let k = 0; k <= 9; k++) {
        for (let l = 0; l <= 9; l++) {
          // purse[0] + purse[2] === purse[3] + purse[4]
          if (i + j === k + l) {
            templates3.push([i, 0, j, k, l]);
          }
        }
      }
    }
  }
  console.log(templates3);
  // for (let i = 0; i < templates1.length; i++) {
  //   for (let j = 0; j < templates2.length; j++) {
  //     if (templates1[i][1] === templates2[j][1]) {
  //       console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  //       console.log(templates1[i]);
  //       console.log(templates2[j]);
  //       console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  //       t.push(mergeArrays(templates1[i],templates2[j]) );
  //       //console.log('MERGED ', mergeArrays(templates1[i], templates2[j]));
  //     }
  //   }
  // }

  // console.log('----------------------');
  // console.log(templates1);
  // console.log('----------------------');
  // console.log(templates2);
  // // console.log(sumPairs);
  // console.log('----------------------');
  // console.log(t);
  // let f = [];
  // // for both of the templates in the t [ 4, 6, 0, 2, 0 ], [ 8, 3, 0, 1, 0 ]
  // // purse[0] + purse[2] === purse[3] + purse[4]
  // for(let i=0;i<t.length;i++) {

  //   for (let k = 0; k <= 9; k++) {
  //       for (let l = 0; l <= 9; l++) {
  //         // purse[0] + purse[2] === purse[3] + purse[4]
  //         if (t[i][0] + k === t[i][3] + l) {
  //           t[i][2] = k;
  //           t[i][4] = l;
  //           f.push(t);
  //         }
  //       }
  //     }
  // }



  // console.log(f.map(arr => sum(arr)));

}

lala();
// let lock = [0, 0, 0, 0, 0];
// //for (i = 0; i < lock.length; i++) {
//   for (d = 0; d <=9; d++) {

//     if (d * lock[1] === 24) {
//       lock[i] = d;
//     }

//     // for(i=0;i<lock.length;i++) {

//     if (lock[0] * lock[1] === 24) {
//     }

//     // }
//   //}
// }

exports.remind = () => {
  // return [ 8, 3, 7, 1, 7 ];
  // return [ 4, 6, 7, 2, 7 ];
};
