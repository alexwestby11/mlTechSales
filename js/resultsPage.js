     function dtable() {
             $("#dynamic_table").ready(function () {
                    console.log(3);
                 localStorage['myKey'] = 0; // only strings
                 //creates x images on same row
                 function numCol(x, y) {
                     var stringValue = '';
                     for (var j = 0; j < y; ++j) {//rows
                         stringValue += "<tr>";
                         for (var k = 0; k < x; ++k) {//col
                             stringValue += "<td>" +
                                 "<div class=\" row-fluid roundedT roundedB creamColor margin1 btn-primary shadow  blackText\">Text" +
                                 "<input  id ='name"+j+k+"' onclick=\"productPage()\"type=\"image\" src=\"images/Apple1.jpg\" class = \"img-fluid rounded imgW\">" +
                                 "<div class=\"col-fluid text-center\">Info<br> Stuff <br> stuff</div>" +
                                 "</div>" +
                                 "</td>";
                             //stringValue += "<button type=\"image\" src=\"images/Apple1.jpg\" name=\"saveForm\" class=\"btn\" id=\"saveForm\" />";
                         }
                         stringValue += "</tr> ";
                     }
                     return stringValue
                 }

                 // console.log(i);

                 $('#d_table').html(numCol(4, 2));

                 $('#tab_logic').append('<tr id="d_table' + (1) + '"></tr>');

             });
     }
function setImage() {
    $(document).ready(function () {
        changeImage();
        console.log("setImage");
    });
}
function google()
{
     location.href = "http://google.com";
}

function changeImage(){
    var image = document.getElementById('name01');
    image.src = "images/Apple2.jpg";
}

function productPage(){
     window.location.href = 'productPage.html';
}