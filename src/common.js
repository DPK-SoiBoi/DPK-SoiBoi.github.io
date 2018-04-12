$(document).ready(function() {
    $(window).trigger('resize');
});

var FINAL_LOGO_SIZE = 75;
var MENUBAR_PADDING = 10;

$(window).resize(function() {
  var profiles_size = $("#profiles").innerHeight();
  var logo_width    = $("#logo").width();
  var window_height = $(window).height();
  var window_width  = $(window).width();

  // alert(profiles_size);

  $("#profiles").css({
    "margin-top": ((window_height - profiles_size) / 2) - FINAL_LOGO_SIZE - MENUBAR_PADDING + "px"
  });
  $("#logo").css({
    "left": ((window_width - FINAL_LOGO_SIZE) / 2) + "px"
  });
});

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-66023611-4', 'auto');
// ga('send', 'pageview');


