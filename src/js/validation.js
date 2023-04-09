(function(){
  const form = document.getElementById('form');

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('form1',form)
  if (validateForm(form)) {
    console.log("ок");

    const form = $('#form');
    const name = form.find("[name = 'name']");
    const phone = form.find("[name = 'phone']");
    const street = form.find("[name = 'street']");
    const house = form.find("[name = 'house']");
    const corpus = form.find("[name = 'corpus']");
    const apartment = form.find("[name = 'apartment']");
    const floor = form.find("[name = 'floor']");
    const to = form.find("[name='to']");
    const comment = form.find("[name='comment']");

    $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        street: street.val(),
        house: house.val(),
        corpus: corpus.val(),
        apartment: apartment.val(),
        floor: floor.val(),
        to: to.val(),
        comment: comment.val()
      },
      success: (data) => {
        console.log(data);
        $('.modal__text').text(data.message);
        $('#modal').css('overflow','hidden');
        $.fancybox.open({
          src: "#modal",
          type: "inline",
        });
      },
      error: (data) => {
        console.log(data);
        $('.modal__text').text('Произошла ошибка, попробуйте позже');
        $.fancybox.open({
          src: "#modal",
          type: "inline",
        });
      }
    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.comment)){
    valid=false;
  }
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

function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
  } else {
    field.nextElementSibling.textContent = "";
    return true;
  }
}



$('.app-close-modal').on('click', () => {
  $.fancybox.close()
});


// $("#form").on("submit", (event) => {
//   event.preventDefault();

//   const form = $(event.currentTarget);
//   const name = form.find("[name = 'name']");
//   const phone = form.find("[name = 'phone']");
//   const street = form.find("[name = 'street']");
//   const house = form.find("[name = 'house']");
//   const corpus = form.find("[name = 'corpus']");
//   const apartment = form.find("[name = 'apartment']");
//   const floor = form.find("[name = 'floor']");
//   const to = form.find("[name='to']");

//   $.ajax({
//     url: "https://webdev-api.loftschool.com/sendmail",
//     method: "post",
//     data: {
//       name: name.val(),
//       phone: phone.val(),
//       street: street.val(),
//       house: house.val(),
//       corpus: corpus.val(),
//       apartment: apartment.val(),
//       floor: floor.val(),
//       to: to.val(),
//     },
//   });
// });

})();