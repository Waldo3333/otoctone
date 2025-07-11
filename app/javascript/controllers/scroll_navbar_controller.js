import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="scroll-navbar"
export default class extends Controller {
	static targets = ["div"];
	connect() {
		console.log("scroll connécté");

		document.addEventListener("scroll", () => {
			const div = this.divTarget;
			if (window.innerWidth > 864) {
				if (window.scrollY > 50) {
					div.classList.remove("h-0");
					div.classList.add("h-[100px]");
					div.classList.add("shadow-navbar");
				} else {
					div.classList.remove("h-[100px]");
					div.classList.remove("shadow-navbar");
					div.classList.add("h-0");
				}
			}
			if (window.innerWidth < 864) {
				if (window.scrollY > 50) {
					div.classList.remove("h-0");
					div.classList.add("h-[125px]");
					div.classList.add("shadow-navbar");
				} else {
					div.classList.remove("h-[125px]");
					div.classList.remove("shadow-navbar");
					div.classList.add("h-0");
				}
			}
		});
	}
}
