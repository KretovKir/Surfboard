const openItem = item =>{
    const container = item.closest('.team__item');
    const contentBlock = container.find('.team__item-drop');
    const textContent = contentBlock.find('.team__item-content');
    const reqHeight = textContent.height();
    container.addClass('isOpen');
    contentBlock.height(reqHeight);
}

const closeItem = container=>{
    const items = container.find('.team__item-drop');
    items.height(0);
    const itemContainer = container.find('.team__item')
    itemContainer.removeClass('isOpen');
}

$('.team__item-title').on('click', (e)=>{
    const $this = $(e.currentTarget);
    const container = $this.closest('.team')
    const elemContainer = $this.closest('.team__item');

    if (elemContainer.hasClass('isOpen')){
        closeItem(container);
    }
    else{
        openItem(container);
    }
    closeItem(container);
    openItem($this);
})
