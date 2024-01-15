$(document).ready(function() {
  let amenitiesChecked = {};

  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      amenitiesChecked[amenityId] = amenityName;
    } else {
      delete amenitiesChecked[amenityId];
    }
    const amenitiesList = Object.values(amenitiesChecked).join(', ');
    $('#amenities-list').text(amenitiesList);
  });
});

