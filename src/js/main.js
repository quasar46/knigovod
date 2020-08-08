$(document).ready(function () {
	$('.burger').on('click', function () {
		$(this).toggleClass('active');
		// $('.mobile-menu').toggleClass('active');
		$('.mobile-menu').slideToggle();
	})
	$(window).scroll(function () {
		$('.mobile-menu').slideUp();
	})
})

$(document).ready(function () {
	$(".main-header nav").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});

// scroll links
$(document).ready(function () {
	$(".mobile-menu .links").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});

// popup
$(document).ready(function () {
	$('.btn-order').on('click', function (evt) {
		evt.preventDefault();
		$('.popup').addClass('active');
	})
	$('.popup .cross').on('click', function () {
		$('#popup-order').removeClass('active')
	})
	$('.popup2 .cross').on('click', function () {
		$('#popup-order2').removeClass('active')
	})
	$('.popup .btn-order').on('click', function () {
		$('.popup').removeClass('active')
	})
})

$(document).ready(function () {
	$('.phone').on('click', function () {
		$('#popup-order2').addClass('active');
	})
})


$(document).ready(function () {
	AOS.init();
})
