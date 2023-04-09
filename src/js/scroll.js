(function(){
  const sections = $(".section");
const display = $(".maincontent");
sections.first().addClass("active");
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;



const performTransition = (sectionEq) => {
    if(inScroll===false){
        inScroll=true;
        const position = sectionEq * -100;
        display.css({
          transform: `translateY(${position}%)`,
        });
        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
        $('.fixed__item').eq(sectionEq).addClass('fixed__item--active').siblings().removeClass('fixed__item--active');
        setTimeout(()=>{
            inScroll=false;
        },1300)
    }
};

const scrollViewport = (direction) => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
      performTransition(nextSection.index());
  }
  if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
};

$(window).on("wheel", (event) => {
  const deltaY = event.originalEvent.deltaY;
  if (deltaY > 0) {
    //next
    scrollViewport("next");
  }
  if (deltaY < 0) {
    //prev
    scrollViewport("prev");
  }

});

$(window).on('keydown', event =>{
    console.log(event.keyCode)
    let tagName = event.target.tagName.toLowerCase();
    if(tagName!=='input' && tagName!=='textarea'){
        switch (event.keyCode) {
            case 38:
            scrollViewport("prev");
                break;
        
            case 40:
            scrollViewport("next");
                break;
        }
    }
})




$('[data-scroll-to]').on('click', event=>{
    event.preventDefault();
    const $this = $(event.currentTarget);
    const target = $this.attr('data-scroll-to');
    const reqSection = $(`[data-section-id=${target}]`);
    console.log(reqSection.index());
    performTransition(reqSection.index());
})


// $('.fixed__item').on('click', event =>{
//     event.preventDefault();

//     const $this = $(event.currentTarget);
//     $this.addClass('fixed__item--active').siblings().removeClass('fixed__item--active');
//     const target = $this.attr('data-scroll-to');
//     const reqSection = $(`[data-section-id=${target}]`);
//     console.log(reqSection.index());
//     performTransition(reqSection.index());
// })



$('.wrapper').on('touchMove', event => event.preventDefault());

if (isMobile) {
  
  $("body").swipe({
    swipe: function (event, direction) {
      if (direction === 'up') {
        scrollViewport('next')
      }
      if (direction === 'down') {
        scrollViewport('prev')
      }

    }
  });
}
})();