var typeFrontArray = [];
var flagFront = localStorage['flagFront'] || '0';

function setTypeFrontPage(){
    if(flagFront === '0'){
        var tempArray = [];
        for(var i = 0; i < typeArrayFixed.length;++i){
            tempArray.push(typeArrayFixed[i]);
            tempArray.push(0);
        }
        localStorage.typeFront = JSON.stringify(tempArray);

    }
    typeFrontArray = JSON.parse(localStorage.typeFront);
    flagFront = '1';
    localStorage['flagFront'] = flagFront;
    alert(typeFrontArray + " Flag = " + flagFront);
}

function updateType(type){

        for(var i = 0; i < typeFrontArray.length; i+=2) {
            if(type === typeArrayFixed[i]){
                typeFrontArray[i+1] = parseInt(typeFrontArray[i+1]) + 1;
                localStorage.typeFront = JSON.stringify(typeFrontArray);
                break;
            }
        }

        alert("Updated " + type);

}