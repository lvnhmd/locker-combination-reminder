const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const rule1 = () => {
  return digits.filter(i => {
    for (let j = 0; j <= 9; j++) {
      if (i * j === 24) {
        return i;
      }
    }
  });
};

const rule2 = () => {
  return digits.filter(i => {
    if (rule1().includes(i * 3)) return i;
  });
};

exports.remind = function() {
  return new Promise(resolve => {
    const r1 = rule1();
    r1.forEach(l1 => {
      r1.forEach(l2 => {
        rule2().forEach(l4 => {
          digits.forEach(i => {
            digits.forEach(j => {
              let lock = [l1, l2, i, l4, j];
              if (
                lock[0] + lock[2] === lock[3] + lock[4] &&
                lock.reduce((acc, l) => acc + l, 0) === 26 &&
                new Set(lock).size < 5 &&
                lock[0] * lock[1] === 24 &&
                lock[3] * 3 === lock[1]
              ) {
                return resolve(lock);
              }
            });
          });
        });
      });
    });
  });
};
