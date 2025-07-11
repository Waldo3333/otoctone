import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="burger"
export default class extends Controller {
	static targets = ["burger", "menu", "enveloppe"];
	connect() {
		console.log("burger ");
	}

	toggleMenu() {
		console.log("toggle");
		this.burgerTarget.classList.toggle("open");
		this.menuTarget.classList.toggle("menu-hidden");
		this.enveloppeTarget.classList.toggle("hidden");
	}
}
