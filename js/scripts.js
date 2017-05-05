//back end
var nums = ["0", "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]
var newArray = []

function isItNumber(param){
  if (isNaN(param)) {
    return "please enter a number"
  } else {
    return param;
  };
};

function count(param){ // function that takes param, compares it to nums array, and pushes each index into a newArray for as long as the param is equal to or less than the current index.
  // var newArray = [];

  debugger;
  for (var i = 0; i <= nums.length; i++) { // run loop on nums, starting at index 0, as long as index is equal to or less than the length of nums, incrementing by 1
    if (param >= i) {//for each loop, ask if param is equal to or greater current index
      var x = nums[i];//if it is, return the current index of nums to variable
      newArray.push(x);//and push it to new array
    };
  };
};

//front end

$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#user-input").val());

    var userInput = isItNumber(userInput);

    var userInput = count(userInput);

    

    console.log(newArray);

    // $("#result").empty().append("<li>" + userInput + "</li>");

  });
});
