/**
 * Created by ithir on 03-01-2018.
 */

$(document).ready(function(){

    $("h1").on("click",function () {
        $(this).css("color","purple")



    })
$("input").on("keypress",function () {

    console.log("keypressed");

})

    $("button").on("mouseenter",function () {
        $(this).css("font-weight","bold");
        
    });

    $("button").on("mouseleave",function () {
        $(this).css("font-weight","normal");

    });

})