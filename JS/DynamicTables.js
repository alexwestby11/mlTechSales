////Compatible items
function RTable() {
             $("#dynamic_table1").ready(function () {
                 //creates x images on same row
                 getRecommendData(numRowsR*numColR);

                 function numTable(x, y) {
                     var index = 0;
                     var stringValue =
                         "<div  class=\"d-flex flex-column\" style='width:100%; height:100%;'><h4>Compatible Items</h4>";
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<div class=\"d-flex\" style='width:100%; height:100%;'>"
                         for (var k = 0; k < x; ++k) {//col
                             var idString = (j*numRowsR + k).toString();
                             stringValue +=
                                 "<div  class=\"d-flex marginMainImageNormal btn-primary rounded\"style= 'background: white; border: 1px solid gainsboro;height:95%;width:100%;'>" +

                                 "<img tag = '"+index+"' id = 'rec"+index+"' class = \"img rounded img1\" src = \"images/Apple1.jpg\" onclick='reply_ProPage(this.id);incrementClick()' style='margin: auto'>"+
                                 "</div>";
                             ++index;
                         }
                         stringValue += "</div>";
                     }
                      stringValue += "</div>";

                     return stringValue;
                 }
                 $('#box4').html(numTable(numRowsR, numColR));
                  $('#tab_logic').append('<div id="box4" ></div>');

              });
}

////Similar items
function STable() {
             $("#dynamic_table2").ready(function () {
                  getSimData(numRowsS*numColS);
                 function numTable(x, y) {
                     var index = 0;
                     var productLinkArray=imageSearcher(5)
                     var stringValue =
                         "<div  class=\"d-flex flex-column\" style='width:100%; height:100%;'><h4>Similar Items</h4>";
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<div class=\"d-flex\" style='width:100%; height:100%;'>"
                         for (var k = 0; k < x; ++k) {//col
                             stringValue +=
                                 "<div class=\"d-flex marginMainImageNormal btn-primary rounded\" style= 'background: white;border: 1px solid gainsboro;height:95%;width:100%;'>" +

                                "<img  id = 'sim"+index+"' class = \"img rounded creamColor img1\" src=\"images/Apple1.jpg\" onclick='reply_ProPage(this.id);incrementClick()' style='margin: auto;'>"+

                                 "</div>";
                             ++index;
                         }
                         stringValue += "</div> ";
                     }
                      stringValue += "</div> ";

                     return stringValue;
                 }
                 $('#box3').html(numTable(numRowsS, numColS));
                  $('#tab_logic').append('<div id="box3" ></div>');

              });
}

////Images of Product
function dImage() {
            imageSearcher();
             $("#dynamic_table4").ready(function () {
                 function numTable(x, y) {
                     var index = 1;
                     var stringValue = "<div class = \"d-flex flex-row vertical-align justify-content-around\" >";
                     for (var j = 0; j < y; ++j) {//rows
                        stringValue += "<div class = \"d-flex flex-column justify-content-center vertical-align\" style='width:auto%; height:100%;' >";
                         for (var k = 0; k < x; ++k) {//col
                             stringValue +=
                             "<div class=\"d-flex marginMainImageNormal btnImg-primary  greenColor rounded\" style= 'border: 1px solid gainsboro;height:5vmax;width:5vmax;margin-top: 5%;margin-bottom: 5%;'>" +

                                "<img id = 'mainImg"+index+"' class = \"img rounded creamColor shadow-lg img1\" src='images/Apple1.jpg' onclick='replyMainImage(this.id)'>"+

                                 "</div>";
                             ++index;
                         }
                         stringValue += "</div>";
                     }

                        stringValue +=" <div class = \"d-flex flex-column vertical-align justify-content-center\" style='max-width:80%; height:100%;'>" +
                        "<div class = \"d-flex d-block\"  style='width:100%; height:100%;'>";
                            if(x*y === 0) {
                                 stringValue += "<button id = \"left\" class = \"btn btnNextImg-primary\" onclick='replyMainButtons(this.id)' style='width:5%; height:100%;'>" +
                                " <span class=\"glyphicon glyphicon-menu-left\"   style='float: right'></span></button>";
                            }
                        stringValue += "<img id = \"mainImg0\" src=\"images/searchLogo.jpg\" class= \" img rounded creamColor img2\" alt= \"Responsive image\">";
                            if(x*y === 0) {
                                stringValue +="<button id = \"right\" class = \"btn btnNextImg-primary \"  onclick='replyMainButtons(this.id)' style='width:5%; height:100%;'>" +
                                " <span class=\"glyphicon glyphicon-menu-right\" style='float: left'></span></button>";
                            }
                        stringValue +="</div>" +
                        "</div>";

                         for (var j = 0; j < y; ++j) {//rows
                        stringValue += "<div class = \"d-flex flex-column justify-content-center vertical-align\" style='width:auto%; height:100%;' >";
                         for (var k = 0; k < x; ++k) {//col
                             stringValue +=
                             "<div class=\"d-flex  marginMainImageNormal btnImg-primary  greenColor rounded\" style= 'border: 1px solid gainsboro;height:5vmax;width:5vmax;margin-top: 5%;margin-bottom: 5%;'>" +

                                "<img id = 'mainImg"+index+"' class = \"img rounded creamColor shadow-lg img1\" src='images/Apple1.jpg' onclick='replyMainImage(this.id)'>"+

                                 "</div>";
                             ++index;
                         }
                         stringValue += "</div>";
                     }

                      stringValue += "</div>";

                     return stringValue;
                 }
                 $('#box1').html(numTable(numRowsI, numColI));
                  $('#tab_logic').append('<div id="box1" ></div>');
                  setMainImage(numRowsI*numColI*2+1);

              });
}



//Results Page items
function dTable() {
             $("#dynamic_table").ready(function () {
                 //creates x images on same row
                     function numTable(x,y) {
                     var index = 0;
                     var stringValue =
                         "<div  class=\"col-fluid vertical-align\" style='width:100%;height: 50%;'>";
                        if(x === 0 && y === 0){
                             stringValue +=  "<div class=\"col-fluid\" style='width:100%; height:100%;font-size: large;text-align: center'><p>No Results</p></div>";
                        }
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<div class=\"d-flex flex-row vertical-align \" style='width:inherit; height:100%;'>";
                         for (var k = 0; k < x; ++k) {//col
                             var idString = (j*numRows + k).toString();
                             stringValue +=
                                 "<div  id = '"+idString+"' class=\"d-flex flex-column btn btnImg1-primary rounded shadow-sm\" onclick=\"incrementClick();linkProductPage();reply_click(this.id);\" style= 'border: 1px solid gainsboro;height:95%;width:100%;margin: 0.5%;overflow:hidden;background-image: linear-gradient(155deg,white,white);'>" +
                                 "<div class=\"row roundedT\" style='text-align: center;font-size: large;width: auto;margin-left: fill;'><b style='margin: auto'></b></div>"+
                                 "<input type=\"image\" src= \"images/Apple1.jpg\" class = \"d-block btn img rounded  img3\" style='align-self:center'>" +
                                  "<div class=\"row justify-content-center \" style='text-align: center; font-weight: bold;'><b></b></div>" +
                                 "</div>";
                             ++index;
                         }
                         stringValue += "</div>";
                     }
                      stringValue += "</div>";

                     return stringValue;
                 }
                 $('#d_table').html(numTable(numRows, numCol));
                  $('#tab_logic').append('<div id="d_table" ></div>');
              });


     }

     var filterGUI1 = [["Computer","CPU","RAM","Memory"],["Brand","Sony","TLC","Amazon"],
         ["Price","100","200"]];
//var filterGUI = JSON.parse(localStorage.jsonObj)['performance']['Notebook'];
     //Results Page items



var brandData = [];
function dFilter() {



let priceArray = getJsonPrice();
            var arrayOfBrands = [];
             var filterArray = JSON.parse(localStorage['brandData']);
             let numTypesArray = JSON.parse(localStorage.numPerType);
             $("#dynamic_filter").ready(function () {


                     function createGUI(arr) {

                     var stringValue = "<div class = 'rounded'>" +
                                        "<form style='height: auto;'>";

                    for(let l = 0; l < arr.length; ++l) {
                        stringValue += "<div class = 'rounded' style=' height: 4%'></div>";
                         stringValue += "<div class = 'rounded' style='background: dodgerblue; height: 3%'></div>";
                          //let priceArray = getJsonPrice();
                          let brandArray = mostUsedBrand(arr[l]);
                          arrayOfBrands.push({"name": arr[l],"array":brandArray});

                          var stringNameBrand = arr[l] + "Brand";
                        //Creates Brand List

                        stringValue += "<label ><h5  style='text-transform: capitalize'>" + arr[l] + ":</h5><p>Brand</p></label>"

                        var j = 0;

                        for (var key in filterArray[arr[l]]["Brand"]) {

                                if(filterArray[arr[l]]["Brand"][key]["checked"] === true){
                                    stringValue += "<div  class= 'checkbox'>"
                                        + "<label>&emsp;<input id = '" + stringNameBrand + j + "'  type= 'checkbox' value= '' checked>"
                                        + brandArray[j];
                                    +"</label>"
                                    + "</div>";
                                    brandData.push(brandArray[length]);
                                }
                                else {
                                    stringValue += "<div  class= 'checkbox'>"
                                        + "<label>&emsp;<input id = '" + stringNameBrand + j + "'  type= 'checkbox' value= ''>"
                                        + brandArray[j];
                                    +"</label>"
                                    + "</div>";
                                    brandData.push(brandArray[length]);
                                }
//console.log(stringNameBrand + j );
                            ++j;

                        }
                        stringValue += "</div>";

                        //Creates Price
                        stringValue += "<p>" +
                            "<label for='amount" + arr[l] + "'>" + "Price" + "</label>" +
                            "<span><input type=\"text\" id = 'amount" + arr[l] + "' readonly style=\"border:0; color:#f6931f; font-weight:bold;\"></span>" +
                            "</p>";

                        stringValue += "<div id='slider-range" + arr[l] + "' ></div>";

                    }
                      stringValue += "</form></div>";


                     return stringValue;
                 }
                 $('#dFilter').html(createGUI(numTypesArray));
                  $('#tab_logic').append('<div id="dFilter" ></div>');
                  localStorage.allBrands = JSON.stringify(arrayOfBrands);

                  for(var l = 0; l < numTypesArray.length; ++l){


                        customSliderPrice(priceArray[numTypesArray[l]]["UpperBound"],priceArray[numTypesArray[l]]["LowerBound"],numTypesArray[l]);



                  }
             });
}




function customSliderPrice(upper,lower,index) {
          $(function () {
              $("#slider-range" + index.toString()).slider({
                  range: true,
                  min: 0,
                  max: 5000,
                  values: [lower, upper],
                  slide: function (event, ui) {
                      $("#amount" + index).val("$" + ui.values[0] + " - $" + ui.values[1]);
                  }

              });
              $("#amount" + index).val("$" + $("#slider-range" + index.toString()).slider("values", 0) +
                  " - $" + $("#slider-range" + index.toString()).slider("values", 1));
          });
      }





function getFilterChanges(){
    var filterArray = JSON.parse(localStorage['brandData']);
    var tempArray = JSON.parse(localStorage.allBrands);
    console.log("here");
    console.log(brandData1);
    console.log("here1");
    console.log(filterArray);
    //slider
        for(var i = 0;i < tempArray.length;++i){

            if($("#slider-range" + tempArray[i]["name"].toString()).length){
                let valueUpper = $("#slider-range" + tempArray[i]["name"]).slider("values",1);
                let valueLower = $("#slider-range" + tempArray[i]["name"]).slider("values",0);
                filterArray[tempArray[i]["name"]]["Price"]["lower"] = valueLower;
                filterArray[tempArray[i]["name"]]["Price"]["upper"] = valueUpper;
            }

        }



        for(let j = 0; j < tempArray.length; ++j){

            let i = 0;
                for (var key in filterArray[tempArray[j]["name"]]["Brand"]) {
                    var checkedBox = document.getElementById(tempArray[j]["name"] + "Brand" + i.toString());
                        filterArray[tempArray[j]["name"]]["Brand"][key]["name"] = tempArray[j]["array"][i][0];
                        if (checkedBox.checked === true) {
                            filterArray[tempArray[j]["name"]]["Brand"][key]["checked"]= true;

                        } else {
                            filterArray[tempArray[j]["name"]]["Brand"][key]["checked"]= false;

                        }
                        checkedBox.checked = filterArray[tempArray[j]["name"]]["Brand"][key]["checked"];


                    ++i;
                }

        }


        var tempPrice = JSON.parse(localStorage['prices']);

        for(var key in filterArray){
                tempPrice[key]["UpperBound"] = filterArray[key]["Price"]["upper"];
                tempPrice[key]["LowerBound"] = filterArray[key]["Price"]["lower"];
        }

        localStorage['prices'] = JSON.stringify(tempPrice);
        localStorage.setItem('brandData',JSON.stringify(filterArray));

}


  var brandData1 = {
            "camera":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "lens":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "charger":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "controller":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "desktop":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "docking_station":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "dvd_br":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "drive":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "game":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "console":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "cable":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "headset":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "keyboard":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "monitor":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "mouse":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "notebook":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "notebook_case":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "printer":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "mobile":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "speaker":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "tablet":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}},
            "television":{Price:{"lower":0,"upper":0}, Brand:{
                                                    "1":{"name":name,"checked":false},
                                                    "2":{"name":name,"checked":false},
                                                    "3":{"name":name,"checked":false}}}
        };

function initBrandData(){
    if(localStorage['brandData'] === undefined){
        localStorage['brandData'] = JSON.stringify(brandData1);
    }

}