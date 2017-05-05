# _Ping Pong_

#### _Interactive web page that counts up to a certain number, May 5th, 2017_

#### By _**Brendan Hanna**_

## Description

_This interactive web page allows users to input a value and then displays values that count up to that number in increments of one, except that in certain instances (detailed in specs), the value displayed is "ping," "pong" or "pingpong".  It's for people that have an inexplicable fascination with both counting and ping-pong.  ...the word ping-pong, not the game itself._

## Specs

* _1. Take user input and output it on the screen._
  * _example: input = "3"; output = "3"._
* _2. When user inputs another value without refreshing, the current result is replaced by the new one._
  * _example: input = "4", with "3" showing already; output = "4"._
* _3. if user inputs anything other than an integer, the output area says "please enter a number"_
  * _example: input = "a"; output = "please enter a number"._
* _4. for user input x, display the value of the xth index of an array of numbers from 0-16_
  * _example: input "7"; output = 7._
* _5. for user input x, push the value of the xth index of nums array into a new array._
  * _example: input = "9", console.log(newArray); console log: [9]_
* _6 push the value of each index of nums array into newArray as well as the value of the xth index._
  * _example: input = "4", console.log(newArray); console log: [0,1,2,3,4]_
* _7. turn the new array into a string._
  * _example: input = "9"; output = "1,2,3,4,5,6,7,8,9"._
* _8. split the string into sub strings._
  * _example: input = "9"; output = "1","2","3","4","5","6","7","8","9"_

* _9. display each sub string in a list item_
  * _example: input = "0"; output = <li>"1"</li><li>"2"</li>..._
* _10. exception 1: inputted numbers divisible by 3 are replaced with "ping"_
  * _example: input = "13"; output = "1,2,ping,4,5,ping,7,8,ping,10,11,ping,13"._
* _11. exception 2: inputted numbers divisible by 5 are replaced with "pong"_
  * _example: input = "15"; output = "1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pong"._
* _12. exception 3: inputted numbers divisible by both 5 and 3 are replaced with "pingpong""_
  * _example: input = "15"; output = "1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong"._


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_If you have any concerns or want to report a bug, contact Brendan Hanna at gepetto503@gmail.com_

## Technologies Used

_Javascript and Jquery_

### License

*This application can be used uner the GPL license.*

Copyright (c) 2017 **_Brendan Hanna_**
