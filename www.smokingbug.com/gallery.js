var currentSlide = 0
var slideCount = 0

function initSlides(count){
	slideCount = count;
	enableSlide();
}

function enableSlide()
{
	for (var i = 0; i < slideCount; i++) {
		document.getElementById("s" + i).style.visibility = "hidden";
		document.getElementById("i" + i).style.visibility = "hidden";
	}
	document.getElementById("s" + currentSlide).style.visibility = "visible";
	document.getElementById("i" + currentSlide).style.visibility = "visible";
}

function nextSlide(){
	currentSlide = (currentSlide + 1) % slideCount;
	enableSlide();
}

function prevSlide(){
	currentSlide = currentSlide - 1;
	if(currentSlide < 0){
		currentSlide = slideCount - 1;
	}
	enableSlide();
}