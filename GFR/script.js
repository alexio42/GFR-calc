const OMIT = "Scan without contrast and inform Oncologist that contrast media was not given";
const PROCEED = "Continue with contrast";
const CHECK = "Only give contrast when the Oncologist has documented that contrast is still necessary";

let gender, weight, age, creat, gfr;


function main() {

    gfr = calculategfr(gender, weight, age, creat);
   
};

function calculategfr() {
    gfr = (gender * (140 - age) * weight) / creat;
    console.log(gfr);
    return gfr;
};