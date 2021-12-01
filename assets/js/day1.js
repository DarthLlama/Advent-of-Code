//The list of numbers in a string
let rawInput = '';

//Some temp values
var tempPrev = '';

//The number of increases that is output for the user!
var result = 0;

//The text box of numbers
var inputElement = document.getElementById('day1Input');

//The output span
var day1ResultElement = document.getElementById('day1Result');

function SonarSweep(){
    //Get the raw output
    rawInput = inputElement.value;
    result = 0;

    //Split the input into an array
    const inputArray = rawInput.split("\n");
    console.log("Amount of entries: " + inputArray.length);

    //Go through the array
    for (var i = 0; i < inputArray.length; i++){
        //For each element in the array, check it against the previous element
        if (i == 0){
            console.log(inputArray[i] + " (N/A)");
        }
        else if (inputArray[i] > tempPrev) {
            //The measurement has increased since the last and its not the first value!
            console.log(inputArray[i] + " (increased)");
            result++;
        }
        else if (inputArray[i] < tempPrev) {
            console.log(inputArray[i] + " (decreased)");
        }
        else {
            console.log(inputArray[i] + " ERROR");
        }
        //console.log(inputArray[i]);
        tempPrev = inputArray[i];
    }
    
    //Output the result for the user!
    console.log("Amount of increases: " + result);
    day1ResultElement.textContent = "There are " + result + " measurements that are larger than previous measurements!";

    // Set the styling appropriately
    day1ResultCard.className = 'card text-white bg-success mb-3 visible';
}
