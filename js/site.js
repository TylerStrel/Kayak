function getUserInput(){

    // Make the alert box invisible if it is not already
    document.getElementById("alert").classList.add("invisible");

    // Get the string the user entered
    let userInput = document.getElementById("userInput").value;

    // Check if string is valid
    if (validString(userInput)) {

        let retunedPalindrome = isPalindrome(userInput);
        displayMessage(retunedPalindrome);
    }
    else {

        // If the string has less than 2 characters then display an error
        let errorObj = {};
        
        errorObj.color = "alert-danger";
        errorObj.header = "ERROR";
        errorObj.message = `Error - You must enter a valid string of at least 2 characters.`;

        displayMessage(errorObj);
    }
}

function validString(userInput){

    if (userInput.trim().length > 1)
    {
        return true;
    }
    else {
        return false;
    }
}

function isPalindrome(userInput){

    let resultString = [];
    let palindromeString = configureString(userInput);
    let palondromeAlert = {};

    for (let index = palindromeString.length - 1; index >= 0; index--) {
        
        resultString += palindromeString[index];
    }

    if (resultString == palindromeString){
        
        palondromeAlert.color = "alert-success";
        palondromeAlert.header = "Success!";
        palondromeAlert.message = `This IS a palindrome!`;
    }
    else{

        palondromeAlert.color = "alert-danger";
        palondromeAlert.header = "Fail!";
        palondromeAlert.message = `This is NOT a palindrome!`;
    }

    return palondromeAlert;
}

function configureString(userInput){

    let palindromeString = userInput.replace(/[^a-zA-Z0-9]/g, '')
    .split(" ").join("")
    .toLowerCase();

    return palindromeString;
}

// Change color of the alert
function setAlertColor(alertClass){

    switch (alertClass){
        case "alert-success":
            document.getElementById("alert").classList.remove("alert-danger");
            document.getElementById("alert").classList.add("alert-success");
            break;
        case "alert-danger":
            document.getElementById("alert").classList.remove("alert-success");
            document.getElementById("alert").classList.add("alert-danger");
    }
}

function displayMessage(message){

    setAlertColor(`${message.color}`);
    document.getElementById("msgHead").innerHTML = `${message.header}`;
    document.getElementById("msg").innerHTML = `${message.message}`;

    document.getElementById("alert").classList.remove("invisible");
}
