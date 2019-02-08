var isFirst=true
var jsonObj = {
"Type":{
    "Camera":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Camera Lens":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Charger/Adapter":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Controller":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Desktop PC":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Docking Station":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "DVD/BluRay Players":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "External Hard Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "External Solid State Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Game":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Gaming Console":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "HDMI Cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Headset":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Keyboard":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Laptop Charger":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Monitor":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Mouse":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Notebook":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Noteboook Case":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Printer":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "SD Card":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Smartphone":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Speaker":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "Tablet":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "TV":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "USB Cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]},
    "USB Flash Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[]}
    }
}

function averageArray(arrayGiven)
{
    if(arrayGiven.length==0)
    {
        return null
    }
    var sum=0;
    for(var i=0; i<=arrayGiven.length-1;i++)
    {
        sum+=arrayGiven[i];
    }
    return sum/arrayGiven.length
}

function stdDevArray(arrayGiven)
{
    if(arrayGiven.length===0)
    {
        return null
    }
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

        if(localStorage['prices']==null)
        {
            localStorage.setItem('prices',JSON.stringify(jsonObj))
            isFirst=false
        }
        avgPriceArray
        var typeString = localStorage['ID_type']
        var typeJSON = (JSON.parse(localStorage['prices']));
        typeJSON['Type'][typeString]['AvgPriceArray'].push(x);
        typeJSON['Type'][typeString]['Count']=typeJSON['Type'][typeString]['Count']+1;



        lowerBoundPrice=oneSigmaMinus(avgPriceArray)
        if(lowerBoundPrice<0)
        {
            lowerBoundPrice=0
        }
        upperBoundPrice=oneSigmaPlus(avgPriceArray)
        typeJSON['Type'][typeString]["UpperBound"]=upperBoundPrice
        typeJSON['Type'][typeString]["LowerBound"]=lowerBoundPrice
        localStorage.setItem('prices',JSON.stringify(typeJSON))
}// alert(localStorage['currentCollect']);

