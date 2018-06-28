$('.posts').infiniteScroll({
	path: '.pagination__next',
	append: '.post',
	checkLastPage: true,
	history: 'replace',
	historyTitle: true,
	hideNav: undefined,
	scrollThreshold: 1000, 
});

$('.list').infiniteScroll({
	path: '.pagination__next',
	append: '.item',
	checkLastPage: true,
	history: false,
	hideNav: undefined,
	scrollThreshold: 1000, 
});

/* Меню */

$(document).ready(function(){
	$('.navigation').hide();
	
    $('.toggle-menu').click(function(){
		$('.navigation').fadeToggle( 'fast', 'linear' );
		$('html,body').animate({ scrollTop: $('.navigation').offset().top}, 'slow');
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

$(".video .youtube").each(function() {
	$(document).delegate('#'+this.id, 'click', function() {
		var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
		if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
		var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url });
		$(this).html(iframe).addClass('playing');
		$(this).fitVids();
	});
});

/* Добавляем классы */

$( '[color] .highlight pre' ).addClass('space-out-h-micro-xs space-out-h-mili-md space-out-h-base-lg space-out-h-zero-xl');

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

}

$('.post-short').readmore({
	speed: 75,
	collapsedHeight: 1080,
	moreLink: '<div class="space-minus-h-micro-xs space-minus-h-base-sm more"><a class="space-out-h-micro-xs space-out-h-base-sm morelink">Показать полностью</a></div>',
	lessLink: ''
});