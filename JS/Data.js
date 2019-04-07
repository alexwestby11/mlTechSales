
var itemTypes =
[
    "notebook",
    "monitor",
    "notebook_case",
    "mouse",
    "charger",
    "keyboard",
    "cable",
    "docking_station",
    "speaker",
    "tablet",
    "mobile",
    "drive",
    "printer",
    "dvd_br",
    "desktop",
    "controller",
    "camera",
    "headset",
    "game",
    "console",
    "lens",
    "television"
]
var numPerType={
    "notebook": 0,
        "monitor": 0,
        "notebook_case": 0,
        "mouse": 0,
        "charger": 0,
        "keyboard": 0,
        "cable": 0,
        "docking station": 0,
        "speaker": 0,
        "tablet": 0,
        "mobile": 0,
        "drive": 0,
        "printer": 0,
        "dvd_br": 0,
        "desktop": 0,
        "controller": 0,
        "camera": 0,
        "headset" : 0,
        "game" : 0,
        "console" : 0,
        "lens" : 0,
        "television": 0
};






function getData1() {

    $(document).ready(function () {
            $.getJSON(localStorage['searchInput'], function (result) {
                //console.log(result);
                $.each(result, function (i, field) {

                    let product = new Product();
                    $.each(field, function (key, value) {
                        if (key === "imgSrc") {
                            product.img_src = value;
                        }
                        else if (key === "name") {
                            product.name = value;
                             localStorage['ID_FullName'] = value;
                        }
                        else if (key === "price") {
                            product.price = value;
                        }
                        else if (key === "manufacturer") {
                            product.brand = value;
                        }
                         else if (key === "id"  ) {
                            product.id = value;
                        }
                        else if (key === "category") {
                            product.category = value;
                        }
                        else if (key === "type") {
                            product.type = value;
                            ++numPerType[value];
                        }

                    });
                    dataArray.push(product);
                });

                getResultTypes(numPerType);
                if(dataArray.length === 1 && dataArray[0].id === "0"){
                   isResults = 0;
                   numRows = 0;
                   numCol= 0;
                }
                else{
                    isResults = 1;
                    var boolArray = mainSearchPage(dataArray);
                    localStorage.boolArray = JSON.stringify(boolArray);
                    numCol = Math.ceil(boolArray.length/numRows);
                    dTable();
                    changeImage(numRows,numCol);
                }


            });
    });


    //getTypePriceData()


}


function getSimData(x) {
    var ab = 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemCBRec/' + x + '/8'
    localStorage['searchSim'] = 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemCBRec/' + x + '/8';
    console.log(localStorage['searchSim']);

    $(document).ready(function () {
            simArray = [];
            $.getJSON(localStorage['searchSim'], function (result) {
                //console.log(result);

                $.each(result, function (i, field) {
                    let product = new Product();
                    console.log("sim = " + i);
                    $.each(field, function (key, value) {
                        if (key === "imgSrc") {
                            product.img_src = value;
                        }
                        else if (key === "name") {
                            product.name = value;
                        }
                        else if (key === "price") {
                            product.price = value;
                        }
                        else if (key === "manufacturer") {
                            product.brand = value;
                        }
                         else if (key === "id") {
                            product.id = value;
                        }
                         else if (key === "category") {
                            product.category = value;
                        }
                         else if (key === "type") {
                            product.type = value;
                        }
                    });

                    simArray.push(product)

                });
                setSimImages(numRowsS*numColS);
            });


    });

}

function getRecommendData(x) {
   var userString = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemUBCFRec/"+localStorage['sessionID']+
    "/" + x + "/6"
    localStorage['searchRec'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemUBCFRec/"+localStorage['sessionID']+
    "/" + x + "/6"
    console.log(localStorage['searchRec']);

    $(document).ready(function () {
        recArray = [];
        $.getJSON(localStorage['searchRec'], function (result) {
            //console.log(result);
            $.each(result, function (i, field) {
                console.log("rec = " + i);
                let product = new Product();
                $.each(field, function (key, value) {
                    if (key === "imgSrc") {
                        product.img_src = value;
                    }
                    else if (key === "name") {
                        product.name = value;
                    }
                    else if (key === "price") {
                        product.price = value;
                    }
                    else if (key === "manufacturer") {
                        product.brand = value;
                    }
                    else if (key === "id") {
                        product.id = value;
                    }
                    else if (key === "category") {
                        product.category = value;
                    }
                    else if (key === "type") {
                        product.type = value;
                    }
                });

                recArray.push(product)

            });
            setRecImages(numRowsR * numColR);
        });
    });
}
/*
function getTypePriceData() {
   var product = new Product()
    for (var i=0; i<=itemTypes.length-1;++i)
    {
        localStorage['searchTypePrice'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/item_type/"+itemTypes[i];
        $(document).ready(function () {
                $.getJSON(localStorage['searchTypePrice'], function (result) {
                    //console.log(result);
                    $.each(result, function (i, field) {
                        product = new Product()

                        $.each(field, function (key, value) {
                            if (key === "imgSrc") {
                                product.img_src = value;
                            }
                            else if (key === "name") {
                                product.name = value;
                                 localStorage['ID_FullName'] = value;
                            }
                            else if (key === "price") {
                                product.price = value;
                            }
                            else if (key === "manufacturer") {
                                product.brand = value;
                            }
                             else if (key === "id"  ) {
                                product.id = value;
                            }
                            else if (key === "category") {
                                product.category = value;
                            }
                            else if (key === "type") {
                                product.type = value;
                            }

                        });
                        typePriceArray.push(product.price);

                    });
                    if (product.id!==0)
                    {
                        console.log(product.type)
                        console.log("mean: "+ averageArray(typePriceArray))
                        console.log("std: "+ stdDevArray(typePriceArray))
                        typePriceArray=[]
                    }

                });
        });
    }
}

*/



function getPriceAverageData() {
    localStorage['searchType'] = 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/item_type/'+'Notebook' ;
    console.log(localStorage['searchSim']);
    var priceData=[];

    $(document).ready(function () {

            $.getJSON(localStorage['searchType'], function (result) {
                //console.log(result);

                $.each(result, function (i, field) {
                    let product = new Product();
                    console.log("sim = " + i);
                    $.each(field, function (key, value) {
                        if (key === "imgSrc") {
                            product.img_src = value;
                        }
                        else if (key === "name") {
                            product.name = value;
                        }
                        else if (key === "price") {
                            product.price = value;
                        }
                        else if (key === "manufacturer") {
                            product.brand = value;
                        }
                         else if (key === "id") {
                            product.id = value;
                        }
                         else if (key === "category") {
                            product.category = value;
                        }
                         else if (key === "type") {
                            product.type = value;
                        }
                    });


                    priceData.push(product)
                    console.log("Hello")

                });
            });
    });

}


function mainSearchPage(inputArray)
{
    var index = 0;
    var jsonObjtemp = JSON.parse(localStorage['prices']);
    var brandData = JSON.parse(localStorage["brandData"]);
    var boolArray=[];
    var brandData = JSON.parse(localStorage['brandData'])


    for(var i=0; i<=inputArray.length-1;++i)
    {
        var filterBrandBool = false;
        for (var key in brandData[inputArray[i].type]["Brand"])
        {
            if(brandData[inputArray[i].type]["Brand"][key]["checked"]==true)
            {
                filterBrandBool=true;
                break
            }
        }

        if(filterBrandBool)
        {
            var isFiltered=false
            for (var key in brandData[inputArray[i].type]["Brand"])
            {
                if( (inputArray[i].price <=jsonObjtemp[inputArray[i].type]['UpperBound'])
                &&  (inputArray[i].price >= jsonObjtemp[inputArray[i].type]['LowerBound'])
                &&  (brandData[inputArray[i].type]["Brand"][key]["name"]==inputArray[i].brand)
                &&  (brandData[inputArray[i].type]["Brand"][key]["checked"])
                )
                {
                    boolArray.push(true)
                    isFiltered=true
                    ++index;
                }
            }
            if(!isFiltered)
            {
                boolArray.push(false)
            }
        }
        else if((inputArray[i].price <=jsonObjtemp[inputArray[i].type]['UpperBound'])
            &&  (inputArray[i].price >= jsonObjtemp[inputArray[i].type]['LowerBound']))

        {
              boolArray.push(true)
        }

        else
        {
            boolArray.push(false)

        }
    }
    return boolArray;
}

function getResultTypes(array){
    var tempArray = [];
    for(var key in array){
        if(array[key] !== 0){
           tempArray.push(key)
        }

    }
      localStorage.numPerType = JSON.stringify(tempArray);
}


