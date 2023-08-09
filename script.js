const body = document.getElementById("body");
const links = document.querySelectorAll(".navLinks li a");


links.forEach(link => {
	link.addEventListener("click", () => {
		links.forEach(link => link.classList.remove("active"));
		link.classList.add("active");
	});
});

body.addEventListener("click", event => {
	if (!event.target.classList.contains("active")) {
		links.forEach(link => link.classList.remove("active"));
	}
});


