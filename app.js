const express = require("express");
const path = require("path");

const app = express();

var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

// create application/json parser
var jsonParser = bodyParser.json();

app.use(jsonParser);

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);

const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const eventRoutes = require("./routes/eventRoutes");

app.use(eventRoutes);

const connectDB = require("./utils/database");

try {
  connectDB().then((_) => {
    app.listen(process.env.PORT ||3000);
    console.log("Listening on port 3000");
  });
} catch (ex) {
  console.log(ex.message);
}
