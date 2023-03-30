$('#form').on('submit', event =>{
    event.preventDefault();

    $.fancybox.open({
        src: '#modal',
        type: 'inline'
    })

})