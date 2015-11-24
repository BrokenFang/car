function initialize() {
  var latlng = new google.maps.LatLng(53.405, 14.539);
  var myOptions = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
    styles: [{
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "hue": "#F1FF00"
      }, {
        "saturation": -27.4
      }, {
        "lightness": 9.4
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "hue": "#0099FF"
      }, {
        "saturation": -20
      }, {
        "lightness": 36.4
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [{
        "hue": "#00FF4F"
      }, {
        "saturation": 0
      }, {
        "lightness": 0
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [{
        "hue": "#FFB300"
      }, {
        "saturation": -38
      }, {
        "lightness": 11.2
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "hue": "#00B6FF"
      }, {
        "saturation": 4.2
      }, {
        "lightness": -63.4
      }, {
        "gamma": 1
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "hue": "#9FFF00"
      }, {
        "saturation": 0
      }, {
        "lightness": 0
      }, {
        "gamma": 1
      }]
    }]
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions);
  var marker = new google.maps.Marker({
    position: latlng,
    animation: google.maps.Animation.DROP,
    map: map,
  });
  google.maps.event.addDomListener(window, 'resize', function() {
    map.panTo(latlng);
  });
}
google.maps.event.addDomListener(window, "load", initialize);
new WOW().init();

var menu = document.getElementById("mob");

window.addEventListener("resize", function() {
  if (window.innerWidth > 750){menu.style.display = 'none'};
}, true);

function toggle() {
  if (menu.style.display === 'inline-table') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'inline-table';
  }
}
$(document).ready(function() {
  $('#slider1').cycle({
    fx: 'fade', // here change effect to blindX, blindY, blindZ etc
    speed: 'slow',
    timeout: 2000
  });
  $('#slider2').cycle({
    fx: 'fade', // here change effect to blindX, blindY, blindZ etc
    speed: 'slow',
    timeout: 2000
  });
  $('#slider3').cycle({
    fx: 'fade', // here change effect to blindX, blindY, blindZ etc
    speed: 'slow',
    timeout: 2000
  });
});