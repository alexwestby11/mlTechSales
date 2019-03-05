

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
                                 "<div  class=\"d-flex marginMainImageNormal  btn-primary rounded\"style= 'border: 1px solid gainsboro;height:95%;width:100%;'>" +

                                 "<img tag = '"+index+"' id = 'rec"+index+"' class = \"img rounded shadow img1\" src = \"images/Apple1.jpg\" onclick='reply_ProPage(this.id)'>"+
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
                                 "<div class=\"d-flex marginMainImageNormal btn-primary rounded\" style= 'border: 1px solid gainsboro;height:95%;width:100%;'>" +

                                "<img  id = 'sim"+index+"' class = \"img rounded creamColor shadow img1\" src=productLinkArray[k] onclick='reply_ProPage(this.id)'>"+

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
             $("#dynamic_table4").ready(function () {
                 function numTable(x, y) {
                     var index = 1;
                     var stringValue = "<div class = \"d-flex flex-row vertical-align justify-content-around\" >";
                     for (var j = 0; j < y; ++j) {//rows
                        stringValue += "<div class = \"d-flex flex-column justify-content-center vertical-align\" style='width:auto%; height:100%;' >";
                         for (var k = 0; k < x; ++k) {//col
                             stringValue +=
                             "<div class=\"d-flex redColor marginMainImageNormal btnImg-primary  greenColor rounded\" style= 'border: 1px solid gainsboro;height:5vmax;width:5vmax;margin-top: 5%;margin-bottom: 5%;'>" +

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
                             "<div class=\"d-flex redColor marginMainImageNormal btnImg-primary  greenColor rounded\" style= 'border: 1px solid gainsboro;height:5vmax;width:5vmax;margin-top: 5%;margin-bottom: 5%;'>" +

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
    getData1();
             $("#dynamic_table").ready(function () {
                 //creates x images on same row
                     function numTable(x,y) {
                     var index = 0;
                     var stringValue =
                         "<div  class=\"d-flex flex-column vertical-align\" style='width:100%; height:100%;'>";
                        if(x === 0 && y === 0){
                             stringValue +=  "<div class=\"col-fluid\" style='width:100%; height:100%;font-size: large;text-align: center'><p>No Results</p></div>";
                        }
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<div class=\"d-flex flex-row vertical-align\" style='width:inherit; height:100%;'>";
                         for (var k = 0; k < x; ++k) {//col
                             var idString = (j*numRows + k).toString();
                             stringValue +=
                                 "<div  id = '"+idString+"' class=\"d-flex flex-column marginMainImageNormal btn btnImg1-primary rounded shadow-sm\" onclick=\"linkProductPage();reply_click(this.id);\" style= 'border: 1px solid gainsboro;height:95%;width:100%;background: white;margin: 0.5%'>" +
                                 "<div class=\"col-fluid \" style='text-align: center;font-size: large;width: 100%'><b></b></div>"+
                                 "<input type=\"image\" src= \"images/Apple1.jpg\" class = \"d-block btn img rounded  img3\" style='align-self:center'>" +
                                  "<div class=\"col-fluid justify-content-center\" style='text-align: center; font-weight: bold;'><b></b></div>" +
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
function dFilter() {
             let temp_jsonObject = JSON.parse(localStorage.jsonObj);
             let propertiesArray = temp_jsonObject["Performance"]['Notebook'];
            console.log(propertiesArray);
            var index = 0;
            var upperBound;
            let lowerBound;

             $("#dynamic_filter").ready(function () {
                 //creates x images on same row

                     function createGUI(arr) {
                     var stringValue = "<form>";

                     for(let key in propertiesArray){
                         let temp = propertiesArray[key];


                         stringValue += "<p>" +
                                     "<label for='amount"+index+"'>" + key +"</label>" +
                                     "<input type=\"text\" id = 'amount"+index+"' readonly style=\"border:0; color:#f6931f; font-weight:bold;\">" +
                                     "</p>";

                             stringValue += "<div id='slider-range"+index+"' ></div>";
                            ++index;
                         console.log(temp.isBox);
                     }

                      /*for (var j = 0; j < arr.length; ++j) {//rows
                         var size = arr[j].length;
                          stringValue +=  "<div class= 'dropdown'>";

                            if(arr[j][0] !== "Price"){
                                stringValue += arr[j][0];
                            }


                          stringValue +=  "</div>";
                        for(var i = 1; i < size; ++i){

                             if(arr[j][0] === "Price"){
                                 lowerBound = arr[j][1];
                                 upperBound = arr[j][2];

                                 stringValue += "<p>" +
                                     "<label for=\"amount\">Price range:</label>" +
                                     "<input type=\"text\" id=\"amount\" readonly style=\"border:0; color:#f6931f; font-weight:bold;\">" +
                                     "</p>";


                                 i = arr[j].length;

                             }else{

                                 stringValue +=  "<div  class= 'checkbox'>"
                                  + "<label>&emsp;<input id = 'Index"+index+"'  type= 'checkbox' value= '' checked>"
                                  + arr[j][i]
                                  + "</label>"
                                  +  "</div>";
                                  ++index;

                             }



                         }

                     }*/
                      stringValue += "</form>";

                     return stringValue;
                 }
                 $('#dFilter').html(createGUI(propertiesArray));
                  $('#tab_logic').append('<div id="dFilter" ></div>');
                  let i = 0;
                  for(let key in propertiesArray){
                        var propertiesValues = propertiesArray[key];


                     customSlider(propertiesValues["UpperBound"],propertiesValues["LowerBound"],i++,propertiesValues["max"],propertiesValues["min"],);
                  }


             });
}




    function customSliderPrice(upper,lower,index) {
          $(function () {
              $("#slider-range" + index.toString()).slider({
                  range: true,
                  min: 0,
                  max: 5000,
                  values: [0, 1000],
                  slide: function (event, ui) {
                      $("#amount" + index).val("$" + ui.values[0] + " - $" + ui.values[1]);
                      //valueUpper = upper;
                     // valueLower = lower;
                  }

              });
              $("#amount" + index).val("$" + $("#slider-range" + index.toString()).slider("values", 0) +
                  " - $" + $("#slider-range" + index.toString()).slider("values", 1));
          });
      }

          function customSlider(upper,lower,index,max,min,arr) {

          $(function () {
              $("#slider-range" + index).slider({
                  range: true,
                  min: min,
                  max: max,
                  info:"stuff",
                  values: [lower, upper],
                  slide: function (event, ui) {
                      $("#amount" + index).val(ui.values[0] + " - " + ui.values[1]);
                      //valueUpper = upper;
                     // valueLower = lower;
                  }

              });
              $("#amount" + index).val($("#slider-range" + index).slider("values", 0) +
                  " - " + $("#slider-range" + index).slider("values", 1));

          });
      }



function getFilterChanges(){
       // let temp_jsonObject = JSON.parse(localStorage.jsonObj);
       // let propertiesArray = temp_jsonObject["Performance"][type];

        for(var i = 0;;++i){
            if($("#slider-range" + i) !== null){
                let valueUpper = $("#slider-range" + i).slider("values",1);
                let valueLower = $("#slider-range" + i).slider("values",0);
                console.log($("#slider-range" + i).slider("values",1));
                console.log(valueLower);
            }

        }
       // let valueUpper = .slider("values",1);
       // let valueLower = $("#slider-range").slider("values",0);
        let filterArray = {};
        let index = 0;



        /*
        for(let i = 0; i < arr.length; ++i){
            let temp = arr[i];
            if(temp[0] === "Price") {
                //filterArray.push(temp[0]);
                filterArray["Price"]={"lower":valueLower,"upper":valueUpper};

            }
            else{
                filterArray[temp[0].toString()] = [];
                for(let j = 1; j < temp.length; ++j){
                    var checkedBox = document.getElementById("Index" + index.toString());
                     if(checkedBox !== null) {
                         let tempDict = new dict();
                         tempDict.name = temp[j];
                         tempDict.state = checkedBox.checked;
                         filterArray[temp[0].toString()].push(tempDict);
                         ++index;
                     }
                   else{
                       break;
                   }
                }
            }
        }*/
        //console.log(propertiesArray);

}


class dict {
    constructor(name, state) {
        this.name = name;
        this.state = state;
    }
}