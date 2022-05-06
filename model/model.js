const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  year: {
    type: Number,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
    required: true,
  },
  //the loai
  genres: {
    //nhieu the loai nen dung chuoi array
    type: [String],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});
let Book = mongoose.model("Book", bookSchema);

let Author = mongoose.model("Author", authorSchema);
module.exports = { Book, Author };
