document.querySelector('.card-number-input').oninput =()=>{
    document.querySelector('.card-number-box').innerText=document.querySelector('.card-number-input').value;

}

document.querySelector('.card-holder-input').oninput =()=>{
    document.querySelector('.card-holder-name').innerText=document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput=()=>{
    document.querySelector('.exp-month').innerText=document.querySelector('.month-input').value;
}

