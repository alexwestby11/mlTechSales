

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
                     var stringValue =
                         "<div  class=\"d-flex flex-column\" style='width:100%; height:100%;'><h4>Similar Items</h4>";
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<div class=\"d-flex\" style='width:100%; height:100%;'>"
                         for (var k = 0; k < x; ++k) {//col
                             stringValue +=
                                 "<div class=\"d-flex marginMainImageNormal btn-primary rounded\" style= 'border: 1px solid gainsboro;height:95%;width:100%;'>" +

                                "<img  id = 'sim"+index+"' class = \"img rounded creamColor shadow img1\" src='images/Apple1.jpg' onclick='reply_ProPage(this.id)'>"+

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

     var filterGUI = [["Brand","Sony","TLC","Amazon"],
         ["Price","100","200"]];

     //Results Page items
function dFilter() {
            var upperBound;
            let lowerBound;
             $("#dynamic_filter").ready(function () {
                 //creates x images on same row

                     function createGUI(arr) {
                     var stringValue = "<form>";

                     for (var j = 0; j < arr.length; ++j) {//rows
                         var size = arr[j].length;
                          stringValue +=  "<div class= 'dropdown'>";

                            stringValue += arr[j][0];

                          stringValue +=  "</div>";
                         for(var i = 1; i < size; ++i){

                             if(arr[j][0] === "Price"){
                                 lowerBound = arr[j][1];
                                 upperBound = arr[j][2];

                                stringValue += "<div class='d-flex'>"
                                  + "<span id = 'RangeText11' class='font-weight-bold indigo-text'>0</span>"
                                  +"<form class='range-field'>"
                                  + "<input id = 'Range1' class='border-1' type='range' min='0' max='100' >"
                                  + "</form>"
                                  + "<span id = 'RangeText12' class='font-weight-bold indigo-text'>100</span>"
                                  + "</div>";

                                 stringValue += "<div class='d-flex '>"
                                  + "<span id = 'RangeText21' class='font-weight-bold indigo-text'>0</span>"
                                  +"<form class='range-field'>"
                                  + "<input id = 'Range2' class='border-1' type='range' min='0' max='100' >"
                                  + "</form>"
                                  + "<span id = 'RangeText22' class='font-weight-bold indigo-text'>100</span>"
                                  + "</div>";

                                 i = arr[j].length;

                             }else{
                                 stringValue +=  "<div  class= 'checkbox'>"
                                  + "<label><input  type= 'checkbox' value= ''>"
                                  + arr[j][i]
                                  + "</label>"
                                  +  "</div>";


                             }



                         }

                     }
                      stringValue += "</form>";

                     return stringValue;
                 }
                 $('#dFilter').html(createGUI(filterGUI));
                  $('#tab_logic').append('<div id="dFilter" ></div>');
                  setLimits(upperBound,lowerBound);

             });
}

function setLimits(upper,lower){
   let slider1 = document.getElementById("Range1");
  addSelectControl()
   slider1.max = lower;
   document.getElementById("RangeText12").innerHTML = lower;
   document.getElementById("RangeText21").innerHTML = lower;

   let slider2 = document.getElementById("Range2");
   slider2.min = lower;
   slider2.max = upper;
   document.getElementById("RangeText22").innerHTML = upper;
}




