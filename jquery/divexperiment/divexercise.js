/**
 * Created by ithir on 02-01-2018.
 */

$(document).ready(function() {

    //select all give them a purple background
   $("div").css("background","purple");
// select the divs with class highlight and make them 200px wide
  $("div.highlight").css("width","200px");
// select the div with id third and give it orange border
    $("#third").css("border","2px solid orange");
//Bonus: select the  first div only  and change its fontc color to pink
    $("div:first-of-type").css("color","pink")

});