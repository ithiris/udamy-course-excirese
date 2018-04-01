var express =require ("express")
var app =express();
process.env.PORT = 3000

app.get("/",function (req,res) {
    res.send("Hi there,welcome to my assignment")
});


app.get("/speak/:animal",function (req,res) {
    var sounds ={
        pig:"Oink",
        cow:"Moo",
        dog:"Woof Woof!",
        cat:"I have you human",
        goldfish:"..."
    }
    var animal=req.params.animal;
    var sound =sounds[animal];
    res.send("the " + animal +" says '" +sound +"'");

});
app.get("/repeat/:message/:times",function (req,res) {
    var message =req.params.message;
    var times =Number(req.params.times);
    var result="";
    for(var i=0;i<times;i++){
        result +=message + " ";
    }
    res.send(result);
});
app.get("*",function(req,res){
    res.send("Sorry,page not found...what are you doing with life?")
});

app.listen(process.env.PORT,process.env.IP,function () {
    console.log("Now serving your app")
    
});