/**
 * Created by ithir on 26-03-2018.
 */
//setup//

var express = require('express'),
    app = express(),
    mongoose = require("mongoose"),
    logger = require('morgan'),
    bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));

//database stuff//
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/dog_demo_app");
var dogSchema = new mongoose.Schema({
    name: String,
    bread: String
});
var Dog = mongoose.model("Dog", dogSchema);

// Routes//
app.get("/", function (req, res) {
    res.render("home")
});
app.get("/dogs", function (req, res) {
    Dog.find({}, function (err, Dog) {
        res.render("dogs");
    });
});
app.post("/createDog", function (req, res) {
    Dog.create({
        name: req.body.name,
        bread: req.body.bread
    }, function (err, dog) {
        res.redirect("/dogs");
    });
});

app.listen(3000,function () {
    console.log("Serving dog demo on port 3000")
});
