var express = require("express");
ejs = require("ejs");
path = require("path");
bodyParser = require("body-parser");
fileUpload = require("express-fileupload");
url = "mongodb://vishalcontruction:error100contruction@13.235.4.207:53584/contruction";
dbName = "contruction";
MongoClient = require("mongodb").MongoClient;
objectId = require("mongodb").ObjectID;
session = require("express-session");
assets = require("assert");
http = require("http");
app = express();
helmet = require("helmet");
port = "3030";
fs = require("fs");
route = require("./src/route/routes");
dotenv = require("dotenv").config()

var uniqid = require("randomatic");

//  var BaseUrl = "https://mantradiamond.com";
BaseUrl = "http://13.235.4.207:" + port;

app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "views")));

app.use(helmet());
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var server = app.listen(port, () => {
  console.log("We Are Live On " + port);
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  session({
    secret: "fsd84h507JKNJ9hg8&jndas*(jnjzcz",
    resave: true,
    saveUninitialized: true,
  })
);

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    assets.equal(null, err);
    if (err) throw err;
    // console.log(err)
    db = client.db(dbName);
    console.log("mongodb is connected with database =", dbName);
    route.myapi();
  }
)
