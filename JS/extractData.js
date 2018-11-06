var dataArray = [];


function getData() {
    $.ajax({
        type:'GET',
        url: 'data/package.json',
        dataType: 'json',
        success: function(data){
            $.each(data,function(index,item){
                    var myObj = JSON.parse(item);
                    console.log(myObj.imgSrc);
            });
        }
    });

}



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
  // Getter
  get getImg() {
    return this.img_src;
  }
  get getName() {
    return this.name;
  }
  get getBrand() {
    return this.brand;
  }
  get getPrice() {
    return this.price;
  }
  get getCategory() {
    return this.category;
  }



}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();