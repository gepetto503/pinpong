//back end

function isItNumber(param){
  if (isNaN(param)) {
    return "please enter a number"
  } else {
    return param;
  };
};

//front end

$(document).ready(function(){

  $("#form-one").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#user-input").val());

    var userInput = isItNumber(userInput);

    $("#result").empty().append("<li>" + userInput + "</li>");


  })


})
