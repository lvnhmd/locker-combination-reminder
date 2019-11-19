	// Function to find the total number of ways to get change
	// of change from unlimited supply of coins in set S
	function getCombinations(coins, change, purse, bag)
	{
		// if total is 0, return 1
		if (change == 0) {
      // I just found one way to combine change
      console.log(purse);
      bag.push(purse);
      purse = [];
			return 1;
		}

		// return 0 if total become negative
		if (change < 0) {
			return 0;
		}

		// initialize total number of ways to 0
		// var res = 0;

		// do for each coin
		for (var i = 0; i < coins.length; i++)
		{
			// recur to see if total can be reached by including
			// current coin coins[i]
      // res +=
      count(coins, change - coins[i], purse.concat(coins[i]), bag);
		}

		// return total number of ways
		return bag;
	}

	// n coins of given denominations
  const coins = [1, 2, 3];

  // Total Change required
  const change = 4;

  // create a map to store solutions of subproblems
  // Map<String, Integer> lookup = new HashMap<>();
  var lookup = new Map();

  console.log("Total number of ways to get desired change is ", count(coins, change, [], []));

  console.log(lookup);
