const mongoose = require("mongoose");

const bookSche = mongoose.Schema({
    bookId: {
        type: Number,
        require: true
    },
    bookName: {
        type: String,
        require: true
    },
    bookDesc: {
        type: String,
        require: true
    }
})

const bookModel = mongoose.model("books",bookSche);
module.exports = bookModel;