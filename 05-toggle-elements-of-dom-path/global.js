// Your JavaScript goes here.
window.addEventListener('load', function(){
    var buttonClick = document.getElementById('toggle_button');
    buttonClick.addEventListener('click', function(){
        var toggleMovies = document.querySelectorAll('ul.second_five li');
        for (var i = 0; i < toggleMovies.length; i++) {
            if (toggleMovies[i].style.display === "list-item") {
                toggleMovies[i].style.display = "none";
            }
            else {
                toggleMovies[i].style.display = "list-item"
            }
        }
    });
})