function getLyrics() {
            console.log(1);
    $(document).ready(function() {
         console.log(2);
        $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/price/20/21',
            data: {
                format: 'JSON'
            },
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },
            dataType: 'JSON',
            success: function (data) {
                console.log(data);
            },
            type: 'GET'
        });
    });
}

function getLyrics1() {
      console.log(1);
    $(document).ready(function() {
         console.log(2);
        $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/price/20/21',
            data: {
                format: 'JSON'
            },
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },
            dataType: 'json',
            success: function (data) {
                console.log("here");
                console.log(data);
            },
            type: 'GET'
        });
    });
}
    function callbackReturn(result) {
        alert(result);
    }



