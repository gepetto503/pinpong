//back end
// var nums = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var newArray = []

function isItNumber(input){
  if (isNaN(input)) {
    alert("please enter a number")
  } else {
    return input;
  };
};

function count(input){ // function that takes input, compares it to nums array, and pushes each index into a newArray for as long as the input is equal to or less than the current index.
  for (var i = 0; i <= input; i++) { // run loop on parsedInput, starting at index 0, as long as index is equal to or less than the length of nums, incrementing by 1
    if (i != 0) {//if parsedInput is not zero...

      if (i % 3 === 0 && i % 5 === 0) {//ask if the current index is cleanly divisble by 3
        newArray.push("pingpong");

      } else if (i % 3 === 0){
        newArray.push("ping");

      } else if (i % 5 === 0){
        newArray.push("pong");

      } else { //if current index doesn't go into 3 cleanly,
        newArray.push(i);//and push it to new array
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

    // count(parsedInput);
    //
    // var stringifiedInput = toString(newArray);
    //
    // var subStringsArray = splitString(stringifiedInput);

    $("#result").text(count(parsedInput));

  });
});
