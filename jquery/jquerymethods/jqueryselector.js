/**
 * Created by ithir on 02-01-2018.
 */

$(document).ready(function() {

        $("h1").css("color", "yellow");

    $("a").css ("color", "green");


    var styles ={

        color:"red",
        background:"pink",
        border:"2px solid purple"
    }
    $("h1").css(styles)

    var lis=document.querySelectorAll("li")

    for(var i=0;i<lis.length; i++){
        lis[i].style.color="green";
    }

    $("a").css("font-size", "40px")

    $("li").css({"background-color": "rgba(89,45,20,0.5)", "font-size": "10px","border":"3px dashad purple"});

});


