var searchInput = localStorage['searchInput'] || '0';

function setInput(){
    var value = document.getElementById("searchbar").value;
    //console.log(document.getElementById("searchbar").value);
    createSearchString(value);
}

function createSearchString(input) {
    localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + input;
    console.log(localStorage['searchInput']);
}

function getJSONData1() {
    setInput();
    $(document).ready(function() {
        var alpha = $.ajax({
            url: localStorage['searchInput'],
            dataType: 'json',
            type: 'GET',
            success: function (result) {
                 $.each(result, function (i, field) {
                    let product = new Product();
                    $.each(field, function (key, value) {
                        if (key === "imgSrc") {
                            console.log(value);
                        }
                        else if (key === "name") {
                            product.name = value;
                        }
                        else if (key === "price") {
                            product.price = value;
                        }
                        else if (key === "manfacturer") {
                            product.brand = value;
                        }
                         else if (key === "id") {
                            product.id = value;
                        }
                    });
                    dataArray.push(product);
                });
               // alert(data[0].id)
            },
            error: function (error) {
                console.log(error);
                alert("no good "+JSON.stringify(error));
                //jason = JSON.parse(data);
                //console.log(jason);
            }
        });
    })
}