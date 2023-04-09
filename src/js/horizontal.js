(function(){
  const mesureWidth = item =>{
    let width = 524;
    const screenWidth = $(window).width();
    const container = item.closest('.menu__accord');
    const titlesBlocks =container.find('.menu__item-title');
    const titleWidth = titlesBlocks.width() * titlesBlocks.length; 
  
    console.log(titleWidth);
  
    const isTablet = window.matchMedia('(max-width: 720px)').matches;
    const isPhone = window.matchMedia('(max-width: 480px)').matches;
  
    if (isTablet){
      width = screenWidth - titleWidth;
    }
  
    if(isPhone){
      width = screenWidth - titlesBlocks.width()
    }
    return width;
  
  }
  
  const itemOpen = (item) => {
    const itemContent = item.find('.menu__content');
    const contentTextBox = itemContent.find('.menu__content-utero');
  
    const reqWidth = mesureWidth(item);
    item.addClass('menu__item--active');
    itemContent.width(reqWidth);
    contentTextBox.width(reqWidth);
  };
  
  const closeEveryItem = (container) => {
    const menuItems = container.find('.menu__item');
    const itemsContent = menuItems.find('.menu__content');
  
    menuItems.removeClass('menu__item--active');
    itemsContent.width(0);
  };
  
  $(".menu__item-title").on("click", (event) => {
    event.preventDefault();
    let $this = $(event.currentTarget);
    let item = $this.closest(".menu__item");
    let itemOpened = item.hasClass('menu__item--active');
    const container = $this.closest('.menu__accord')
  
    if (itemOpened) {
      closeEveryItem(container);
    } else {
      closeEveryItem(container);
      itemOpen(item);
    }
  });
  
})();