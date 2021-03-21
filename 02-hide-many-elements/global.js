window.addEventListener('load', function(){
   var buttonClick = document.getElementById('button');
   buttonClick.addEventListener('click', function(){
       var hideMe = document.getElementsByClassName('hide_me');
       for(var i = 0; i < hideMe.length; i++) {
           hideMe[i].style.display = 'none';
       }
   }) 
})