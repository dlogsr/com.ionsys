function getWindowHeight(){
	return $(window).height();
}

function adjustContentSpacing(currSection) {
	var windowHeight = getWindowHeight();
	$(currSection).css({'min-height':windowHeight});
};

$(document).ready(function(){
	adjustContentSpacing('section');
});

$(window).resize(function(){
	adjustContentSpacing('section');
});