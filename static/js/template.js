/* Лого */

function logoAnimate() {
	var logo = document.querySelector('[data-js="logo"]');
	console.log(logo);
	logo.addEventListener('mouseenter', function(e) {
		e.target.classList.add('animate');
	});
};
  
window.onload = function() {
	logoAnimate();
};

/* Шапка поста */

$(function() {
	$('.cover img').primaryColor(function(color) {
		$('.cover .frame').css('background-color', 'rgb('+color+')');
	});
});

/* Добавляем lightbox к изображениям */

lightbox.option({
	'resizeDuration': 0,
	'fadeDuration': 300,
	'imageFadeDuration': 300,
	'wrapAround': true,
	'disableScrolling': true,
	'fitImagesInViewport': true,
	'showImageNumberLabel': false
});

/* Настраиваем fotorama */

$('.post .fotorama').fotorama({
	width: '100%',
	maxwidth: '100%',
	ratio: 16/9,
	allowfullscreen: 'native',
	fit: 'cover'
});

/* Подменяем youtube плеер картинкой */

$(".post .youtube").each(function() {
	$(document).delegate('#'+this.id, 'click', function() {
		var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
		if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
		var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url });
		$(this).html(iframe).addClass('playing');
		$(this).fitVids();
	});
});

/* Добавляем классы */

$( '[full], .full' ).addClass('space-minus-h-micro-xs space-minus-h-mili-md space-minus-h-base-lg space-out-h-zero-xl');
$( '[color] .highlight pre' ).addClass('space-out-h-micro-xs space-out-h-mili-md space-out-h-base-lg');

/* Поиск */

$('.search-button').click(function(){
	$(".search").toggleClass('open');
});

SimpleJekyllSearch({
	searchInput: document.getElementById('search-input'),
	resultsContainer: document.getElementById('results-container'),
	json: base_url + '/search.json',
	searchResultTemplate: '<li><a href="{url}" title="{title}">{title}</a></li>',
	noResultsText: '<li class="no-results">Увы, ничего не найдено.</li>',
	limit: 10,
	fuzzy: false
});
$(document).ready(function() {
	$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function(e) {
		$('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
		e.preventDefault();
	});
});

/* Yandex */

(function (d, w, c) {
	(w[c] = w[c] || []).push(function() {
		try {
			w.yaCounter40455205 = new Ya.Metrika({
				id:40455205,
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true
			});
		} catch(e) { }
	});

	var n = d.getElementsByTagName("script")[0],
		s = d.createElement("script"),
		f = function () { n.parentNode.insertBefore(s, n); };
	s.type = "text/javascript";
	s.async = true;
	s.src = "https://mc.yandex.ru/metrika/watch.js";

	if (w.opera == "[object Opera]") {
		d.addEventListener("DOMContentLoaded", f, false);
	} else { f(); }
})(document, window, "yandex_metrika_callbacks");

/* Выводим содержаение поста */

tocbot.init({
	tocSelector: '.js-toc',
	contentSelector: '.js-toc-content',
	headingSelector: 'h2, h3',
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

} else {
	/* Прилепляем футер */

	;(function(window, $, undefined){
		'use strict';
		/**
		 * @return {Object}
		 */
		$.fn.stickyFooter = function()
		{
			var windowHeight = 0,
				offset = 0,
				$div = this;
			position();
			$(window).bind('resize.stickyFooter', function(){
				position();
			});
			/**
			 * @return {void}
			 */
			function position(){
				if( $div.css('position') !== 'static' )
				{
					offset = $div.outerHeight(true);
				}else{
					offset = 0;
				}
				windowHeight = window.innerHeight
					? window.innerHeight
					: $(window).height();
				if( $('body').outerHeight(true) + offset < windowHeight ){
					$div.css({
						position	: 'fixed',
						width		: '100%',
						bottom		: 0,
					});
				}else{
					$div.css({
						position	: 'static',
						width		: 'auto'
					});
				}
			}
			return this;
		};
	}(window, jQuery));

	$('footer').stickyFooter();
}

/* Кнопка вверх */

jQuery.extend(jQuery.fn, {
	toplinkwidth: function(){
		var totalContentWidth = jQuery('').outerWidth();
		var totalTopLinkWidth = jQuery(this).children('a').outerWidth(true);
		var h = jQuery(window).width()/2-totalContentWidth/2-totalTopLinkWidth;
		if(h<0){
			jQuery(this).addClass('hide');
			return false;
		} else {
			if(jQuery(window).scrollTop() >= 1200){
				jQuery(this).addClass('show');
			}
			return true;
		}
	}
});

jQuery(function($){
	var topLink = $('.scroll-to-top');
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1200 && topLink.toplinkwidth()) {
			topLink.fadeIn(300);
		} else {
			topLink.fadeOut(300);
		}
	});
	topLink.click(function(e) {
		$("html").animate({scrollTop: 0}, 1000);
		return false;
	});
});