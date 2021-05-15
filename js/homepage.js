/**********************************************************
	make drinks 10s video
**********************************************************/
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
			if (prevRatio > 0.55) {
				entry.target.currentTime = 2;
				entry.target.play().catch(console.log);
			}
		});

	}, options);
	const video = document.querySelector('#make-drinks-10s-video');
	observer.observe(video);   
}

/**********************************************************
	main banner video
**********************************************************/
function showReelVideoPlay() {
	const video = document.querySelector("#main-banner-video");
	video.currentTime = 0;
	video.play();
}
window.onload = function(){
	const video = document.querySelector('#main-banner-video');
	video.addEventListener("timeupdate", hideBannerInfo ,false);
}
	
function hideBannerInfo(){
	const bannerInfo = document.querySelector('.your-bartender-container');
	if(this.currentTime > 22.5 && this.currentTime < 22.85) {
		bannerInfo.classList.add('hideBannerInfo');
	}
	else if(this.currentTime <= 0.2){
		bannerInfo.classList.remove('hideBannerInfo');
	}
}