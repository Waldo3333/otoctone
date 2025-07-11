import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="fade-in"
export default class extends Controller {
	static targets = ["fadeElement"];

	connect() {
		this.handleScroll = this.handleScroll.bind(this);
		window.addEventListener("scroll", this.handleScroll);
		this.handleScroll();
	}

	disconnect() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll() {
		const windowHeight = window.innerHeight;

		this.fadeElementTargets.forEach((el) => {
			const rect = el.getBoundingClientRect();
			if (rect.top < windowHeight - 100) {
				el.classList.add("opacity-100");
				el.classList.remove("opacity-0");
			}
		});
	}
}
