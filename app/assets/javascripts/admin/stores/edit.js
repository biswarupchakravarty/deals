$(function () {
  google.maps.event.addDomListener(window, 'load', function () {
    var $map = $('#mapCanvas');

    // resize the google map
    $map.css('height', $('.edit_store').height());

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

  $('.btn-add-inventory').click(function () {
    var $modal = $('#addInventoryModal').modal('show');
    $modal.find('#txtRootCategory').typeahead({
      minLength: 1
    }, {
      source: rootCategoriesDataSource
    });
    $modal.find('#txtSuperCategory').typeahead({
      minLength: 1
    }, {
      source: superCategoriesDataSource
    });
    $modal.find('#txtCategory').typeahead({
      minLength: 1
    }, {
      source: categoriesDataSource
    });
    $modal.find('#txtSubCategory').typeahead({
      minLength: 1
    }, {
      source: subCategoriesDataSource
    });
    $modal.find('.btn-save-inventory').on('click', function () {
      var rC = $('#txtRootCategory').val(),
        supC = $('#txtSuperCategory').val(),
        cate = $('#txtCategory').val(),
        subC = $('#txtSubCategory').val(),
        data = {
          root_category: { name: rC },
          super_category: { name: supC },
          category: { name: cate },
          sub_category: { name: subC }
        };
      $.ajax({
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ inventory: data }),
        url: '/admin/stores/' + storeId + '/add_inventory/',
        success: function () {
          window.location.reload(true);
          // rootCategoriesDataSource.add(rC);
          // superCategoriesDataSource.add(supC);
          // categoriesDataSource.add(cate);
          // subCategoriesDataSource.add(subC);
        }
      });
    });
  });

  var rootCategoriesDataSource = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: rootCategories.map(function (c) { return c.name; })
  });
  rootCategoriesDataSource.initialize();
  var superCategoriesDataSource = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: superCategories.map(function (c) { return c.name; })
  });
  superCategoriesDataSource.initialize();
  var categoriesDataSource = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: categories.map(function (c) { return c.name; })
  });
  categoriesDataSource.initialize();
  var subCategoriesDataSource = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: subCategories.map(function (c) { return c.name; })
  });
  subCategoriesDataSource.initialize();
});
