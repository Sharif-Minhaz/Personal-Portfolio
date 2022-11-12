// -----------colors switch--------------//
let switches = document.getElementsByClassName("colors")[0];
function colorSwitch() {
	switches.classList.toggle("go-in");
}
let root = document.querySelector(":root");

let changeColor = [
		"#33DDFF", // default color
		"#DC3545",
		"#E83E8C",
		"#007BFF",
		"#00FFFF",
		"#6610F2",
		"#FD7E14",
		"#42EBA4",
		"#71FD14",
	],
	focusColor = [
		"rgb(0, 172, 238)", // default color
		"rgba(220, 53, 69, 0.8)",
		"rgba(232, 61, 140, 0.7)",
		"rgba(0, 123, 255, 0.8)",
		"rgba(0, 255, 255, 0.8)",
		"rgba(102, 16, 242, 0.8)",
		"rgba(253, 126, 20, 0.8)",
		"rgba(66, 235, 164, 0.8)",
		"rgba(113, 253, 20, 0.8)",
	],
	indicators = [
		"#00ffff2d", // default color
		"#6e2a31",
		"#6e2a21",
		"#5e9bdc",
		"#2dffff",
		"#a181d6",
		"#885429",
		"#79f5c1cc",
		"#687f58",
	],
	hoverIndicators = [
		"#1A4B59", // default color
		"#c93c4b",
		"#c93c3b",
		"#69aef7",
		"#52c5c5",
		"#6331b5",
		"#ff7300",
		"#4bf7afcc",
		"#9bd870",
	],
	lowColor = [
		"rgba(51,221,255,0.1)", // default color
		"rgba(220, 53, 69, 0.1)",
		"rgba(232, 62, 140, 0.1)",
		"rgba(0, 123, 255, 0.1)",
		"rgba(0, 255, 255, 0.1)",
		"rgba(102, 16, 242, 0.1)",
		"rgba(253, 126, 20, 0.1)",
		"rgba(66, 235, 164, 0.1)",
		"rgba(113, 253, 20, 0.1)",
	];

const colorButtons = document.querySelectorAll(".four-color span");
const defaultButton = document.querySelector(".default");
const sheet = document.styleSheets[3];

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
		changeTheme(button.dataset.index);
	});
});

// reset and back to the default-color
defaultButton.addEventListener("click", function () {
	resetButtons("default");
	changeTheme(0);
});

// change :root's variables
function changeTheme(colorIndex = 0) {
	const allVariables = [
		"--change-color",
		"--focus-color",
		"--indicators",
		"--hover-indicators",
		"--low-color",
	];
	const colorsVariable = [changeColor, focusColor, indicators, hoverIndicators, lowColor];
	allVariables.forEach((colorVar, i) => {
		root.style.setProperty(`${colorVar}`, `${colorsVariable[i][colorIndex]}`);
	});
}

// mode changer color codes --> ["dark color", "light color"]
let navLink = ["#292929e6", "#ffffffe6"],
	asideColor = ["#ffffff", "#111419"],
	sectionLBg = ["#f3f3f3", "#343A40"],
	sectionDBg = ["#eaeaea", "#212528"],
	sectionLHead = ["#e4e4e4", "#394045"],
	sectionDHead = ["#dcdcdc", "#282D30"],
	headingColor = ["#343a39", "#ffffff"],
	silverColor = ["#505050", "#9a9da0"],
	extraLight = ["rgb(19 19 19 / 70%)", "rgba(255,255,255,0.7)"],
	boxIcon = ["#ffffff", "#343A40"],
	normalColor = ["#4a4a4a", "#ffffff"],
	normalLColor = ["#3c3c3ccc", "rgba(255, 255, 255, 0.7)"],
	messageBox = ["#ffffff", "#212528"],
	footer = ["#ffffff", "#212528"];

function changeMode(modeIndex) {
	// root.css({
	// 	"--nav-link": navLink[modeIndex],
	// 	"--aside-color": asideColor[modeIndex],
	// 	"--sectionL-bg": sectionLBg[modeIndex],
	// 	"--sectionD-bg": sectionDBg[modeIndex],
	// 	"--sectionL-heading": sectionLHead[modeIndex],
	// 	"--sectionD-heading": sectionDHead[modeIndex],
	// 	"--heading-color": headingColor[modeIndex],
	// 	"--silver-color": silverColor[modeIndex],
	// 	"--extra-light": extraLight[modeIndex],
	// 	"--box-icon": boxIcon[modeIndex],
	// 	"--normal-color": normalColor[modeIndex],
	// 	"--normal-lColor": normalLColor[modeIndex],
	// 	"--messages-box-bg": messageBox[modeIndex],
	// 	"--footer-bg": footer[modeIndex],
	// });
}

let satedMode = localStorage.getItem("mode");

if (satedMode) {
	satedMode === "light"
		? $("#toggle").prop("checked", false)
		: $("#toggle").prop("checked", true);

	initToggler();
} else {
	localStorage.setItem("mode", "dark"); // dark theme (default)
}

$("#toggle").click(initToggler);

function initToggler() {
	let mode = localStorage.getItem("mode");
	if (mode === "dark") {
		changeMode(0);
		localStorage.setItem("mode", "light");
		$("#spy").removeClass("box-shadows");
		$("#textBox, #email, #msg").removeClass("light-box-shadows");
	} else {
		changeMode(1);
		localStorage.setItem("mode", "dark");
		$("#spy").addClass("box-shadows");
		$("#textBox, #email, #msg").addClass("light-box-shadows");
	}
}
