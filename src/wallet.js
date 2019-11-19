
	// Function to find the total number of distinct ways to get change of N
  // from unlimited supply of coins in set S
  function count (S,n,N,lookup)
	// public static int count(int S[], int n, int N, Map<String, Integer> lookup)
	{
		// if total is 0, return 1 (solution found)
		if (N == 0) {
			return 1;
		}

		// return 0 (solution do not exist) if total become negative or
		// no elements are left
		if (N < 0 || n < 0) {
			return 0;
		}

		// construct a unique map key from dynamic elements of the input
		const key = n + "|" + N;

		// if sub-problem is seen for the first time, solve it and
		// store its result in a map
		if (!lookup.get(key))
		{
			// Case 1. include current coin S[n] in solution and recur
			// with remaining change (N - S[n]) with same number of coins
			let include = count(S, n, N - S[n], lookup);

			// Case 2. exclude current coin S[n] from solution and recur
			// for remaining coins (n - 1)
			let exclude = count(S, n - 1, N, lookup);

			// assign total ways by including or excluding current coin
			lookup.set(key, include + exclude);
		}

		// return solution to current sub-problem
		return lookup.get(key);
	}


		// n coins of given denominations
		const S = [1, 2, 3];

		// Total Change required
		const N = 4;

		// create a map to store solutions of subproblems
    // Map<String, Integer> lookup = new HashMap<>();
    var lookup = new Map();

    console.log("Total number of ways to get desired change is ", count(S, S.length - 1, N, lookup));

    console.log(lookup);
