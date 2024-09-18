//your JS code here. If required.
const inputField = document.getELmentById("fname");
inputField.addEventListener('blur',() => {
	inputField.value= inputField.value.toUpperCase();
	
});