
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


  if (Number(month) === 1 || Number(month) === 3 || Number(month) === 5 || 
  Number(month) === 7 || Number(month) === 8 || Number(month) === 10 || Number(month) === 12){

    conditionsFor31Days(day, month, year, errorsField, errorsValid, input, label);

    if (Number(day) > 0 && Number(day) < 32 && Number(year) < (new Date().getFullYear())) {

      showAge(Number(year), Number(month), Number(day));
    }else{
      document.querySelector(".show-age").innerHTML = `
        <p><span>- -</span> years</p>
        <p><span>- -</span> months</p>
        <p><span>- -</span> days</p>
    `
    }

  } else if (Number(month) === 2){

    conditionsFor29Days(day, month, year, errorsField, errorsValid, input, label);

    if (Number(day) > 0 && Number(day) < 30 && Number(year) < (new Date().getFullYear())) {

      showAge(Number(year), Number(month), Number(day));

    }else{
      document.querySelector(".show-age").innerHTML = `
        <p><span>- -</span> years</p>
        <p><span>- -</span> months</p>
        <p><span>- -</span> days</p>
    `
    }

  } else if (Number(month) === 4 || Number(month) === 6 || Number(month) === 9 || Number(month) === 11) {

    conditionsFor30Days(day, month, year, errorsField, errorsValid, input, label);
    
    if (Number(day) > 0 && Number(day) < 31 && Number(year) < (new Date().getFullYear())) {

      showAge(Number(year), Number(month), Number(day));
  
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



