function saveCategory(){
var jsonObj = {
"Category":{
    "Camera":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Camera Lens":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Charger/Adapter":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Controller":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Desktop PC":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Docking Station":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "DVD/BluRay Players":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "External Hard Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "External Solid State Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Game":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Gaming Console":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "HDMI Cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Headset":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Keyboard":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Laptop Charger":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Monitor":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Mouse":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Notebook":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Noteboook Case":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Printer":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "SD Card":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Smartphone":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Speaker":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "Tablet":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "TV":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "USB Cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]},
    "USB Flash Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"AvgPriceArray":[],"Box":[]}
    }

}

localStorage['prices']=JSON.stringify(jsonObj)

var priceStats= JSON.parse(localStorage.getItem("prices"));
var alex=1

}

function averageArray(arrayGiven)
{
    var sum=0;
    for(var i=0; i<=arrayGiven.length-1;i++)
    {
        sum+=arrayGiven[i];
    }
    return sum/arrayGiven.length
}

function stdDevArray(arrayGiven)
{
    avg=averageArray(arrayGiven)
    squares=0;
    for(var i=0; i<=arrayGiven.length-1;i++)
    {
        squares+=Math.pow((arrayGiven[i]-avg),2)
    }
    return Math.pow((squares/(arrayGiven.length-1)),0.5);
}

function oneSigmaPlus(arrayGiven)
{
    return averageArray(arrayGiven)+stdDevArray(arrayGiven)
}

function oneSigmaMinus(arrayGiven)
{
    return averageArray(arrayGiven)-stdDevArray(arrayGiven)
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
