!function(){var e=document.querySelector(".burger"),t=document.querySelector(".hidden"),n=document.querySelector(".cross");e.addEventListener("click",function(e){t.style.display="block",t.style.zIndex="1",t.style.overflow="hidden"}),n.addEventListener("click",function(e){t.style.display="none"})}()(function(){const o=e=>{var t=e.find(".menu__content"),n=t.find(".menu__content-utero"),o=(e=>{let t=524;var n=$(window).width(),e=e.closest(".menu__accord").find(".menu__item-title"),o=e.width()*e.length,a=(console.log(o),window.matchMedia("(max-width: 720px)").matches),i=window.matchMedia("(max-width: 480px)").matches;return a&&(t=n-o),t=i?n-e.width():t})(e);e.addClass("menu__item--active"),t.width(o),n.width(o)},a=e=>{var e=e.find(".menu__item"),t=e.find(".menu__content");e.removeClass("menu__item--active"),t.width(0)};$(".menu__item-title").on("click",e=>{e.preventDefault();var e=$(e.currentTarget),t=e.closest(".menu__item"),n=t.hasClass("menu__item--active"),e=e.closest(".menu__accord");n?a(e):(a(e),o(t))})})()(function(){let o;ymaps.ready(()=>{o=new ymaps.Map("map-block",{center:[69.165,35.14],zoom:14,controls:[]});for(var e=[[69.163907,35.146614],[69.167404,35.143657]],t=new ymaps.GeoObjectCollection({},{draggable:!1,iconLayout:"default#image",iconImageHref:"./img/marker.svg",iconImageSize:[30,42]}),n=0;n<e.length;n++)t.add(new ymaps.Placemark(e[n]));o.geoObjects.add(t),o.behaviors.disable("scrollZoom")})})(),(void $(".reviews__user").on("click",e=>{var n,e=$(e.currentTarget),t=e.attr("data-open"),t=(n=t,$(".reviews__content").filter((e,t)=>$(t).attr("data-open-with")==n));e.addClass("user-active").siblings().removeClass("user-active"),t.addClass("active").siblings().removeClass("active")}))(function(){const o=$(".section"),n=$(".maincontent");o.first().addClass("active");var e=new MobileDetect(window.navigator.userAgent).mobile();let a=!1;const i=e=>{var t;!1===a&&(a=!0,t=-100*e,n.css({transform:`translateY(${t}%)`}),o.eq(e).addClass("active").siblings().removeClass("active"),$(".fixed__item").eq(e).addClass("fixed__item--active").siblings().removeClass("fixed__item--active"),setTimeout(()=>{a=!1},1300))},l=e=>{var t=o.filter(".active"),n=t.next(),t=t.prev();"next"===e&&n.length&&i(n.index()),"prev"===e&&t.length&&i(t.index())};$(window).on("wheel",e=>{e=e.originalEvent.deltaY;0<e&&l("next"),e<0&&l("prev")}),$(window).on("keydown",e=>{console.log(e.keyCode);var t=e.target.tagName.toLowerCase();if("input"!==t&&"textarea"!==t)switch(e.keyCode){case 38:l("prev");break;case 40:l("next")}}),$("[data-scroll-to]").on("click",e=>{e.preventDefault();e=$(e.currentTarget).attr("data-scroll-to"),e=$(`[data-section-id=${e}]`);console.log(e.index()),i(e.index())}),$(".hidden__item").on("click",e=>{e.preventDefault();e=$(e.currentTarget),e.addClass("hidden__item--active").siblings().removeClass("hidden__item--active"),e=e.attr("data-scroll-to"),e=$(`[data-section-id=${e}]`);console.log(e.index()),hidden.style.display="none",i(e.index())}),$(".wrapper").on("touchMove",e=>e.preventDefault()),e&&$("body").swipe({swipe:function(e,t){"up"===t&&l("next"),"down"===t&&l("prev")}})})()(function(){const t=$(".products__items").bxSlider({pager:!1,controls:!1});$(".products__control--left").click(e=>{e.preventDefault(),t.goToPrevSlide()}),$(".products__control--right").click(e=>{e.preventDefault(),t.goToNextSlide()})})()(function(){const o=e=>{var t=$(e).find(".team__item-drop");e.find(".team__item").removeClass("isActive"),$(t).height(0)};$(".team__item-title").on("click",e=>{var t,e=$(e.currentTarget),n=e.closest(".team__items");e.closest(".team__item").hasClass("isActive")?o(n):(o(n),n=e,n=$(n).closest(".team__item"),e=$(n).find(".team__item-drop"),t=$(n).find(".team__item-content"),t=$(t).height(),n.addClass("isActive"),$(e).height(t))})})(),function(){const d=document.getElementById("form");function r(e){if(e.checkValidity())return e.nextElementSibling.textContent="",1;e.nextElementSibling.textContent=e.validationMessage}sendBtn.addEventListener("click",e=>{if(e.preventDefault(),console.log("form1",d),function(e){let t=!0;r(e.elements.name)||(t=!1);r(e.elements.phone)||(t=!1);r(e.elements.comment)||(t=!1);r(e.elements.street)||(t=!1);r(e.elements.house)||(t=!1);r(e.elements.corpus)||(t=!1);r(e.elements.apartment)||(t=!1);r(e.elements.floor)||(t=!1);return t}(d)){console.log("ок");const d=$("#form");var e=d.find("[name = 'name']"),t=d.find("[name = 'phone']"),n=d.find("[name = 'street']"),o=d.find("[name = 'house']"),a=d.find("[name = 'corpus']"),i=d.find("[name = 'apartment']"),l=d.find("[name = 'floor']"),s=d.find("[name='to']"),c=d.find("[name='comment']");$.ajax({url:"https://webdev-api.loftschool.com/sendmail",method:"post",data:{name:e.val(),phone:t.val(),street:n.val(),house:o.val(),corpus:a.val(),apartment:i.val(),floor:l.val(),to:s.val(),comment:c.val()},success:e=>{console.log(e),$(".modal__text").text(e.message),$("#modal").css("overflow","hidden"),$.fancybox.open({src:"#modal",type:"inline"})},error:e=>{console.log(e),$(".modal__text").text("Произошла ошибка, попробуйте позже"),$.fancybox.open({src:"#modal",type:"inline"})}})}}),$(".app-close-modal").on("click",()=>{$.fancybox.close()})}(),function(){let a,i,l,s,c;document.addEventListener("DOMContentLoaded",e=>{a=document.getElementById("video"),l=document.getElementById("durationLevel"),s=document.getElementById("soundLevel"),i=document.querySelectorAll(".play"),s.addEventListener("click",o),s.addEventListener("mouseup",o),l.value=0,l.min=0,l.max=Math.round(a.duration),l.addEventListener("input",n);for(let e=0;e<i.length;e++)i[e].addEventListener("click",()=>{document.querySelector(".play-btn").classList.toggle("play-btn--active"),a.paused?(a.play(),c=setInterval(t,1e3/66)):(a.pause(),clearInterval(c))});function t(){l.value=a.currentTime}function n(){a.currentTime=l.value,c=setInterval(t,1e3/66)}function o(){a.volume=s.value/10}document.getElementById("micLevel").addEventListener("click",function(){0===a.volume?(a.volume=s).value=10*s:(s=a.volume,a.volume=0,s.value=0)})})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsImhvcml6b250YWwuanMiLCJtYXAuanMiLCJyZXZpZXdzLmpzIiwic2Nyb2xsLmpzIiwic2xpZGVyLmpzIiwidGVhbS5qcyIsInZhbGlkYXRpb24uanMiLCJ2aWRlby5qcyJdLCJuYW1lcyI6WyJidXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRkZW4iLCJjbG9zZUNyb3NzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiekluZGV4Iiwib3ZlcmZsb3ciLCJpdGVtT3BlbiIsIml0ZW1Db250ZW50IiwiaXRlbSIsImZpbmQiLCJjb250ZW50VGV4dEJveCIsInJlcVdpZHRoIiwibGV0Iiwid2lkdGgiLCJzY3JlZW5XaWR0aCIsIiQiLCJ3aW5kb3ciLCJ0aXRsZXNCbG9ja3MiLCJjbG9zZXN0IiwidGl0bGVXaWR0aCIsImxlbmd0aCIsImlzVGFibGV0IiwiY29uc29sZSIsImxvZyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaXNQaG9uZSIsImFkZENsYXNzIiwiY2xvc2VFdmVyeUl0ZW0iLCJtZW51SXRlbXMiLCJjb250YWluZXIiLCJpdGVtc0NvbnRlbnQiLCJyZW1vdmVDbGFzcyIsIm9uIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsImN1cnJlbnRUYXJnZXQiLCJpdGVtT3BlbmVkIiwiaGFzQ2xhc3MiLCJteU1hcCIsInltYXBzIiwicmVhZHkiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwiY29udHJvbHMiLCJjb29yZHMiLCJteUNvbGxlY3Rpb24iLCJHZW9PYmplY3RDb2xsZWN0aW9uIiwiZHJhZ2dhYmxlIiwiaWNvbkxheW91dCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaSIsImFkZCIsIlBsYWNlbWFyayIsImdlb09iamVjdHMiLCJiZWhhdmlvcnMiLCJkaXNhYmxlIiwidGFyZ2V0IiwiYXR0ciIsInNob3dJdGVtIiwiZmlsdGVyIiwibmR4IiwiYWxpYXMiLCJzaWJsaW5ncyIsInNlY3Rpb25zIiwiZmlyc3QiLCJpc01vYmlsZSIsIk1vYmlsZURldGVjdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1vYmlsZSIsImluU2Nyb2xsIiwicGVyZm9ybVRyYW5zaXRpb24iLCJwb3NpdGlvbiIsInNlY3Rpb25FcSIsImNzcyIsInRyYW5zZm9ybSIsImVxIiwic2V0VGltZW91dCIsInNjcm9sbFZpZXdwb3J0IiwiYWN0aXZlU2VjdGlvbiIsIm5leHRTZWN0aW9uIiwibmV4dCIsInByZXZTZWN0aW9uIiwicHJldiIsImRpcmVjdGlvbiIsImluZGV4IiwiZGVsdGFZIiwib3JpZ2luYWxFdmVudCIsImtleUNvZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJyZXFTZWN0aW9uIiwic3dpcGUiLCJzbGlkZXIiLCJieFNsaWRlciIsInBhZ2VyIiwiY2xpY2siLCJlIiwiZ29Ub1ByZXZTbGlkZSIsImdvVG9OZXh0U2xpZGUiLCJjbG9zZUFsbCIsImFsbEJsb2NrcyIsImhlaWdodCIsImRyb3BDb250ZW50IiwiY2xvc2VTaWJsaW5ncyIsImRyb3BFbGVtIiwiY3VySGVpZ2h0IiwiZm9ybSIsImdldEVsZW1lbnRCeUlkIiwidmFsaWRhdGVGaWVsZCIsImZpZWxkIiwiY2hlY2tWYWxpZGl0eSIsIm5leHRFbGVtZW50U2libGluZyIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJzZW5kQnRuIiwidmFsaWQiLCJlbGVtZW50cyIsIm5hbWUiLCJwaG9uZSIsImNvbW1lbnQiLCJzdHJlZXQiLCJob3VzZSIsImNvcnB1cyIsImFwYXJ0bWVudCIsImZsb29yIiwidG8iLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInZhbCIsInN1Y2Nlc3MiLCJ0ZXh0IiwibWVzc2FnZSIsImZhbmN5Ym94Iiwib3BlbiIsInNyYyIsInR5cGUiLCJlcnJvciIsImNsb3NlIiwidmlkZW8iLCJwbGF5IiwiZHVyYXRpb25Db250cm9sIiwic291bmRDb250cm9sIiwiaW50ZXJ2YWxJZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGFuZ2VTb3VuZCIsInZhbHVlIiwibWluIiwibWF4IiwiTWF0aCIsInJvdW5kIiwiZHVyYXRpb24iLCJzZXRWaWRlb0R1cmF0aW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGF1c2VkIiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGVEdXJhdGlvbiIsInBhdXNlIiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwidm9sdW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFdBQ0EsSUFBQUEsRUFBQUMsU0FBQUMsY0FBQSxTQUFBLEVBQ0FDLEVBQUFGLFNBQUFDLGNBQUEsU0FBQSxFQUNBRSxFQUFBSCxTQUFBQyxjQUFBLFFBQUEsRUFFQUYsRUFBQUssaUJBQUEsUUFBQSxTQUFBQyxHQUNBSCxFQUFBSSxNQUFBQyxRQUFBLFFBQ0FMLEVBQUFJLE1BQUFFLE9BQUEsSUFDQU4sRUFBQUksTUFBQUcsU0FBQSxRQUNBLENBQUEsRUFFQU4sRUFBQUMsaUJBQUEsUUFBQSxTQUFBQyxHQUNBSCxFQUFBSSxNQUFBQyxRQUFBLE1BQ0EsQ0FBQSxDQUVBLEVBQUEsRUNmQSxXQUNBLE1BdUJBRyxFQUFBLElBQ0EsSUFBQUMsRUFBQUMsRUFBQUMsS0FBQSxnQkFBQSxFQUNBQyxFQUFBSCxFQUFBRSxLQUFBLHNCQUFBLEVBRUFFLEdBM0JBSCxJQUNBSSxJQUFBQyxFQUFBLElBQ0EsSUFBQUMsRUFBQUMsRUFBQUMsTUFBQSxFQUFBSCxNQUFBLEVBRUFJLEVBREFULEVBQUFVLFFBQUEsZUFBQSxFQUNBVCxLQUFBLG1CQUFBLEVBQ0FVLEVBQUFGLEVBQUFKLE1BQUEsRUFBQUksRUFBQUcsT0FJQUMsR0FGQUMsUUFBQUMsSUFBQUosQ0FBQSxFQUVBSCxPQUFBUSxXQUFBLG9CQUFBLEVBQUFDLFNBQ0FDLEVBQUFWLE9BQUFRLFdBQUEsb0JBQUEsRUFBQUMsUUFTQSxPQVBBSixJQUNBUixFQUFBQyxFQUFBSyxHQUlBTixFQURBYSxFQUNBWixFQUFBRyxFQUFBSixNQUFBLEVBRUFB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QUFBLElBQUEsRUFBQSxDQUNBLENBRUEsU0FBQVosSUFDQU4sRUFBQXNCLE9BQUFuQixFQUFBSSxNQUFBLEVBQ0EsQ0FsQ0EzSixTQUFBbUgsZUFBQSxVQUFBLEVBQ0EvRyxpQkFBQSxRQUVBLFdBQ0EsSUFBQWdKLEVBQUFzQixRQUNBdEIsRUFBQXNCLE9BQUFuQixHQUNBSSxNQUFBLEdBQUFKLEdBR0FBLEVBQUFILEVBQUFzQixPQUNBdEIsRUFBQXNCLE9BQUEsRUFDQW5CLEVBQUFJLE1BQUEsRUFFQSxDQVpBLENBbUNBLENBQUEsQ0FDQSxFQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuICB2YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcbiAgdmFyIGhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuXCIpO1xyXG4gIHZhciBjbG9zZUNyb3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcm9zc1wiKTtcclxuICBcclxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaGlkZGVuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBoaWRkZW4uc3R5bGUuekluZGV4ID0gXCIxXCI7XHJcbiAgICBoaWRkZW4uc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjtcclxuICB9KTtcclxuICBcclxuICBjbG9zZUNyb3NzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGhpZGRlbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSk7XHJcbiAgXHJcbn0pKCkiLCIoZnVuY3Rpb24oKXtcclxuICBjb25zdCBtZXN1cmVXaWR0aCA9IGl0ZW0gPT57XHJcbiAgICBsZXQgd2lkdGggPSA1MjQ7XHJcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gaXRlbS5jbG9zZXN0KCcubWVudV9fYWNjb3JkJyk7XHJcbiAgICBjb25zdCB0aXRsZXNCbG9ja3MgPWNvbnRhaW5lci5maW5kKCcubWVudV9faXRlbS10aXRsZScpO1xyXG4gICAgY29uc3QgdGl0bGVXaWR0aCA9IHRpdGxlc0Jsb2Nrcy53aWR0aCgpICogdGl0bGVzQmxvY2tzLmxlbmd0aDsgXHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZVdpZHRoKTtcclxuICBcclxuICAgIGNvbnN0IGlzVGFibGV0ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDcyMHB4KScpLm1hdGNoZXM7XHJcbiAgICBjb25zdCBpc1Bob25lID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ4MHB4KScpLm1hdGNoZXM7XHJcbiAgXHJcbiAgICBpZiAoaXNUYWJsZXQpe1xyXG4gICAgICB3aWR0aCA9IHNjcmVlbldpZHRoIC0gdGl0bGVXaWR0aDtcclxuICAgIH1cclxuICBcclxuICAgIGlmKGlzUGhvbmUpe1xyXG4gICAgICB3aWR0aCA9IHNjcmVlbldpZHRoIC0gdGl0bGVzQmxvY2tzLndpZHRoKClcclxuICAgIH1cclxuICAgIHJldHVybiB3aWR0aDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgaXRlbU9wZW4gPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbUNvbnRlbnQgPSBpdGVtLmZpbmQoJy5tZW51X19jb250ZW50Jyk7XHJcbiAgICBjb25zdCBjb250ZW50VGV4dEJveCA9IGl0ZW1Db250ZW50LmZpbmQoJy5tZW51X19jb250ZW50LXV0ZXJvJyk7XHJcbiAgXHJcbiAgICBjb25zdCByZXFXaWR0aCA9IG1lc3VyZVdpZHRoKGl0ZW0pO1xyXG4gICAgaXRlbS5hZGRDbGFzcygnbWVudV9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICBpdGVtQ29udGVudC53aWR0aChyZXFXaWR0aCk7XHJcbiAgICBjb250ZW50VGV4dEJveC53aWR0aChyZXFXaWR0aCk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBjbG9zZUV2ZXJ5SXRlbSA9IChjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGNvbnRhaW5lci5maW5kKCcubWVudV9faXRlbScpO1xyXG4gICAgY29uc3QgaXRlbXNDb250ZW50ID0gbWVudUl0ZW1zLmZpbmQoJy5tZW51X19jb250ZW50Jyk7XHJcbiAgXHJcbiAgICBtZW51SXRlbXMucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgaXRlbXNDb250ZW50LndpZHRoKDApO1xyXG4gIH07XHJcbiAgXHJcbiAgJChcIi5tZW51X19pdGVtLXRpdGxlXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGxldCBpdGVtID0gJHRoaXMuY2xvc2VzdChcIi5tZW51X19pdGVtXCIpO1xyXG4gICAgbGV0IGl0ZW1PcGVuZWQgPSBpdGVtLmhhc0NsYXNzKCdtZW51X19pdGVtLS1hY3RpdmUnKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy5tZW51X19hY2NvcmQnKVxyXG4gIFxyXG4gICAgaWYgKGl0ZW1PcGVuZWQpIHtcclxuICAgICAgY2xvc2VFdmVyeUl0ZW0oY29udGFpbmVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsb3NlRXZlcnlJdGVtKGNvbnRhaW5lcik7XHJcbiAgICAgIGl0ZW1PcGVuKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG59KSgpIiwiKGZ1bmN0aW9uKCl7XHJcbiAgbGV0IG15TWFwO1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXAtYmxvY2tcIiwge1xyXG4gICAgY2VudGVyOiBbNjkuMTY1LCAzNS4xNF0sXHJcbiAgICB6b29tOiAxNCxcclxuICAgIGNvbnRyb2xzOiBbXSxcclxuICAgIFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb29yZHMgPSBbXHJcbiAgICBbNjkuMTYzOTA3LCAzNS4xNDY2MTRdLFxyXG4gICAgWzY5LjE2NzQwNCwgMzUuMTQzNjU3XSxcclxuICBdO1xyXG5cclxuICBjb25zdCBteUNvbGxlY3Rpb24gPSBuZXcgeW1hcHMuR2VvT2JqZWN0Q29sbGVjdGlvbihcclxuICAgIHt9LFxyXG4gICAge1xyXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICBpY29uTGF5b3V0OiBcImRlZmF1bHQjaW1hZ2VcIixcclxuICAgICAgaWNvbkltYWdlSHJlZjogXCIuL2ltZy9tYXJrZXIuc3ZnXCIsXHJcbiAgICAgIGljb25JbWFnZVNpemU6IFszMCwgNDJdLFxyXG4gICAgICBcclxuICAgIC8vICAgaWNvbkltYWdlT2Zmc2V0OiBbLTMsIC00Ml0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIG15Q29sbGVjdGlvbi5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhjb29yZHNbaV0pKTtcclxuICB9XHJcblxyXG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15Q29sbGVjdGlvbik7XHJcbiAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcclxufTtcclxuXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGZpbmRCbG9jayA9IChhbGlhcyk9PntcclxuICAgICAgICByZXR1cm4gJCgnLnJldmlld3NfX2NvbnRlbnQnKS5maWx0ZXIoKG5keCwgaXRlbSk9PntcclxuICAgICAgICAgICAgIHJldHVybiAkKGl0ZW0pLmF0dHIoJ2RhdGEtb3Blbi13aXRoJyk9PWFsaWFzO1xyXG4gICAgICAgICB9KVxyXG4gICAgIH1cclxuICAgICBcclxuICAgICBcclxuICAgICAkKCcucmV2aWV3c19fdXNlcicpLm9uKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICAgbGV0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgbGV0IHRhcmdldCA9ICR0aGlzLmF0dHIoJ2RhdGEtb3BlbicpO1xyXG4gICAgICAgICBsZXQgc2hvd0l0ZW0gPSBmaW5kQmxvY2sodGFyZ2V0KTtcclxuICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3VzZXItYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygndXNlci1hY3RpdmUnKTtcclxuICAgICAgICAgc2hvd0l0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgIH0pXHJcbn0pKCkiLCIoZnVuY3Rpb24oKXtcclxuICBjb25zdCBzZWN0aW9ucyA9ICQoXCIuc2VjdGlvblwiKTtcclxuY29uc3QgZGlzcGxheSA9ICQoXCIubWFpbmNvbnRlbnRcIik7XHJcbnNlY3Rpb25zLmZpcnN0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbmNvbnN0IG1vYmlsZURldGVjdCA9IG5ldyBNb2JpbGVEZXRlY3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5jb25zdCBpc01vYmlsZSA9IG1vYmlsZURldGVjdC5tb2JpbGUoKTtcclxuXHJcbmxldCBpblNjcm9sbCA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG5jb25zdCBwZXJmb3JtVHJhbnNpdGlvbiA9IChzZWN0aW9uRXEpID0+IHtcclxuICAgIGlmKGluU2Nyb2xsPT09ZmFsc2Upe1xyXG4gICAgICAgIGluU2Nyb2xsPXRydWU7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzZWN0aW9uRXEgKiAtMTAwO1xyXG4gICAgICAgIGRpc3BsYXkuY3NzKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtwb3NpdGlvbn0lKWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VjdGlvbnMuZXEoc2VjdGlvbkVxKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoJy5maXhlZF9faXRlbScpLmVxKHNlY3Rpb25FcSkuYWRkQ2xhc3MoJ2ZpeGVkX19pdGVtLS1hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdmaXhlZF9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBpblNjcm9sbD1mYWxzZTtcclxuICAgICAgICB9LDEzMDApXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzY3JvbGxWaWV3cG9ydCA9IChkaXJlY3Rpb24pID0+IHtcclxuICBjb25zdCBhY3RpdmVTZWN0aW9uID0gc2VjdGlvbnMuZmlsdGVyKFwiLmFjdGl2ZVwiKTtcclxuICBjb25zdCBuZXh0U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ubmV4dCgpO1xyXG4gIGNvbnN0IHByZXZTZWN0aW9uID0gYWN0aXZlU2VjdGlvbi5wcmV2KCk7XHJcblxyXG4gIGlmIChkaXJlY3Rpb24gPT09IFwibmV4dFwiICYmIG5leHRTZWN0aW9uLmxlbmd0aCkge1xyXG4gICAgICBwZXJmb3JtVHJhbnNpdGlvbihuZXh0U2VjdGlvbi5pbmRleCgpKTtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJwcmV2XCIgJiYgcHJldlNlY3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgcGVyZm9ybVRyYW5zaXRpb24ocHJldlNlY3Rpb24uaW5kZXgoKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4kKHdpbmRvdykub24oXCJ3aGVlbFwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBkZWx0YVkgPSBldmVudC5vcmlnaW5hbEV2ZW50LmRlbHRhWTtcclxuICBpZiAoZGVsdGFZID4gMCkge1xyXG4gICAgLy9uZXh0XHJcbiAgICBzY3JvbGxWaWV3cG9ydChcIm5leHRcIik7XHJcbiAgfVxyXG4gIGlmIChkZWx0YVkgPCAwKSB7XHJcbiAgICAvL3ByZXZcclxuICAgIHNjcm9sbFZpZXdwb3J0KFwicHJldlwiKTtcclxuICB9XHJcblxyXG59KTtcclxuXHJcbiQod2luZG93KS5vbigna2V5ZG93bicsIGV2ZW50ID0+e1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSlcclxuICAgIGxldCB0YWdOYW1lID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmKHRhZ05hbWUhPT0naW5wdXQnICYmIHRhZ05hbWUhPT0ndGV4dGFyZWEnKXtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgc2Nyb2xsVmlld3BvcnQoXCJwcmV2XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgIHNjcm9sbFZpZXdwb3J0KFwibmV4dFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxuXHJcbiQoJ1tkYXRhLXNjcm9sbC10b10nKS5vbignY2xpY2snLCBldmVudD0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGNvbnN0IHRhcmdldCA9ICR0aGlzLmF0dHIoJ2RhdGEtc2Nyb2xsLXRvJyk7XHJcbiAgICBjb25zdCByZXFTZWN0aW9uID0gJChgW2RhdGEtc2VjdGlvbi1pZD0ke3RhcmdldH1dYCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXFTZWN0aW9uLmluZGV4KCkpO1xyXG4gICAgcGVyZm9ybVRyYW5zaXRpb24ocmVxU2VjdGlvbi5pbmRleCgpKTtcclxufSlcclxuXHJcblxyXG4vLyAkKCcuZml4ZWRfX2l0ZW0nKS5vbignY2xpY2snLCBldmVudCA9PntcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4vLyAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4vLyAgICAgJHRoaXMuYWRkQ2xhc3MoJ2ZpeGVkX19pdGVtLS1hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdmaXhlZF9faXRlbS0tYWN0aXZlJyk7XHJcbi8vICAgICBjb25zdCB0YXJnZXQgPSAkdGhpcy5hdHRyKCdkYXRhLXNjcm9sbC10bycpO1xyXG4vLyAgICAgY29uc3QgcmVxU2VjdGlvbiA9ICQoYFtkYXRhLXNlY3Rpb24taWQ9JHt0YXJnZXR9XWApO1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVxU2VjdGlvbi5pbmRleCgpKTtcclxuLy8gICAgIHBlcmZvcm1UcmFuc2l0aW9uKHJlcVNlY3Rpb24uaW5kZXgoKSk7XHJcbi8vIH0pXHJcblxyXG5cclxuJCgnLmhpZGRlbl9faXRlbScpLm9uKCdjbGljaycsIGV2ZW50ID0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICR0aGlzLmFkZENsYXNzKCdoaWRkZW5fX2l0ZW0tLWFjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2hpZGRlbl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAkdGhpcy5hdHRyKCdkYXRhLXNjcm9sbC10bycpO1xyXG4gICAgY29uc3QgcmVxU2VjdGlvbiA9ICQoYFtkYXRhLXNlY3Rpb24taWQ9JHt0YXJnZXR9XWApO1xyXG4gICAgY29uc29sZS5sb2cocmVxU2VjdGlvbi5pbmRleCgpKTtcclxuICAgIGhpZGRlbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBwZXJmb3JtVHJhbnNpdGlvbihyZXFTZWN0aW9uLmluZGV4KCkpO1xyXG59KVxyXG5cclxuJCgnLndyYXBwZXInKS5vbigndG91Y2hNb3ZlJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG5pZiAoaXNNb2JpbGUpIHtcclxuICBcclxuICAkKFwiYm9keVwiKS5zd2lwZSh7XHJcbiAgICBzd2lwZTogZnVuY3Rpb24gKGV2ZW50LCBkaXJlY3Rpb24pIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgICAgIHNjcm9sbFZpZXdwb3J0KCduZXh0JylcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcclxuICAgICAgICBzY3JvbGxWaWV3cG9ydCgncHJldicpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxufSkoKSIsIihmdW5jdGlvbigpe1xyXG4gICAgY29uc3Qgc2xpZGVyID0gJChcIi5wcm9kdWN0c19faXRlbXNcIikuYnhTbGlkZXIoe1xyXG4gICAgICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgICAgICBjb250cm9sczogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCcucHJvZHVjdHNfX2NvbnRyb2wtLWxlZnQnKS5jbGljayhlPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNsaWRlci5nb1RvUHJldlNsaWRlKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgICQoJy5wcm9kdWN0c19fY29udHJvbC0tcmlnaHQnKS5jbGljayhlPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNsaWRlci5nb1RvTmV4dFNsaWRlKCk7XHJcbiAgICB9KVxyXG59KSgpIiwiKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBpc09wZW4gPSBpdGVtID0+e1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoaXRlbSkuY2xvc2VzdCgnLnRlYW1fX2l0ZW0nKTtcclxuICAgICAgICBjb25zdCBkcm9wRWxlbSA9ICQoY29udGFpbmVyKS5maW5kKCcudGVhbV9faXRlbS1kcm9wJyk7IFxyXG4gICAgICAgIGNvbnN0IGRyb3BDb250ZW50ID0gJChjb250YWluZXIpLmZpbmQoJy50ZWFtX19pdGVtLWNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCBjdXJIZWlnaHQgPSAkKGRyb3BDb250ZW50KS5oZWlnaHQoKTtcclxuICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoJ2lzQWN0aXZlJyk7XHJcbiAgICAgICAgJChkcm9wRWxlbSkuaGVpZ2h0KGN1ckhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNsb3NlQWxsID0gY29udGFpbmVyID0+e1xyXG4gICAgICAgIGNvbnN0IGFsbEJsb2NrcyA9ICQoY29udGFpbmVyKS5maW5kKCcudGVhbV9faXRlbS1kcm9wJyk7XHJcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGNvbnRhaW5lci5maW5kKCcudGVhbV9faXRlbScpO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzQWN0aXZlJyk7XHJcbiAgICAgICAgJChhbGxCbG9ja3MpLmhlaWdodCgwKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAkKCcudGVhbV9faXRlbS10aXRsZScpLm9uKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VTaWJsaW5ncyA9ICR0aGlzLmNsb3Nlc3QoJy50ZWFtX19pdGVtcycpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1Db250YWluZXIgPSAkdGhpcy5jbG9zZXN0KCcudGVhbV9faXRlbScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGVsZW1Db250YWluZXIuaGFzQ2xhc3MoJ2lzQWN0aXZlJykpe1xyXG4gICAgICAgICAgICBjbG9zZUFsbChjbG9zZVNpYmxpbmdzKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xvc2VBbGwoY2xvc2VTaWJsaW5ncyk7XHJcbiAgICAgICAgICAgIGlzT3BlbigkdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG59KSgpOyIsIihmdW5jdGlvbigpe1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG5cclxuc2VuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zb2xlLmxvZygnZm9ybTEnLGZvcm0pXHJcbiAgaWYgKHZhbGlkYXRlRm9ybShmb3JtKSkge1xyXG4gICAgY29uc29sZS5sb2coXCLQvtC6XCIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSAkKCcjZm9ybScpO1xyXG4gICAgY29uc3QgbmFtZSA9IGZvcm0uZmluZChcIltuYW1lID0gJ25hbWUnXVwiKTtcclxuICAgIGNvbnN0IHBob25lID0gZm9ybS5maW5kKFwiW25hbWUgPSAncGhvbmUnXVwiKTtcclxuICAgIGNvbnN0IHN0cmVldCA9IGZvcm0uZmluZChcIltuYW1lID0gJ3N0cmVldCddXCIpO1xyXG4gICAgY29uc3QgaG91c2UgPSBmb3JtLmZpbmQoXCJbbmFtZSA9ICdob3VzZSddXCIpO1xyXG4gICAgY29uc3QgY29ycHVzID0gZm9ybS5maW5kKFwiW25hbWUgPSAnY29ycHVzJ11cIik7XHJcbiAgICBjb25zdCBhcGFydG1lbnQgPSBmb3JtLmZpbmQoXCJbbmFtZSA9ICdhcGFydG1lbnQnXVwiKTtcclxuICAgIGNvbnN0IGZsb29yID0gZm9ybS5maW5kKFwiW25hbWUgPSAnZmxvb3InXVwiKTtcclxuICAgIGNvbnN0IHRvID0gZm9ybS5maW5kKFwiW25hbWU9J3RvJ11cIik7XHJcbiAgICBjb25zdCBjb21tZW50ID0gZm9ybS5maW5kKFwiW25hbWU9J2NvbW1lbnQnXVwiKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL3NlbmRtYWlsXCIsXHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBuYW1lLnZhbCgpLFxyXG4gICAgICAgIHBob25lOiBwaG9uZS52YWwoKSxcclxuICAgICAgICBzdHJlZXQ6IHN0cmVldC52YWwoKSxcclxuICAgICAgICBob3VzZTogaG91c2UudmFsKCksXHJcbiAgICAgICAgY29ycHVzOiBjb3JwdXMudmFsKCksXHJcbiAgICAgICAgYXBhcnRtZW50OiBhcGFydG1lbnQudmFsKCksXHJcbiAgICAgICAgZmxvb3I6IGZsb29yLnZhbCgpLFxyXG4gICAgICAgIHRvOiB0by52YWwoKSxcclxuICAgICAgICBjb21tZW50OiBjb21tZW50LnZhbCgpXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgJCgnLm1vZGFsX190ZXh0JykudGV4dChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICQoJyNtb2RhbCcpLmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKTtcclxuICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xyXG4gICAgICAgICAgc3JjOiBcIiNtb2RhbFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJpbmxpbmVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgJCgnLm1vZGFsX190ZXh0JykudGV4dCgn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtScpO1xyXG4gICAgICAgICQuZmFuY3lib3gub3Blbih7XHJcbiAgICAgICAgICBzcmM6IFwiI21vZGFsXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImlubGluZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZvcm0pIHtcclxuICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5uYW1lKSkge1xyXG4gICAgdmFsaWQgPSBmYWxzZTtcclxuICB9XHJcbiAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMucGhvbmUpKSB7XHJcbiAgICB2YWxpZCA9IGZhbHNlO1xyXG4gIH1cclxuICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5jb21tZW50KSl7XHJcbiAgICB2YWxpZD1mYWxzZTtcclxuICB9XHJcbiAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMuc3RyZWV0KSl7XHJcbiAgICB2YWxpZCA9IGZhbHNlO1xyXG59O1xyXG5pZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5ob3VzZSkpe1xyXG4gICAgdmFsaWQgPSBmYWxzZTtcclxufTtcclxuaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMuY29ycHVzKSl7XHJcbiAgICB2YWxpZCA9IGZhbHNlO1xyXG59O1xyXG5pZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5hcGFydG1lbnQpKXtcclxuICAgIHZhbGlkID0gZmFsc2U7XHJcbn07XHJcbmlmICghdmFsaWRhdGVGaWVsZChmb3JtLmVsZW1lbnRzLmZsb29yKSl7XHJcbiAgICB2YWxpZCA9IGZhbHNlO1xyXG59O1xyXG4gIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGaWVsZChmaWVsZCkge1xyXG4gIGlmICghZmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICBmaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4kKCcuYXBwLWNsb3NlLW1vZGFsJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICQuZmFuY3lib3guY2xvc2UoKVxyXG59KTtcclxuXHJcblxyXG4vLyAkKFwiI2Zvcm1cIikub24oXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbi8vICAgY29uc3QgZm9ybSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbi8vICAgY29uc3QgbmFtZSA9IGZvcm0uZmluZChcIltuYW1lID0gJ25hbWUnXVwiKTtcclxuLy8gICBjb25zdCBwaG9uZSA9IGZvcm0uZmluZChcIltuYW1lID0gJ3Bob25lJ11cIik7XHJcbi8vICAgY29uc3Qgc3RyZWV0ID0gZm9ybS5maW5kKFwiW25hbWUgPSAnc3RyZWV0J11cIik7XHJcbi8vICAgY29uc3QgaG91c2UgPSBmb3JtLmZpbmQoXCJbbmFtZSA9ICdob3VzZSddXCIpO1xyXG4vLyAgIGNvbnN0IGNvcnB1cyA9IGZvcm0uZmluZChcIltuYW1lID0gJ2NvcnB1cyddXCIpO1xyXG4vLyAgIGNvbnN0IGFwYXJ0bWVudCA9IGZvcm0uZmluZChcIltuYW1lID0gJ2FwYXJ0bWVudCddXCIpO1xyXG4vLyAgIGNvbnN0IGZsb29yID0gZm9ybS5maW5kKFwiW25hbWUgPSAnZmxvb3InXVwiKTtcclxuLy8gICBjb25zdCB0byA9IGZvcm0uZmluZChcIltuYW1lPSd0byddXCIpO1xyXG5cclxuLy8gICAkLmFqYXgoe1xyXG4vLyAgICAgdXJsOiBcImh0dHBzOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9zZW5kbWFpbFwiLFxyXG4vLyAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuLy8gICAgIGRhdGE6IHtcclxuLy8gICAgICAgbmFtZTogbmFtZS52YWwoKSxcclxuLy8gICAgICAgcGhvbmU6IHBob25lLnZhbCgpLFxyXG4vLyAgICAgICBzdHJlZXQ6IHN0cmVldC52YWwoKSxcclxuLy8gICAgICAgaG91c2U6IGhvdXNlLnZhbCgpLFxyXG4vLyAgICAgICBjb3JwdXM6IGNvcnB1cy52YWwoKSxcclxuLy8gICAgICAgYXBhcnRtZW50OiBhcGFydG1lbnQudmFsKCksXHJcbi8vICAgICAgIGZsb29yOiBmbG9vci52YWwoKSxcclxuLy8gICAgICAgdG86IHRvLnZhbCgpLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbigpe1xyXG4gIGxldCB2aWRlbztcclxubGV0IHBsYXk7XHJcbmxldCBkdXJhdGlvbkNvbnRyb2w7XHJcbmxldCBzb3VuZENvbnRyb2w7XHJcbmxldCBpbnRlcnZhbElkO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpO1xyXG4gIGR1cmF0aW9uQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVyYXRpb25MZXZlbFwiKTtcclxuICBzb3VuZENvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdW5kTGV2ZWxcIik7XHJcbiAgcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheVwiKTtcclxuXHJcbiAgc291bmRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU291bmQpO1xyXG4gIHNvdW5kQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2hhbmdlU291bmQpO1xyXG5cclxuICBkdXJhdGlvbkNvbnRyb2wudmFsdWUgPSAwO1xyXG4gIGR1cmF0aW9uQ29udHJvbC5taW49MDtcclxuICBkdXJhdGlvbkNvbnRyb2wubWF4ID0gTWF0aC5yb3VuZCh2aWRlby5kdXJhdGlvbik7XHJcblxyXG4gIFxyXG4gIGR1cmF0aW9uQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNldFZpZGVvRHVyYXRpb24pO1xyXG5cclxuICBmdW5jdGlvbiBtb3VzZVVwKCl7XHJcbiAgICBzZXRWaWRlb0R1cmF0aW9uKCk7XHJcbiAgICB2aWRlby5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpPHBsYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHBsYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcblxyXG4gICAgICAgICAgbGV0IHBsYXlJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idG4nKTtcclxuICAgICAgICAgIHBsYXlJbWcuY2xhc3NMaXN0LnRvZ2dsZSgncGxheS1idG4tLWFjdGl2ZScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xyXG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVEdXJhdGlvbiwxMDAwLzY2KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUR1cmF0aW9uKCl7XHJcbiAgICAgIGR1cmF0aW9uQ29udHJvbC52YWx1ZSA9IHZpZGVvLmN1cnJlbnRUaW1lO1xyXG4gICAgfSBcclxuXHJcbiAgICBsZXQgbWljQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWNMZXZlbCcpO1xyXG4gICAgbWljQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvdW5kT2ZmKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzb3VuZE9mZigpe1xyXG4gICAgICBpZih2aWRlby52b2x1bWUgPT09IDApe1xyXG4gICAgICAgIHZpZGVvLnZvbHVtZSA9IHNvdW5kQ29udHJvbDsgXHJcbiAgICAgICAgc291bmRDb250cm9sLnZhbHVlID0gc291bmRDb250cm9sICoxMDtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHNvdW5kQ29udHJvbD12aWRlby52b2x1bWU7XHJcbiAgICAgICAgdmlkZW8udm9sdW1lID0gMDtcclxuICAgICAgICBzb3VuZENvbnRyb2wudmFsdWU9MDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3BJbnRlcnZhbCgpe1xyXG4gICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZpZGVvRHVyYXRpb24oKXtcclxuICAgICAgLy8gaWYodmlkZW8ucGF1c2VkKXtcclxuICAgICAgLy8gICB2aWRlby5wbGF5KCk7XHJcblxyXG4gICAgICAvLyB9ZWxzZXtcclxuICAgICAgLy8gICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICB2aWRlby5jdXJyZW50VGltZSA9IGR1cmF0aW9uQ29udHJvbC52YWx1ZTtcclxuICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHVwZGF0ZUR1cmF0aW9uLCAxMDAwLzY2KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VTb3VuZCgpe1xyXG4gICAgICB2aWRlby52b2x1bWUgPSBzb3VuZENvbnRyb2wudmFsdWUvMTA7XHJcbiAgICB9XHJcblxyXG59KTtcclxufSkoKSJdfQ==
