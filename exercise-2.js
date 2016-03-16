// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    if (x > y) 
    	return x;
    else (y > x)
    	return y;
}
    //...


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree (x, y, z) {
	if (x > y) || (x > z)
		return x;
	else if (y > x) || (y > z)
		return y;
	else if (z > x) || (z > y)
		return z;
}


//function maxOfThree(x, y, z) {
//	{if (y < x) 
//		var biggerNum = x;
//	
//	else (y < z) 
//		var biggerNum2 = z;
//	}{
//	if (biggerNum < biggerNum2) 
//		return biggerNum;
//	
//	else return biggerNum2;}
//}


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

var vowels = ['a', 'e', 'i', 'o', 'u'];

vowels.forEach(function(letter) {
	if (letter === vowels) 
		return true;
		 else return false;
	});



//JD's version is below:
//var vowels = ["a", "e", "i", "o", "u"];

// function isVowel(char) {
// 	var vowels = ["a", "e", "i", "o", "u"];
// 	var answer = false;
// 	vowels.forEach (function(vowel) {
// 		if (char === vowels)
// 		return true; {
// 			asnwer = true;
// 		}
// }


//
//}
//var vowels = 
//vowels.forEach (function isVowel(char) {
//	if var char = vowels 
//		return true;
//	else return false;
//});


//var vowels = ["a", "e", "i", "o", "u"];

//vowels.forEach (function isVowel(char) {
//	if (char === vowels)
//		return true;
//	else return false;
//});


    //...


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
/// Build it one letter at a time.

function translate(word) {

}















function rovarspraket(phrase){
	var letters = phrase.split('');
	var newPhrase = '';
	letters.forEach(function(letter) {
		if (isVowel(letter)) {
			newPhrase += letter;

		} else if (letter === '') {
			newPhrase += letter;
		} else {
			var addition = letter + '0' + letter;
			newPhrase += addition;
		}
	});

	return newPhrase;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
//MY SECOND ATTEMPT
function reverse(string) {
	var separate = string.split('');
	var reversal = separate.reverse();
	var together = reversal.join('');
	return together;
}

//______________________________________















// //function reverse(str) {
// 	var arr = str.split('');
// 	var revArr = arr.reverse();
// 	var revStr = revArr.join('');
// 	return revStr; 
// }

//  //OR

// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// alert(reverse('cool'));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
//compares each word--super will be a, cool will be b and it will return super; function will run super and will compare with important
//will return important; next time it will run with important as a and compares it to next in array.
function findLongestWord(words){
	return words.reduce(function(a, b)) {
		if (a.length > b.length) {
		} else {
			return b
		}
	}
}

longWords = ['super', 'cool', 'important' ];

alert(findLongestWord(longWords));


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    return words.filter(function(currentWord) {
    return	currentWord.length > i;
    });
}

alert(filterLongWords(longWords, 7))

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

//"abbaaadegjjjjjsaadddvvd"
//what get back a:6; b: 2, j:5 --- could be considered a map

//want to return an object so we return the frequencies to an empty object
//memo is empty object and char is going to 

function charFreq(string){
    return string.split('').reduce(function(memo, char)
{
	if(memo[char]) {
		memo[char] = memo[char] + 1;
	} else {
		memo[char] = 1;
	}
	return memo;
}, {});
}










