(function(){
    const slider = $(".products__items").bxSlider({
        pager: false,
        controls: false
    });
    
    $('.products__control--left').click(e=>{
        e.preventDefault();
        slider.goToPrevSlide();
    })
    
    
    $('.products__control--right').click(e=>{
        e.preventDefault();
        slider.goToNextSlide();
    })
})();