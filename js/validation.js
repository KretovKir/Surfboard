sendBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    if (validateForm(form)){
        console.log('ок')
        
        const form = $(event.currentTarget);
    const name = form.find("[name = 'name']");
    const phone = form.find("[name = 'phone']");
    const street = form.find("[name = 'street']");
    const house = form.find("[name = 'house']");
    const corpus = form.find("[name = 'corpus']");
    const apartment = form.find("[name = 'apartment']");
    const floor = form.find("[name = 'floor']");
    const to = form.find("[name='to']");

    $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
            name: name.val(),
            phone: phone.val(),
            street:street.val(),
            house: house.val(),
            corpus: corpus.val(),
            apartment: apartment.val(),
            floor: floor.val(),
            to: to.val()
        },
        success: data => {
            console.log(data);
        }
    })
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

$('#form').on('submit', event =>{
    event.preventDefault();
    
    const form = $(event.currentTarget);
    const name = form.find("[name = 'name']");
    const phone = form.find("[name = 'phone']");
    const street = form.find("[name = 'street']");
    const house = form.find("[name = 'house']");
    const corpus = form.find("[name = 'corpus']");
    const apartment = form.find("[name = 'apartment']");
    const floor = form.find("[name = 'floor']");
    const to = form.find("[name='to']");

    $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
            name: name.val(),
            phone: phone.val(),
            street:street.val(),
            house: house.val(),
            corpus: corpus.val(),
            apartment: apartment.val(),
            floor: floor.val(),
            to: to.val()
        }
    })
})