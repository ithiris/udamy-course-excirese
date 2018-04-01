/**
 * Created by ithir on 02-01-2018.
 */


//$("selector goes here")
///we select and manipulate//


// to select all img tags.

$("img")

// to select all elements with class "sale"

$(".sale")

// to select element with id "bonus"
$("#bonous")

//to select all a tags inside of li's

$("li a")


//manipulate style.

.css(property,value)
//we select and then manipulate

// select elem with id "special' and give it

$("#special").css ("border","2px solid red");


// we can also pass  in an object with  styles


var styles= {
    backgroundcolor: "pink",
    fontweight: "bold"
};
$("special").css(styles);

//jquery methods

val ()
text()
attr()
html()
addClass()
removeClass()
toggleClass()