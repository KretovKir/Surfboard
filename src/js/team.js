(function(){
    const isOpen = item =>{
        const container = $(item).closest('.team__item');
        const dropElem = $(container).find('.team__item-drop'); 
        const dropContent = $(container).find('.team__item-content');
        const curHeight = $(dropContent).height();
        container.addClass('isActive');
        $(dropElem).height(curHeight);
    }
    
    const closeAll = container =>{
        const allBlocks = $(container).find('.team__item-drop');
        const itemContainer = container.find('.team__item');
        itemContainer.removeClass('isActive');
        $(allBlocks).height(0);
       
    }
    
    $('.team__item-title').on('click', (event)=>{
        const $this = $(event.currentTarget);
        const closeSiblings = $this.closest('.team__items');
        const elemContainer = $this.closest('.team__item');
        
        if(elemContainer.hasClass('isActive')){
            closeAll(closeSiblings);
        }else{
            closeAll(closeSiblings);
            isOpen($this);
        }
    })
    
})();