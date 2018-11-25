var dataArray = [];
var z_idx;
var numRows = 5;
var numCol= 2;
var numRowsR = 3;
var numColR= 2;
var numRowsS = 3;
var numColS= 2;
var numRowsI = 2;
var numColI = 1;
var itemArray = [0,0,0,0,0,0,0,0,0,0];
var recArray = [];
var simArray = [];
var priorityBox = [0,0,0,0];
var myVar = localStorage['ID'] || '10';
var myVar1 = localStorage['ID_name'] || '0';
var myVar2 = localStorage['ID_pic'] || '0';
var myVar4 = localStorage['ID_pic1'] || '0';
var myVar5 = localStorage['ID_pic2'] || '0';
var myVar6 = localStorage['ID_pic3'] || '0';
var myVar7 = localStorage['ID_pic4'] || '0';
var myVar3 = localStorage['ID_cat'] || '0';
var myVar8 = localStorage['searchRec'] || '0';
var myVar9 = localStorage['searchCap'] || '0';
var averagePrice = localStorage['averagePrice'] || '0';
var myVar11 = localStorage['ID_pic2_c'] || '0';
var myVar12 = localStorage['ID_pic3_c'] || '0';
var myVar13 = localStorage['ID_pic4_c'] || '0';
var searchInput = localStorage['searchInput'] || '0';
var myVar99 = localStorage['searchSim'] || '0';
var myVar133 = localStorage['ID_price'] || '0';
var myVar33 = localStorage['ID_brand'] || '0';
var myVardfafd =  localStorage['currentCollect'] || '0';
var totalCollect = 3;
var currentCollect = 0;
function setInput(){
    var tempValue = '';
    var value = document.getElementById("searchbar").value;

    var searchBy = document.getElementById("searchBy").value;
     var min = document.getElementById("minPrice").value;
      var max = document.getElementById("maxPrice").value;

      for(var i = 0; i < value.length; ++i){
          if(value[i] === ' '){
              tempValue += "/";
          }else{
              tempValue += value[i];
          }
      }

    localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + searchBy + "/" + tempValue;
    if(min !== '' || max !== '') {
        if (max === '') {
            min = 0;
        }
        if (max === '') {
            max = 0;
        }
        localStorage['searchInput'] += "/price/" + min + "/" + max;
    }

    alert(localStorage['searchInput']);
}



function dTable() {
    getData1();
             $("#dynamic_table").ready(function () {
                 //creates x images on same row
                 function numTable(x, y) {
                     var stringValue = '';
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<tr>";
                         for (var k = 0; k < x; ++k) {//col
                             var idString = (j*numRows + k).toString();
                             stringValue += "<td>" +
                                 "<div id = '"+idString+"' onclick=\"reply_click(this.id)\"  class=\"row-fluid rounded creamColor margin1 btn-primary shadow blackText\" width = \"100%\" height = \"100%\">" +
                                 "<div class=\"col-fluid text-center\" ><h6>Value</h6></div>"+
                                 "<input tag = \"img\"  type=\"image\" src= \"images/Apple1.jpg\" class = \"btn img tableRowHeight rounded W\" onclick=\"linkProductPage(); \" >" +
                                 "<div class=\"col-fluid text-center\">Info<br> Stuff <br> stuff</div>" +
                                 "</div>" +
                                 "</td>";
                         }
                         stringValue += "</tr> ";
                     }
                     return stringValue;
                 }
                 $('#d_table').html(numTable(numRows, numCol));
                  $('#tab_logic').append('<tr id="d_table' + (1) + '"></tr>');
              });
             console.log(dataArray.length);
     }
 function linkProductPage()
{
    location.href = "ProductPage_new.html";
}
 function idValue(j,k){
    return (j*numRows + k).toString();
}
 function changeImage(x,y,z){
    var dx = z;

      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
              var string = (j*numRows + k).toString();
               var prd = document.getElementById(string);
               prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
               var name = (prd.getElementsByTagName("h6")[0]);
               name.innerHTML = dataArray[dx].name.substring(0,15);
               var info = (prd.getElementsByTagName("div")[1]);
               info.innerHTML = dataArray[dx].price +"<br>" + dataArray[dx].brand;
               itemArray[j*numRows + k] = dx;
               //itemArray[j*numRows + k] = j*numRows + k;
               dataArray[dx].index = dx;
               ++ dx;
          }
      }
    z_idx = dx;
}
 function nextImage(x,y,z){
    var dx = z;
      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
               var string = (j*numRows + k).toString();
               var prd = document.getElementById(string);
               prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
               var name = (prd.getElementsByTagName("h6")[0]);
               name.innerHTML = dataArray[dx].name.substring(0,15);
               var info = (prd.getElementsByTagName("div")[1]);
               info.innerHTML = dataArray[dx].price +"<br>" + dataArray[dx].brand;
                 itemArray[j*numRows + k] = dx;
              //itemArray[j*numRows + k] = j*numRows + k;
               dataArray[dx].index = dx;
                ++dx;
          }
      }
    z_idx = dx;
}
 function prevImage(x,y,z){
    var dx = z - (numRows*numCol)*2;
      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
               var string = (j*numRows + k).toString();
               var prd = document.getElementById(string);
               prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
               var name = (prd.getElementsByTagName("h6")[0]);
               name.innerHTML = dataArray[dx].name.substring(0,15);
               var info = (prd.getElementsByTagName("div")[1]);
               info.innerHTML = dataArray[dx].price +"<br>" + dataArray[dx].brand;
                 itemArray[j*numRows + k] = dx;
               dataArray[dx].index = dx;
              // itemArray[j*numRows + k] = j*numRows + k;
                ++dx;
          }
      }
    z_idx = dx;
}
function nextButton(){
    nextImage(numRows,numCol,z_idx);
  //console.log(z_idx);
}
 function prevButton(){
    prevImage(numRows,numCol,z_idx);
//console.log(z_idx);
}
 function setImage(x,y){
    return dataArray[x*y].img_src;
}
 function setName(x,y){
    return dataArray[x*y].name;
}
 function productPage(){
     window.location.href = 'productPage.html';
}
function linkResultsPage() {
  window.location.href = 'resultsPage_new.html';
}
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

                    });
                    dataArray.push(product);
                });
                //console.log("Data Done");
                //console.log(dataArray.length);
                changeImage(numRows,numCol,0);
            });
    });
}

 function reply_click(clicked_id)
{
        //gets item number
        var num = Number(clicked_id);
        localStorage['ID'] = dataArray[itemArray[num]].id;
        var itemIndexInLocalArray = itemArray[num];
        localStorage['ID_name'] = dataArray[itemIndexInLocalArray].name;
        localStorage['ID_pic'] = dataArray[itemIndexInLocalArray].img_src;
        localStorage['ID_cat'] = dataArray[itemIndexInLocalArray].category;
        localStorage['ID_price'] = dataArray[itemIndexInLocalArray].price;
        localStorage['ID_brand'] = dataArray[itemIndexInLocalArray].brand;

        updateAveragePrice(dataArray[itemIndexInLocalArray].price);
}
function updateAveragePrice(x){
    if(isNaN(localStorage['currentCollect'])){
        localStorage['averagePrice'] = 0;

        averagePrice = x;
        localStorage['averagePrice'] = averagePrice;
        localStorage['currentCollect'] = 0;
        currentCollect =  Number(localStorage['currentCollect']);
        ++currentCollect;
        localStorage['currentCollect'] = currentCollect;
    }
    else{
        averagePrice = Number(localStorage['averagePrice']);
        averagePrice += x;
        localStorage['averagePrice'] = averagePrice;
        currentCollect =  Number(localStorage['currentCollect']);
        ++currentCollect;
        localStorage['currentCollect'] = currentCollect;
    }

    if(totalCollect === currentCollect){
        localStorage['currentCollect'] = "NaN";
        alert("average = " + averagePrice/totalCollect);
    }
    alert(localStorage['currentCollect']);
}
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var Timer1;
var Timer2;
var Timer3;
var Timer4;

var Timer1m;
var Timer2m;
var Timer3m;
var Timer4m;
function reply_mouseover(clicked_id)
{
            if(clicked_id === "box1"){
                //console.log("ibox1");
                 Timer1 = setInterval(myCounter1, 500);
            }
            else if(clicked_id === "box2"){
               // console.log("ibox2");
                Timer2 = setInterval(myCounter2, 500);
            }
            else if(clicked_id === "box3"){
                //console.log("ibox3");
                Timer3 = setInterval(myCounter3, 500);
            }
            else if(clicked_id === "box4") {
                //console.log("ibox4");
                Timer4 = setInterval(myCounter4, 500);
            }

 }
 function reply_mouseOut(clicked_id) {
            if(clicked_id === "box1"){
                //console.log(c1);
                //console.log("lbox1");
                priorityBox[0] = c1;
                 clearTimeout(Timer1);
            }
            else if(clicked_id === "box2"){
                //console.log(c2);
               // console.log("lbox2");
                priorityBox[1] = c2;
                clearTimeout(Timer2);
            }
            else if(clicked_id === "box3"){
                //console.log(c3);
                //console.log("lbox3");
                 priorityBox[2] = c3;
                clearTimeout(Timer3);
            }
            else if(clicked_id === "box4"){
                //console.log(c4);
                //console.log("lbox4");
                priorityBox[3] = c4;
                clearTimeout(Timer4);
            }

 }
 function reply_mousemove(clicked_id)
{
            if(clicked_id === "box1"){

                        Timer1 = setInterval(myCounter1, 1000);

            }
            else if(clicked_id === "box2"){
               // console.log("ibox2");
                Timer2 = setInterval(myCounter2, 1000);
            }
            else if(clicked_id === "box3"){
                //console.log("ibox3");
                Timer3 = setInterval(myCounter3, 1000);
            }
            else if(clicked_id === "box4") {
                //console.log("ibox4");
                Timer4 = setInterval(myCounter4, 1000);
            }

 }
 function myCounter1() {++c1;}
function myCounter2() {++c2;}
function myCounter3() {++c3;}
function myCounter4() {++c4;}
function printPriorityBox(){
    for(var i = 0; i < priorityBox.length; ++i){
        console.log("Box " + (i+1).toString() + " = " + priorityBox[i].toString());
    }
}
 function colChange(){
    var maxValue = Math.max(priorityBox);
    var total = 0;
    for(var i = 0; i < priorityBox.length; ++i){
        total += priorityBox[i];
    }
    var perCol = [0,0];
     //find column most used
    perCol[0] = Math.round(((priorityBox[0] + priorityBox[1])/total) * 100);
    perCol[1] = Math.round(((priorityBox[2] + priorityBox[3])/total) * 100);

var colIdArray = [];
    colIdArray.push(document.getElementById("flexCol1"));
    colIdArray.push(document.getElementById("flex1"));
    colIdArray.push(document.getElementById("flex2"));
    colIdArray.push(document.getElementById("flexCol2"));
    colIdArray.push(document.getElementById("flex3"));
    colIdArray.push(document.getElementById("flex4"));

    //if all columns the same
    if(perCol[0] === perCol[1]){
        colIdArray[0].style.width = "50%";
        colIdArray[3].style.width = "50%";
    }
    else if(perCol[0] > perCol[1]){

        colIdArray[0].style.width = "65%";
        colIdArray[3].style.width = "35%";
    }
    else if(perCol[0] < perCol[1]){
        colIdArray[0].style.width = "35%";
        colIdArray[3].style.width = "65%";

    }

    //boxes inside columns
    if(priorityBox[0]  > priorityBox[1]){
        colIdArray[1].style.height = "60%";
        colIdArray[2].style.height = "40%";
    }
    else if(priorityBox[0] === priorityBox[1]) {
        colIdArray[1].style.height = "50%";
        colIdArray[2].style.height = "50%";
    }
    else{
        colIdArray[1].style.height = "40%";
        colIdArray[2].style.height = "60%";
    }

    if((Number(priorityBox[2]) - Number(priorityBox[3])) <= 50) {
        colIdArray[4].style.height = "50%";
        colIdArray[5].style.height = "50%";

    }

    var num = Math.abs(priorityBox[2] - priorityBox[3]);
    if(num <= 50) {
        colIdArray[4].style.height = "50%";
        colIdArray[5].style.height = "50%";

    }
    else if(priorityBox[2]  > priorityBox[3]){
        colIdArray[4].style.height = "65%";
        colIdArray[5].style.height = "35%";

    }
    else if(priorityBox[2] < priorityBox[3]){
        colIdArray[4].style.height = "35%";
        colIdArray[5].style.height = "65%";
    }


    //Compatoable items
    if(colIdArray[5].style.height === "50%" && colIdArray[3].style.width === "50%"){
        numRowsR = 3;
        numColR= 2;
        console.log("1");
    }
    else if(colIdArray[5].style.height === "65%" && colIdArray[3].style.width === "65%"){
         numRowsR = 3;
        numColR= 2;
        console.log("2");
    }
    else if(colIdArray[5].style.height === "65%" && colIdArray[3].style.width === "35%"){
        numRowsR = 2;
        numColR= 3;
        console.log("3");
    }
    else if(colIdArray[5].style.height === "35%" && colIdArray[3].style.width === "65%"){
        numRowsR = 3;
        numColR= 1;
        console.log("4");
    }
    else if((colIdArray[5].style.height === "35%" && colIdArray[3].style.width === "35%")){
        numRowsR = 2;
        numColR= 1;
        console.log("5");
    }
    else if(colIdArray[5].style.height === "50%" && colIdArray[3].style.width === "35%"){
        numRowsR = 2;
        numColR= 2;
    }
   else if (colIdArray[5].style.height === "50%" && colIdArray[3].style.width === "65%"){
       numRowsR = 4;
        numColR= 2;
    }

     //Similaritems
    if(colIdArray[4].style.height === "50%" && colIdArray[3].style.width === "50%"){
        numRowsS = 3;
        numColS= 2;
        console.log("1");
    }
    else if(colIdArray[4].style.height === "65%" && colIdArray[3].style.width === "65%"){
         numRowsS = 3;
        numColS= 2;
        console.log("2");
    }
    else if(colIdArray[4].style.height === "65%" && colIdArray[3].style.width === "35%"){
        numRowsS = 2;
        numColS= 3;
        console.log("3");
    }
    else if(colIdArray[4].style.height === "35%" && colIdArray[3].style.width === "65%"){
        numRowsS = 3;
        numColS= 1;
        console.log("4");
    }
    else if((colIdArray[4].style.height === "35%" && colIdArray[3].style.width === "35%")){
        numRowsS = 2;
        numColS= 1;
        console.log("5");
    }
    else if(colIdArray[4].style.height === "50%" && colIdArray[3].style.width === "35%"){
        numRowsS = 2;
        numColS= 2;
    }
   else if (colIdArray[4].style.height === "50%" && colIdArray[3].style.width === "65%"){
       numRowsS = 4;
        numColS= 2;
    }

    //Images items
    if(colIdArray[1].style.height === "50%" && colIdArray[0].style.width === "50%"){
        numRowsI = 2;
        numColI= 1;
    }
    else if(colIdArray[1].style.height === "60%" && colIdArray[0].style.width === "65%"){
         numRowsI = 3;
        numColI= 1;
    }
    else if(colIdArray[1].style.height === "60%" && colIdArray[0].style.width === "35%"){
        numRowsI = 0;
        numColI = 0;
    }
    else if(colIdArray[1].style.height === "40%" && colIdArray[0].style.width === "65%"){
        numRowsI = 2;
        numColI = 2;
    }
    else if((colIdArray[1].style.height === "40%" && colIdArray[0].style.width === "35%")){
        numRowsI = 0;
        numColI = 0;
    }
    else if(colIdArray[1].style.height === "50%" && colIdArray[0].style.width === "35%"){
        numRowsI = 0;
        numColI = 0;
    }
    else if(colIdArray[1].style.height === "50%" && colIdArray[0].style.width === "65%"){
        numRowsI = 2;
        numColI = 2;
    }
    getRecommendData(numColR*numRowsR);
    getSimData(numColS*numRowsS);
    RTable();
    STable();
    dImage()
    printPriorityBox();
 /*
    var col1 = document.getElementById("flexCol1");
    col1.style.width = (percentCol1 + '%').toString();
     var box1 = document.getElementById("box1");
    col1.style.height = (percentCol1 + '%').toString();
*/
     //console.log("Col 1 = " + percentCol1);
   // console.log("Col 2 = " + percentCol2);
    //console.log("Number = " + Number(priorityBox[2]));
}


function getRecommendedProducts(){

    localStorage['searchRec'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/" + localStorage['ID'] + "/4/sim"
}
function getCompatibleProducts(){

    localStorage['searchCap'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/" + localStorage['ID'] + "/4/comp"
}
function getRecommendData(x) {
    localStorage['searchRec'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/" + localStorage['ID'] + "/" + x + "/comp";
    console.log(localStorage['searchRec']);

    $(document).ready(function () {
            recArray = [];
            $.getJSON(localStorage['searchRec'], function (result) {
                //console.log(result);
                $.each(result, function (i, field) {
                    console.log("rec = " +i);
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
                    });

                    recArray.push(product)

                });
                setRecImages(numRowsR*numColR);
            });


    });

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
                    });

                    simArray.push(product)

                });
                setSimImages(numRowsS*numColS);
            });


    });

}

function RTable() {
             $("#dynamic_table1").ready(function () {
                 //creates x images on same row
                 getRecommendData(numRowsR*numColR);

                 function numTable(x, y) {
                     var index = 0;
                     var stringValue =
                         "<div  class=\"d-flex flex-column\" style='width:100%; height:100%;'>Compatible Items";
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<div class=\"d-flex\" style='width:100%; height:100%;'>"
                         for (var k = 0; k < x; ++k) {//col
                             var idString = (j*numRowsR + k).toString();
                             stringValue +=
                                 "<div  class=\"d-flex marginMainImageNormal  btn-primary rounded\"style= 'height:95%;width:100%; '>" +

                                 "<img tag = '"+index+"' id = 'rec"+index+"' class = \"img rounded creamColor shadow-lg img1\" src = \"images/Apple1.jpg\" onclick='reply_ProPage(this.id)'>"+
                                 "</div>";
                             ++index;
                         }
                         stringValue += "</div> ";
                     }
                      stringValue += "</div> ";

                     return stringValue;
                 }
                 $('#box4').html(numTable(numRowsR, numColR));
                  $('#tab_logic').append('<div id="box4" ></div>');

              });
}

function STable() {
             $("#dynamic_table2").ready(function () {
                  getSimData(numRowsS*numColS);
                 function numTable(x, y) {
                     var index = 0;
                     var stringValue =
                         "<div  class=\"d-flex flex-column\" style='width:100%; height:100%;'>Similar Items";
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<div class=\"d-flex\" style='width:100%; height:100%;'>"
                         for (var k = 0; k < x; ++k) {//col
                             stringValue +=
                                 "<div class=\"d-flex marginMainImageNormal btn-primary rounded\" style= 'height:95%;width:100%;'>" +

                                "<img  id = 'sim"+index+"' class = \"img rounded creamColor shadow-lg img1\" src='images/Apple1.jpg' onclick='reply_ProPage(this.id)'>"+

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

function dImage() {
             $("#dynamic_table4").ready(function () {
                 function numTable(x, y) {
                     var index = 0;
                     var stringValue = "<div class = \"d-flex flex-row vertical-align justify-content-around\" >";
                     var dheight = Math.round(x/80);
                     for (var j = 0; j < y; ++j) {//rows
                        stringValue += "<div class = \"d-flex flex-column\" >";
                         for (var k = 0; k < x; ++k) {//col
                             stringValue +=
                                "<div class = \"col-fluid justify-content-center snowColor rounded btnImg-primary\"  style='height: 30%; padding: 20px;'>\n" +
                                 "<img id = 'addImg"+index+"' src=\"images/searchLogo.jpg\" class= \" shadow rounded imgFit mx-auto d-block\" alt= \"Responsive image\">\n" +
                                 "</div>";
                             ++index;
                         }
                         stringValue += "</div>";
                     }

                     //middle image
                        stringValue +=" <div class = \"d-flex flex-column\" style='width:100%; height:100%;'>" +
                        "<div class = \"d-flex \"  style='width:100%; height:100%;'>" +
                            "<button class = \"btn btnNextImg-primary\"  style='width:5%; height:100%;float:right; position: relative'>" +
                            " <span class=\"glyphicon glyphicon-menu-left\" style='float: right'></span></button>" +
                        "<img id = \"mainImage\" src=\"images/searchLogo.jpg\" class= \" img rounded creamColor shadow img1\" alt= \"Responsive image\">" +
                             "<button class = \"btn btnNextImg-primary\"  style='width:5%; height:100%;'>" +
                            " <span class=\"glyphicon glyphicon-menu-right\"></span></button>" +
                        "</div>" +
                        "</div>";

                     for (var j = 0; j < y; ++j) {//rows
                        stringValue += "<div class = \"d-flex flex-column\" >";
                         for (var k = 0; k < x; ++k) {//col
                             stringValue +=
                                "<div class = \"col-fluid justify-content-center snowColor rounded btnImg-primary\"  style='height:30%; padding: 20px;'>\n" +
                                 "<img id = 'addImg"+index+"' src=\"images/searchLogo.jpg\" class= \" shadow rounded imgFit mx-auto d-block\" alt= \"Responsive image\">\n" +
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
                  setMainImage(numRowsI*numColI+1);

              });
}


function setRecImages(x){


     for(var i = 0; i < x; ++i){
//console.log(document.getElementById("rec" + i.toString())) = recArray[i].img_src;
         document.getElementById("rec" + i.toString()).src = recArray[i].img_src;
            }
}

function setSimImages(x){


     for(var i = 0; i < x; ++i){
//console.log(document.getElementById("rec" + i.toString())) = recArray[i].img_src;
         document.getElementById("sim" + i.toString()).src = simArray[i].img_src;
            }
}

function setMainImage(x){
    document.getElementById("mainImage").src = localStorage['ID_pic'];
    for(var i = 0; i < x; ++i) {
        //document.getElementById("mainImage" + i.toString()).src = localStorage['ID_pic'];
    }
}

function setProductInfo(){
    var space = "  ";
     var mainName = document.getElementById("mainName");
     var x = localStorage["ID_name"];
     var y = x.split(' ').slice(0,3).join(' ');
     y = space.concat(y);
     y= y.concat(space);
    mainName.innerHTML = y;
    var value = document.getElementById("p1");
    value.innerHTML =
        "<strong>Price:</strong>" + "<br>" + "$" + localStorage["ID_price"] + "<br>" +
        "<strong>Brand:</strong>" + "<br>" + localStorage["ID_brand"] + "<br>" +
        "<strong>Category:</strong>" + "<br>" + localStorage["ID_cat"] + "<br>" +
        "<strong>Information:</strong>" + "<br>" + localStorage["ID_name"];
}

function reply_ProPage(clicked_id)
{
    alert(clicked_id);
        var bool = 0;
        var num;
        var value = clicked_id;
        //check if sim/comp product
        var num = '';
        for(var i = 3; i < clicked_id.length; ++i){
            num += clicked_id[i];
        }
        if(value.substring(0,3) === "rec"){
            bool = 0;
        }
        else if(value.substring(0,3) === "sim"){
            bool = 1;
        }
        num = Number(num);
        if(bool === 0){
            localStorage['prevID'] =  localStorage['ID'];
            localStorage['ID'] = recArray[num].id;
            localStorage['ID_pic'] = recArray[num].img_src;
            localStorage['ID_name'] = recArray[num].name;
            localStorage['ID_cat'] = recArray[num].category;
            localStorage['ID_price'] = recArray[num].price;
            localStorage['ID_brand'] = recArray[num].brand;
        }
        else{
            localStorage['prevID'] =  localStorage['ID'];
            localStorage['ID'] = simArray[num].id;
            localStorage['ID_pic'] = simArray[num].img_src;
            localStorage['ID_name'] = simArray[num].name;
            localStorage['ID_cat'] = simArray[num].category;
            localStorage['ID_price'] = simArray[num].price;
            localStorage['ID_brand'] = simArray[num].brand;

        }


        location.reload();
        $.post("http://techsailsrestful.us-east-2.elasticbeanstalk.com/update/"+  localStorage['prevID'] + "/" +localStorage['ID'] + "/oJ9Cl2ks7SWGOMmXSJ6bt3tIH4DsdLkt5LObtrPm");
        //updateData(localStorage['prevID'],localStorage['ID']);


}


 class Product {
  constructor() {
      this.id = '';
      this.type = '';
      this.img_src = '';
      this.name = '';
      this.brand = '';
      this.price = '';
      this.category = '';

  }
 }
function updateData(id1,id2) {
    alert("http://techsailsrestful.us-east-2.elasticbeanstalk.com/update/"+ id1 +"/" + id2);
    $.ajax({
        url: "http://techsailsrestful.us-east-2.elasticbeanstalk.com/update/"+ id1 +"/" + id2,
        type: "POST",
        data: {"tokenString": "oJ9Cl2ks7SWGOMmXSJ6bt3tIH4DsdLkt5LObtrPm"},
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            alert("Success");
        },
        error: function (xhr, ajaxOptions, thrownError) {

            alert("error" + xhr.status);
            alert(thrownError);
        }
    });
}
function clearStuff(){
   localStorage.clear();
}
