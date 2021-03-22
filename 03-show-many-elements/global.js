window.addEventListener('load', function(){
    var buttonClick = document.getElementById('button');
    buttonClick.addEventListener('click', function(){
        var showMe = document.getElementsByClassName('show_me');
        for(var i = 0; i < showMe.length; i++) {
            showMe[i].style.display = 'block';
        }
    }) 
 })