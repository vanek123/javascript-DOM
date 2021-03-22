// Your JavaScript goes here.
window.addEventListener('load', function(){
    var buttonClick = document.getElementById('button');
    buttonClick.addEventListener('click', function(){
        var toggleMe = document.getElementsByClassName('toggle_me');
        for (var i = 0; i < toggleMe.length; i++) {
            if (toggleMe[i].style.display === "none") {
                toggleMe[i].style.display = "block";
            }
            else {
                toggleMe[i].style.display = "none"
            }
        }
    });
})