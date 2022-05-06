const bookController = require("../controllers/bookController");

const router = require("express").Router();

//add a book
router.post("/", bookController.addABook);

//get all books
router.get("/", bookController.getAllBooks);

//get a book
router.get("/:id", bookController.getABook);

//update a book
router.put("/:id", bookController.updateBook);

//delete book
router.delete("/:id", bookController.deleteBook);

module.exports = router;
