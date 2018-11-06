function createMap()
{
    mapboxgl.accessToken = "pk.eyJ1IjoiYW1kYXExIiwiYSI6ImNqbmhucnEybTBmdDQza216czR1eXZ2Y20ifQ.Ev-VQ1mnNpwDOgPV3gRTOA";
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/amdaq1/cjnhq1uui1ea92rp462ng3gf9'
    });
}

function createCarousel() {
    jQuery( document ).ready(function( $ ) {
        $( 'myCarousel' ).sliderPro({
            width: 25,
            height: 25,
            imageScaleMode: 'contain',
            arrows: true,
            buttons: false,
            waitForLayers: true,
            fade: true,
            autoplay: false,
            autoScaleLayers: false,
            arrows: true
        });
    });
}
function createGraph(){

       //Stands for current node being created
       var currentNode= 6;
       var childNodes=[];
       var previousChildNodes=[]
       var emptyArray= [];
       var previouslyClicked=-1;

        // create an array with nodes
        var nodes = new vis.DataSet([
            {id: 1, label: 'Mouse'},
            {id: 2, label: 'Macbook Pro'},
            {id: 3, label: 'Mousepad'   },
            {id: 4, label: 'Second Monitor'},
            {id: 5, label: 'Laptop Sleeve' }
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
        var options = {

            layout: {
                randomSeed: undefined,
                improvedLayout:true
            },


            nodes: {
                color: {
                    border: 'rgb(223,219,212)',
                    background: 'rgb(223,219,212)',
                    highlight: {
                        border: 'rgba(0,91,124,.2)',
                        background: 'rgb(0,91,124)',
                                }
                        },
                scaling: {
                    min: 10,
                    max: 30
                },
                shape:'dot'
                    },
            edges:{
                color: {
                    color:'#848484',
                    highlight:'#848484',
                    hover: '#848484',
                    inherit: 'from',
                    opacity:1.0
                },
                width: 0.5
            },
            physics:{
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.3,
                    springLength: 20,
                    springConstant: 0.04,
                    damping: 0.09,
                    avoidOverlap: 0
                }
            }

        };

        // initialize your network!
        var network = new vis.Network(container, data, options);

    network.on("selectNode", function(params) {
        if (params.nodes.length > 0) {

            previouslyClicked=nodeId;
            previousChildNodes=childNodes;
            if(previouslyClicked!=-1)
            {
                deleteNodes(nodes,edges,previouslyClicked,previousChildNodes)
            }



            childNodes=emptyArray;
            var nodeId = params.nodes[0];

            console.log("Clicked on a NODE with id = " + nodeId + ", label = " +
                nodes.get(nodeId).label);
            for(var i=6; i<=9; ++i)
            {
                addNodes(nodes,edges,currentNode,nodeId);
                childNodes.push(currentNode);
                currentNode++;
            }

        }
    });



    }

function addNodes(nodes,edges,givenNode,fromNode) {
    nodes.add({ id: givenNode,
                label: 'Mouse',
                color:{
                    border: 'rgba(0,81,114,.4',
                    background: 'rgba(0,81,114,.4)',
                    highlight: {
                        border: '#2B7CE9',
                        background: '#D2E5FF'
                    }},
                 radius: 12,
                 value: 10
                });
    edges.add({from: fromNode, to: givenNode});


}
function deleteNodes(nodes,edges,parentNode,childrenNodes)
{
    for(var i=0; i<=childrenNodes.length-1;++i)
    {
        var tempNode = nodes.get(childrenNodes[i]);
        nodes.update([{id:tempNode.id, hidden: true}]);
    }
}