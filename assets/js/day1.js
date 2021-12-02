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
var day1ResultElement2 = document.getElementById('day1Result2');

function SonarSweep(){
    //Get the raw output
    rawInput = inputElement.value;
    result = 0;
    tempPrev = '';

    //counts
    var countDecreased = 0;
    var countNeither = 0;

    //Split the input into an array
    const inputArray = rawInput.split("\n");
    console.log("Amount of entries: " + inputArray.length);

    //Go through the array
    for (var i = 0; i < inputArray.length; i++){
        //For each element in the array, check it against the previous element
        if (i == 0){
            //console.log(inputArray[i] + " (N/A)");
            countNeither++;
        }
        else if (parseInt(inputArray[i]) >= parseInt(tempPrev)) {
            //The measurement has increased since the last and its not the first value!
            //console.log(inputArray[i] + " (increased)");
            result++;
        }
        else if (parseInt(inputArray[i]) <= parseInt(tempPrev)) {
            //console.log(inputArray[i] + " (decreased)");
            countDecreased++;
        }
        else {
            //console.log(inputArray[i] + " ERROR");
            countNeither++;
        }
        //console.log(inputArray[i]);
        tempPrev = inputArray[i];
    }
    
    //Output the result for the user!
    console.log("Amount of increases: " + result);
    console.log("Amount of decreases: " + countDecreased);
    console.log("Amount of non results: " + countNeither);
    day1ResultElement.textContent = "There are " + result + " measurements that are larger than previous measurements!";

    // Set the styling appropriately
    day1ResultCard.className = 'card text-white bg-success mb-3 visible';

    //Trigger Part 2
    SonarSweepThreeMeasurement();
}

function SonarSweepThreeMeasurement(){
    //Get the raw output
    rawInput = inputElement.value;
    result = 0;
    tempPrev = '';

    //Adding the results together
    var tempA = 0;
    var counterThree = 0;

    //counts
    var countDecreased = 0;
    var countNeither = 0;
    var countNoChange = 0;

    //Split the input into an array
    const inputArray = rawInput.split("\n");
    console.log("\nThree Measure:");
    console.log("Amount of entries: " + inputArray.length);

    //Go through the array
    for (var i = 2; i < inputArray.length; i++){
        //Add an compare
        tempA = parseInt(inputArray[i]) + parseInt(inputArray[i-1]) + parseInt(inputArray[i-2]);
            
        //We only care about things in groups of threes
        if (i == 2){
            //console.log(tempA + " (N/A no previous measurement)");
            countNeither++;
        }
        else if (parseInt(tempA) > parseInt(tempPrev)) {
            //The measurement has increased since the last and its not the first value!
            //console.log(tempA + " (increased)");
            result++;
        }
        else if (parseInt(tempA) < parseInt(tempPrev)) {
            //console.log(tempA + " (decreased)");
            countDecreased++;
        }
        else if (parseInt(tempA) == parseInt(tempPrev)) {
            //console.log(tempA + " (no change)");
            countNoChange++;
        }
        else {
            //console.log(inputArray[i] + " ERROR");
            countNeither++;
        }
        //console.log(inputArray[i]);
        tempPrev = tempA;
    }
    
    //Output the result for the user!
    console.log("Three Measurement, Amount of increases: " + result);
    console.log("Three Measurement, Amount of decreases: " + countDecreased);
    console.log("Three Measurement, Amount of no changes: " + countNoChange);
    console.log("Three Measurement, Amount of non results: " + countNeither);
    //console.log("Final number should be: " + (10139+10179+10180))
    day1ResultElement2.textContent = "There are " + result + " measurements that are larger than previous measurements!";

    // Set the styling appropriately
    day1ResultCard2.className = 'card text-white bg-success mb-3 visible';
}
