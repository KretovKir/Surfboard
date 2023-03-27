const itemOpen = (item) => {
  $(item).addClass("menu__content--active");
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
