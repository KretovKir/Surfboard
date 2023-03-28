const mesureWidth = item =>{
  const screenWidth = $(window).width();
  const container = $(item).closest('.menu__accord');
  const titlesBlocks = $(container).find('.menu__item-title');
  const titleWidth = $(titlesBlocks).width() * titlesBlocks.length; 

  console.log(titleWidth);
  return screenWidth - titleWidth;

}

const itemOpen = (item) => {
  $(item).addClass("menu__content--active");
  // const reqWidth = mesureWidth(item);
  // item.width(reqWidth);
};

const itemClose = (item) => {
  let container = $(item);
  $(container).removeClass("menu__content--active");
};

$(".menu__item").on("click", (event) => {
  event.preventDefault();
  let $this = $(event.currentTarget);
  let parent = $this.closest(".menu__item");
  let allSiblings = $(parent).siblings();
  let contentSiblings = $(allSiblings).find(".menu__content");
  let currentContent = $($(parent)).find(".menu__content");

  if ($(currentContent).hasClass("menu__content--active")) {
    itemClose(currentContent);
  } else {
    itemClose(contentSiblings);
    itemOpen(currentContent);
  }
});
