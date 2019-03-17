//Running Tests on the Average of the Array
emptyArray=[]
largeArray=[242312341234,12341346346436,12351345324626,1.234234]
zeroArray=[0,0,0]
negativeArray=[-123,12341234,-123412341234123,-1234123]
normalArray=[15.5,123.2,1231,12.3423]


function averageArrayTest()
{


     console.log("Expected Value: null")
     console.log("Actual Value: "+averageArray(emptyArray))
    if(averageArray(emptyArray)===null)
    {

        console.log("passed test 1")
    }
    else
    {

        console.log("failed test 1")
    }


    console.log("Expected Value: 6233751003074.3")
    console.log("Actual Value: "+averageArray(largeArray))
    if(averageArray(largeArray)===6233751003074.309)
    {
        console.log("passed test 2")
    }
    else
    {
        console.log("failed test 2")
    }


    console.log("Expected Value: 0")
    console.log("Actual Value: "+averageArray(zeroArray))
    if(averageArray(zeroArray)==0)
    {
        console.log("passed test 3")
    }
    else
    {
        console.log("failed test 3")
    }


    console.log("Expected Value: -30853082531784")
    console.log("Actual Value: "+averageArray(negativeArray))
    if(averageArray(negativeArray)==-30853082531783.75)
    {
        console.log("passed test 4")
    }
    else
    {
        console.log("failed test 4")
    }

    console.log("Expected Value: 345.510575")
    console.log("Actual Value: "+averageArray(normalArray))
    if(averageArray(normalArray).toFixed(2)==345.51)
    {
        console.log("passed test 5")
    }
    else
    {
        console.log("failed test 5")
    }
    stdDevTest()
}

function stdDevTest()
{
     console.log("Expected Value: null")
     console.log("Actual Value: "+stdDevArray(emptyArray))
    if(stdDevArray(emptyArray)===null)
    {

        console.log("passed test 6")
    }
    else
    {

        console.log("failed test 6")
    }

    console.log("Expected Value: 7058910916193")
    console.log("Actual Value: "+stdDevArray(largeArray))
    if(stdDevArray(largeArray)===7058910916193)
    {

        console.log("passed test 7")
    }
    else
    {

        console.log("failed test 7")
    }

    console.log("Expected Value: 0")
    console.log("Actual Value: "+stdDevArray(zeroArray))
    if(stdDevArray(zeroArray)===0)
    {

        console.log("passed test 8")
    }
    else
    {

        console.log("failed test 8")
    }

    console.log("Expected Value: 	61706172468226")
    console.log("Actual Value: "+stdDevArray(negativeArray))
    if(stdDevArray(negativeArray)===	61706172468226)
    {

        console.log("passed test 9")
    }
    else
    {

        console.log("failed test 9")
    }

    console.log("Expected Value: 592.57111883215")
    console.log("Actual Value: "+stdDevArray(normalArray))
    if(stdDevArray(normalArray).toFixed(2)===592.57)
    {

        console.log("passed test 10")
    }
    else
    {

        console.log("failed test 10")
    }
}

//Tests for filter of performance

