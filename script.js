function nextPalindrome(num) {
	num = +num
  //your JS code here.
	for(let i=num+1 ; i<Infinity ; i++){
		let original = i ; 
		let sum = 0;
		while(original != 0){
			let rem = original % 10;
			sum = (sum * 10 + rem);
			original = Math.floor(original/10);
		}
		if(sum === i){
			return i;
		}
	}
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
