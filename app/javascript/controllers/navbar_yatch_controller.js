import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="navbar-yatch"
export default class extends Controller {
	static targets = ["yatch", "otoctone"];
	connect() {
		document.addEventListener("scroll", () => {
			const yatch = this.yatchTarget;
			const otoctone = this.otoctoneTarget;
			if (window.scrollY > 50) {
				console.log("scrolled");
				yatch.classList.add("hidden");
				yatch.classList.remove("flex");
				otoctone.classList.remove("lg:text-4xl");
				otoctone.classList.add("lg:text-base");
			} else {
				yatch.classList.add("flex");
				yatch.classList.remove("hidden");
				otoctone.classList.remove("lg:text-base");
				otoctone.classList.add("lg:text-4xl");
			}
		});
	}
}

// if (window.innerWidth > 640) {
// 				if (window.scrollY > 50) {
// 					console.log("scrolled");
// 					yatch.classList.add("hidden");
// 					yatch.classList.remove("flex");
// 					otoctone.classList.remove("text-4xl");
// 				} else {
// 					yatch.classList.add("flex");
// 					yatch.classList.remove("hidden");
// 					otoctone.classList.add("text-4xl");
// 				}
// 			} else {
// 				if (window.scrollY > 50) {
// 					yatch.classList.add("hidden");
// 					yatch.classList.remove("flex");
// 				} else {
// 					yatch.classList.add("flex");
// 					yatch.classList.remove("hidden");
// 				}
// 			}
