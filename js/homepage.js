window.addEventListener("scroll", createObserver, false);

function createObserver() {
	const options = {
		threshold: 1
	};
	let prevRatio = 0.0;
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			prevRatio = entry.intersectionRatio;
			
			//prevRatio = 1，表示 video 100% inviewport or visible
			if (prevRatio > 0.6) {
				console.log('1');
				entry.target.play().catch(console.log);
			}
		});

	}, options);
	const video = document.querySelector('.make-drinks-10s-video')
	observer.observe(video);   
}