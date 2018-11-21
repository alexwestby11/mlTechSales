var dataArray = [];
var z_idx;
var numRows = 5;
var numCol= 2;
var itemArray = [0,0,0,0,0,0,0,0,0,0];
var recArray = [0,0,0,0];
var priorityBox = [0,0,0,0];
var myVar = localStorage['ID'] || '0';
var myVar1 = localStorage['ID_name'] || '0';
var myVar2 = localStorage['ID_pic'] || '0';
var myVar4 = localStorage['ID_pic1'] || '0';
var myVar5 = localStorage['ID_pic2'] || '0';
var myVar6 = localStorage['ID_pic3'] || '0';
var myVar7 = localStorage['ID_pic4'] || '0';
var myVar3 = localStorage['ID_cat'] || '0';
var myVar8 = localStorage['searchRec'] || '0';
var myVar9 = localStorage['searchCap'] || '0';
var myVar10 = localStorage['ID_pic1_c'] || '0';
var myVar11 = localStorage['ID_pic2_c'] || '0';
var myVar12 = localStorage['ID_pic3_c'] || '0';
var myVar13 = localStorage['ID_pic4_c'] || '0';
console.log("SEarhc ID = " + localStorage['searchRec']);
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
    location.href = "ProductPage.html";
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
  window.location.href = 'resultsPage.html';
}
 function getData1() {
    $(document).ready(function () {
            $.getJSON(localStorage['searchInput'], function (result) {
                //console.log(result);
                $.each(result, function (i, field) {
                    if(i === 100) {
        return false;
    }
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
                        else if (key === "manfacturer") {
                            product.brand = value;
                        }
                         else if (key === "id") {
                            product.id = value;
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
       // alert("num = " + num);
       // alert("itemArray = " + itemArray[num]);
        alert("id = " + dataArray[itemArray[num]].id);
        localStorage['ID'] = dataArray[itemArray[num]].id; // only string
        var itemIndexInLocalArray = itemArray[num];
        localStorage['ID_name'] = dataArray[itemIndexInLocalArray].name;
        localStorage['ID_pic'] = dataArray[itemIndexInLocalArray].img_src;
        localStorage['ID_cat'] = dataArray[itemIndexInLocalArray].category;
        //alert(itemIndexInLocalArray);
}

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var Timer1;
var Timer2;
var Timer3;
var Timer4;
function reply_mouseover(clicked_id)
{
            if(clicked_id === "box1"){
                //console.log("ibox1");
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
    var maxIndex = 0;
    var restOfItems = [];
    for(var i = 1; i < perCol.length; ++i){
        if(perCol[maxIndex] < perCol[i]){
            maxIndex = i;
        }
    }
    var colIdArray = [];
    colIdArray.push(document.getElementById("flexCol1"));
    colIdArray.push(document.getElementById("flex1"));
    colIdArray.push(document.getElementById("flex2"));
    colIdArray.push(document.getElementById("flexCol2"));
    colIdArray.push(document.getElementById("flex3"));
    colIdArray.push(document.getElementById("flex4"));

    //if all columns the same
    if(perCol[0] === perCol[1]){
        colIdArray[0].style.width = "100%";
        colIdArray[3].style.width = "100%";
    }
    else if(perCol[0] > perCol[1]){

        colIdArray[0].style.width = "70";
        colIdArray[3].style.width = "30%";
    }
    else if(perCol[0] < perCol[1]){
        colIdArray[0].style.width = "30%";
        colIdArray[3].style.width = "70%";

    }

    //boxes inside columns
    if(priorityBox[0]  > priorityBox[1]){
        colIdArray[1].style.height = "75%";
        colIdArray[2].style.height = "25%";
    }
    else if(priorityBox[0] === priorityBox[1]) {
        colIdArray[1].style.height = "50%";
        colIdArray[2].style.height = "50%";
    }
    else{
        colIdArray[1].style.height = "25%";
        colIdArray[2].style.height = "75%";
    }

    if(priorityBox[2]  > priorityBox[3]){
        colIdArray[4].style.height = "75%";
        colIdArray[5].style.height = "25%";
    }
    else if(priorityBox[2] === priorityBox[3]) {
        colIdArray[4].style.height = "50%";
        colIdArray[5].style.height = "50%";
    }
    else{
        colIdArray[4].style.height = "25%";
        colIdArray[5].style.height = "75%";
    }
    printPriorityBox();
 /*
    var col1 = document.getElementById("flexCol1");
    col1.style.width = (percentCol1 + '%').toString();
     var box1 = document.getElementById("box1");
    col1.style.height = (percentCol1 + '%').toString();
*/
     //console.log("Col 1 = " + percentCol1);
   // console.log("Col 2 = " + percentCol2);
   // console.log("Col 3 = " + percentCol3);
}


function getRecommendedProducts(){

    localStorage['searchRec'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/" + localStorage['ID'] + "/4/sim"
}
function getCompatibleProducts(){

    localStorage['searchCap'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRandomRec/" + localStorage['ID'] + "/4/comp"
}
function getRecommendData() {

    $(document).ready(function () {
            $.getJSON(localStorage['searchRec'], function (result) {
                //console.log(result);
                $.each(result, function (i, field) {
                    console.log(i);
                    let product = new Product();
                    $.each(field, function (key, value) {
                        if (key === "imgSrc") {
                            product.img_src = value;
                            console.log("here");
                            alert(value);
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

                });

                localStorage['ID_pic1'] = recArray[0].img_src;
                localStorage['ID_pic2'] = recArray[1].img_src;
                localStorage['ID_pic3'] = recArray[2].img_src;
                localStorage['ID_pic4'] = recArray[3].img_src;

            });
    });
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

 function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

