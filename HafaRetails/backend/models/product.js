class Product {
    constructor(productID, name, category, price, location, imageURL) {
        this.productID = productID;
        this.name = name;
        this.category = category;
        this.price = price;
        this.location = location;
        this.imageURL = imageURL;
    }
}

module.exports = Product;
