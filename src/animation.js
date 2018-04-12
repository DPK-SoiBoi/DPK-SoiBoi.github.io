$(document).ready(function(){
	animation(); // start animation
});

var LOGO_SIZE     = $("#logo").width();
var window_width  = $(window).width();
var window_height = $(window).height();

$("#menubar").css({
	"height": $(window).height() + 1000 + "px"
})
$("#logo").css({
	"left": ((window_width - LOGO_SIZE) / 2) + "px",
	"top": ((window_height - LOGO_SIZE) / 2) + "px"
})

function animation() {
	LOGO_SIZE = 75;
	$("#logo").css({
		"left": ((window_width - LOGO_SIZE) / 2) + "px",
		"top": "5px",
		"height": LOGO_SIZE + "px",
		"width": LOGO_SIZE + "px",
  	"transition": "all 0.25s linear 1s"
	});
	$("#menubar").css({
		"height": "60px"
	});
}


