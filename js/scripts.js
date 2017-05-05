//back end
var nums = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var newArray = []

function isItNumber(input){
  if (isNaN(input)) {
    return ("please enter a number")
  } else {
    return input;
  };
};

function count(input){ // function that takes input, compares it to nums array, and pushes each index into a newArray for as long as the input is equal to or less than the current index.
  for (var i = 0; i <= nums.length; i++) { // run loop on nums, starting at index 0, as long as index is equal to or less than the length of nums, incrementing by 1
    if (input >= i) {//for each loop, ask if input is equal to or greater current index
      var x = nums[i];//if it is, return the current index of nums to variable
      newArray.push(x);//and push it to new array
      console.log(newArray);
    };
  };
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

    count(parsedInput);

    var stringifiedInput = toString(newArray);

    var subStringsArray = splitString(stringifiedInput);

    $("#result").empty().append("<li>" + subStringsArray + "</li>");

  });
});
