const OMIT = "Scan without contrast and inform Oncologist that contrast media was not given";
const PROCEED = "Continue with contrast";
const CHECK = "Only give contrast when the Oncologist has documented that contrast is still necessary";
const RESULTBOX = document.querySelector("#result");

let gender, weight, age, creat, gfr;

// add event listener to button and run main() when clicked.
// const calculate = document.querySelector("#calculate");
// calculate.addEventListener("click", function() { 
//     main();
// });

// Get data from submitted form
function handleClick() {
    
    gender = document.ptdata["gender"].value;
    age = document.ptdata["age"].value;
    weight = document.ptdata["weight"].value;
    creat = document.ptdata["creat"].value;
    main();

}



function main() {

    console.log(age, gender, weight, creat);
    gfr = calculategfr(gender, weight, age, creat).toFixed(2);
    RESULTBOX.textContent = gfr;
};

function calculategfr() {
    gfr = (gender * (140 - age) * weight) / creat;
    console.log(gfr);
    return gfr;
};