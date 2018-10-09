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

	// handdeling the Catch Phrase from the header (3.5s)
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
	sr.reveal('.progress-bar, .learning', {
		origin: 'left',
		duration: 2000,
		distance: '100%'
	});

	const parallax = document.getElementById("parallax");

	window.addEventListener("scroll", function() {
  		let offset = window.pageYOffset;
  	parallax.style.backgroundPositionY = offset * 0.9 + "px";
	});

	const pressed = [];
	const secretCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
	
	window.addEventListener('keyup', (e) => {
	  console.log(e.key);
	  pressed.push(e.key);
	  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	  if (pressed.join(",").includes(secretCode)) {
		console.log("The KONAMI has you!");
		$("p,h1,h2,h3,h4,h5,h6,small,li,span,strong,a").text("HIRE ME!");
	  }
	  console.log(pressed);
	});
});

