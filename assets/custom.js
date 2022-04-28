$('.dyutih-images-slider-sec .owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    thumbs: false,
    navText: ["<img src='assets/images/nav-left-arrow.png'>", "<img src='assets/images/nav-left-arrow.png'>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3.2,
        }
    }
})
$('.testimonials-sec .owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: true,
    thumbs: false,
    navText: ["<img src='assets/images/nav-left-arrow.png'>", "<img src='assets/images/nav-left-arrow.png'>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})
$('.best-seller-slider .owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 15,
    responsiveClass: true,
    nav: false,
    dots: false,
    thumbs: true,
    thumbImage: false,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    navText: ["<img src='assets/images/nav-left-arrow.png'>", "<img src='assets/images/nav-left-arrow.png'>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3.5,
        }
    }
})
$('.product-detail-carousel .owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 15,
    responsiveClass: true,
    nav: false,
    dots: false,
    thumbs: true,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    navText: ["<img src='assets/images/nav-left-arrow.png'>", "<img src='assets/images/nav-left-arrow.png'>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})
$('.menu-bar').click(function (e) {
    $('.navigation').slideToggle();
});
$(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).find(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).find(".plusminus").text('-');
        }
    });
});
$('.accordion_head').click(function (e) {
    $(this).parent('.accordian-tabs').toggleClass('active');
    $(this).parent('.accordian-tabs').siblings('.accordian-tabs').removeClass('active');
});

var input = document.querySelector('#qty');
var btnminus = document.querySelector('.qtyminus');
var btnplus = document.querySelector('.qtyplus');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
	
	var min = Number(input.getAttribute('min'));
	var max = Number(input.getAttribute('max'));
	var step = Number(input.getAttribute('step'));

	function qtyminus(e) {
		var current = Number(input.value);
		var newval = (current - step);
		if(newval < min) {
			newval = min;
		} else if(newval > max) {
			newval = max;
		} 
		input.value = Number(newval);
		e.preventDefault();
	}

	function qtyplus(e) {
		var current = Number(input.value);
		var newval = (current + step);
		if(newval > max) newval = max;
		input.value = Number(newval);
		e.preventDefault();
	}
		
	btnminus.addEventListener('click', qtyminus);
	btnplus.addEventListener('click', qtyplus);
  
} // End if test