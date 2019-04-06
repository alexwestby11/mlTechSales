//Arrays

var dataArray = [];
var recArray = [];
var simArray = [];
var itemArray = [0,0,0,0,0,0,0,0,0,0];
var box1 = 0;
var box2 = 0;
var box3 = 0;
var box4 = 0;

var priorityBox = [parseInt(box1),parseInt(box2),parseInt(box3),parseInt(box4)];
var addPicsIndexArray = [0,1,2,3,4,5,6,7];

//Size of results Page
var numRows = 5;
var numCol= 10;

//Alex's Stuff
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
var typeArrayFixed = ["notebook","monitor","notebook_case","mouse","charger","keyboard","cable","docking_station","speaker","tablet","mobile","drive","printer","dvd_br","desktop","controller","camera","headset","game","console","lens","television"];
var isResults = 1;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var Timer1 = 0;
var Timer2 = 0;
var Timer3 = 0;
var Timer4 = 0;
var typeArray = [];
var flag = localStorage['flag'] || '0';
var topValuesTypesNames = [typeArray[0],typeArray[7],typeArray[14],typeArray[21]];
var prevValue = 0;
const numToChangeBox = 3;


function initBoxes(type){
    var index = 0;

    for(var i = 0; i < typeArray.length; i += 7){
       if(typeArray[i] === type){
          box1 = typeArray[i+1];
          box2 = typeArray[i+2];
          box3 = typeArray[i+3];
          box4 = typeArray[i+4];
          index = typeArray[i+5];
          if(index === numToChangeBox){
              typeArray[i+5] = 0;
          }
          priorityBox = [parseInt(box1),parseInt(box2),parseInt(box3),parseInt(box4)];
          break;
       }
   }
    colChange();

   //alert("Boxes Initilized" + "\n" +
  // "box1 = " + priorityBox[0] + "\n" +  "box2 = " + priorityBox[1] + "\n" + "box3 = " + priorityBox[2] + "\n" + "box4 = " + priorityBox[3] + "\n";
   // sessionID()


}

function initialSet(){
        if(flag === '0') {
            var typeTempArray = typeArrayFixed;
            for (var i = 0; i < typeTempArray.length; ++i) {
                var tempArray = [];
                for (var i = 0; i < typeTempArray.length; ++i) {

                    //type
                    tempArray.push(typeTempArray[i]);

                    //box data
                    tempArray.push(0);
                    tempArray.push(0);
                    tempArray.push(0);
                    tempArray.push(0);

                    //index data
                    tempArray.push(0);

                     //type count
                    tempArray.push(0);

                }
                localStorage.type = JSON.stringify(tempArray);
            }
        }
        typeArray = JSON.parse(localStorage.type);
        //alert("flag = " + flag + "\n" + "here = " + typeArray);
        flag = '1';
        localStorage['flag'] = flag;
}

function updateType(type){
        var temp = '';
        for(var i = 0; i < typeArray.length; i+=7) {
            if(type === typeArray[i]){
                temp = typeArray[i];
                typeArray[i+6] = parseInt(typeArray[i+6]) + 1;
                break;
            }
        }
        localStorage.type = JSON.stringify(typeArray);
}




function sortType(){
    var items = [];

        for(var i = 0; i < typeArray.length; i += 7) {
            var temp = new Item(); // ReferenceError
            temp.number = parseInt(typeArray[i+6]);
            temp.type = typeArray[i];
            items.push(temp);
        }

        //sorts item
        items.sort(function(a, b) {
            return a.number - b.number;
        });

        topValuesTypesNames[0] = items[items.length-1].type;
        topValuesTypesNames[1] = items[items.length-2].type;
        topValuesTypesNames[2] = items[items.length-3].type;
        topValuesTypesNames[3] = items[items.length-4].type;

        console.log(items);

        for(var i = 0; i < topValuesTypesNames.length; ++i) {
                idValue = "typeImg" + String(i+1);
                idValue1 = "type" + String(i+1);
                document.getElementById(idValue).src = "images/clipart/" + topValuesTypesNames[i] + ".png";
                document.getElementById(idValue1).getElementsByTagName("b")[0].innerHTML = topValuesTypesNames[i];
           }

}

function setTypeArray(){
       typeArray = JSON.parse(localStorage.type);
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

//Classes
class Item {
  constructor() {
      this.type = "";
      this.number = 0;
  }
}


//Update Value in existing box
function updateBoxValue(type){
   for(var i = 0; i <  typeArray.length; i += 7){
       if(typeArray[i] === type){

            typeArray[i+1] = parseInt(typeArray[i+1]) + parseInt(box1);
            typeArray[i+2] = parseInt(typeArray[i+2]) + parseInt(box2);
            typeArray[i+3] = parseInt(typeArray[i+3]) + parseInt(box3);
            typeArray[i+4] = parseInt(typeArray[i+4]) + parseInt(box4);
            typeArray[i+5] = parseInt(typeArray[i+5]) + 1;
           localStorage.type = JSON.stringify(typeArray);
           break;
       }
   }
     // alert("type = " +  type + "\n" +"Boxes updated" + "\n" +
  // "box1 = " + priorityBox[0] + "\n" +  "box2 = " + priorityBox[1] + "\n" + "box3 = " + priorityBox[2] + "\n" + "box4 = " + priorityBox[3] + "\n");
     // alert("UpdateArray = " + typeArray);
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


    //localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "item_type" + "/" + tempValue;
    localStorage['searchInput']="http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "name" + "/" + tempValue;

    z_idx = 0;
    localStorage['results_index'] = z_idx;
}

function pressedType1(){
     localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "Item_Type" + "/" + topValuesTypesNames[0];

    localStorage['value'] = "Type: " + topValuesTypesNames[0];
     linkResultsPage();
}

function pressedType2(){
     localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "Item_Type" + "/" + topValuesTypesNames[1];
     z_idx = 0;
     localStorage['results_index'] = z_idx;
     localStorage['value'] = "Type: " + topValuesTypesNames[1];
     linkResultsPage();
}

function pressedType3(){
     localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "Item_Type" + "/" + topValuesTypesNames[2];
     z_idx = 0;
     localStorage['results_index'] = z_idx;
     localStorage['value'] = "Type: " + topValuesTypesNames[2];
     linkResultsPage();
}

function pressedType4(){
     localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "Item_Type" + "/" + topValuesTypesNames[3];
     z_idx = 0;
     localStorage['results_index'] = z_idx;
     localStorage['value'] = "Type: " + topValuesTypesNames[3];
     linkResultsPage();
}




 function linkProductPage()
{
    location.href = "ProductPage_new.html";
}

 function changeImage(x,y){
    var tempBoolArray = JSON.parse(localStorage.boolArray);
    var dx =  0;

    //var newRows = Math.ceil(tempBoolArray[tempBoolArray.length-1]/5);
    //console.log(tempBoolArray[tempBoolArray.length-1]);
    //x = newRows;
    //numCol= newRows;
    console.log(tempBoolArray);
      for (var j = 0; j < y; ++j) {//rows
          for (var k = 0; k < x; ++k) {//col
              var string = (j * numRows + k).toString();
              var prd = document.getElementById(string);
              if (typeof dataArray[dx] !== 'undefined') {
                        if(tempBoolArray[dx] === true){
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
                    else{
                        --k;
                        }
                 }
                else{
                     $('#' + string).css('visibility', 'hidden');
               }
               ++dx;
          }
           z_idx = dx;
          localStorage['results_index'] = z_idx;
      }
     // console.log(z_idx)
}


function linkResultsPage() {
  window.location.href = 'resultsPage_new.html';
}

function linkHomePage() {
  window.location.href = 'index.html';
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
        updateBrand(dataArray[itemIndexInLocalArray].brand,dataArray[itemIndexInLocalArray].type)
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
    createSessionID()
}






function createSessionID()
{
    if (localStorage['sessionID']==null)
    {
        localStorage['sessionID']=Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);
        localStorage['username']=''
    }
    var localID=localStorage['sessionID']

    $(document).ready(function() {
    var alpha = $.ajax({
        url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/update/user/'+ localID +'/oJ9Cl2ks7SWGOMmXSJ6bt3tIH4DsdLkt5LObtrPm',
        dataType: 'json',
        type: 'POST',
        success: function (data) {
            {
                var alel= 5;
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
})
}


function displayNumClicks(){
    var numClick = Number(localStorage.click);
    localStorage.click = 0;
    alert("Number of Clicks = " + numClick +"\n" +
            "Time = " + localStorage.min + ":" +localStorage.second +"\n" + "Timer Reset\n Start from index page to try again\nThank you");
}

function incrementClick() {
    if (localStorage.click === undefined) {
        localStorage.click = 1;
    }
    else {
        var num = Number(localStorage.click);
        ++num;
        localStorage.click = num;
    }
}




var secondTimer = localStorage.second || 0
var output = setInterval(myTimer ,1000);;
function startTimer(){

}

var minute = localStorage.min || 0;
function myTimer() {
  var stringVar = "0";
  ++secondTimer;
  if(secondTimer === 60){
      ++minute;
      secondTimer = 0;
      stringVar = secondTimer;
  }else if(secondTimer < 10){
    stringVar += secondTimer;
  }
  else{
      stringVar = secondTimer;
  }
  console.log(minute + ":" +stringVar);
  localStorage.second = secondTimer;
  localStorage.min = minute;
  //document.getElementById("Timer").innerHTML = " " + minute + ":" +stringVar;
}

function resetTimer(){
    clearInterval(output);
    localStorage.second = 0;
    localStorage.min = 0;
    localStorage.output = 0;
}

function setRating(num) {
    var stringVal = "star";
    num = num.toString();
    if(num === "1"){
        stringVal += num.toString();
        stringVal += "1";
        document.getElementById(stringVal).checked = true;

    }
    else if(num === "2"){
         stringVal += num.toString();
        stringVal += "1";
          document.getElementById(stringVal).checked = true;
    }
    else if(num === "3"){
         stringVal += num.toString();
        stringVal += "1";
         document.getElementById(stringVal).checked = true;
    }
    else if(num === "4"){
         stringVal += num.toString();
        stringVal += "1";
          document.getElementById(stringVal).checked = true;
    }
    else if(num === "5"){
         stringVal += num.toString();
        stringVal += "1";
          document.getElementById(stringVal).checked = true;
    }
    console.log("stringValue" + stringVal);
}

function returnStar(id) {

    if(id === "star1"){
        localStorage.userRating = 1;
    }
    else if(id === "star2"){
        localStorage.userRating = 2;
    }
    else if(id === "star3"){
        localStorage.userRating = 3;
    }
    else if(id === "star4"){
        localStorage.userRating = 4;
    }
    else if(id === "star5"){
        localStorage.userRating = 5;
    }


    console.log(localStorage.userRating);

}