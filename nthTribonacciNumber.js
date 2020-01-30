//Given T_0 = 1, T_=1, T_2 = 1, and T_n = T_n-3 + T_n-2 + T_n-1, n >= 0
//this function returns the nth tribonacci number

function tribonacci(n) {
  if (n === 0) {
    return 0
  }
  
  if (n === 1 || n === 2) {
    return 1
  }
  
  
  return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
};
