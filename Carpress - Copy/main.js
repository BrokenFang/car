function initialize() {
  var latlng = new google.maps.LatLng(53.435, 14.548);
  var myOptions = {
    zoom: 13,
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

function toggle() {
  menu = document.getElementById("mob")
  if (menu.style.display != 'none') {
    menu.style.display = "none";
  } else {
    menu.style.display = "inline-table";
  }
}
