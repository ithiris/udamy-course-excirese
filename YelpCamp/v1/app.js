var express =require ("express");
var app =express();
var  bodyParser =require("body-parser");
process.env.PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgrounds =[
    {name:"Salman",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name:"Granite",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name:"Mountain",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name:"Salman",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name:"Granite",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name:"Mountain",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name:"Salman",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name:"Granite",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name:"Mountain",image:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"}
]
app.get("/",function (req,res) {
    res.render("landing");
    
});

app.get("/campgrounds",function (req,res) {

    res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds",function (req,res) {
    // get data  from form and add to campground array
    var name =req.body.name;
    var image =req.body.image;
    var newCampground ={name:name,image:image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds")
});
app.get("/campgrounds/new",function (req,res) {
    res.render("new.ejs")
    
})

app.listen(process.env.PORT,process.env.IP,function () {
    console.log("The YelpCamp Server Has Started")
});