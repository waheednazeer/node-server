const Item = require("../models/shoppingModel");

const createItem = (req, res)=>{
    const item = new Item(req.body);
    item.save()
    .then((data) =>{
        res.send(data);

    });

};

const getAllItems = (req, res)=>{
    Item.find({})
    .then((data) =>{
        res.send(data);
    });
};

module.exports = { 
    createItem,
    getAllItems
};