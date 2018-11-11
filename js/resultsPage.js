var dataArray = [];
var z_idx;
var numRows = 6;
var numCol= 2;
var itemArray = []
var priorityBox = [0,0,0,0,0,0];
var myVar = localStorage['ID'] || '0';
function dTable() {
    getData();
             $("#dynamic_table").ready(function () {
                 //creates x images on same row
                 function numTable(x, y) {
                     var stringValue = '';
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<tr>";
                         for (var k = 0; k < x; ++k) {//col
                             var idString = (j*numRows + k).toString();
                             stringValue += "<td>" +
                                 "<div id = '"+idString+"' onclick=\"reply_click(this.id)\"  class=\"row-fluid rounded creamColor margin1 btn-primary shadow blackText\">" +
                                 "<div class=\"col-fluid text-center\" ><h6>Value</h6></div>"+
                                 "<input tag = \"img\"  type=\"image\" src= \"images/Apple1.jpg\" class = \"img tableRowHeight rounded W\">" +
                                 "<div class=\"col-fluid text-center\">Info<br> Stuff <br> stuff</div>" +
                                 "</div>" +
                                 "</td>";
                         }
                         stringValue += "</tr> ";
                     }
                     return stringValue
                 }
                 $('#d_table').html(numTable(numRows, numCol));

                 $('#tab_logic').append('<tr id="d_table' + (1) + '"></tr>');

             });
             console.log(dataArray.length);
     }

function google()
{
    location.href = "ProductPage.html";
    console.log(this.id);
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
              // console.log(j*numRows + k);
              // console.log(dataArray[dx].id);
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
function linkProductPage() {
  window.location.href = 'resultsPage.html';
}

function getData() {
    $(document).ready(function () {
            $.getJSON("data/data7.json", function (result) {
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
  }
  // Getter
  get getImg() {
    return this.img_src;
  }
  get getName() {
    return this.name;
  }
  get getBrand() {
    return this.brand;
  }
  get getPrice() {
    return this.price;
  }
  get getCategory() {
    return this.category;
  }

}

function reply_click(clicked_id)
{
        //gets item number
        var num = Number(clicked_id);
        localStorage['ID'] = itemArray[num]; // only strings
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
                console.log("ibox1");
                 Timer1 = setInterval(myCounter1, 1000);
            }
            else if(clicked_id === "box2"){
                console.log("ibox2");
                Timer2 = setInterval(myCounter2, 1000);
            }
            else if(clicked_id === "box3"){
                console.log("ibox3");
                Timer3 = setInterval(myCounter3, 1000);
            }
            else if(clicked_id === "box4") {
                console.log("ibox4");
                Timer4 = setInterval(myCounter4, 1000);
            }
            else if(clicked_id === "box5"){
                console.log("ibox5");
                Timer5 = setInterval(myCounter5, 1000);
            }
            else if(clicked_id === "box6"){
                console.log("ibox6");
                Timer6 = setInterval(myCounter6, 1000);
            }

}

function reply_mouseOut(clicked_id) {
            if(clicked_id === "box1"){
                console.log(c1);
                console.log("lbox1");
                priorityBox[0] = c1;
                 clearTimeout(Timer1);
            }
            else if(clicked_id === "box2"){
                console.log(c2);
                console.log("lbox2");
                priorityBox[1] = c2;
                clearTimeout(Timer2);
            }
            else if(clicked_id === "box3"){
                console.log(c3);
                console.log("lbox3");
                 priorityBox[2] = c3;
                clearTimeout(Timer3);
            }
            else if(clicked_id === "box4"){
                console.log(c4);
                console.log("lbox4");
                priorityBox[3] = c4;
                clearTimeout(Timer4);
            }
            else if(clicked_id === "box5"){
                console.log(c5);
                console.log("lbox5");
                priorityBox[4] = c5;
               clearTimeout(Timer5);
            }
            else if(clicked_id === "box6"){
                console.log(c6);
                console.log("lbox6");
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

    var dox = document.getElementById("flexCol2");
         dox.style.width = "20%";
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
    colIdArray[maxIndex*3].style.width = "50%";
    if(priorityBox[0]  > priorityBox[1]){
        colIdArray[1].style.height = "75%";
        colIdArray[2].style.height = "25%";
    }
    else{colIdArray[1].style.height = "25%";
        colIdArray[2].style.height = "75%";
    }

    if(priorityBox[4]  > priorityBox[5]){
        colIdArray[4].style.height = "75%";
        colIdArray[5].style.height = "25%";
    }
    else{colIdArray[4].style.height = "25%";
        colIdArray[5].style.height = "75%";
    }
     if(priorityBox[7]  > priorityBox[8]){
        colIdArray[7].style.height = "75%";
        colIdArray[8].style.height = "25%";
    }
    else{colIdArray[7].style.height = "25%";
        colIdArray[8].style.height = "75%";
    }
    updateDiv();

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

function updateDiv()
{
    $("map").load(location.href+" map>*","");
}