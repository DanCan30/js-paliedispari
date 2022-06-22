//  Palindrome 
  
  // Select the button and give it a click event
const palindromeCheck = document.getElementById("palindrome-check");

palindromeCheck.addEventListener("click", function() {

        // Take the value of the input
    let userInput = document.getElementById("user-palindrome-input").value;


        // Use reverse function to reverse the string
    const reversedUserWord= reverseIt(userInput);

        // Select the <p> and print in the value of isItPalindrome()
    const palindromeResult = document.getElementById("palindrome-result");

    let palindromeResultMessage;

    if (isItPalindrome(userInput, reversedUserWord) === true) {
        palindromeResultMessage ="The choosen word is a palindrome!";
    } else {
        palindromeResultMessage = "The choosen word is not a palindrome.";

    }

    palindromeResult.innerHTML = palindromeResultMessage;

});



// Odd or even

    // Select the button and give it a click event
const oddOrEvenButton = document.getElementById("odd-or-even-button");

    // Set variables for the DOM
let infoBox = document.getElementById("info");

let aiInfo = document.createElement("p");
let userInfo = document.createElement("p");
let winnerInfo = document.createElement("p");

infoBox.append(aiInfo, userInfo, winnerInfo);

oddOrEvenButton.addEventListener("click", function() {

    let message;
    let sum;
    let userNumber;
    let aiNumber;
    
        // Select a start condition
    let odd = true;

        // Take the value of the inputs
    let oddOrEvenSelector = document.getElementById("odd-or-even-selector").value;
    userNumber = parseInt(document.getElementById("number-selector-input").value);
    
        //If the user change selector the variable odd change his value 
    if(oddOrEvenSelector === "even") {
        odd = false;
    }


        // Get a random number with the randomNumber()
    aiNumber = randomNumber(1, 5);

        // Get the sum of the two numbers
    sum = sumOfTwoNumbers(userNumber, aiNumber)

        // If the selector and the function have the same value the user win, else the AI win
    if (odd === sumIsOddOrEven(userNumber,aiNumber)) {
        message = "Congratulations, you won!"
    } else {
        message = "Haha, you lost!"
    }
    
    // If the number is not valid or is out of range print an alert
    if ( (userNumber < 1) || (userNumber > 5) || (Number.isInteger(userNumber) === false) ) {
        alert("Please insert a valid number.");
    } else {
        aiInfo.innerHTML = `My number is ${aiNumber}`;
        userInfo.innerHTML = `Your number is ${userNumber}`;
        winnerInfo.innerHTML = `The sum of our numbers is ${sum}. ${message}`;
    }
});




// Functions


    // Palindrome

function reverseIt(word) {

        // Set an empty variable
    let reversedWord = "";

        // Every letter of the input is taken starting from the end to the start and is placed in the empty variable, filling it with the letters of the input in the reversed order
    for ( let i = word.length - 1; i >= 0; i-- ) {
        let letter = word[i];
        reversedWord = reversedWord + letter;
    }
        // Return the filled variable
    return reversedWord;



                                        // OTHER METHOD


    //     // Transform every character of the string in an index of an array
    // const splitted = word.split("");

    //     // Reverse the order of the indexes of the array
    // const reversed = splitted.reverse("");

    //     // Transform the reversed characters in a single string
    // const united= reversed.join("")
    // return united
};

function isItPalindrome(word1, word2) {

        // Set a start condition
    let result = false;

        // If the two words are the same, switch the start condition into true
    if (word1 === word2) {
        result = true;
        return result;
    }
        // Return the result
    return result;
}


    // Odd or even

    // Create a random number between a certain range
function randomNumber(min, max) {
    let aiNumber = Math.floor(Math.random() * max + min);
    return aiNumber;
}

    // Get the sum of two numbers
function sumOfTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

    // Check if the sum of two items is odd or even
function sumIsOddOrEven(num1, num2) {
    let odd = true;
    if ((num1 + num2) % 2 === 0) {
        odd = false;
    }
    return odd;
}
