//Given T_0 = 1, T_=1, T_2 = 1, and T_n = T_n-3 + T_n-2 + T_n-1, n >= 0
//this function returns the nth tribonacci number where n >= 0

//Due to memoization, this function runs in O(n) time for n > 2 as well as O(n) storage
function tribonacci(n) {
	const memo = {0:0, 1:1, 2:1};

  function tribHelper(n) {
    if (memo[n] !== undefined) {
      return memo[n];
    } else {
      memo[n]= tribHelper(n - 3) + tribHelper(n - 2) + tribHelper(n - 1);
      return memo[n];
    }
  }
  
  return tribHelper(n);
}
