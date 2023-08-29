const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingSchema = new Schema({
    "item_name" : {"type" : "String"},
    "item_img" : {"type" : "String"},
    "item_qty" : {"type" : "Number"},
    "item_price" : {"type" : "Number"},

});

module.exports = mongoose.model("Item", shoppingSchema);