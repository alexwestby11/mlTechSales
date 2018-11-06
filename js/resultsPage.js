var dataArray = [];
var z_idx;
var numRows = 6;
var numCol= 2;
function dTable() {
    getData();
    console.log("getting data");
             $("#dynamic_table").ready(function () {
                 localStorage['myKey'] = 0; // only strings
                 //creates x images on same row
                 function numTable(x, y) {
                     var stringValue = '';
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<tr>";
                         for (var k = 0; k < x; ++k) {//col

                             stringValue += "<td>" +
                                 "<div id ='box"+j+k+"' class=\"row-fluid rounded creamColor margin1 btn-primary shadow blackText\">" +
                                 "<div class=\"col-fluid text-center\" ><h6>Value</h6></div>"+
                                 "<input tag = \"img\" onclick='google()' type=\"image\" src= \"images/Apple1.jpg\" class = \"img tableRowHeight rounded W\">" +
                                 "<div class=\"col-fluid text-center\">Info<br> Stuff <br> stuff</div>" +
                                 "</div>" +
                                 "</td>";
                         }
                         stringValue += "</tr> ";
                     }
                     return stringValue
                 }

                 // console.log(i);

                 $('#d_table').html(numTable(numRows, numCol));

                 $('#tab_logic').append('<tr id="d_table' + (1) + '"></tr>');

             });
             console.log(dataArray.length);
     }

function google()
{
     location.href = "http://google.com";
}

function changeImage(x,y,z){
    var dx = z;
      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
              var string = "box" + j.toString() + k.toString();
               var prd = document.getElementById(string);
               prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
               var name = (prd.getElementsByTagName("h6")[0]);
               name.innerHTML = dataArray[dx].name.substring(0,15);
               var info = (prd.getElementsByTagName("div")[1]);
               info.innerHTML = dataArray[dx].price +"<br>" + dataArray[dx].brand;
               ++ dx;
          }
      }
    z_idx = dx;
}

function nextImage(x,y,z){
    var dx = z;
      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
               var string = "box" + j.toString() + k.toString();
               var prd = document.getElementById(string);
               prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
               var name = (prd.getElementsByTagName("h6")[0]);
               name.innerHTML = dataArray[dx].name.substring(0,15);
               var info = (prd.getElementsByTagName("div")[1]);
               info.innerHTML = dataArray[dx].price +"<br>" + dataArray[dx].brand;
                ++dx;
          }
      }
    z_idx = dx;
}

function prevImage(x,y,z){
    var dx = z - (numRows*numCol)*2;
      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
             var string = "box" + j.toString() + k.toString();
               var prd = document.getElementById(string);
               prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
               var name = (prd.getElementsByTagName("h6")[0]);
               name.innerHTML = dataArray[dx].name.substring(0,15);
               var info = (prd.getElementsByTagName("div")[1]);
               info.innerHTML = dataArray[dx].price +"<br>" + dataArray[dx].brand;
                ++dx;
          }
      }
    z_idx = dx;
}
function nextButton(){

   nextImage(numRows,numCol,z_idx);
  console.log(z_idx);
}

function prevButton(){

   prevImage(numRows,numCol,z_idx);
console.log(z_idx);
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
            $.getJSON("data/data3.json", function (result) {
                //console.log(result);
                $.each(result, function (i, field) {
                    let product = new Product();
                    $.each(field, function (key, value) {
                        if (key == "imgSrc") {
                            product.img_src = value;

                        }
                        else if (key == "name") {
                            product.name = value;
                        }
                        else if (key == "price") {
                            product.price = value;
                        }
                        else if (key == "manfacturer") {
                            product.brand = value;
                        }
                    });
                    dataArray.push(product);
                });
                console.log("Data Done");
                console.log(dataArray.length);
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

