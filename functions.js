export function showAge(y, m, d){
    
    const date = new Date(y, (m - 1), d);

    const today =new Date();

    const milliseconde = today.getTime() - date.getTime();

    const seconde = milliseconde / 1000;
    const minute = seconde / 60;
    const heure = minute / 60;
    const jour = heure / 24;
    const mois = jour / 30.4167;
    const annee = mois / 12;

    const resteAnnee = annee - Math.trunc(annee);

    const newMois = resteAnnee * 12;

    const resteMois = newMois - Math.trunc(newMois);

    const newJours = resteMois * 30.4167;

    const years = Math.trunc(annee);
    const months = Math.trunc(newMois);
    const days = Math.trunc(newJours);

    
    document.querySelector(".show-age").innerHTML = `
        <p><span class="reveal reveal-1">${years}</span> years</p>
        <p><span class="reveal reveal-2">${months}</span> months</p>
        <p><span class="reveal reveal-3">${days}</span> days</p>
    `
    
   
}


function showErrorForDayInput(day, input, label, errorsField, errorsValid, dayOfMonth){
    if (!day){
        errorsField[0].style.display = "block";
        input[0].classList.add("border-error");
        label[0].classList.add("label-error");
        errorsValid[0].style.display = 'none';
    }else if (Number(day) < 0 || Number(day) > dayOfMonth ||  day !== "" && isNaN(day) || !Number.isInteger(Number(day))){
        errorsValid[0].style.display = 'block';
        errorsField[0].style.display = "none";
        input[0].classList.add("border-error");
        label[0].classList.add("label-error");
    }else{
        errorsValid[0].style.display = 'none';
        errorsField[0].style.display = "none";    
        input[0].classList.remove("border-error");
        label[0].classList.remove("label-error");
    }
}

function showErrorForYearInput(year, input, label, errorsField, errorsValid){
    if (!year){
        errorsField[2].style.display = "block";
        input[2].classList.add("border-error");
        label[2].classList.add("label-error");
        errorsValid[2].style.display = 'none';
    }else if (Number(year) > (new Date().getFullYear()) ||  year !== "" && isNaN(year) || !Number.isInteger(Number(year))){
        errorsField[2].style.display = "none";
        errorsValid[2].style.display = 'block';
        input[2].classList.add("border-error");
        label[2].classList.add("label-error");
    }else{
        errorsValid[2].style.display = 'none';
        errorsField[2].style.display = "none";    
        input[2].classList.remove("border-error");
        label[2].classList.remove("label-error");
    }
}

function showErrorForMonthInput(month, input, label, errorsField, errorsValid, monthInYear){
    if (!month){
        errorsField[1].style.display = "block";
        input[1].classList.add("border-error");
        label[1].classList.add("label-error");
        errorsValid[1].style.display = 'none';
    }else if (Number(month) < 1 || Number(month) > monthInYear ||  month !== "" && isNaN(month) || !Number.isInteger(Number(month))){
        errorsField[1].style.display = "none";
        input[1].classList.add("border-error");
        label[1].classList.add("label-error");
        errorsValid[1].style.display = 'block';
    }else{
        errorsValid[1].style.display = 'none';
        errorsField[1].style.display = "none";
        input[1].classList.remove("border-error");
        label[1].classList.remove("label-error");
    }
}

function hideErrorMonth(month, errorsField, errorsValid, input, label){
    errorsField[1].style.display = "none";
    input[1].classList.remove("border-error");
    label[1].classList.remove("label-error");


    if (Number(month) > 0 && Number(month) < 13){
        errorsValid[1].style.display = "none";
        input[1].classList.remove("border-error");
        label[1].classList.remove("label-error");
    }
}


export function conditionsFor31Days(day, month, year, errorsField, errorsValid, input, label){

    hideErrorMonth(month, errorsField, errorsValid, input, label);

    showErrorForDayInput(day, input, label, errorsField, errorsValid, 31);
   
    showErrorForYearInput(year, input, label, errorsField, errorsValid);

}

export function conditionsFor29Days(day, month, year, errorsField, errorsValid, input, label){

    hideErrorMonth(month, errorsField, errorsValid, input, label);


    showErrorForDayInput(day, input, label, errorsField, errorsValid, 29);

    showErrorForYearInput(year, input, label, errorsField, errorsValid);

}

export function conditionsFor30Days(day, month, year, errorsField, errorsValid, input, label){

    hideErrorMonth(month, errorsField, errorsValid, input, label);

    showErrorForDayInput(day, input, label, errorsField, errorsValid, 30);
   
    showErrorForYearInput(year, input, label, errorsField, errorsValid);

}

export function conditionsElse(day, month, year, errorsField, errorsValid, input, label){

    showErrorForMonthInput(month, input, label, errorsField, errorsValid, 12);

    showErrorForDayInput(day, input, label, errorsField, errorsValid, 31);
   
    showErrorForYearInput(year, input, label, errorsField, errorsValid);

}