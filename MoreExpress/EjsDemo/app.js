var express =require ("express");
var path = require('path');
var app=express();
process.env.PORT = 3000;

app.use(express.static(path.resolve("public")))
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname)))
app.set('view engine', 'ejs');
app.get("/",function(req,res){
    res.render("home")
});

app.get("/fallinlovewith/:thing",function(req,res){
    var thing =req.params.thing;
    res.render("love",{thingVar:thing});
});

app.get("/posts",function (req,res) {
var posts=[
    {title:"post 1",author:"Susy"},
    {title:"My adorable pet bunny",author:"Charle"},
    {title:"can you belive this pomsky?",author:"Colt"}
];
    res.render("posts",{posts:posts})
});

app.listen(process.env.PORT,process.env.IP,function () {
    console.log("Server is listening!!!");
});