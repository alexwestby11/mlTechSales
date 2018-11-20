var dataArray = [];
var z_idx;
var numRows = 5;
var numCol= 2;
var itemArray = [];
var recArray = [0,0,0,0,0,0];
var priorityBox = [0,0,0,0,0,0];
var myVar = localStorage['ID'] || '0';
var myVar1 = localStorage['ID_name'] || '0';
var myVar2 = localStorage['ID_pic'] || '0';
var myVar4 = localStorage['ID_pic1'] || '0';
var myVar5 = localStorage['ID_pic2'] || '0';
var myVar6 = localStorage['ID_pic3'] || '0';
var myVar7 = localStorage['ID_pic4'] || '0';
var myVar3 = localStorage['ID_cat'] || '0';
var myVar8 = localStorage['searchRec'] || '0';
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
                                 "<input tag = \"img\"  type=\"image\" src= \"images/Apple1.jpg\" class = \"btn img tableRowHeight rounded W\" onclick=\"linkProductPage(); getRecommendData();\" >" +
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
    getRecommendedProducts(localStorage['ID']);
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
               itemArray[j*numRows + k] = dataArray[dx].id;
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
               itemArray[j*numRows + k] = dataArray[dx].id;
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
               itemArray[j*numRows + k] = dataArray[dx].id;
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
 class Product {
  constructor() {
      this.id = '';
      this.type = '';
      this.img_src = '';
      this.name = '';
      this.brand = '';
      this.price = '';
      this.category = '';
      this.index = 0;
  }
 }
 function reply_click(clicked_id)
{
        //gets item number
        var num = Number(clicked_id);
        localStorage['ID'] = dataArray[itemArray[num]].id; // only string
        var itemIndexInLocalArray = dataArray[itemArray[num]].index - 1;
        localStorage['ID_name'] = dataArray[itemIndexInLocalArray].name;
        localStorage['ID_pic'] = dataArray[itemIndexInLocalArray].img_src;
        localStorage['ID_cat'] = dataArray[itemIndexInLocalArray].category;
        alert(itemIndexInLocalArray);
}
 function returnItemClicked(){
    console.log(localStorage['ID']);
    return localStorage['ID'];
}
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var c6 = 0;
var Timer1;
var Timer2;
var Timer3;
var Timer4;
var Timer5;
var Timer6;
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
            else if(clicked_id === "box5"){
                //console.log("ibox5");
                Timer5 = setInterval(myCounter5, 1000);
            }
            else if(clicked_id === "box6"){
                //console.log("ibox6");
                Timer6 = setInterval(myCounter6, 1000);
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
            else if(clicked_id === "box5"){
                //console.log(c5);
               // console.log("lbox5");
                priorityBox[4] = c5;
               clearTimeout(Timer5);
            }
            else if(clicked_id === "box6"){
                //console.log(c6);
                //console.log("lbox6");
                priorityBox[5] = c6;
                 clearTimeout(Timer6);
             }
 }
 function myCounter1() {++c1;}
function myCounter2() {++c2;}
function myCounter3() {++c3;}
function myCounter4() {++c4;}
function myCounter5() {++c5;}
function myCounter6() {++c6;}
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
    var perCol = [0,0,0];
     //find column most used
    perCol[0] = Math.round(((priorityBox[0] + priorityBox[1])/total) * 100);
    perCol[1] = Math.round(((priorityBox[2] + priorityBox[3])/total) * 100);
    perCol[2] = Math.round(((priorityBox[4] + priorityBox[5])/total) * 100);
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
    colIdArray.push(document.getElementById("flexCol3"));
    colIdArray.push(document.getElementById("flex5"));
    colIdArray.push(document.getElementById("flex6"));

    //if all columns the same
    if(perCol[0] === perCol[1] === perCol[2]){
        colIdArray[0].style.width = "100%";
        colIdArray[3].style.width = "100%";
        colIdArray[6].style.width = "100%";
    }
    else{
        if(colIdArray[maxIndex * 3]){
           colIdArray[maxIndex * 3].style.width = "60%";
           for(var i = 0; i < 3; ++i){
               if(maxIndex !== i){
                   restOfItems.push(i);
               }
           }
           if(restOfItems[0] === restOfItems[1]){
               colIdArray[restOfItems[0]*3].style.width = "50%";
               colIdArray[restOfItems[1]*3].style.width = "50%";
           }
           else if(restOfItems[0] > restOfItems[1]){
               colIdArray[restOfItems[0]*3].style.width = "50%";
               colIdArray[restOfItems[1]*3].style.width = "30%";
           }
           else{
               colIdArray[restOfItems[0]*3].style.width = "30%";
               colIdArray[restOfItems[1]*3].style.width = "50%";
           }
        }

    }


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

    if(priorityBox[4]  > priorityBox[5]){
        colIdArray[7].style.height = "75%";
        colIdArray[8].style.height = "25%";
    }
    else if(priorityBox[4] === priorityBox[5]) {
        colIdArray[7].style.height = "50%";
        colIdArray[8].style.height = "50%";
    }
    else{
        colIdArray[7].style.height = "25%";
        colIdArray[8].style.height = "75%";
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


function getRecommendedProducts(id_number){

    localStorage['searchRec'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/itemRecommendation/" + id_number + "/4"
//console.log( localStorage['searchRec']);
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
                    alert(product);
                    recArray[i] = product;

                });
                localStorage['ID_pic1'] = recArray[0].img_src;
                localStorage['ID_pic2'] = recArray[1].img_src;
                localStorage['ID_pic3'] = recArray[2].img_src;
                localStorage['ID_pic4'] = recArray[3].img_src;

            });
    });
}