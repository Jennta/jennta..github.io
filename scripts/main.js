

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/домашний-торт.jpg') {
      myImage.setAttribute ('src','images/домашний-торт-2.jpg');
    } else {
      myImage.setAttribute ('src','images/домашний-торт.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Ваше имя');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Рецепты домашних тортов для Вас, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
