const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: String,
    imageURL: String,
    SourceMain: String
});

module.exports = mongoose.model("Item", ItemSchema);