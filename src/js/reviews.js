(function(){
    const findBlock = (alias)=>{
        return $('.reviews__content').filter((ndx, item)=>{
             return $(item).attr('data-open-with')==alias;
         })
     }
     
     
     $('.reviews__user').on('click', (event)=>{
         let $this = $(event.currentTarget);
         let target = $this.attr('data-open');
         let showItem = findBlock(target);
         $this.addClass('user-active').siblings().removeClass('user-active');
         showItem.addClass('active').siblings().removeClass('active');
     })
})();