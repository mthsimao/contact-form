let btn_submit = document.querySelector('.btn-submit');
let divSucess = document.querySelector('.success-pop')

const form = document.querySelector('.form');
const campos = document.querySelectorAll('.box-required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// block submit

const blockSubmit = () => {
    btn_submit.style.cursor = 'not-allowed'
    btn_submit.disabled = true
}

// unblock submit
const unblockBtn = () => {
    btn_submit.style.cursor = 'pointer'
    btn_submit.disabled = false
}

// name validate

const nameValidate = () => {
    if(campos[0].value.length < 3 || campos[0].value == ' ') {
        setError(0);
    } else {
        removeError(0);
    }
}

// last name validate

const lastNameValidate = () => {
    if(campos[1].value.length < 3 || campos[1].value == ' ') {
        setError(1);
    } else {
        removeError(1);
    }
}

// email validate

const emailValidate = () => {
    if(!emailRegex.test(campos[2].value)) {
        setError(2);
    } else if(campos[2].value == '') {
        setError(2);
    } else {
        removeError(2);
    }
}

// input radios validation

const cr1 = document.querySelector('.cr1')
const cr2 = document.querySelector('.cr2')
const inputRadio1 = document.querySelector('.inpradio1')
const inputRadio2 = document.querySelector('.inpradio2')

const radioValidation = () => {
    if(inputRadio1.checked == true) {
        cr1.classList.add('radioChecked')
        cr2.classList.remove('radioChecked')
        removeError(3)
    } else if (inputRadio2.checked == true){
        cr2.classList.add('radioChecked')
        cr1.classList.remove('radioChecked')
        removeError(3)
    } else {
        console.log('error')
        blockSubmit();
    }
}


// checkbox validate 

const checkbox = document.querySelector('#icheckbox')

const checkboxValidate = () => {
    if(!checkbox.checked) {
        spans[5].style.display = 'inline-block'
    } else {
        spans[5].style.display = 'none'
    }
}


// message validate

const messageValidation = () => {
    if(campos[5].value.length <= 3 || campos[5].value == ' ') {
     
        spans[4].style.display = 'inline-block'
        campos[5].style.border = '1px solid var(--Red)'
    } else {
        spans[4].style.display = 'none'
        campos[5].style.border = ''
    }
}

// set or remove errors

const setError = (index) => {
    campos[index].style.border = '1px solid var(--Red)'
    spans[index].style.display = 'inline-block'
}

const removeError = (index) => {
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}

const validationAll = () => {
    nameValidate();
    lastNameValidate();
    emailValidate();

    if(inputRadio1.checked == false && inputRadio2.checked == false) {
        setError(3);
    } else {
        removeError(3);
    }

    messageValidation();
    checkboxValidate();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validationAll();
    divSucess.classList.toggle('pop-up')
})
