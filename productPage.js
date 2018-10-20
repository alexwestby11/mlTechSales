function getMap()
{
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1kYXExIiwiYSI6ImNqbmhucnEybTBmdDQza216czR1eXZ2Y20ifQ.Ev-VQ1mnNpwDOgPV3gRTOA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/amdaq1/cjnhq1uui1ea92rp462ng3gf9'
    });
}
