var express = require("express");
var router = express.Router();

//contains messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toDateString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toDateString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messages", messages });
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date().toDateString(),
  });
  res.redirect("/");
});

module.exports = router;
