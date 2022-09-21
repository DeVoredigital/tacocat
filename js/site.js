//get the values from the page
//Starts or Controller Function

function getValues(){

    //make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");

    //get values from the page
    let userString = document.getElementById("userString").value;
    
    //check for a palindrome
    let returnObj = checkForPalindrome(userString);

    displayMessage(returnObj);
}

//check if a string is a palindrome
//Logic function(s)

function checkForPalindrome(userString){

    //check only for characters, not upper, not spaces, not !
    userString = userString.toLowerCase();

    //regex
    let regex = /[^a-z0-9]/gi; // only return a-z 0-9
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length-1; index >= 0; index--) {
        revString += userString[index];
        
    }
    if (revString == userString) {
        returnObj.msg = "Indeed, you entered a palindrome."
    }
    else{
        returnObj.msg = "That's not a palindrome."
    }

    returnObj.reversed = revString;

    return returnObj;

}

//Display the Message 
//display or view function

function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg
    document.getElementById("msg").innerHTML = `Your phrase reversed: ${returnObj.reversed}`;

    document.getElementById("alert").classList.remove("invisible");

}