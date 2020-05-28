/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
 displayMessage(greet(timeString))
 console.log(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let e
function greet(timearg){
   e=timearg.split(':');
   console.log(e)
  timearg= parseInt(e)
  console.log(timearg)
  if(timearg<12){
    return "Good Morning";
  }
  else if(timearg>=12 & timearg<=5){
    return  "Good Afternoon";
    
  }
  else{
    return "Good Evening";
  }

}

/* Write your implementation of displayMessage() */

function displayMessage(time2){
 document. getElementById('greeting').innerHTML=`${time2}`;
}





