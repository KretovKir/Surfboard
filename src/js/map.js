(function(){
  let myMap;

const init = () => {
  myMap = new ymaps.Map("map-block", {
    center: [69.165, 35.14],
    zoom: 14,
    controls: [],
    
  });

  const coords = [
    [69.163907, 35.146614],
    [69.167404, 35.143657],
  ];

  const myCollection = new ymaps.GeoObjectCollection(
    {},
    {
      draggable: false,
      iconLayout: "default#image",
      iconImageHref: "./img/marker.svg",
      iconImageSize: [30, 42],
      
    //   iconImageOffset: [-3, -42],
    }
  );

  for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);

})();