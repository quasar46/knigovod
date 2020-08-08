const loaderArea = document.querySelector(".page-loader");

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		loaderArea.classList.add("hidden");
	}, 2000);
});