/**
 * Created by ithir on 03-01-2018.
 */

$(document).ready(function(){
    $("button").on("click",function () {
        $('div').fadeOut(1000,function () {
           // $(this).remove()
         $('div').slideToggle();
        });
    });





})