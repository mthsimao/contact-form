let btn_submit = document.querySelector('.btn-submit');
let divSucess = document.querySelector('.success-pop')

const form = document.querySelector('.form');
const campos = document.querySelectorAll('.box-required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;



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

let querytype = document.querySelectorAll('.queryType1')


const radioValidate = () => {
    if(!campos[3].checked && !campos[4].checked) {
        setError(3);
    } else {
        removeError(3);
    }
}

// checkbox validate 

const checkbox = document.querySelector('#icheckbox')

checkbox.addEventListener('change', () => {
    checkboxValidate();
})

const checkboxValidate = () => {
    if(!checkbox.checked) {
        spans[5].style.display = 'inline-block'
    } else {
        spans[5].style.display = 'none'
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
 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    lastNameValidate();
    emailValidate();
    radioValidate();
    checkboxValidate();
    divSucess.classList.add('pop-up')
})