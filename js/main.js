const goTopBtn = document.querySelector(".knobUp");
goTopBtn.addEventListener('click', goTop);




function goTop(){
	if (window.pageYOffset > 0) {
		window.scrollBy (0, -35);
		setTimeout(goTop, 0);
	}
}




