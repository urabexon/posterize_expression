window.addEventListener('load', () => {
	const container = document.getElementById('container');
	const normalImg = document.getElementById('normal');
	const posterized = document.getElementById('posterized');
	const paragraph = document.getElementById('paragraph');

	document.body.style.height = `${window.innerHeight * 2}px`;
	container.style.height = `${window.innerHeight}px`;
	paragraph.style.marginLeft = `${normalImg.clientWidth}px`;

	window.addEventListener('scroll', (e) => {
		const { scrollY } = window;
		const ratio = 1 - (scrollY / window.innerHeight);
		posterized.style.opacity = ratio;
	});
});
