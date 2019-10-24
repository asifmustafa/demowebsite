// how to use jQuery 
$(function(){
$("h1").hide(500).show(400).slideUp(1000).slideDown(2000);
$('#main').slideUp(1000).slideDown(2000).css({
    color: 'red',
    fontSize: 25 
});


$("h1").click(function(){
    $('.content').slideUp(1000).slideDown(2000).css({
    color: 'blue',
    fontSize: 50 
});
})
    
})


$(window).on("load", function(){
    alert("windows fully loaded");
})