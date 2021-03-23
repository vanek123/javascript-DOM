// Your JavaScript goes here.
window.addEventListener('load', function(){
    var fullName = document.getElementById('full_name');
    fullName.addEventListener("keyup", function(){
        var greeting = document.getElementById('greeting');
        greeting.innerHTML = ("Hello there, " + fullName.value + "!");
    });
});