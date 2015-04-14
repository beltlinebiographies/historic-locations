import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['google-map'],

  buildMap: function () {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(33.767430, -84.360744)
    };

    var elementId = document.getElementById(this.get('elementId'));
    var map = new google.maps.Map(elementId, mapOptions);
    this.set('map', map);
    this.addMarkers();
  }.on('didInsertElement'),

  addMarkers: function () {
    var map = this.get('map');
    var markers = [];
    var _this = this;
    this.get('locations').forEach(function (location) {
      var myLatlng = new google.maps.LatLng(location.get('latitude'), location.get('longitude'));
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: location.get('title')
      });

      google.maps.event.addListener(marker, 'click', function() {
        _this.sendAction('onMarkerClick', location.get('id'));
      });
      markers.pushObject(marker);

    });
    this.currentLocation();
    this.set('markers', markers);
  },

  currentLocation: function () {
    var component = this;
    if ("geolocation" in navigator) {
      function geo_success(position) {
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        var marker = new google.maps.Marker({
            position: latlng,
            map: component.get('map')
        });
        component.set('currentMarker', marker);
      }

      function geo_error() {
        alert("Sorry, no position available.");
      }

      var geo_options = {
        enableHighAccuracy: true,
        maximumAge        : 30000,
        timeout           : 27000
      };

      var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
    } else {
      console.log('This is not going to work well without giving your location.');
    }
  }
});
