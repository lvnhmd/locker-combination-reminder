const reminder = require('../src/reminder');
const { sum } = require('lodash');

describe('Test 5-digit locker combination reminder', () => {
  it('the length of the array is 5', () => {
    const digits = reminder.remind();
    expect(digits.length).toEqual(5);
  });

  it('the product of the first two digits is 24', () => {
    const digits = reminder.remind();
    expect(digits[0] * digits[1]).toEqual(24);
  });

  it('the fourth digit is one-third of the second digit', () => {
    const digits = reminder.remind();
    expect(digits[3] * 3).toEqual(digits[1]);
  });

  it('the sum of the last two digits are the same as the sum of the first and third digits', () => {
    const digits = reminder.remind();
    expect(digits[3] + digits[4]).toEqual(digits[0] + digits[2]);
  });

  it('the sum of all the digits is 26', () => {
    const digits = reminder.remind();
    expect(sum(digits)).toEqual(26);
  });

  it('not all the digits are unique', () => {
    const digits = reminder.remind();
    expect(new Set(digits).size).toBeLessThan(digits.length);
  });
});
