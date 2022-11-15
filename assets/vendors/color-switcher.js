const root = document.querySelector(":root");
const switches = document.getElementById("colors");

const currentMode = localStorage.getItem("mode") || "dark";
let theme = localStorage.getItem("theme") || "default";

const colorButtons = document.querySelectorAll(".four-color span");
const defaultButton = document.querySelector(".default");

// reset function for resetting the rest of the buttons style
function resetButtons(id) {
	colorButtons.forEach((button) => {
		if (id !== button.id) {
			button.classList.remove("clicked-button");
		}
	});
}

// adding event lister for click event for the button
colorButtons.forEach((button) => {
	button.addEventListener("click", function () {
		button.classList.add("clicked-button");
		resetButtons(button.id);
		changeTheme(button.dataset.color);
		localStorage.setItem("theme", button.dataset.color); // setting theme to local storage
	});
});

// reset and back to the default-color
defaultButton.addEventListener("click", function () {
	resetButtons("default");
	changeTheme();
	localStorage.setItem("theme", "default"); // setting theme to local storage
});

// change :root's variables
function changeTheme(color = "default") {
	allVariables.forEach((colorVar, i) => {
		root.style.setProperty(`${colorVar}`, `${palette[color][colorsVariable[i]]}`); // palette received from palette.js
	});
}

// change to light or dark mode
function changeMode(modeIndex) {
	elementsColorVariable.forEach((colorVar, i) => {
		root.style.setProperty(`${colorVar}`, `${elementsColor[i][modeIndex]}`); // mode received from mode.js
	});
}

const toggler = document.getElementById("toggle");
const nameHr = document.querySelector(".profile");
const spy = document.getElementById("spy");
const lightBoxShadowHolders = document.querySelectorAll("#textBox, #email, #msg");

function addBoxShadow() {
	spy.classList.add("box-shadows");
	nameHr.classList.add("light-theme");
	nameHr.classList.remove("dark-theme");

	lightBoxShadowHolders.forEach((elem) => {
		elem.classList.add("light-box-shadows");
	});
}

function removeBoxShadow() {
	spy.classList.remove("box-shadows");
	nameHr.classList.add("dark-theme");
	nameHr.classList.remove("light-theme");

	lightBoxShadowHolders.forEach((elem) => {
		elem.classList.remove("light-box-shadows");
	});
}

function handleToggler() {
	if (toggler.checked) {
		localStorage.setItem("mode", "dark"); // setting mode to local storage
		changeMode(1);
		removeBoxShadow();
	} else if (!toggler.checked) {
		localStorage.setItem("mode", "light"); // setting mode to local storage
		changeMode(0);
		addBoxShadow();
	}
}

toggler.addEventListener("click", handleToggler);

// automatic fetch mode data and set the toggler based on it
if (currentMode) {
	if (currentMode === "light") {
		changeMode(0);
		addBoxShadow();
		toggler.removeAttribute("checked");
	} else {
		changeMode(1);
		removeBoxShadow();
		toggler.setAttribute("checked", true);
	}
}

// -----------colors switch--------------//
function colorSwitch() {
	switches.classList.toggle("go-in");
}

// automatic fetch theme data and set the theme based on it
if (theme) {
	changeTheme(theme);
	document.getElementById(theme).classList.add("clicked-button");
}
