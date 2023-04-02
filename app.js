
import { conditionsElse, conditionsFor29Days, conditionsFor30Days, conditionsFor31Days, showAge } from "./functions.js";

const form = document.querySelector(".form");


form.addEventListener("submit", event => {

  const form = event.currentTarget;
  event.preventDefault();


  const day = new FormData(form).get("day").trim();
  const month = new FormData(form).get("month").trim();
  const year = new FormData(form).get("year").trim();

  const errorsValid = document.querySelectorAll(".error-valid");
  const errorsField = document.querySelectorAll(".error-field");

  const input = document.querySelector(".container-date").querySelectorAll("input");
  const label = document.querySelector(".container-date").querySelectorAll("label");


  if (parseInt(month) === 1 || parseInt(month) === 3 || parseInt(month) === 5 || 
  parseInt(month) === 7 || parseInt(month) === 8 || parseInt(month) === 10 || parseInt(month) === 12){

    conditionsFor31Days(day, month, year, errorsField, errorsValid, input, label);

    if (parseInt(day) > 0 && parseInt(day) < 32 && parseInt(year) < (new Date().getFullYear())) {

      showAge(parseInt(year), parseInt(month), parseInt(day));
    }else{
      document.querySelector(".show-age").innerHTML = `
        <p><span>- -</span> years</p>
        <p><span>- -</span> months</p>
        <p><span>- -</span> days</p>
    `
    }

  } else if (parseInt(month) === 2){

    conditionsFor29Days(day, month, year, errorsField, errorsValid, input, label);

    if (parseInt(day) > 0 && parseInt(day) < 30 && parseInt(year) < (new Date().getFullYear())) {

      showAge(parseInt(year), parseInt(month), parseInt(day));

    }else{
      document.querySelector(".show-age").innerHTML = `
        <p><span>- -</span> years</p>
        <p><span>- -</span> months</p>
        <p><span>- -</span> days</p>
    `
    }

  } else if (parseInt(month) === 4 || parseInt(month) === 6 || parseInt(month) === 9 || parseInt(month) === 11) {

    conditionsFor30Days(day, month, year, errorsField, errorsValid, input, label);
    
    if (parseInt(day) > 0 && parseInt(day) < 31 && parseInt(year) < (new Date().getFullYear())) {

      showAge(parseInt(year), parseInt(month), parseInt(day));
  
    }else{
      document.querySelector(".show-age").innerHTML = `
        <p><span>- -</span> years</p>
        <p><span>- -</span> months</p>
        <p><span>- -</span> days</p>
    `
    }

  } else {

    conditionsElse(day, month, year, errorsField, errorsValid, input, label);
    document.querySelector(".show-age").innerHTML = `
        <p><span>- -</span> years</p>
        <p><span>- -</span> months</p>
        <p><span>- -</span> days</p>
    `
      
  }


})



