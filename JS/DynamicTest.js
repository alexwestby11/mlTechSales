
function testDynamic() {
    var tempStateArray = [];
    var typeTempArray = ["Camera", "Camera Lens", "Charger_Adapter", "Controller", "Desktop PC", "Docking Station", "DVD_BR Player", "External Hard Dr", "External Solid S", "Game", "Gaming Console", "HDMI Cable", "Headset", "Keyboard", "Laptop Charger", "Monitor", "Notebook", "Notebook Case", "Printer", "SD Card", "Smartphone", "Speaker", "Tablet", "TV", "USB Cable", "USB Flash Drive", "Mouse"];
    for (var i = 0; i < typeTempArray.length; ++i) {

           for (var j = 0; j < typeArray.length; j += 6) {
               if (typeArray[j] === typeTempArray[i]) {
                   typeArray[j + 1] = Math.floor(Math.random() * 100);
                   typeArray[j + 2] = Math.floor(Math.random() * 100);
                   typeArray[j + 3] = Math.floor(Math.random() * 100);
                   typeArray[j + 4] = Math.floor(Math.random() * 100);
                   tempStateArray.push(typeTempArray[i]);
                   console.log(typeArray[i * 6] + " = " + "Passed");
                   break;
               }
               else if (i + 1 === typeArray.length) {
                   console.log(typeArray[i * 6] + " = " + "Failed");
               }
           }

    }

}
