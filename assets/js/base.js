/* Добавляем lightbox к изображениям */

$( ".post .maintenance p img" ).wrap(function() {
	return "<div class='picture'><a href='" + $( this ).attr("src") + "' data-lightbox='image' class='image'></a></div>";
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

/* Добавляем lazy и прочие классы к изображениям */

$(".post .maintenance p img").each(function() {
	$(this).addClass('lazyload');;
	$(this).attr({
		'data-src': $(this).attr('src'),
		'data-sizes': 'auto',
		'ondrag': 'return false',
		'ondragdrop': 'return false',
		'ondragstart': 'return false'
	});
});

/* Открываем ссылки в новой вкладке */

$('.post .maintenance p a').attr('target','_blank');

/* Настраиваем fotorama */

$('.post .maintenance .fotorama').fotorama({
	width: '100%',
	maxwidth: '100%',
	ratio: 16/9,
	allowfullscreen: 'native',
	fit: 'cover'
});

/* Подменяем youtube плеер картинкой */

$(".post .maintenance .youtube").each(function() {
	$(this).append($('<img/>', {'src': 'http://img.youtube.com/vi/' + this.id + '/hqdefault.jpg', 'class': 'lazyload', 'data-src': 'http://img.youtube.com/vi/' + this.id + '/hqdefault.jpg'}));

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

/* Кнопка вверх */

jQuery.extend(jQuery.fn, {
	toplinkwidth: function(){
		var totalContentWidth = jQuery('').outerWidth();
		var totalTopLinkWidth = jQuery(this).children('a').outerWidth(true);
		var h = jQuery(window).width()/2-totalContentWidth/2-totalTopLinkWidth;
		if(h<0){
			jQuery(this).hide();
			return false;
		} else {
			if(jQuery(window).scrollTop() >= 900){
				jQuery(this).show();
			}
			return true;
		}
	}
});

jQuery(function($){
	var topLink = $('.scroll-to-top');
	$(window).scroll(function() {
		if($(window).scrollTop() >= 900 && topLink.toplinkwidth()) {
			topLink.fadeIn(300);
		} else {
			topLink.fadeOut(300);
		}
	});
	topLink.click(function(e) {
		$("body,html").animate({scrollTop: 0}, 1000);
		return false;
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

/* Расстановка переносов на мобильных устройствах */

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
	$('.entry p').attr('class','hyphenate');
	
	$('.entry [left], .entry [aside], .entry [quote], .entry [caption]').attr('class','donthyphenate');
	
	function selectorFunction() {
		return window.document.getElementsByClassName("hyphenate");
	}
}