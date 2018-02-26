/* Шапка поста */

$(function() {
	$('.cover img').primaryColor(function(color) {
		$('.cover .frame').css('background-color', 'rgb('+color+')');
	});
});

/* Добавляем lightbox к изображениям */

$( ".post p img" ).parent().addClass( 'picture' );

$('.picture img').wrap(function() {
	return "<a href='" + $( this ).attr("src") + "' data-lightbox='image' class='image'></a>";	
});

lightbox.option({
	'resizeDuration': 0,
	'fadeDuration': 300,
	'imageFadeDuration': 300,
	'wrapAround': true,
	'disableScrolling': true,
	'fitImagesInViewport': true,
	'showImageNumberLabel': false
});

/* highlight */

$( '[full]' ).addClass('space-minus-h-mili-xs space-minus-h-base-sm space-out-h-zero-xl');

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
	$(this).append($('<img/>', {'src': 'https://img.youtube.com/vi/' + this.id + '/maxresdefault.jpg', 'class': 'maxresdefault'}));
	$(this).append($('<div/>', {'class': 'play'}));

	$(document).delegate('#'+this.id, 'click', function() {
		var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
		if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

		var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url });

		$(this).html(iframe).addClass('frame');
		$(this).html(iframe).removeClass('youtube');
		$(this).html(iframe).wrap("<div class='video'/>");
		
		$(this).fitVids();
	});
});

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

/* Расстановка переносов */

$('.post [aside], .post .aside, .post [aside-left], .post .aside-left, .post [caption], .post .caption').addClass('hyphenate');

/* Расстановка переносов на мобильных устройствах */

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
	$('h1, h2, h3, h4, h5').addClass('hyphenate');
	$('.post [aside], .post .aside, .post [aside-left], .post .aside-left, .post [caption], .post .caption').addClass('donthyphenate');
}

function selectorFunction() {
	return window.document.getElementsByClassName("hyphenate");
}

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

/* Комментарии */

function loadDisqusOnDemand() {
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = '//go.disqus.com/embed.js';

    (document.getElementsByTagName('head')[0]
      || document.getElementsByTagName('body')[0]).appendChild(script);

    //hides the button and remove event listeners
    this.removeEventListener('click', loadDisqusOnDemand);
    this.style.display = 'none';
}

document
  .getElementById('comment')
  .addEventListener('click', loadDisqusOnDemand);

$('#comment').click(function(){
	$('.thread').addClass('show');
});