function isPalindrome(n: number): boolean {
  if (n < 0) return false;
  if (n == 0) return true;

  let copy: number = n;
  let reverse: number = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  const result = copy == reverse;
  return result;
}
