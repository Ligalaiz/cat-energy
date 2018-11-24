'use strict'

var toggle = document.querySelector(".page-toggle");
var mainNav = document.querySelector(".main-nav");

toggle.classList.remove("page-toggle--none");
mainNav.classList.remove("main-nav--show");

toggle.addEventListener("click", function () {
  mainNav.classList.toggle("main-nav--show");
  toggle.classList.toggle("page-toggle--close");
});

(function() {

ymaps.ready(init);

function init () {
  var myMap;
  myMap = new ymaps.Map('map', {
    center:[59.939015, 30.323200],
    zoom:17,
    controls: []
  });

  myMap.behaviors.disable('scrollZoom');
  myMap.controls.add("zoomControl", {
    position: {top: 10, left: 15}
  });

  var myPlacemark = new ymaps.Placemark([59.938730, 30.323086] , {},
      { iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: [55, 53],
        iconImageOffset: [-15, -90]
      });

  myMap.geoObjects.add(myPlacemark);
}
})();

jQuery(document).ready(function($){

    // делаем элемент .cd-handle движимым и сменяем позицию .cd-resize-img
    $('.cd-image-container').each(function(){
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual);
    });
 });

// реализация перетаскивание http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
function drags(dragElement, resizeElement, container) {
    dragElement.on("mousedown vmousedown", function(e) {
        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        var dragWidth = dragElement.outerWidth(),
            xPosition = dragElement.offset().left + dragWidth - e.pageX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth(),
            minLeft = containerOffset + 10,
            maxLeft = containerOffset + containerWidth - dragWidth - 10;

        dragElement.parents().on("mousemove vmousemove", function(e) {
            leftValue = e.pageX + xPosition - dragWidth;

            if(leftValue < minLeft ) {
                leftValue = minLeft;
            } else if ( leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

            $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
                $(this).removeClass('draggable');
                resizeElement.removeClass('resizable');
            });

            $('.resizable').css('width', widthValue);

            // ...

        }).on("mouseup vmouseup", function(e){
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
        e.preventDefault();
    }).on("mouseup vmouseup", function(e) {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
}
