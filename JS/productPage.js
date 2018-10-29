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
function createGraph(){
        // create an array with nodes
        var nodes = new vis.DataSet([
            {id: 1, label: 'Mouse'},
            {id: 2, label: 'Macbook Pro'},
            {id: 3, label: 'Mousepad'},
            {id: 4, label: 'Second Monitor'},
            {id: 5, label: 'Laptop Sleeve'}
        ]);

        // create an array with edges
        var edges = new vis.DataSet([
            {from: 1, to: 3},
            {from: 1, to: 2},
            {from: 2, to: 4},
            {from: 2, to: 5}
        ]);

        // create a network
        var container = document.getElementById('mynetwork');

        // provide the data in the vis format
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {};

        // initialize your network!
        var network = new vis.Network(container, data, options);
    }

