$(document).ready(function(){
  $(".js-toggle").on("click", function(){
    $(this).next().slideToggle("fast");
  });
});