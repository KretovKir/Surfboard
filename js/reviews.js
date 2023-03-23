$('.reviews__user').on('click', e =>{
    e.preventDefault();
    let currentTarget = e.currentTarget;
    $(currentTarget).addClass('user-active').siblings().removeClass('user-active');
})

