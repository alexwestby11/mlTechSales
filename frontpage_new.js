//Arrays
var dataArray = [];
var recArray = [];
var simArray = [];
var itemArray = [0,0,0,0,0,0,0,0,0,0];
var box1 = localStorage['c1'] || '0';
var box2 = localStorage['c2'] || '0';
var box3 = localStorage['c3'] || '0';
var box4 = localStorage['c4'] || '0';

var priorityBox = [parseInt(box1),parseInt(box2),parseInt(box3),parseInt(box4)];
var addPicsIndexArray = [0,1,2,3,4,5,6,7];

//Size of results Page
var numRows = 5;
var numCol= 2;

//aLEXES sTUFF
var avgPriceArray=[];


var z_idx = localStorage['results_index'] || '0';
var numClicked = localStorage['numClicked'] || '0';
var numRowsR = localStorage['numRowsR'] || '3';
var numColR= localStorage['numColR'] || '2';
var numRowsS = localStorage['numRowsS'] || '3';
var numColS= localStorage['numColS'] || '2';
var numRowsI = localStorage['numRowsI'] || '2';
var numColI = localStorage['numColI'] || '1';

var myVar = localStorage['ID'] || '10';
var myVar1 = localStorage['ID_name'] || '0';
var myVar2 = localStorage['ID_pic'] || '0';
var myVar3 = localStorage['ID_cat'] || '0';
var myVar8 = localStorage['searchRec'] || '0';
var myVar9 = localStorage['searchCap'] || '0';
var averagePrice = localStorage['averagePrice'] || '0';
var myVar11 = localStorage['value'] || '0';
var myVar13 = localStorage['ID_pic4_c'] || '0';
var searchInput = localStorage['searchInput'] || '0';
var myVar99 = localStorage['searchSim'] || '0';
var myVar133 = localStorage['ID_price'] || '0';
var myVar33 = localStorage['ID_brand'] || '0';
var myVardfafd =  localStorage['currentCollect'] || '0';
var results = localStorage['results_index'] || '0';
var resultsds = localStorage['ID_type'] || '0';

var totalCollect = 3;
var currentCollect = 0;
var addPicsIndex = 0;
var addPicsArray = ['images/Apple1.jpg','images/Apple2.jpg','images/searchLogo.jpg','images/Logo/logo1.png','images/Logo/logo2.png','images/Logo/logo3.png','images/Logo/logo4.png','images/Logo/logo5.png','images/Logo/logo5.png'];

var isResults = 1;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var Timer1 = 0;
var Timer2 = 0;
var Timer3 = 0;
var Timer4 = 0;
var catArray = [];
var flag = localStorage['flag'] || '0';


function initilizeBoxes(cat){
    for(var i = 0; i < catArray.length; i += 5){
       if(catArray[i] === cat){
          var box1 = catArray[i+1];
          var box2 = catArray[i+2];
          var box3 = catArray[i+3];
          var box4 = catArray[i+4];
          priorityBox = [parseInt(box1),parseInt(box2),parseInt(box3),parseInt(box4)];
          break;
       }
   }

}

function initialSet(){
        if(flag === '0') {
            var cBox = [];
            var categorys = ["Cables", "Desktop", "Gaming", "Media", "Mobile Computer", "Notebooks", "Photography", "Storage Medium"];
            var tempArray = []
            for(var i = 0; i < categorys.length; ++i){
                tempArray.push(categorys[i]);
                tempArray.push(0);
                tempArray.push(0);
                tempArray.push(0);
                tempArray.push(0);

            }
            localStorage.category = JSON.stringify(tempArray);
        }
        catArray = JSON.parse(localStorage.category);
        alert(catArray);
    flag = '1';
    localStorage['flag'] = '1';
}
//Classes
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

function updateBoxValue(cat){
   for(var i = 0; i < catArray.length; i += 5){
       if(catArray[i] === cat){
           catArray[i+1] = parseInt(catArray[i+1]) + parseInt(box1);
           catArray[i+2] = parseInt(catArray[i+2]) + parseInt(box1);
           catArray[i+3] = parseInt(catArray[i+3]) + parseInt(box1);
           catArray[i+4] = parseInt(catArray[i+4]) + parseInt(box1);
           localStorage.category = JSON.stringify(catArray);
           break;
       }
   }
}

//checks Input
function setInput(){
    var tempValue = '';


    var value = document.getElementById("searchbar").value;
    localStorage['value'] = value;
    var temp  = value.replace(/\s/g, '');
    var letters = /^[0-9a-zA-Z]+$/;
    if(temp.match(letters)) {
        //alert('Your registration number have accepted : you can try another');
        if (value.length < 75) {
            for (var i = 0; i < value.length; ++i) {
                if (value[i] === ' ') {
                    tempValue += "/";
                } else {
                    tempValue += value[i];
                }
            }
            linkResultsPage();
        }
        else {
           alert('Try again');
        }
    }
    else{
       alert('Try again');
    }

    localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "name" + "/" + tempValue;
    z_idx = 0;
    localStorage['results_index'] = z_idx;
}







 function linkProductPage()
{
    location.href = "ProductPage_new.html";
}

 function changeImage(x,y){
    var dx =  Number(localStorage['results_index']);

      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
              var string = (j*numRows + k).toString();
               var prd = document.getElementById(string);
               if(typeof dataArray[dx] !== 'undefined'){
                   $('#' + string).css('visibility', 'visible');
                    prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
               var name = (prd.getElementsByTagName("b")[0]);
               var txt = name.innerHTML = dataArray[dx].name;
               if(txt.length > 25){
                   txt = txt.split(' ').slice(0,2).join(' ');
                    if(txt.length > 25){
                    txt = txt.split(' ').slice(0,1).join(' ');
                 }
               }
               name.innerHTML = txt;
               var info = (prd.getElementsByTagName("div")[1]);
               info.innerHTML = dataArray[dx].brand +"<br>" + '$' + dataArray[dx].price;
               itemArray[j*numRows + k] = dx;

               dataArray[dx].index = dx;
               }
                else{
                     $('#' + string).css('visibility', 'hidden');
               }
               ++ dx;
          }
           z_idx = dx;
          localStorage['results_index'] = z_idx;
      }

     // console.log(z_idx);
}


 function nextImage(x,y){
    var dx = Number(localStorage['results_index']) ;
     if(dx < dataArray.length) {
         for (var j = 0; j < y; ++j) {//rows
             for (var k = 0; k < x; ++k) {//col
                 var string = (j * numRows + k).toString();
                 var prd = document.getElementById(string);
                 if (typeof dataArray[dx] !== 'undefined' || dx < dataArray.length) {
                     $('#' + string).css('visibility', 'visible');
                     prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
                     var name = (prd.getElementsByTagName("b")[0]);
                     var txt = name.innerHTML = dataArray[dx].name;
                     if (txt.length > 25) {
                         txt = txt.split(' ').slice(0, 2).join(' ');
                         if (txt.length > 25) {
                             txt = txt.split(' ').slice(0, 1).join(' ');
                         }
                     }
                     name.innerHTML = txt;
                     var info = (prd.getElementsByTagName("div")[1]);
                     info.innerHTML = dataArray[dx].brand + "<br>" + '$' + dataArray[dx].price;
                     itemArray[j * numRows + k] = dx;

                     dataArray[dx].index = dx;
                 }
                 else {

                     $('#' + string).css('visibility', 'hidden');
                 }
                 ++dx;
             }
         }
          z_idx = dx;
         localStorage['results_index'] = z_idx;
     }
     console.log(z_idx);
}


 function prevImage(x,y,z){
    var dx = Number(localStorage['results_index']) - (numRows*numCol)*2;
    if(dx >= 0) {
        for (var j = 0; j < y; ++j) {//rows
            for (var k = 0; k < x; ++k) {//col
                var string = (j * numRows + k).toString();
                var prd = document.getElementById(string);
                if (typeof dataArray[dx] !== 'undefined') {
                    $('#' + string).css('visibility', 'visible');
                    prd.getElementsByTagName("input")[0].src = dataArray[dx].img_src;
                    var name = (prd.getElementsByTagName("b")[0]);
                    var txt = name.innerHTML = dataArray[dx].name;
                    if (txt.length > 25) {
                        txt = txt.split(' ').slice(0, 2).join(' ');
                        if (txt.length > 25) {
                            txt = txt.split(' ').slice(0, 1).join(' ');
                        }
                    }
                    name.innerHTML = txt;
                    var info = (prd.getElementsByTagName("div")[1]);
                    info.innerHTML = dataArray[dx].brand + "<br>" + '$' + dataArray[dx].price;
                    itemArray[j * numRows + k] = dx;

                    dataArray[dx].index = dx;
                }
                else {
                    $('#' + string).css('visibility', 'hidden');
                }
                ++dx;
            }
        }
         z_idx = dx;
        localStorage['results_index'] = z_idx;
    }

    console.log(z_idx);
}

function nextButton(){
    nextImage(numRows,numCol,z_idx);
}

 function prevButton(){
    prevImage(numRows,numCol,z_idx);
}

function linkResultsPage() {
  window.location.href = 'resultsPage_new.html';
}




///Only works on results page
 function reply_click(clicked_id)
{
        //gets item number
        var num = Number(clicked_id);
        localStorage['ID'] = dataArray[itemArray[num]].id;
        var itemIndexInLocalArray = itemArray[num];
        localStorage['ID_FullName'] = dataArray[itemIndexInLocalArray].name;
        console.log(localStorage['ID_FullName']);
        localStorage['ID_name'] = dataArray[itemIndexInLocalArray].name;
        localStorage['ID_pic'] = dataArray[itemIndexInLocalArray].img_src;
        localStorage['ID_cat'] = dataArray[itemIndexInLocalArray].category;
        localStorage['prev_cat'] = dataArray[itemIndexInLocalArray].category;
        localStorage['ID_price'] = dataArray[itemIndexInLocalArray].price;
        localStorage['ID_brand'] = dataArray[itemIndexInLocalArray].brand;
        localStorage['ID_type'] = dataArray[itemIndexInLocalArray].type;
        localStorage['results_index'] = z_idx - 10;

        updateAveragePrice(dataArray[itemIndexInLocalArray].price);
        initialBoxSize(localStorage['ID_cat']);

}



function replyMainImage(clicked_id)
{
        //check if sim/comp product
        var num = '';
        for(var i = 7; i < clicked_id.length; ++i){
            num += clicked_id[i];
        }
        document.getElementById("mainImg0").src = addPicsArray[addPicsIndexArray[Number(num)]];
        document.getElementById(clicked_id).src = addPicsArray[addPicsIndexArray[addPicsIndex]];
        var value = addPicsIndexArray[Number(num)];
        addPicsIndexArray[Number(num)] = addPicsIndexArray[addPicsIndex];
        addPicsIndexArray[addPicsIndex] = value;


}

function replyMainButtons(clicked_id)
{
        if(clicked_id === "right"){
            ++addPicsIndex;
        }
        else if(clicked_id === "left"){
            addPicsIndex = addPicsIndex - 1;
        }
        if(addPicsIndex < 0){
            addPicsIndex = addPicsArray.length-1;
        }
         if(addPicsIndex >= addPicsArray.length){
            addPicsIndex = 0;
        }
        document.getElementById("mainImg0").src = addPicsArray[addPicsIndex];
}

function initialBoxSize(){
    (document.getElementById("flexCol1").style.height =  localStorage['colIdArray[0]H'] || '100%');
    (document.getElementById("flexCol1").style.width =  localStorage['colIdArray[0]W'] || '100%');
    (document.getElementById("flex1").style.height =  localStorage['colIdArray[1]H'] || '100%');
    (document.getElementById("flex1").style.width =  localStorage['colIdArray[1]W'] || '100%');
    (document.getElementById("flex2").style.height =  localStorage['colIdArray[2]H'] || '100%');
    (document.getElementById("flex2").style.width =  localStorage['colIdArray[2]W'] || '100%');
    (document.getElementById("flexCol2").style.height =  localStorage['colIdArray[3]H'] || '100%');
    (document.getElementById("flexCol2").style.width =  localStorage['colIdArray[3]W'] || '100%');
    (document.getElementById("flex3").style.height =  localStorage['colIdArray[4]H'] || '100%');
    (document.getElementById("flex3").style.width =  localStorage['colIdArray[4]W'] || '100%');
    (document.getElementById("flex4").style.height =  localStorage['colIdArray[5]H'] || '100%');
    (document.getElementById("flex4").style.width =  localStorage['colIdArray[5]W'] || '100%');
}

/*OLD
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
        localStorage['averagePrice'] = averagePrice/totalCollect;
        alert("average = " +  localStorage['averagePrice']);
    }

}*/

function updateAveragePrice(x){
    if(isNaN(localStorage['currentCollect'])){
        localStorage['averagePrice'] = 0;

        //avgPriceArray = (JSON.parse(localStorage.getItem("avgPriceArray"))).map(Number);
        avgPriceArray.push(x)
        localStorage.setItem("avgPriceArray", JSON.stringify(avgPriceArray));
        var argo= (JSON.parse(localStorage.getItem("avgPriceArray"))).map(Number);
        averagePrice = x;
        localStorage['averagePrice'] = averagePrice;
        localStorage['currentCollect'] = 0;
        currentCollect =  Number(localStorage['currentCollect']);
        ++currentCollect;
        localStorage['currentCollect'] = currentCollect;
        //alert('average price:'+ localStorage['averagePrice'])
    }
    else{
        avgPriceArray = (JSON.parse(localStorage.getItem("avgPriceArray"))).map(Number);
        avgPriceArray.push(x)
        localStorage.setItem("avgPriceArray", JSON.stringify(avgPriceArray));
        averagePrice = Number(localStorage['averagePrice']);
        averagePrice += x;
        localStorage['averagePrice'] = averagePrice;
        currentCollect =  Number(localStorage['currentCollect']);
        ++currentCollect;
        localStorage['currentCollect'] = currentCollect;
       // alert('average price:'+ localStorage['averagePrice'])

    }

    if(currentCollect  >= totalCollect) {

        avgPriceArray = (JSON.parse(localStorage.getItem("avgPriceArray"))).map(Number);
        lowerBoundPrice=oneSigmaMinus(avgPriceArray)
        if(lowerBoundPrice<0)
        {
            lowerBoundPrice=0
        }
        upperBoundPrice=oneSigmaPlus(avgPriceArray)
       // localStorage['currentCollect'] = "NaN";
        //alert('average price:'+ averagePrice/totalCollect)
        //alert("average = " + averagePrice/totalCollect);
    }
   // alert(localStorage['currentCollect']);
}