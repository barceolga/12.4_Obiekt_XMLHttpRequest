//DEFINING VARIABLES

var url = "http://api.icndb.com/jokes/random";
var button = document.getElementById('get-joke');
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}
button.addEventListener('click', function() {
  getJoke();
});

var paragraph  = document.getElementById('joke');
window.onload = getJoke();
