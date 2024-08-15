let btn_submit = document.querySelector('.btn-submit');
let divSucess = document.querySelector('.success-pop')

const form = document.querySelector('.form');
const campos = document.querySelectorAll('.box-required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

// name validate

const nameValidate = () => {
    if(campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }
}

// last name validate

const lastNameValidate = () => {
    if(campos[1].value.length < 3) {
        setError(1);
    } else {
        removeError(1);
    }
}


// email validate

const emailValidate = () => {
    if(emailRegex.test(campos[2].value)) {
        setError(2);
    } else {
        removeError(2);
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
 

btn_submit.addEventListener('click', (event) => {
    event.preventDefault();
    divSucess.classList.toggle('pop-up')

})

