/**
 * Created by ithir on 03-01-2018.
 */

$(document).ready(function(){

    $("h1").click(function () {

        alert("h1  clicked")
        
    });

    $("button").click(function () {
        alert("button clicked!");
        $(this).css("background","pink")

        
    });

    $("button").click(function () {
        var text=$(this).text();
        alert("you clicked" +text);
    });


})