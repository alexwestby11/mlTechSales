var dataArray = [];

function getData1() {
    console.log("here");
    $.ajax({
        type:'GET',
        url: 'data/package.json',
        dataType: 'json',
        success: function(data){
            $.each(data,function(index,item){
                  const newProduct = new Product;
                $.each(item, function(key,value){
                    if(key == "imgSrc"){
                        newProduct.img_src = value;
                    }
                    else if(key == "price"){
                        newProduct.price = value;
                    }
                    else if(key == "name"){
                        newProduct.name = value;
                    }
                    else if(key == "id"){
                        newProduct.id = value;
                    }
                     else if(key == "type"){
                        newProduct.type = value;
                    }
                    else if(key == "manfacturer"){
                        newProduct.brand = value;
                    }

                });
                dataArray.push(newProduct);
                console.log(dataArray.length);
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

