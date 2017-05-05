//back end

//front end

$(document).ready(function(){

  $("#form-one").submit(function(event){
    event.preventDefault();

    var userInput = $("#user-input").val();

    $("#result").append("<li>" + userInput + "</li>");


  })


})
