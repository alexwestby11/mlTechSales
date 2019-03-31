function reply_mouseOver(clicked_id)
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
                 box1 =  priorityBox[0];
                 clearTimeout(Timer1);
            }
            else if(clicked_id === "box2"){
                priorityBox[1] += c2;
                box2 =  priorityBox[1];
                clearTimeout(Timer2);
            }
            else if(clicked_id === "box3"){
                 priorityBox[2] += c3;
                 box3 = priorityBox[2];
                 clearTimeout(Timer3);
            }
            else if(clicked_id === "box4"){
                 priorityBox[3] += c4;
                 box4 =  priorityBox[3];
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

    //+-alert(perCol[0] + "\n" + perCol[1]);
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
    //alert("Timer1 = " + priorityBox[0] + "\n" +"Timer2 = " + priorityBox[1] + "\n" + "Timer3 = " + priorityBox[2] + "\n" + "Timer4 = " + priorityBox[3] + "\n");


}

function setRecImages(x){


     for(var i = 0; i < x; ++i){
//console.log(document.getElementById("rec" + i.toString())) = recArray[i].img_src;
         document.getElementById("rec" + i.toString()).src = recArray[i].img_src;
            }
            localStorage['isLoaded']=(parseInt(localStorage['isLoaded'])+1).toString()

}

function setSimImages(x){


     for(var i = 0; i < x; ++i){
//console.log(document.getElementById("rec" + i.toString())) = recArray[i].img_src;
         document.getElementById("sim" + i.toString()).src = simArray[i].img_src;
            }
         localStorage['isLoaded']=(parseInt(localStorage['isLoaded'])+1).toString()
}

function setMainImage(x){
    addPicsArray[0] = localStorage['ID_pic'];
    addPicsIndexArray = [0,1,2,3,4,5,6,7];

    document.getElementById("mainImg0").src = addPicsArray[0];
    localStorage['isLoaded']=(parseInt(localStorage['isLoaded'])+1).toString()
}

function setProductInfo(){
     var space = "  ";
     var mainName = document.getElementById("mainName");
     var x = localStorage['ID_name'];
     console.log(x);
     var y = x.split(' ').slice(0,3).join(' ');
     y = space.concat(y);
     y = y.concat(space);
    mainName.innerHTML = y;
    var value = document.getElementById("p1");
    value.innerHTML =
        "<strong>Price:</strong>" + "<br>" + "$" + localStorage["ID_price"] + "<br>" +
        "<strong>Brand:</strong>" + "<br>" + localStorage["ID_brand"] + "<br>" +
        "<strong>Category:</strong>" + "<br>" + localStorage["ID_cat"] + "<br>" +
        "<strong>Information:</strong>" + "<br>" + localStorage['ID_name'];
}

//Used to click on products(similar/compatible items) in Product page
function reply_ProPage(clicked_id)
{

        var bool = 0;
        var value = clicked_id;
        localStorage['prev_cat'] = localStorage['ID_cat'];
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
            localStorage['prevType'] =  localStorage['ID_type'];
            localStorage['ID'] = recArray[num].id;
            localStorage['ID_pic'] = recArray[num].img_src;
            localStorage['ID_name'] = recArray[num].name;
            localStorage['ID_cat'] = recArray[num].category;
            localStorage['ID_price'] = recArray[num].price;
            localStorage['ID_brand'] = recArray[num].brand;
            localStorage['ID_type'] = recArray[num].type;
             updateBoxValue(localStorage['prevType']);

        }
        else{
            localStorage['prevID'] =  localStorage['ID'];
             localStorage['prevType'] =  localStorage['ID_type'];
            localStorage['ID'] = simArray[num].id;
            localStorage['ID_pic'] = simArray[num].img_src;
            localStorage['ID_name'] = simArray[num].name;
            localStorage['ID_cat'] = simArray[num].category;
            localStorage['ID_price'] = simArray[num].price;
            localStorage['ID_brand'] = simArray[num].brand;
            localStorage['ID_type'] = simArray[num].type;
              updateBoxValue(localStorage['prevType']);
        }

           updateAveragePrice(localStorage['ID_price'])

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
        updateType(localStorage['ID_type']);

        if(bool === 0){
             var priceDict= JSON.parse(localStorage['prices'])
             var lowerBound = priceDict[recArray[num].type]['LowerBound']
             var upperBound = priceDict[recArray[num].type]['UpperBound']
             if(upperBound>0 && lowerBound>0)
             {
                localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "Item_Type" + "/" + recArray[num].type
                 + "/"+ "getItemsBy/" + "price/" + lowerBound + "/" + upperBound;
             }
             else
             {
                localStorage['searchInput'] = "http://techsailsrestful.us-east-2.elasticbeanstalk.com/getItemsBy/" + "Item_Type" + "/" + recArray[num].type
             }

             localStorage['value'] = "Type: " + recArray[num].type;
             z_idx = 0;
             localStorage['results_index'] = z_idx;

             linkResultsPage();
        }else{

            location.reload();
        }

       $.post("http://techsailsrestful.us-east-2.elasticbeanstalk.com/update/"+  localStorage['prevID'] + "/" +localStorage['ID'] + "/oJ9Cl2ks7SWGOMmXSJ6bt3tIH4DsdLkt5LObtrPm");
}

