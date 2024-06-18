const OMIT = "Scan without contrast and inform Oncologist that contrast media was not given.";
const PROCEED = "Continue with contrast.";
const CHECK = "Only give contrast when the Oncologist has documented that contrast is still necessary.";
const LEAFLET = "Give leaflet 'Guidance for patients on how to reduce the risk of the contrast used for their scan impairing their kidney function.' Deliver no more than 75ml of contrast."
const RESULT_BOX = document.querySelector("#result");
const INSTRUCT = document.querySelector("#instruct");
const MAX_CONTRAST = 88;
const LUNG_UGI = "lungugi";
const URO_HN = "urohn";
const OTHER_AREA = "otherarea";

let gender, weight, age, creat, gfr, area;

// add event listener to button and run main() when clicked.
// const calculate = document.querySelector("#calculate");
// calculate.addEventListener("click", function() { 
//     main();
// });


function main() {

    
    gfr = calculategfr(gender, weight, age, creat).toFixed(1);
    RESULT_BOX.textContent = "GFR = " + gfr;
    if (gfr >= 50) {
        INSTRUCT.textContent = PROCEED;
        INSTRUCT.setAttribute("style", "background-color:green; color:white;");
    }
    else if (gfr >= 45 && gfr < 50)
        {
            INSTRUCT.textContent = CHECK;
            INSTRUCT.setAttribute("style", "background-color:yellow;");
        }
    else if (area == LUNG_UGI) {
        if (gfr < 45 && gfr >= 40) {
            INSTRUCT.textContent = CHECK + " " + LEAFLET;
            INSTRUCT.setAttribute("style", "background-color:yellow;");
        }
        else {
            INSTRUCT.textContent = OMIT;
            INSTRUCT.setAttribute("style", "background-color:red; color:white;");
            
        }
    }
    else if (area == URO_HN) {
        if (gfr < 45 && gfr >= 30) {
            INSTRUCT.textContent = CHECK + " " + LEAFLET;
            INSTRUCT.setAttribute("style", "background-color:yellow;")
        }
        else {
            INSTRUCT.textContent = OMIT;
            INSTRUCT.setAttribute("style", "background-color:red; color:white;");
        }
    }
    else {
        INSTRUCT.textContent = OMIT;
        INSTRUCT.setAttribute("style", "background-color:red; color:white;");
    }
};

function calculategfr() {
    gfr = (gender * (140 - age) * (weight * 10)) / (creat * 10);
    return gfr;
};

// Get data from submitted form
function handleClick() {
    
    gender = document.ptdata["gender"].value;
    age = document.ptdata["age"].value;
    weight = document.ptdata["weight"].value;
    creat = document.ptdata["creat"].value;
    area = document.ptdata["area"].value;
    main();

}