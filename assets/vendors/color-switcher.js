const root = document.querySelector(":root");

// -----------colors switch--------------//
let switches = document.getElementsByClassName("colors")[0];
function colorSwitch() {
	switches.classList.toggle("go-in");
}

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
	});
});

// reset and back to the default-color
defaultButton.addEventListener("click", function () {
	resetButtons("default");
	changeTheme();
});

// change :root's variables
function changeTheme(color = "default") {
	allVariables.forEach((colorVar, i) => {
		root.style.setProperty(`${colorVar}`, `${palette[color][colorsVariable[i]]}`); // palette received from palette.js
	});
}

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

toggler.addEventListener("click", function () {
	if (toggler.checked) {
		changeMode(1);
		removeBoxShadow();
	} else if (!toggler.checked) {
		changeMode(0);
		addBoxShadow();
	}
});
