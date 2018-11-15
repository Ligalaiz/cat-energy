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
