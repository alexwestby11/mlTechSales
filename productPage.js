var recArray = [0,0,0,0];
var capArray = [0,0,0,0];
localStorage['isLoaded']='0';
var isLoaded=0;
var numClicked = localStorage['numClicked'] || '0';

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
    //imageSearch();
    getRetailers();
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




function getJSONData() {
    getRecommendedProducts();
    $(document).ready(function() {
        var alpha = $.ajax({
            url: localStorage['searchRec'],
            dataType: 'json',
            type: 'GET',
            success: function (result) {
                 $.each(result, function (i, field) {
                    let product = new Product();
 if(i === 4) {
        return false;
    }
                    $.each(field, function (key, value) {
                        if (key === "imgSrc") {
                             product.img_src= value;
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
                    recArray[i] = product;
                    //console.log(recArray[i].img_src);
                });
                 localStorage['ID_pic1'] = recArray[0].img_src;
                localStorage['ID_pic2'] = recArray[1].img_src;
                localStorage['ID_pic3'] = recArray[2].img_src;
                localStorage['ID_pic4'] = recArray[3].img_src;
               // alert(data[0].id)
            },
            error: function (error) {
                console.log(error);
                alert("no goodsa "+JSON.stringify(error));
            }
        });
    })
}

function getJSONData1() {
    getCompatibleProducts();
    console.log(localStorage['searchCap']);
    $(document).ready(function() {
        var alpha = $.ajax({
            url: localStorage['searchCap'],
            dataType: 'json',
            type: 'GET',
            success: function (result) {
                 $.each(result, function (i, field) {
                     if(i === 4) {
                     return false;
                    }
                    let product = new Product();
                    $.each(field, function (key, value) {
                        if (key === "imgSrc") {
                             product.img_src= value;
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
                    capArray[i] = product;
                });
                 localStorage['ID_pic1_c'] = capArray[0].img_src;
                localStorage['ID_pic2_c'] = capArray[1].img_src;
                localStorage['ID_pic3_c'] = capArray[2].img_src;
                localStorage['ID_pic4_c'] = capArray[3].img_src;
            },
            error: function (error) {
                console.log(error);
                alert("no goodsa "+JSON.stringify(error));
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

            }
        });
    })



}


function getRecommended(givenItem,func)
{
    $(document).ready(function() {
        var alpha = $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/1/3',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                var relatedImages=[];
                var relatedProducts=[];
                {
                    for(var i=0; i<=2; i++)
                    {
                        relatedImages.push(data[i].imgSrc);
                        relatedProducts.push(data[i].name);
                    }
                }
                func(relatedProducts,relatedImages);
                isLoaded=isLoaded+1
                console.log(isLoaded+ "asdfasdfasdf")
            },
            error: function (error) {
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
                //alert("no good "+JSON.stringify(error));
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
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/1/3',
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
                isLoaded=isLoaded+1
            },
            error: function (error) {
                console.log(error);
               // alert("no good "+JSON.stringify(error));
                //jason = JSON.parse(data);
                //console.log(jason);
            }
        });
    })

}




function placeImages()
{
    var name=localStorage['ID_name']
		$(document).ready(function() {
            var alpha = $.ajax({
                url: 'https://contextualwebsearch.com/api/Search/ImageSearchAPI?]',
                dataType: 'json',
                type: 'GET',
                data:{count:"500",
                     q:name,
                    autoCorrect:"true"
                    },
                success: function (data) {
                    var inc=0;
                    for(var i=0; i<=4;++i) {

						var img = document.createElement("img");
						if(data.value[i].url!=null){
							img.src =data.value[i].url;
							var imgValue = document.getElementById("mainImg"+i.toString());
							imgValue.src=data.value[i].url;
							addPicsArray[i]=data.value[i].url;

						}

                    }
                    isLoaded=isLoaded+1
					    /*
						var img = document.createElement("img");
                        img.src =data.value[i].url;

                        var imgValue = document.getElementById("mainImg7");
                        imgValue.src=data.value[4].url;
						*/
                },
                error: function (error) {
                    console.log(error);
                    //jason = JSON.parse(data);
                    //console.log(jason);
                }
            });
        })
}


function getUPC(queryString)
{
    $(document).ready(function() {
        var alpha = $.ajax({
            url: 'https://contextualwebsearch.com/api/Search/ImageSearchAPI?]',
            dataType: 'json',
            type: 'GET',
            data:{count:"500",
                q:"macbook pro 13 inch",
                autoCorrect:"false"
            },
            success: function (data) {
                for(var i=0; i<=3;++i)
                {
                    var imgA = document.createElement("img");
                    img.src =data.value[i].url;

                        var src = document.getElementById("image"+i.toString());
                        src.src(img);
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            });
        })
}

function getRetailers()
{
    var name=localStorage['ID_name'];
	$(document).ready(function() {
        var alpha = $.ajax({
            url: 'https://rest.viglink.com/api/product/search',
            dataType: 'json',
            type: 'GET',
            data:{
                apiKey:"81801cad73784edc71318f28e82be509",
                format:"json",
                query: name,
                secret:"8477a248fe53766cf607cc5ce45ccf57eb91af58",
                country: "us"

            },
            success: function (data) {



                for(var i=0; i<=3; i++)
				{
					var src = document.getElementById('Link'+i.toString());
					console.log(src);
					src.href=data.items[i].url;
				}
				isLoaded=isLoaded+1

            },
            error: function (error) {
                console.log(error);
                //alert("no good "+JSON.stringify(error));
                //jason = JSON.parse(data);
                //console.log(jason);
            }
        });
    })
	imageSearcher();
}


function printStuff(error,text,data)
{
    console.log(text)
}





https://en.wikipedia.org/w/api.php

function summarize(div,product)
{
    //var searchPage=localStorage["ID_cat"]
	var searchPage = localStorage['ID_type'];
	///console.log(localStorage['ID_type']);
	searchPage= searchPage.split(' ').join('+');


	    $(document).ready(function() {
        var alpha = $.ajax({
           url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchPage + 'Computer'+"&prop=info&inprop=url&utf8=&format=json",
		   // url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchPage +'+Computer' +'&limit=10&namespace=0&format=json',
            type: 'GET',
            success: function (data) {
                var summary=data.query.search[0].title
                //alert(JSON.stringify(data));
                // for(var i=0; i<=imageIDs.length-1;++i)

				$(document).ready(function() {
				var alpha = $.ajax({
					url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+summary,
					type: 'GET',
					success: function (dataA) {
						var summaryA=dataA['query']['pages'][Object.keys(dataA['query']['pages'])[0]]['extract']
						var src = document.getElementById(div);
						src.innerHTML +=summaryA;
					isLoaded=isLoaded+1
					localStorage['isLoaded']=(parseInt(localStorage['isLoaded'])+1).toString()
					},
					error: function (error) {
						console.log(error);
					}
				});
			})
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




function returnProductImage(){
    return localStorage['ID_pic'];

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

function setCapImg1(){
    return localStorage['ID_pic1_c'];
}

function setCapImg2(){
    return localStorage['ID_pic2_c'];
}

function setCapImg3(){
    return localStorage['ID_pic3_c'];
}

function setCapImg4(){
    return localStorage['ID_pic4_c'];
}



function reply_click1(clicked_id)
{
        //gets item number
        recArray[0].id;
         if(recArray[0].id == undefined){
            wait(500);
        }
        localStorage['ID'] = recArray[0].id;
         localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + localStorage['ID'] ;
        localStorage['ID_pic'] = recArray[0].img_src;
        document.location.reload();
}

function reply_click2(clicked_id)
{
        //gets item number
        recArray[1].id;
        if(recArray[1].id == undefined){
            wait(500);
        }
        localStorage['ID'] = recArray[1].id;
        localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + localStorage['ID'] ;
        localStorage['ID_pic'] = recArray[1].img_src;

        document.location.reload();
}

function reply_click3(clicked_id)
{
        //gets item number
        recArray[2].id;
        if(recArray[2].id == undefined){
            wait(500);
        }
        localStorage['ID'] = recArray[2].id;
        localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + localStorage['ID'] ;
        localStorage['ID_pic'] = recArray[2].img_src;

        document.location.reload();
}

function reply_click4(clicked_id)
{
        //gets item number
        recArray[3].id;
         if(recArray[2].id == undefined){
            wait(500);
        }
        localStorage['ID'] = recArray[3].id;
        localStorage['ID_pic'] = recArray[3].img_src;
        localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + localStorage['ID'] ;
        document.location.reload();
}

function reply_click1C(clicked_id)
{
        //gets item number
        capArray[0].id;
         if(recArray[0].id == undefined){
            wait(500);
        }
        localStorage['ID'] = capArray[0].id;
         localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + localStorage['ID'] ;
        localStorage['ID_pic'] = capArray[0].img_src;
        document.location.reload();
}

function reply_click2C(clicked_id)
{
        //gets item number
        capArray[1].id;
        if(capArray[1].id == undefined){
            wait(500);
        }
        localStorage['ID'] = recArray[1].id;
        localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + localStorage['ID'] ;
        localStorage['ID_pic'] = capArray[1].img_src;
        document.location.reload();
}

function reply_click3C(clicked_id)
{
        //gets item number
        capArray[2].id;
        if(capArray[2].id == undefined){
            wait(500);
        }
        localStorage['ID'] = capArray[2].id;
        localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + localStorage['ID'] ;
        localStorage['ID_pic'] = capArray[2].img_src;
        document.location.reload();
}

function reply_click4C(clicked_id)
{
        //gets item number
        capArray[3].id;
         if(capArray[3].id == undefined){
            wait(500);
        }
        localStorage['ID'] = capArray[3].id;
         if(capArray[3].img_src == null) {
                          localStorage['ID_pic'] = "images/Apple1.jpg";
         }
         else{
             localStorage['ID_pic'] = capArray[3].img_src;
         }
        localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/name/" + localStorage['ID'] ;
        document.location.reload();
}

function splitString(givenString)
{
    var searchQueryArray = givenString.split(" ")
    var searchQueryString=''
    if(searchQueryArray.length<=4)
    {
        return givenString
    }
    for(var i=0; i<=4; ++i)
    {
        searchQueryString+=searchQueryArray[i]
        searchQueryString+=' '
    }
    return searchQueryString

}


function imageSearcher(arraySize)
{
    var nameA = splitString(localStorage['ID_name'])
    var imageLinkArray = []
	$(document).ready(function() {
        var alpha = $.ajax({
            url: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search',
			beforeSend: function(xhr){xhr.setRequestHeader('Ocp-Apim-Subscription-Key', '6fa1be3480b94f0d8512368b7907855d');},
            dataType: 'json',
            type: 'GET',
            data:{
					q:nameA,
					imageType:"Shopping",
					count:15,
					offset:0
            },
            success: function (data,) {

                    var i=1;
					while(i<=arraySize) {

							var imgValue = document.getElementById("mainImg"+i.toString());
							if(data.value[i]==null)
							{
								console.log("bad");
								break;
							}
							else{
									imgValue.src=data.value[i].contentUrl;
									addPicsArray[i]=data.value[i].contentUrl;
									imageLinkArray.push(data.value[i].contentUrl);
									i++;
							}
						}
			        isLoaded=isLoaded+1
            },
            error: function (error) {
                console.log(error);
            }
        });
    })
    return imageLinkArray
}


function loadingPage() {
  var x = document.getElementById("loading");
 // if (x.style.display !== "none" && isLoaded>=5)
   {
    x.style.display = "none";
  }
}

function postItemRating(item,rating,sessionID,key)
{

    $(document).ready(function() {
        var alpha = $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/update/user/'+ sessionID +'/oJ9Cl2ks7SWGOMmXSJ6bt3tIH4DsdLkt5LObtrPm/'+item +"/" + key,
            dataType: 'json',
            type: 'POST',
            success: function (data) {
                {
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    })
}

