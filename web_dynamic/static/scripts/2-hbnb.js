$(document).ready(function() {
    var apiUrl = 'http://0.0.0.0:5001/api/v1/status/';

    function updateApiStatus() {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            success: function(data) {
                if (data.status === 'OK') {
                    $('#api_status').addClass('available');
                } else {
                    $('#api_status').removeClass('available');
                }
            },
            error: function() {
                $('#api_status').removeClass('available');
            }
        });
    }
    updateApiStatus();
    setInterval(updateApiStatus, 5000);
});
