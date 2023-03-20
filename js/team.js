const openItem = item =>{
    const container = item.closest('.team__item');
    const contentBlock = container.find('.team__item-drop');
    const textContent = contentBlock.find('.team__item-content');
    const reqHeight = textContent.height();
    
    contentBlock.height(reqHeight);
}

const closeItem = container=>{
    const items = container.find('.team__item-drop');
    items.height(0);
}

$('.team__item-title').on('click', (e)=>{
    const $this = $(e.currentTarget);
    const container = $this.closest('.team')
    closeItem(container);
    openItem($this);
})
