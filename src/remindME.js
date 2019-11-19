const { getCombination } = require('./reminder');

// const remind = ()  => {
  // function remind() {

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // console.log('@@@ ', getCombination(digits, 26));
  var combination = getCombination(digits, 26);
  console.log('COMBO', combination);
  let lock = [];
  // while (!lock.length) {
  //   if (
  //     combination.length === 5 &&
  //     new Set(combination).size < 5 &&
  //     combination[0] * combination[1] === 24 &&
  //     combination[3] * 3 === combination[1] &&
  //     combination[3] + combination[4] === combination[0] + combination[2]
  //   ) {
  //     lock = combination;
  //     console.log('*** LOCK ', lock);
  //   } else {
  //     combination = getCombination(digits, 26);
  //   }
  // }

  console.log('----------------LOCK--------------------------', lock);
// };

// remind();
