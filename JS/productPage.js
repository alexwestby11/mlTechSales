function getMap()
{
    mapboxgl.accessToken = "";
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/amdaq1/cjnhq1uui1ea92rp462ng3gf9'
    });
}

function createCarousel() {
    $('.single-item').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 3,
        vertical: true
    });



}