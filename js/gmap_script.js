
var gmap;
gmap = new GMaps({
   el: '#map',
   lat: 40.725541,
   lng: -73.972999,
   zoom: 13, 
   zoomControl: false,
   scaleControl: false,
   scrollwheel: false,
   disableDoubleClickZoom: true,
   background: '#FF0000',
   styles: [ 
   { "stylers": [
    { "hue": "#006494" 
    }, 
    {saturation: -100
    }, {
      gamma: .5
      } 
      ] 
   } 
      ]
   });


