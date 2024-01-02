// JavaScript source code
let checkbox = document.querySelector("#darkmode-toggle");

checkbox.addEventListener("change", (elem) => {
	console.log(elem.checked);
	let baliseStyle = document.querySelector("#colorCssFile");

	if (baliseStyle.getAttribute("href") === "style.css") {
		baliseStyle.setAttribute("href", "dark.css");
		return
	}

	baliseStyle.setAttribute("href", "style.css");
});