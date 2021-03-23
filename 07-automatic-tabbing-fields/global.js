// Your JavaScript goes here.
window.addEventListener("load", function(){
    var firstBox = document.getElementById('first');
    var secondBox = document.getElementById('second');
    var thirdBox = document.getElementById('third');
  
    firstBox.addEventListener("keyup", function() {
      typedValue = firstBox.value.length;
      maximum = parseInt(firstBox.getAttribute("maxlength"));
  
      if (typedValue === maximum) {
        secondBox.focus();
      }
    });
  
    secondBox.addEventListener("keyup", function() {
      typedValue = secondBox.value.length;
      maximum = parseInt(secondBox.getAttribute("maxlength"));
  
      if (typedValue === maximum) {
        thirdBox.focus();
      }
    });
  
  });