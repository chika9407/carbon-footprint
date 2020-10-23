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
      var results = await db(query);
      res.send(results.data);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}

/*router.get("/questions/:id/", async (req, res) => {
  console.log(req.params.id);
  try {
    var results = await db(
      `SELECT * FROM questions WHERE id = ${req.params.id};`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});*/

/*router.get("/questions/:id/:category/", async (req, res) => {
  try {
    var results = await db(
      `SELECT * FROM questions WHERE Category = "${req.params.category}" ;`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});*/

//better way
/*router.get("/category/:category/questions/", async (req, res) => {
  try {
    var results = await db(
      `SELECT * FROM questions WHERE Category = "${req.params.category}" ;`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});*/

async function getOptions(req, res) {
  try {
    const results = await db("SELECT * FROM options;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
}
router.get("/", (req, res) => {
  res.send("Welcome to the API");
});
router.get("/questions/", getQuestions);
router.get("/questions/:id/", (req, res) =>
  queryMaker(`SELECT * FROM questions WHERE id = ${req.params.id};`)(req, res)
);
router.get("/category/:category/questions/", (req, res) =>
  queryMaker(
    `SELECT * FROM questions WHERE Category = "${req.params.category}" ;`
  )(req, res)
);
router.get("/options/", getOptions);
router.get("/options/:id", (req, res) =>
  queryMaker(`SELECT * FROM options WHERE id = ${req.params.id};`)(req, res)
);

//even if it requires an id (so long it exists even if not under this Question) it retrieves all the options for this QuestionID - so it works!
/*router.get("/options/:id/:QuestionId", (req, res) =>
  queryMaker(
    `SELECT * FROM options WHERE QuestionId = ${req.params.QuestionId};`
  )(req, res)
);*/

//better way
router.get("/questions/:QuestionId/options", (req, res) =>
  queryMaker(
    `SELECT * FROM options WHERE QuestionId = ${req.params.QuestionId};`
  )(req, res)
);

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

router.get("/surveys/", getSurveys);
router.get("/answers/", getAnswers);

router.post("/surveys/", (req, res) =>
  queryMaker(
    `INSERT INTO surveys (FirstName, LastName) VALUES ("${req.body.firstname}","${req.body.lastname}", );`
  )(req, res)
);

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
