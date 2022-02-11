const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    onSale: {
        type: Boolean,
        default: false,
        required: true,
    },
    ageRestricted: {
        type: Boolean,
        required: false,
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        }
    }

})

// productSchema.methods.greet = function() {
//     console.log("hello");
//     console.log(`- from ${this.name}`);
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();  // returns a thenable
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale: true, price: 0});
}

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 599, ageRestricted: false});
bike.save()
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

const beer = new Product({ name: 'Bad Light', price: 2, onsale: false, ageRestricted: true});
beer.save()
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })


const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bad Light'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

console.log(1);
Product.fireSale()
console.log(3)