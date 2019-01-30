function saveCategory(){
var jsonObj = {
"Category":{
    "Camera":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Camera Lens":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Charger/Adapter":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Controller":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Desktop PC":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Docking Station":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "DVD/BluRay Players":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "External Hard Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "External Solid State Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Game":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Gaming Console":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "HDMI Cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Headset":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Keyboard":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Laptop Charger":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Monitor":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Mouse":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Notebook":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Noteboook Case":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Printer":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "SD Card":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Smartphone":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Speaker":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "Tablet":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "TV":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "USB Cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]},
    "USB Flash Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[]}
    }

}

localStorage['prices']=JSON.stringify(jsonObj)

var priceStats= JSON.parse(localStorage.getItem("prices"));
var alex=1

}





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
    }// alert(localStorage['currentCollect']);
}
