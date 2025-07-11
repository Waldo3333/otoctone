import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="link-underline"
export default class extends Controller {
	static targets = ["line"];
	connect() {
		console.log(this.lineTarget);
		this.lineTarget.style.transformOrigin = "right";
	}

	reduce() {
		console.log("reduce");
		this.lineTarget.style.transform = "scaleX(0)";
	}
	expand() {
		console.log("reduce");
		this.lineTarget.style.transform = "scaleX(1)";
	}
}
