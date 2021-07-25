function getUserInput(){

    // Make the alert box invisible if it is not already
    document.getElementById("alert").classList.add("invisible");

    // Get the string the user entered
    let userInput = document.getElementById("userInput").value;

    // Check if string is valid
    if (validString(userInput)) {

        if (isPalindrome(userInput)){

            displayResults(true);
        }
        else{

            displayResults(false);
        }
    }
    else {

        // If the string has less than 2 characters then display an error
        displayError();
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
    
    for (let index = palindromeString.length - 1; index >= 0; index--) {
        
        resultString += palindromeString[index];
    }

    if (resultString == palindromeString){
        
        return true;
    }
    else{

        return false;
    }
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


function displayResults(success){

    if (success){

        setAlertColor("alert-success");
        document.getElementById("msgHead").innerHTML = `True!`;
        document.getElementById("msg").innerHTML = `This is a palindrome!`;
    }
    else{

        setAlertColor("alert-success");
        document.getElementById("msgHead").innerHTML = `False!`;
        document.getElementById("msg").innerHTML = `This NOT a palindrome!`;
    }

    document.getElementById("alert").classList.remove("invisible");
}


// Display error message 
function displayError(){
    
    setAlertColor("alert-danger");
    document.getElementById("msgHead").innerHTML = `Error!`;
    document.getElementById("msg").innerHTML = `Error : You must enter a valid string of at least 2 characters.`;
    document.getElementById("alert").classList.remove("invisible");
}