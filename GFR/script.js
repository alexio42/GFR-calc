const OMIT = "Scan without contrast and inform Oncologist that contrast media was not given";
const PROCEED = "Continue with contrast";
const CHECK = "Only give contrast when the Oncologist has documented that contrast is still necessary";

let gender, weight, age, creat, gfr;

// add event listener to button and run main() when clicked.
// const calculate = document.querySelector("#calculate");
// calculate.addEventListener("click", function() { 
//     main();
// });

function handleClick() {
    
    gender = document.ptdata["gender"].value;
    age = document.ptdata["age"].value;
    main();

}



function main() {

    console.log(gender);
    console.log(age);
    gfr = calculategfr(gender, weight, age, creat);
   
};

function calculategfr() {
    gfr = (gender * (140 - age) * weight) / creat;
    console.log(gfr);
    return gfr;
};