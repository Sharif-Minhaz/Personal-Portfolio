// ---------page loader--------------//
$(document).ready(function () {
	$(window).on("load", function () {
		document.querySelector("html").style.overflowY = "auto";
		$("body").addClass("loaded");
	});
});
// ------------To top---------------//
window.onscroll = function () {
	backTotop();
	secondNav();
};
let toTopbtn = document.getElementsByClassName("d-none")[0];
let pin = document.getElementById("pin");
let starting_point = pin.offsetTop;
function backTotop() {
	if (window.pageYOffset <= starting_point) {
		toTopbtn.classList.add("d-none");
	} else {
		toTopbtn.classList.remove("d-none");
	}
}
//--------second nav scroll-spy---------//
let navLinks = document.getElementsByClassName("nav-link");
let points = document.getElementsByClassName("section-part");
function secondNav() {
	if (window.pageYOffset <= points[1].offsetTop) {
		navLinks[0].classList.add("newColor");
		navLinks[8].classList.add("newColor");
	} else {
		navLinks[0].classList.remove("newColor");
		navLinks[8].classList.remove("newColor");
	}
	if (window.pageYOffset >= points[1].offsetTop && window.pageYOffset < points[2].offsetTop) {
		navLinks[1].classList.add("newColor");
		navLinks[9].classList.add("newColor");
	} else {
		navLinks[1].classList.remove("newColor");
		navLinks[9].classList.remove("newColor");
	}
	if (window.pageYOffset >= points[2].offsetTop && window.pageYOffset < points[3].offsetTop) {
		navLinks[2].classList.add("newColor");
		navLinks[10].classList.add("newColor");
	} else {
		navLinks[2].classList.remove("newColor");
		navLinks[10].classList.remove("newColor");
	}
	if (window.pageYOffset >= points[3].offsetTop && window.pageYOffset < points[4].offsetTop) {
		navLinks[3].classList.add("newColor");
		navLinks[11].classList.add("newColor");
	} else {
		navLinks[3].classList.remove("newColor");
		navLinks[11].classList.remove("newColor");
	}
	if (window.pageYOffset >= points[4].offsetTop && window.pageYOffset < points[5].offsetTop) {
		navLinks[4].classList.add("newColor");
		navLinks[12].classList.add("newColor");
	} else {
		navLinks[4].classList.remove("newColor");
		navLinks[12].classList.remove("newColor");
	}
	if (window.pageYOffset >= points[5].offsetTop && window.pageYOffset < points[6].offsetTop) {
		navLinks[5].classList.add("newColor");
		navLinks[13].classList.add("newColor");
	} else {
		navLinks[5].classList.remove("newColor");
		navLinks[13].classList.remove("newColor");
	}
	if (window.pageYOffset >= points[6].offsetTop && window.pageYOffset < points[7].offsetTop) {
		navLinks[6].classList.add("newColor");
		navLinks[14].classList.add("newColor");
	} else {
		navLinks[6].classList.remove("newColor");
		navLinks[14].classList.remove("newColor");
	}
	if (window.pageYOffset >= points[7].offsetTop) {
		navLinks[7].classList.add("newColor");
		navLinks[15].classList.add("newColor");
	} else {
		navLinks[7].classList.remove("newColor");
		navLinks[15].classList.remove("newColor");
	}
}
//--------------tooltip-------------//
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});
//-------------Typed js-------------//
let typed = new Typed(".typed_js", {
	strings: ["I'm Sharif Md. Minhaz.", "I'm a Freelancer.", "I'm a Web Developer."],
	typeSpeed: 80,
	backDelay: 1200,
	backSpeed: 50,
	cursorChar: "|",
	loop: true,
});
//------------ mix it up--------------//
let containerEl = document.querySelector(".mixitup-container");
let mixer = mixitup(containerEl);
// -----------nav button--------------//
let nav = document.getElementById("select-nav");
function clickF() {
	if (nav.className === "links nav-pills links-secondary") {
		nav.className += " links nav-pills links-secondary links-secondary-res";
	} else {
		nav.className = "links nav-pills links-secondary";
	}
}
function crossing(x) {
	x.classList.toggle("change");
}
// -------------readmore-------------//
let blogTxt = document.getElementsByClassName("extend-txt");
let extraDots = document.getElementsByClassName("dots");
let readMoreText = document.getElementsByClassName("txt-btn");
let icon = document.getElementsByClassName("show-text-icon");
let countToggler = 0;
function readMore(n) {
	countToggler++;
	if (countToggler % 2 === 1) {
		blogTxt[n].style.display = "inline";
		extraDots[n].style.display = "none";
		readMoreText[n].innerHTML = "Read Less";
		icon[n].classList.remove("fa-chevron-down");
		icon[n].classList.add("fa-chevron-up");
	} else {
		blogTxt[n].style.display = "none";
		extraDots[n].style.display = "inline";
		readMoreText[n].innerHTML = "Read More";
		icon[n].classList.remove("fa-chevron-up");
		icon[n].classList.add("fa-chevron-down");
	}
}
// reset form after submission
window.onbeforeunload = () => {
	for (const form of document.getElementsByTagName("form")) {
		form.reset();
	}
};