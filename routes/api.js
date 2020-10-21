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

async function getSurveys(req, res) {
  try {
    const results = await db("SELECT * FROM surveys;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getAnswers(req, res) {
  try {
    const results = await db("SELECT * FROM answers;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
}

function queryMaker(query, req, res) {
  return async function (req, res) {
    try {
      await db(query);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}
router.get("/", (req, res) => {
  res.send("Welcome to the API");
});
router.get("/questions/", getQuestions);
router.get("/surveys/", getSurveys);
router.get("/answers/", getAnswers);

router.post("/surveys/", (req, res) =>
  queryMaker(
    `INSERT INTO surveys (FirstName, LastName) VALUES ("${req.body.firstname}","${req.body.lastname}", );`
  )(req, res)
);
/*router.put("/options/:id", (req, res) =>
  queryMaker(`UPDATE options SET id = "1" WHERE id = ${req.params.id};`)(
    req,
    res
  )
);*/
router.delete("/options/:id", (req, res) =>
  queryMaker(`DELETE FROM items WHERE id = ${req.params.id};`)(req, res)
);
router.delete("/surveys/:id", (req, res) =>
  queryMaker(`DELETE FROM items WHERE id = ${req.params.id};`)(req, res)
);
router.delete("/answers/:id", (req, res) =>
  queryMaker(`DELETE FROM items WHERE id = ${req.params.id};`)(req, res)
);
router.delete("/questions/:id", (req, res) =>
  queryMaker(`DELETE FROM items WHERE id = ${req.params.id};`)(req, res)
);

module.exports = router;
