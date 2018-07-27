$(function() {
	var words = [
		'Intégrateur Web',
		'un Geek',
		'en train de coder',
		'un caféholic',
		'inspiré'
	],
	i = 0;

	// For screens less or equals to medium (992px)
	$(".navbar-responsive").toggle();

	$(".menu").click(function() {
		$(".navbar-responsive").toggle("slow");
	});

	// handdeling the Catch Phrase from the header (4.5s)
	setInterval(function () {
		$("#word").fadeOut(function() {
			$(this).html(words[i = (i + 1) % words.length]).fadeIn();
		});
	}, 3500);

	// handdling the ancre links
	$(".scroll").click(function() {
		var section = $("." + this.id);
		$("html,body").animate({scrollTop: section.offset().top}, "slow");
	})

	// display of the progress bars (skill)
	window .sr = ScrollReveal();
	sr.reveal('.progress-bar', {
		origin: 'left',
		duration: 2000,
		distance: '100%'
	});
});