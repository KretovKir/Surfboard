$('.team__item-title').on('click', (e)=>{
    e.preventDefault();
    $('.team__item-drop').css('display', 'flex');
    console.log('test')
})