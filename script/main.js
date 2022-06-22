    // Select the button and give it a click event
const palindromeCheck = document.getElementById("palindrome-check");

palindromeCheck.addEventListener("click", function() {

        // Take the value of the input
    let userInput = document.getElementById("user-palindrome-input").value;

        // Transform it into a string
    let userWord = userInput.toString();

        // Use reverse function to reverse the string
    const reversedUserWord= reverseIt(userWord);

        // Select the <p> and print in the value of isItPalindrome()
    const palindromeResult = document.getElementById("result");
    palindromeResult.innerHTML = isItPalindrome(userWord, reversedUserWord);

});












// Functions

function reverseIt(word) {
    const splitted = word.split("");
    const reversed = splitted.reverse("");
    const united= reversed.join("")
    return united;
};

function isItPalindrome(word1, word2) {
    
    let result = "The choosen word is not a palindrome.";

    if (word1 === word2) {
        result = "The choosen word is a palindrome!";
        return result;
    }

    return result;
}
