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

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    const amenitiesList = Object.values(amenitiesChecked).join(', ');
    $('#amenities-list').text(amenitiesList);
  });
});

