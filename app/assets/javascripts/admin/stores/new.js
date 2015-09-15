$(function () {
  google.maps.event.addDomListener(window, 'load', function () {
    var $map = $('#mapCanvas');

    // resize the google map
    $map.css('height', $('#new_store').height());

    /* position Amsterdam */
    var latlng = new google.maps.LatLng(52.3731, 4.8922);
    var mapOptions = {
      center: latlng,
      scrollWheel: false,
      zoom: 13
    };
    var marker = new google.maps.Marker({
      position: latlng,
      url: '/',
      animation: google.maps.Animation.DROP
    });
    var map = new google.maps.Map($map.get(0), mapOptions);
    marker.setMap(map);

    $('.location-input').on('paste keyup change', function (e) {
      var lat = $('#store_lat').val(), lng = $('#store_lng').val();
      var newPosition = new google.maps.LatLng(lat, lng);
      marker.setPosition(newPosition);
      map.setCenter(newPosition)
    });

    $('.btn-locate-me').click(function () {
      navigator.geolocation.getCurrentPosition(function (location) {
        console.dir(location)
        var lat = location.coords.latitude, lng = location.coords.longitude;
        $('#store_lat').val(lat).trigger('change');
        $('#store_lng').val(lng).trigger('change');
        // var newPosition = new google.maps.LatLng(lat, lng);
        // marker.setPosition(newPosition);
        // map.setCenter(newPosition)
      });
    });
  });
});
