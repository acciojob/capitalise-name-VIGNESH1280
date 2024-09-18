//your JS code here. If required.
const inputField = document.getElmentById("fname");
inputField.addEventListener('blur',() => {
	inputField.value= inputField.value.toUpperCase();
	
});