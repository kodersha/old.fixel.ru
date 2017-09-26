/* Выводим содержаение поста */

tocbot.init({
	tocSelector: '.js-toc',
	contentSelector: '.js-toc-content',
	headingSelector: 'h2, h3',
});

/* Комментарии и поделиться */

$('.social-toggle').on('click', function() {
	$(this).next().toggleClass('open-menu');
});

$('.show-comments').on('click', function() {
	$(".comments .hint").toggleClass('hide');
});

/* Parallax */

$(window).scroll(function(){
	parallax();
});

function parallax(){
	var scrolled = $(window).scrollTop();
	$('header .bg').css('top',-(scrolled*0.1)+'px');
	$('header .sub-bg').css('opacity',0.6-(scrolled*0.01)/10);
	$('header .maintenance').css('top',50+(scrolled*0.1)+'%');
};

/* Шапка поста

$(document).ready(function(){
	function inViewport($el) {
		var H = $(window).height(),
			r = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
		return Math.max(0, t>0? H-t : (b<H?b:H));  
	}
});
$(window).on("scroll resize", function(){
	var window_offset = inViewport($('.intro')); 
	$(".overlay").height(window_offset);
	$(".caption").css("bottom", (window_offset / 4) );
});

*/