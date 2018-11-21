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

