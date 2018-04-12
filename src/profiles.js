$(".profile").flip({
  trigger: 'hover'
});

$("#download").click(function() {
	ga(‘send’,’event’, {
    eventCategory: 'Downloads',
    eventAction: 'Download Clicks',
    eventLabel: 'Hillary'
  });
});


