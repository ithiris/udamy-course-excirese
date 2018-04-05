var mongoose =require ("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String
});

var Cat =mongoose.model("Cat",catSchema);


//adding a new cat to the DB

// var george =new Cat({
//     name:"George",
//     age:11,
//     temperament:"Grouchy"
// });
//
// george.save(function (err,cat) {
//     if(err){
//         console.log("SOMETHING WENT WRONG");
//     } else  {
//         console.log("WE JUST SAVED A CAT TO THE DB:")
//         console.log(cat)
//     }
//
// });

Cat.create({
    name: "show white",
    age: 15,
    temperament: "Bland"
},function (err,cat) {
    if(err) {
        console.log(err);
    }else {
        console.log(cat)
    }
})
Cat.find({},function (err,cats) {
    if (err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("All THE CATS");
        console.log(cats);

    }
    
});