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
        <p><span>${years}</span> years</p>
        <p><span>${months}</span> months</p>
        <p><span>${days}</span> days</p>
    `
    
      
}



export function conditionsFor31Days(day, month, year, errorsField, errorsValid, input, label){

    errorsField[1].style.display = "none";
    input[1].classList.remove("border-error");
    label[1].classList.remove("label-error");


    if (parseInt(month) > 0 && parseInt(month) < 13){
        errorsValid[1].style.display = "none";
        input[1].classList.remove("border-error");
        label[1].classList.remove("label-error");
    }

    if (!day){
        errorsField[0].style.display = "block";
        input[0].classList.add("border-error");
        label[0].classList.add("label-error");
        errorsValid[0].style.display = 'none';
    }else if (parseInt(day) < 0 || parseInt(day) > 31 ||  day !== "" && isNaN(day)){
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
   

    if (!year){
        errorsField[2].style.display = "block";
        input[2].classList.add("border-error");
        label[2].classList.add("label-error");
        errorsValid[2].style.display = 'none';
    }else if (parseInt(year) > (new Date().getFullYear()) ||  year !== "" && isNaN(year)){
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

export function conditionsFor29Days(day, month, year, errorsField, errorsValid, input, label){

    errorsField[1].style.display = "none";
    input[1].classList.remove("border-error");
    label[1].classList.remove("label-error");

    
    if (parseInt(month) > 0 && parseInt(month) < 13){
        errorsValid[1].style.display = "none";
        input[1].classList.remove("border-error");
        label[1].classList.remove("label-error");
    }

    if (!day){
        errorsField[0].style.display = "block";
        input[0].classList.add("border-error");
        label[0].classList.add("label-error");
        errorsValid[0].style.display = 'none';
    }else if (parseInt(day) < 0 || parseInt(day) > 29 ||  day !== "" && isNaN(day)){
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
   

    if (!year){
        errorsField[2].style.display = "block";
        input[2].classList.add("border-error");
        label[2].classList.add("label-error");
        errorsValid[2].style.display = 'none';
    }else if (parseInt(year) > (new Date().getFullYear()) ||  year !== "" && isNaN(year)){
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

export function conditionsFor30Days(day, month, year, errorsField, errorsValid, input, label){

    errorsField[1].style.display = "none";
    input[1].classList.remove("border-error");
    label[1].classList.remove("label-error");

    
    if (parseInt(month) > 0 && parseInt(month) < 13){
        errorsValid[1].style.display = "none";
        input[1].classList.remove("border-error");
        label[1].classList.remove("label-error");
    }

    if (!day){
        errorsField[0].style.display = "block";
        input[0].classList.add("border-error");
        label[0].classList.add("label-error");
        errorsValid[0].style.display = 'none';
    }else if (parseInt(day) < 0 || parseInt(day) > 30 ||  day !== "" && isNaN(day)){
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
   

    if (!year){
        errorsField[2].style.display = "block";
        input[2].classList.add("border-error");
        label[2].classList.add("label-error");
        errorsValid[2].style.display = 'none';
    }else if (parseInt(year) > (new Date().getFullYear()) ||  year !== "" && isNaN(year)){
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

export function conditionsElse(day, month, year, errorsField, errorsValid, input, label){

    if (!month){
        errorsField[1].style.display = "block";
        input[1].classList.add("border-error");
        label[1].classList.add("label-error");
        errorsValid[1].style.display = 'none';
    }else if (parseInt(month) < 1 || parseInt(month) > 12 ||  month !== "" && isNaN(month)){
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

    if (!day){
        errorsField[0].style.display = "block";
        input[0].classList.add("border-error");
        label[0].classList.add("label-error");
        errorsValid[0].style.display = 'none';
    }else if (parseInt(day) < 0 || parseInt(day) > 31 ||  day !== "" && isNaN(day)){
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
   

    if (!year){
        errorsField[2].style.display = "block";
        input[2].classList.add("border-error");
        label[2].classList.add("label-error");
        errorsValid[2].style.display = 'none';
    }else if (parseInt(year) > (new Date().getFullYear()) ||  year !== "" && isNaN(year)){
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