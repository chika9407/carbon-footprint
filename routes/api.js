var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

async function getQuestions(req, res) {
  try {
    const results = await db("SELECT * FROM questions;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
}

function queryMaker(query, req, res) {
  return async function (req, res) {
    try {
      await db(query);
      getQuestions(req, res);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}
router.get("/", (req, res) => {
  res.send("Welcome to the API");
});
router.get("/todos/", getItems);

router.post("/todos/", (req, res) =>
  queryMaker(
    `INSERT INTO items(text, complete) VALUES ("${req.body.text}", 0);`
  )(req, res)
);
router.put("/todos/:todo_id", (req, res) =>
  queryMaker(
    `UPDATE items SET complete = "1" WHERE id = ${req.params.todo_id};`
  )(req, res)
);
router.delete("/todos/:todo_id", (req, res) =>
  queryMaker(`DELETE FROM items WHERE id = ${req.params.todo_id};`)(req, res)
);

module.exports = router;
