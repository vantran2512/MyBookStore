const authorController = require("../controllers/authorController");

const router = require("express").Router();

//add author
router.post("/", authorController.addAuthor);

//get all author
router.get("/", authorController.getAllAuthor);

//GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);

//update an author
router.put("/:id", authorController.updateAuthor);

//delete author
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
