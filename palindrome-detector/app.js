

function detectPalindrome() {

    const possiblePalindrome = 
    document.getElementById("detector").value.toLowerCase("").split(' ').join('').replace(/[^0-9a-z]/gi, '')

    const possiblePalindromeSplit = possiblePalindrome.split("").reverse().join("");

    if(possiblePalindrome == possiblePalindromeSplit) {
        console.log("We've got a palindrome!");
    } else {
        console.log("Whoops- NOT a palindrome.");
    }

}