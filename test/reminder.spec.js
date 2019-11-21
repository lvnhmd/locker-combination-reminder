const reminder = require('../src/reminder');

describe('Test 5-digit locker combination reminder', () => {
  let digits = [];

  beforeAll(async () => {
    digits = await reminder.remind();
  });

  it('the sum of all the digits is 26', () => {
    expect(digits.reduce((acc, d) => acc + d, 0)).toEqual(26);
  });

  it('the length of the array is 5', () => {
    expect(digits.length).toEqual(5);
  });

  it('not all the digits are unique', () => {
    expect(new Set(digits).size).toBeLessThan(5);
  });

  it('the product of the first two digits is 24', () => {
    expect(digits[0] * digits[1]).toEqual(24);
  });

  it('the fourth digit is one-third of the second digit', () => {
    expect(digits[3] * 3).toEqual(digits[1]);
  });

  it('the sum of the last two digits are the same as the sum of the first and third digits', () => {
    expect(digits[3] + digits[4]).toEqual(digits[0] + digits[2]);
  });
});
