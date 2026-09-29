// hamburgermenu
// hamburgermenu = https://codepen.io/shooft/pen/ZEVYyMQ
const menuKnop = document.querySelector("header > button");
const hoofdmenu = document.querySelector('nav[aria-label="Hoofdmenu"]');

menuKnop.addEventListener("click", wisselMenu);
document.addEventListener("keydown", sluitMetEscape);

function wisselMenu() {
	hoofdmenu.classList.toggle("open");
	// aria-expanded moet mee veranderen, anders hoort iemand met een screenreader niet of het menu open of dicht is
	menuKnop.setAttribute("aria-expanded", hoofdmenu.classList.contains("open"));
}

// met escape kun je het menu ook weer dicht doen. daarna gaat de focus terug naar de knop, anders sta je met tab ergens in het niks
function sluitMetEscape(event) {
	if (event.key === "Escape" && hoofdmenu.classList.contains("open")) {
		hoofdmenu.classList.remove("open");
		menuKnop.setAttribute("aria-expanded", "false");
		menuKnop.focus();
	}
}
