// ----- Page loader -----
window.onload = () => {
	document.querySelector("html").style.overflowY = "auto";
	document.body.classList.add("loaded");
};

// ------------ To top ---------------//
window.onscroll = () => {
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

function addNewColor(firstLinkIndex, lastLinkIndex) {
	navLinks[firstLinkIndex].classList.add("newColor");
	navLinks[lastLinkIndex].classList.add("newColor");
}

function removeNewColor(firstLinkIndex, lastLinkIndex) {
	navLinks[firstLinkIndex].classList.remove("newColor");
	navLinks[lastLinkIndex].classList.remove("newColor");
}

function secondNav() {
	if (window.pageYOffset <= points[1].offsetTop) {
		addNewColor(0, 8);
	} else {
		removeNewColor(0, 8);
	}
	if (window.pageYOffset >= points[1].offsetTop && window.pageYOffset < points[2].offsetTop) {
		addNewColor(1, 9);
	} else {
		removeNewColor(1, 9);
	}
	if (window.pageYOffset >= points[2].offsetTop && window.pageYOffset < points[3].offsetTop) {
		addNewColor(2, 10);
	} else {
		removeNewColor(2, 10);
	}
	if (window.pageYOffset >= points[3].offsetTop && window.pageYOffset < points[4].offsetTop) {
		addNewColor(3, 11);
	} else {
		removeNewColor(3, 11);
	}
	if (window.pageYOffset >= points[4].offsetTop && window.pageYOffset < points[5].offsetTop) {
		addNewColor(4, 12);
	} else {
		removeNewColor(4, 12);
	}
	if (window.pageYOffset >= points[5].offsetTop && window.pageYOffset < points[6].offsetTop) {
		addNewColor(5, 13);
	} else {
		removeNewColor(5, 13);
	}
	if (window.pageYOffset >= points[6].offsetTop && window.pageYOffset < points[7].offsetTop) {
		addNewColor(6, 14);
	} else {
		removeNewColor(6, 14);
	}
	if (window.pageYOffset >= points[7].offsetTop) {
		addNewColor(7, 15);
	} else {
		removeNewColor(7, 15);
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

function setBlogsParts(n, text, dots, spanText, iconDown, iconUp, state) {
	blogTxt[n].style.display = text;
	extraDots[n].style.display = dots;
	readMoreText[n].innerHTML = spanText;
	icon[n].classList.remove(iconDown);
	icon[n].classList.add(iconUp);
	readMoreText[n].dataset.state = state;
}

function readMore(n) {
	if (readMoreText[n].dataset.state === "close") {
		setBlogsParts(n, "inline", "none", "Read less", "fa-chevron-down", "fa-chevron-up", "open");
	} else {
		setBlogsParts(
			n,
			"none",
			"inline",
			"Read more",
			"fa-chevron-up",
			"fa-chevron-down",
			"close"
		);
	}
}

// reset form after submission
window.onbeforeunload = () => {
	for (const form of document.getElementsByTagName("form")) {
		form.reset();
	}
};
