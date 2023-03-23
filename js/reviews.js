const findBlock = (alias)=>{
   return $('.reviews__content').filter((ndx, item)=>{
        return $(item).attr('data-open-with')==alias;
    })
}


//я не понял к чему нужно было использовать reviews__switcher-link, если можно навесит
$('.reviews__user').on('click', (event)=>{
    let $this = $(event.currentTarget);
    let target = $this.attr('data-open');
    let showItem = findBlock(target);
    $this.addClass('user-active').siblings().removeClass('user-active');
    showItem.addClass('active').siblings().removeClass('active');
})