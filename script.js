//your JS code here. If required.
var element = document.getElementById("level");
var domLevel = 0;

while (element) {
  domLevel++;
  element = element.parentNode;
}

alert("The level of the element is: " + domLevel);
