$(document).ready(function() {
 	$('nav ul').css('background-color','red');
  	$('nav ul').css('display','flex');
 	$('nav ul').css('flex-wrap','wrap');
  	$('nav ul li').css('margin-right','10%');
	//event lick
	$('#adelgans').click(function() {
		alert('Hallo, semangat belajar jquerynya adelwin...!');
	});

	//Event Double click
	$('#Reyhangans').click(function() {
		$(this).css('background-color','skyblue')
	});

	//Mouse ketika di tinggalkan objectnya
	$('.Adelwingans123').mouseleave(function() {
		$(this).css('background-color','skyblue');
	});

	//Mouse ketika menuju kepada ke objectnya
	$('.Adelwingans123').mouseenter(function() {
		$(this).css('background-color','green');
	});

    $('.Adelwingans123').css('font-family','play'); 

	//event memunculkan keydown
		$('#keydown').keydown(function() {
			$('#pesannya').text($(this).val());
		});


    //event Keyup	
	$('#adelup').keyup(function() {
			$('#pesannya-keyup').text($(this).val());
		});

	$('.semua').css('background-color','tomato');
		$('.semua').css('padding','8px');
			$('.semua').css('height','500');
				$('.semua').css('width','500');

})