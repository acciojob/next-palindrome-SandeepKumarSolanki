function nextPalindrome(num) {

	num = +num;

	function palindrome(n) {
		const str = n.toString();
		return str === str.toSplit('').reverse().join('');
	}
	num++;

	while (!palindrome(num)) {
		num++;
	}
	return num;
}

// const input = prompt("Enter a palindrome number");
// alert(nextPalindrome(input));


