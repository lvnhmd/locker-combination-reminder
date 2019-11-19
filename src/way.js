// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr = [1, 5, 6];
// method to count the total number
// of ways to sum up to 'N'

const countWays = N => {
  let count = [0,0,0,0,0,0,0,0];
  // base case
  count[0] = 1;

  // count ways for all values up
  // to 'N' and store the result
  for (let i = 1; i <= N; i++)
    for (let j = 0; j < arr.length; j++)

      // if i >= arr[j] then
      // accumulate count for value 'i' as
      // ways to form value 'i-arr[j]'
      if (i >= arr[j]) {
        console.log('>>> i ', i);
        count[i] += count[i - arr[j]];
        console.log('*** count[i] ', count[i]);
      }

  // required number of ways
  console.log('COUNT ', count);
  return count[N];
};

// const N = 26;
const N = 7;
console.log('Total number of ways = ', countWays(N));
