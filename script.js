//your JS code here. If required.
let level = document.getElementById("level");

let count = 0;
let currentLevel = level;

while (currentLevel != null) {
	currentLevel = currentLevel.parentNode;
	count++
}

alert("The level of the element is: " + count);
