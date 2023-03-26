const itemOpen = (item) => {
  $(item).addClass("isActive");
};

const itemClose = (item) => {
  let container = $(item);
  $(container).removeClass('isActive');

};

$(".menu__item").on("click", (event) => {
  let $this = $(event.currentTarget);
  let parent = $this.closest('.menu__item');
  let allSiblings = $(parent).siblings();
  let contentSiblings = $(allSiblings).find('.menu__content');
  let currentContent = $($(parent)).find(".menu__content");

  if($(currentContent).hasClass('isActive')){
    itemClose(currentContent);
  }else{
    itemClose(contentSiblings);
    itemOpen(currentContent);
  }

});
