var dataArray = [];
var z_idx;
function dTable() {
    getData();
    console.log("getting data");
             $("#dynamic_table").ready(function () {
                 localStorage['myKey'] = 0; // only strings
                 //creates x images on same row
                 function numCol(x, y) {
                     var stringValue = '';
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<tr>";
                         for (var k = 0; k < x; ++k) {//col

                             stringValue += "<td>" +
                                 "<div class=\" row-fluid roundedT roundedB creamColor margin1 btn-primary shadow  blackText\">Text" +
                                 "<input  id ='name"+j+k+"' onclick='google()' type=\"image\" src= \"images/Apple1.jpg\" class = \"img-fluid rounded imgW\">" +
                                 "<div class=\"col-fluid text-center\">Info<br> Stuff <br> stuff</div>" +
                                 "</div>" +
                                 "</td>";
                         }
                         stringValue += "</tr> ";
                     }
                     return stringValue
                 }

                 // console.log(i);

                 $('#d_table').html(numCol(5, 2));

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
              var string = "name" + j.toString() + k.toString();
               var image = document.getElementById(string);
                image.src = (dataArray[dx]).img_src;
                ++ dx;
          }
      }
    z_idx = dx;
}

function nextImage(x,y,z){
    var dx = z;
      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
              var string = "name" + j.toString() + k.toString();
               var image = document.getElementById(string);
                image.src = (dataArray[dx]).img_src;
                ++ dx;
          }
      }
    z_idx = dx;
}

function prevImage(x,y,z){
    var dx = z - (5*2)*2;
      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
              var string = "name" + j.toString() + k.toString();
               var image = document.getElementById(string);
               image.src = (dataArray[dx]).img_src;
                ++dx;
          }
      }
    z_idx = dx;
}
function nextButton(){

   nextImage(5,2,z_idx);
  console.log(z_idx);
}

function prevButton(){

   prevImage(5,2,z_idx);
console.log(z_idx);
}




function setImage(x,y){
    return dataArray[x*y].img_src;
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
                    });
                    dataArray.push(product);
                });
                console.log("Data Done");
                console.log(dataArray.length);
                changeImage(5,2,0);
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
