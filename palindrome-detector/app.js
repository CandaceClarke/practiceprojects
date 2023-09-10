

function detectPalindrome() {

    const possiblePalindrome = document.getElementById("detector").value;

    const possiblePalindromeSplit = possiblePalindrome.split("").reverse().join("");

// create cases for spaces, puntuation, capitalization

    if(possiblePalindrome == possiblePalindromeSplit) {
        console.log("It's a palindrome!");
    } else {
        console.log("It's NOT a palindrome.");
    }

}