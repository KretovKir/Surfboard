$('.reviews__switcher-item').on('click', function(event){
    event.preventDefault();
    const $this = $(event.currentTarget);
    console.log($this)
})