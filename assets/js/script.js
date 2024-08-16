let btn_submit = document.querySelector('.btn-submit');
let divSucess = document.querySelector('.success-pop')

const form = document.querySelector('.form');
const campos = document.querySelectorAll('.box-required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// name validate

const nameValidate = () => {
    if(campos[0].value.length < 3 || campos[0].value == ' ') {
        setError(0)
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
        blockSubmit();
    } else {
        spans[5].style.display = 'none'
    }
}


// message validate

const messageValidation = () => {
    if(campos[5].value.length <= 3 || campos[5].value == ' ') {
     
        spans[4].style.display = 'inline-block'
        campos[5].style.border = '1px solid var(--Red)'
        blockSubmit();
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
   

// pulling data to message after submit

let personName = document.querySelector('.personName')
let personEmail = document.querySelector('.personEmail')

let pName = document.querySelector('.pName')
let pEmail = document.querySelector('.pEmail')
let pQtype = document.querySelector('.pQtype')
const msgAfter = document.querySelector('.message-after-submit')
const btn_dimiss = document.querySelector('.btn-dimiss')

const main = document.querySelector('main')

const msgAfterSubmit = () => {
    personName.innerHTML = `Name: ${campos[0].value} ${campos[1].value}`
    personEmail.innerHTML = `Email: ${campos[2].value}`
    
    pName.innerHTML = `Name: ${campos[0].value} ${campos[1].value}`
    pEmail.innerHTML = `Email: ${campos[2].value}`

    divSucess.style.display = 'block'
    msgAfter.style.display = 'block'
    main.style.display = 'none'
}

btn_dimiss.addEventListener('click', () => {
    divSucess.style.display = 'none'
    msgAfter.style.display = 'none'
    main.style.display = 'block'
    
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidate();
    lastNameValidate();
    emailValidate();
    messageValidation();
    checkboxValidate();
    
    msgAfterSubmit();
})
