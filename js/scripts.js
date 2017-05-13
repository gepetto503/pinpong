//back end
var newArray = []

function isItNumber(input){
  if (isNaN(input)) {
    alert("please enter a number")
  } else {
    return input;
  };
};

function count(input){
  for (var i = 0; i <= input; i++) {
    if (i != 0) {

      if (i % 3 === 0 && i % 5 === 0) {
        newArray.push("pingpong");

      } else if (i % 3 === 0){
        newArray.push("ping");

      } else if (i % 5 === 0){
        newArray.push("pong");

      } else {
        newArray.push(i);
      };
    };
  };
  return newArray;
};

function toString(array){
  var x = array.toString();
  return x;
};

function splitString(string){
  var x = string.split(",");
  return x;
}

//front end

$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
debugger;
    var userInput = parseInt($("#user-input").val());

    var parsedInput = isItNumber(userInput);

    $("#result").text(count(parsedInput));

  });
});
