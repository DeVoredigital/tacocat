// Section 4 Hello World
function helloWorld(){
    alert("hello world");
}



//get the values from the page
//Starts or Controller Function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumber
        let numbers = generateNumbers(startValue,endValue);
        //we call displayNumbers
        displayNumbers(numbers);

    }else{
        alert("You must enter an integer.")
    }

    

}

//Genreate Numbers from the Start Value to the End Value
//Logic function(s)
function generateNumbers(sValue, eValue){
    let numbers = [];

    //we want all numbers from start to end
    for(let index = sValue; index <= eValue; index ++){

        //this will execute in a loop until index = evalue
        numbers.push(index);
    }


    return numbers;


}

//Display the Even Numbers in BOLD
//display or view function
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";
        
        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;

    }
    document.getElementById("results").innerHTML = templateRows;

}