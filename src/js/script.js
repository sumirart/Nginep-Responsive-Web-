const sr = ScrollReveal({
	distance: "60px",
	duration: 2000,
	reset: false,
});

sr.reveal(`.hero__main, .hero__right, .popular__item`, {
	origin: "top",
	interval: 100,
});

sr.reveal(`.categories__item`, {
	origin: "left",
	interval: 100,
});
