//DEFINING VARIABLES

var URL = "http://api.icndb.com/jokes/random";

function setJokeInParagraph() {
  document.getElementById('joke').innerHTML;
}

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', URL);
  xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.response);
      document.getElementById('joke').innerHTML = response.value.joke;
      setJokeInParagraph(response.value.joke);
  });
  xhr.send();
}

function init() {
  var button = document.getElementById('get-joke');
  button.addEventListener('click', getJoke);

  // initialJoke
  getJoke();
}

window.onload = init;
