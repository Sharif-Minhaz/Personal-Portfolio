// ----- Page loader -----
window.onload = () => {
	document.querySelector("html").style.overflowY = "auto";
	document.body.classList.add("loaded");
};

const sections = document.querySelectorAll("section");
const nav_links = document.querySelectorAll(".nav-link");

window.onscroll = () => {
	backTotop();
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 2;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");

		if (top >= offset && top < offset + height) {
			nav_links.forEach((link) => {
				link.classList.remove("newColor");
				const selectedLinks = document.querySelectorAll(`.nav-pills a[href*=${id}]`);
				selectedLinks.forEach((singleLink) => {
					singleLink.classList.add("newColor");
				});
			});
		}
	});
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
