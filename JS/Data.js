var itemTypes =
[
    "notebook",
    "monitor",
    "noteboook_case",
    "mouse",
    "charger",
    "keyboard",
    "cable",
    "docking station",
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
var typePriceArray=[];

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
                        }

                    });
                    dataArray.push(product);
                });
                if(dataArray.length === 1 && dataArray[0].id === "0"){
                   isResults = 0;
                     numRows = 0;
                    numCol= 0;
                    dTable();
                }
                else{
                    isResults = 1;

                }
                changeImage(numRows,numCol,0);

            });
    });
    getTypePriceData()
}


function getSimData(x) {
    localStorage['searchSim'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/" + localStorage['ID'] + "/" + x + "/sim";
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
    localStorage['searchRec'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/" + localStorage['ID'] + "/" + x + "/comp";
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


