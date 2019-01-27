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
var timerArray = [Timer1,Timer2,Timer3,Timer4];

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
        localStorage['ID_price'] = dataArray[itemIndexInLocalArray].price;
        localStorage['ID_brand'] = dataArray[itemIndexInLocalArray].brand;
         localStorage['ID_type'] = dataArray[itemIndexInLocalArray].type;
        localStorage['results_index'] = z_idx - 10;
       // alert(localStorage['results_index']);

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
        localStorage['averagePrice'] = averagePrice/totalCollect;
        alert("average = " +  localStorage['averagePrice']);
    }
   // alert(localStorage['currentCollect']);
}



function reply_mouseover(clicked_id)
{
            if(clicked_id === "box1"){
                 Timer1 = setInterval(myCounter1, 100);
                 localStorage['Timer1'] = Timer1;
            }
            else if(clicked_id === "box2"){
                Timer2 = setInterval(myCounter2, 100);
                localStorage['Timer2'] = Timer2;
            }
            else if(clicked_id === "box3"){
                Timer3 = setInterval(myCounter3, 100);
                localStorage['Timer3'] = Timer3;
            }
            else if(clicked_id === "box4") {
                Timer4 = setInterval(myCounter4, 100);
                localStorage['Timer4'] = Timer4;
            }
 }

 function reply_mouseOut(clicked_id) {
            if(clicked_id === "box1"){
                priorityBox[0] += c1;
                 localStorage['c1'] =  priorityBox[0];
                 clearTimeout(Timer1);
            }
            else if(clicked_id === "box2"){
                priorityBox[1] += c2;
                localStorage['c2'] =  priorityBox[1];
                clearTimeout(Timer2);
            }
            else if(clicked_id === "box3"){
                 priorityBox[2] += c3;
                 localStorage['c3'] = priorityBox[2];
                clearTimeout(Timer3);
            }
            else if(clicked_id === "box4"){
                priorityBox[3] += c4;
                localStorage['c4'] =  priorityBox[3];
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
    var total = 0;
    for(var i = 0; i < priorityBox.length; ++i){
        total += priorityBox[i];
    }
    var perCol = [0,0];
     //find column most used
     if(total !== 0){
          perCol[0] = Math.round(((priorityBox[0] + priorityBox[1])/total) * 100);
          perCol[1] = Math.round(((priorityBox[2] + priorityBox[3])/total) * 100);
     }
     else{
         perCol[0] = 0;
          perCol[1] = 0;
     }


var colIdArray = [];
    colIdArray.push(document.getElementById("flexCol1"));
    colIdArray.push(document.getElementById("flex1"));
    colIdArray.push(document.getElementById("flex2"));
    colIdArray.push(document.getElementById("flexCol2"));
    colIdArray.push(document.getElementById("flex3"));
    colIdArray.push(document.getElementById("flex4"));

    alert(perCol[0] + "\n" + perCol[1]);
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

    if(priorityBox[2] === priorityBox[3]) {
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

    if(colIdArray[5].style.height === "50%" && colIdArray[3].style.width === "50%"){
        numRowsR = 3;
        numColR= 2;
        localStorage['numRowsR'] = '3';
        localStorage['numColR'] = '2';
        //console.log("1");
    }
    else if(colIdArray[5].style.height === "65%" && colIdArray[3].style.width === "65%"){
         numRowsR = 4;
        numColR= 2;
          localStorage['numRowsR'] = '4';
        localStorage['numColR'] = '2';
       // console.log("2");
    }
    else if(colIdArray[5].style.height === "65%" && colIdArray[3].style.width === "35%"){
        numRowsR = 2;
        numColR= 3;
          localStorage['numRowsR'] = '2';
        localStorage['numColR'] = '3';
        //console.log("3");
    }
    else if(colIdArray[5].style.height === "35%" && colIdArray[3].style.width === "65%"){
        numRowsR = 4;
        numColR= 1;
         localStorage['numRowsR'] = '4';
        localStorage['numColR'] = '1';
        //console.log("4");
    }
    else if((colIdArray[5].style.height === "35%" && colIdArray[3].style.width === "35%")){
        numRowsR = 2;
        numColR= 1;
        localStorage['numRowsR'] = '2';
        localStorage['numColR'] = '1';
       // console.log("5");
    }
    else if(colIdArray[5].style.height === "50%" && colIdArray[3].style.width === "35%"){
        numRowsR = 2;
        numColR= 2;
        localStorage['numRowsR'] = '2';
        localStorage['numColR'] = '2';
    }
   else if (colIdArray[5].style.height === "50%" && colIdArray[3].style.width === "65%"){
       numRowsR = 4;
        numColR= 2;
        localStorage['numRowsR'] = '4';
        localStorage['numColR'] = '2';
    }

     //Similaritems
    if(colIdArray[4].style.height === "50%" && colIdArray[3].style.width === "50%"){
        numRowsS = 3;
        numColS= 2;
         localStorage['numRowsS'] = '3';
        localStorage['numColS'] = '2';
        //console.log("1");
    }
    else if(colIdArray[4].style.height === "65%" && colIdArray[3].style.width === "65%"){
         numRowsS = 4;
        numColS= 2;
            localStorage['numRowsS'] = '4';
        localStorage['numColS'] = '2';
       // console.log("2");
    }
    else if(colIdArray[4].style.height === "65%" && colIdArray[3].style.width === "35%"){
        numRowsS = 2;
        numColS= 3;
            localStorage['numRowsS'] = '2';
        localStorage['numColS'] = '3';
        console.log("3");
    }
    else if(colIdArray[4].style.height === "35%" && colIdArray[3].style.width === "65%"){
        numRowsS = 4;
        numColS= 1;
         localStorage['numRowsS'] = '4';
        localStorage['numColS'] = '1';
        //console.log("4");
    }
    else if((colIdArray[4].style.height === "35%" && colIdArray[3].style.width === "35%")){
        numRowsS = 2;
        numColS= 1;
         localStorage['numRowsS'] = '2';
        localStorage['numColS'] = '1';
        console.log("5");
    }
    else if(colIdArray[4].style.height === "50%" && colIdArray[3].style.width === "35%"){
        numRowsS = 2;
        numColS= 2;
          localStorage['numRowsS'] = '2';
        localStorage['numColS'] = '2';
    }
   else if (colIdArray[4].style.height === "50%" && colIdArray[3].style.width === "65%"){
       numRowsS = 4;
        numColS= 2;
          localStorage['numRowsS'] = '4';
        localStorage['numColS'] = '2';
    }

    //Images items
    if(colIdArray[1].style.height === "50%" && colIdArray[0].style.width === "50%"){
        numRowsI = 2;
        numColI= 1;
        localStorage['numRowsI'] = '2';
        localStorage['numColI'] = '1';
    }
    else if(colIdArray[1].style.height === "60%" && colIdArray[0].style.width === "65%"){
         numRowsI = 3;
        numColI= 1;
        localStorage['numRowsI'] = '3';
        localStorage['numColI'] = '1';
    }
    else if(colIdArray[1].style.height === "60%" && colIdArray[0].style.width === "35%"){
        numRowsI = 0;
        numColI = 0;
          localStorage['numRowsI'] = '0';
        localStorage['numColI'] = '0';
    }
    else if(colIdArray[1].style.height === "40%" && colIdArray[0].style.width === "65%"){
        numRowsI = 2;
        numColI = 2;
        localStorage['numRowsI'] = '2';
        localStorage['numColI'] = '2';
    }
    else if((colIdArray[1].style.height === "40%" && colIdArray[0].style.width === "35%")){
        numRowsI = 0;
        numColI = 0;
        localStorage['numRowsI'] = '0';
        localStorage['numColI'] = '0';
    }
    else if(colIdArray[1].style.height === "50%" && colIdArray[0].style.width === "35%"){
        numRowsI = 0;
        numColI = 0;
        localStorage['numRowsI'] = '0';
        localStorage['numColI'] = '0';
    }
    else if(colIdArray[1].style.height === "50%" && colIdArray[0].style.width === "65%"){
        numRowsI = 2;
        numColI = 2;
        localStorage['numRowsI'] = '2';
        localStorage['numColI'] = '2';
    }
    localStorage['colIdArray[0]H'] =  colIdArray[0].style.height;
    localStorage['colIdArray[1]H'] =  colIdArray[1].style.height;
    localStorage['colIdArray[2]H'] =  colIdArray[2].style.height;
    localStorage['colIdArray[3]H'] =  colIdArray[3].style.height;
    localStorage['colIdArray[4]H'] =  colIdArray[4].style.height;
    localStorage['colIdArray[5]H'] =  colIdArray[5].style.height;
    localStorage['colIdArray[0]W'] =  colIdArray[0].style.width;
    localStorage['colIdArray[1]W'] =  colIdArray[1].style.width;
    localStorage['colIdArray[2]W'] =  colIdArray[2].style.width;
    localStorage['colIdArray[3]W'] =  colIdArray[3].style.width;
    localStorage['colIdArray[4]W'] =  colIdArray[4].style.width;
    localStorage['colIdArray[5]W'] =  colIdArray[5].style.width;
    getRecommendData(numColR*numRowsR);
    getSimData(numColS*numRowsS);
    RTable();
    STable();
    dImage();
    printPriorityBox();
    alert("Timer1 = " + priorityBox[0] + "\n" +"Timer2 = " + priorityBox[1] + "\n" + "Timer3 = " + priorityBox[2] + "\n" + "Timer4 = " + priorityBox[3] + "\n");


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
    addPicsArray[0] = localStorage['ID_pic'];
    addPicsIndexArray = [0,1,2,3,4,5,6,7];

    for(var i = 0; i < x; ++i) {
            document.getElementById("mainImg" + i.toString()).src = addPicsArray[i];
    }
}

function setProductInfo(){
    var space = "  ";
     var mainName = document.getElementById("mainName");
     var x = localStorage['ID_name'];
     var y = x.split(' ').slice(0,3).join(' ');
     y = space.concat(y);
     y= y.concat(space);
    mainName.innerHTML = y;
    var value = document.getElementById("p1");
    value.innerHTML =
        "<strong>Price:</strong>" + "<br>" + "$" + localStorage["ID_price"] + "<br>" +
        "<strong>Brand:</strong>" + "<br>" + localStorage["ID_brand"] + "<br>" +
        "<strong>Category:</strong>" + "<br>" + localStorage["ID_cat"] + "<br>" +
        "<strong>Information:</strong>" + "<br>" + localStorage['ID_name'];
}

function reply_ProPage(clicked_id)
{
    //alert(clicked_id);
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
            localStorage['ID_type'] = recArray[num].type;

        }
        else{
            localStorage['prevID'] =  localStorage['ID'];
            localStorage['ID'] = simArray[num].id;
            localStorage['ID_pic'] = simArray[num].img_src;
            localStorage['ID_name'] = simArray[num].name;
            localStorage['ID_cat'] = simArray[num].category;
            localStorage['ID_price'] = simArray[num].price;
            localStorage['ID_brand'] = simArray[num].brand;
            localStorage['ID_type'] = simArray[num].type;


        }

        if(localStorage['numClicked'] === undefined || localStorage['numClicked'] === 0){
            numClicked = 0;
            ++numClicked;
            localStorage['numClicked'] = numClicked;
        }
        else{
            numClicked = parseInt(localStorage['numClicked']);
            ++numClicked;
            localStorage['numClicked'] = numClicked;
        }

       // alert(localStorage['numClicked']);

        if(numClicked === 5){
            localStorage['numClicked'] = 0;


            colChange();
            localStorage['c1'] = '0';
            localStorage['c2'] = '0';
            localStorage['c3'] = '0';
            localStorage['c4'] = '0';
            priorityBox[0];
            priorityBox[1];
            priorityBox[2];
            priorityBox[3];
            location.reload();
        }
        else{
              location.reload();
        }

        $.post("http://techsailsrestful.us-east-2.elasticbeanstalk.com/update/"+  localStorage['prevID'] + "/" +localStorage['ID'] + "/oJ9Cl2ks7SWGOMmXSJ6bt3tIH4DsdLkt5LObtrPm");
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



