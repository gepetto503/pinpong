//back end

//front end

$(document).ready(function(){

  $("#form-one").submit(function(event){
    event.preventDefault();

    var userInput = $("#user-input").val();

    $("#result").empty().append("<li>" + userInput + "</li>");


  })


})
