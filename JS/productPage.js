var myVar = localStorage['ID'] || '0';
var myVar1 = localStorage['ID_name'] || '0';
var myVar2 = localStorage['ID_pic'] || '0';
var myVar3 = localStorage['ID_cat'] || '0';
var myVar4 = localStorage['ID_pic1'] || '0';
var myVar5 = localStorage['ID_pic2'] || '0';
var myVar6 = localStorage['ID_pic3'] || '0';
var myVar7 = localStorage['ID_pic4'] || '0';

function createMap()
{
    mapboxgl.accessToken = "pk.eyJ1IjoiYW1kYXExIiwiYSI6ImNqbmhucnEybTBmdDQza216czR1eXZ2Y20ifQ.Ev-VQ1mnNpwDOgPV3gRTOA";
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/amdaq1/cjnhq1uui1ea92rp462ng3gf9'
    });
    console.log("HELLO");
    var alp = ['asdf','asdf','asdf'];
    //getImageURL(alp);
    console.log("Hello2");
   // imageSearch();
}


function createGraph(relatedProductsNames,relatedProductImages){

       //Stands for current node being created
       var currentNode= 6;
       var childNodes=[];
       var previousChildNodes=[]
       var emptyArray= [];
       var previouslyClicked=-1;

        // create an array with nodes
        var nodes = new vis.DataSet([
            {id: 1, label: 'Mouse'},
            {id: 2, label: relatedProductsNames[0],
                     image:relatedProductImages[0]},
            {id: 3, label: relatedProductsNames[1],
                    image:relatedProductImages[0]},
            {id: 4, label: relatedProductsNames[2],
                image:relatedProductImages[0]},
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
                shape:'circularImage'
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

function reply_click(clicked_id)
{
        //gets item number
        var num = Number(clicked_id);
}







function getJSONData(x,y) {
    $(document).ready(function() {
        var alpha = $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/price/20/21',
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

function getImageURL(imageIDs)
{
    $(document).ready(function() {
        var alpha = $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/price/20/21',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                //alert(JSON.stringify(data));
               // for(var i=0; i<=imageIDs.length-1;++i)
                {
                    //alert(data[i].imgSrc)
                    var img = document.createElement("img");
                    img.src =data[0].imgSrc;

                    var src = document.getElementById("imageA");
                    src.appendChild(img);
                }
            },
            error: function (error) {
                console.log(error);
                //alert("no good "+JSON.stringify(error));
                //jason = JSON.parse(data);
                //console.log(jason);
            }
        });
    })
}

function getSpecs(searchString)
{
    $(document).ready(function() {
        var alpha = $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/price/20/21',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                //alert(JSON.stringify(data));
                // for(var i=0; i<=imageIDs.length-1;++i)
                {
                    /*
                    //alert(data[i].imgSrc)
                    var img = document.createElement("img");
                    img.src =data[0].imgSrc;

                    var src = document.getElementById("imageA");
                    src.appendChild(img);
                    */
                }
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


function getRecommended(givenItem,func)
{
    $(document).ready(function() {
        var alpha = $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRecommendation/1/3',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                //alert(JSON.stringify(data));
                // for(var i=0; i<=imageIDs.length-1;++i)
                var relatedImages=[];
                var relatedProducts=[];
                {
                    //alert(data[i].imgSrc)
                    for(var i=0; i<=2; i++)
                    {
                        relatedImages.push(data[i].imgSrc);
                        relatedProducts.push(data[i].name);
                    }
                }
                func(relatedProducts,relatedImages);
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




function imageSearch()
{

        $(document).ready(function() {
            var alpha = $.ajax({
                url: 'https://contextualwebsearch.com/api/Search/ImageSearchAPI?]',
                dataType: 'json',
                type: 'GET',
                data:{count:"500",
                     q:"laptop",
                    autoCorrect:"true"
                    },
                success: function (data) {
                    //alert(JSON.stringify(data));
                    // for(var i=0; i<=imageIDs.length-1;++i)
                    for(var i=0; i<=3;++i)
                    {
                        //alert(data[i].imgSrc)
                        var img = document.createElement("img");
                        img.src =data.value[i].url;

                        var src = document.getElementById("image"+i.toString());
                        src.appendChild(img);
                    }
                },
                error: function (error) {
                    console.log(error);
                  //  alert("no good "+JSON.stringify(error));
                    //jason = JSON.parse(data);
                    //console.log(jason);
                }
            });
        })


}

function returnProductImage(){
    return myVar2.toString();
}

function setRelateImg1(){
    return localStorage['ID_pic1'];
}

function setRelateImg2(){
    return localStorage['ID_pic2'];
}

function setRelateImg3(){
    return localStorage['ID_pic3'];
}

function setRelateImg4(){
    return localStorage['ID_pic4'];
}













