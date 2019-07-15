var path = require("path");
var express = require("express");
var friends = require("../friendfinder2/app/data/friends");

var app = express();

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/friends", function(req, res) {
  res.json(friends.matchedFriends);
});

app.post("/friends", function(req, res) {
  var newFriend = friends.addFriend(req, res);
  res.json(newFriend);
});

// res.json({ ok: true });

app.get("/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "../friendfinder2/app/public/survey.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../friendfinder2/app/public/home.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
