$(document).ready(function(){
  $(".js-toggle").on("click", function(){
    $(this).next().slideToggle("fast");
  });

  $(".js-toggle-fade").on("click", function(){
    $(this).next().addClass("b-fade-in");
  });

  $(".rbox-form-signup").rbox({
  	"type": "inline"
  });

});