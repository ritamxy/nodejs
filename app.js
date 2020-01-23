var express = require("express");
var app = express();

function requestComming(req, res, next) {
  console.log("master");
  next();
}
function authCheck(req, res, next) {
  if (req.params.user.include("Alex")) {
    res.send("out");
  }
  next();
}

app.get("/:user", requestComming, authCheck, function(req, res) {
  res.send("Hello JR");
});

app.get("/", function(req, res) {
  res.send("Hello JR");
});

app.listen(8888, () => {
  console.log("server is run on 8888");
});
