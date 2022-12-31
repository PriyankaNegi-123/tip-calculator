"use strict"

let amountEl = document.getElementById("bill_amount");
let tipPercEl = document.getElementById("tip_perc");
let tipEl = document.getElementById("tip");
let totalEl = document.getElementById("total")

let calculate = ()=>{
    amountEl = amountEl.value;
    tipPercEl = tipPercEl.value;
    let tip = amountEl * (tipPercEl/100);
    let total = Number(amountEl) + tip;
    tipEl = tipEl.value = tip;
    totalEl = totalEl.value = total;
}

// function to reset code
function clearInp() {
    var elements = document.getElementsByTagName("input");
    for(var i = 0; i < elements.length; i++){
    elements[i].value = "";
    // reset select tag
    document.getElementById("tip_perc").selectedIndex = "0";
    }}