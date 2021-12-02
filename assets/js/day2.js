//the final result
let result = 0;

//The text box of numbers
const inputElement = document.getElementById('day2Input');

//The output span
var day2ResultElement = document.getElementById('day2Result');
var day2ResultElement2 = document.getElementById('day2Result2');

function Dive(){
    //the values that make up the result
    let depth = 0;
    let forward = 0;
    result = 0;
    
    //The data
    const rawInput = inputElement.value;

    //Split the input into an array
    const inputArray = rawInput.split("\n");
    console.log("Amount of entries: " + inputArray.length);

    //loop de loop, entries look like "[Forward 1], [Down 3] etc etc"
    for (var i = 0; i < inputArray.length; i++){
        //console.log(inputArray[i]);

        //Split them again! [Forward], [3]
        let tempArray = inputArray[i].split(" ");
        
        if(tempArray[0] == "forward"){
            forward += parseInt(tempArray[1]);
        }
        if(tempArray[0] == "down"){
            depth += parseInt(tempArray[1]);
        }
        if(tempArray[0] == "up"){
            depth -= parseInt(tempArray[1]);
        }

    }

    result = forward*depth;
    console.log("Forward Position: " + forward);
    console.log("Depth Position: " + depth);
    console.log("Horizonal Position: " + result);

    day2ResultElement.textContent = "The final horizonal position is " + result + "!";

    // Set the styling appropriately
    day2ResultCard.className = 'card col-md-4 text-white bg-success mb-3 visible';

    DiveImproved();
}

function DiveImproved(){
    //the values that make up the result
    let depth = 0;
    let forward = 0;
    let aim = 0;
    result = 0;
    
    //The data
    const rawInput = inputElement.value;

    //Split the input into an array
    const inputArray = rawInput.split("\n");
    console.log("Amount of entries: " + inputArray.length);

    //loop de loop, entries look like "[Forward 1], [Down 3] etc etc"
    for (var i = 0; i < inputArray.length; i++){
        //console.log(inputArray[i]);

        //Split them again! [Forward], [3]
        let tempArray = inputArray[i].split(" ");
        
        if(tempArray[0] == "forward"){
            forward += parseInt(tempArray[1]);
            depth += aim * parseInt(tempArray[1]);
        }
        if(tempArray[0] == "down"){
            aim += parseInt(tempArray[1]);
        }
        if(tempArray[0] == "up"){
            aim -= parseInt(tempArray[1]);
        }

    }

    result = forward*depth;
    console.log("Forward Position: " + forward);
    console.log("Depth Position: " + depth);
    console.log("Horizonal Position: " + result);

    day2ResultElement2.textContent = "The final horizonal position is " + result + "!";

    // Set the styling appropriately
    day2ResultCard2.className = 'card col-md-4 text-white bg-success mb-3 visible';

}