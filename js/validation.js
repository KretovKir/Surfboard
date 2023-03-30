sendBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    if (validateForm(form)){
        console.log('ок')
    }else{
        console.log('Ошибка');
    }
})

function validateForm(form){
    let valid = true;

    if (!validateField(form.elements.name)){
        valid = false;
    };
    if (!validateField(form.elements.phone)){
        valid = false;
    };
    if (!validateField(form.elements.street)){
        valid = false;
    };
    if (!validateField(form.elements.house)){
        valid = false;
    };
    if (!validateField(form.elements.corpus)){
        valid = false;
    };
    if (!validateField(form.elements.apartment)){
        valid = false;
    };
    if (!validateField(form.elements.floor)){
        valid = false;
    };
    return valid;
}

function validateField(field){
    if (!field.checkValidity()){
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    }
    else{
        field.nextElementSibling.textContent = '';
        return true;
    }
}