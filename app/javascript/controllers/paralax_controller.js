import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="paralax"
export default class extends Controller {
	static targets = [
		"yatchone",
		"yatchonebg",
		"yatchtwo",
		"yatchtwobg",
		"yatchthree",
		"yatchthreebg",
		"yatchfour",
		"yatchfourbg",
	];
	connect() {
		document.addEventListener("scroll", () => {
			if (window.innerWidth > 1152) {
				this.animate(this.yatchoneTarget, this.yatchonebgTarget);
				this.animate(this.yatchtwoTarget, this.yatchtwobgTarget);
				this.animate(this.yatchthreeTarget, this.yatchthreebgTarget);
				this.animate(this.yatchfourTarget, this.yatchfourbgTarget);
			}
		});
	}
	disconnect() {
		document.removeEventListener("scroll", this.scrollHandler);
	}

	animate(element, background) {
		const rect = element.getBoundingClientRect();
		const windowHeight = window.innerHeight;

		if (rect.top < windowHeight && rect.bottom > 0) {
			const progress = 1 - rect.top / windowHeight;

			element.style.transform = `translateY(-${progress * 130}px)`;
			background.style.transform = `translateY(-${progress * 120}px)`;
		}
	}
}
