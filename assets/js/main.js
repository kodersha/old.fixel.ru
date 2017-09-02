/* Добавляем lightbox к изображениям */

$(document).ready(function(){
	$( ".post .maintenance p img" ).wrap(function() {
		return "<div class='picture'><a href='" + $( this ).attr("src") + "' data-lightbox='image' class='image'></a></div>";
	});
});

lightbox.option({
	'resizeDuration': 0,
	'fadeDuration': 300,
	'imageFadeDuration': 300,
	'wrapAround': true,
	'disableScrolling': true,
	'fitImagesInViewport': true,
	'showImageNumberLabel': false
})

/* Добавляем lazy к изображениям */

$(".post .maintenance p img").each(function() {
	$(this).addClass('lazy');
	$(this).attr('data-original', $(this).attr('src'));
})

$(function() {
	$(".post .maintenance img.lazy").lazyload({
		effect : "fadeIn"
	});
});

/* Выводим содержаение поста */

tocbot.init({
	tocSelector: '.js-toc',
	contentSelector: '.js-toc-content',
	headingSelector: 'h2, h3',
});

/* Скрываем длинные посты под катом */

$('.post .short').readmore({
	speed: 75,
	collapsedHeight: 740,
	moreLink: '<div class="more"><a class="morelink"><button class="slider">Показать полностью</button></a></div>',
	lessLink: '<a class="morelink less"></a>'
});

$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 900px)");
    if (isMobile.matches) {
        $('.post .short').readmore('destroy');
    }
});

/* Открываем ссылки в новой вкладке */

$(document).ready(function() {$('.post .maintenance p a').attr('target','_blank');});


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

/* Настраиваем fotorama */

$('.post .maintenance .fotorama').fotorama({
	width: '100%',
	maxwidth: '100%',
	ratio: 16/9,
	allowfullscreen: 'native',
	fit: 'cover'
});

/* Оборачиваем iframe */

$(".post .maintenance iframe").wrap("<div class='video'><div class='frame'/></div>");

/* Подменяем youtube плеер картинкой */

$(function() {
    $(".post .maintenance .youtube").each(function() {
        $(this).append($('<img/>', {'src': 'https://img.youtube.com/vi/' + this.id + '/hqdefault.jpg', 'class': 'lazy', 'data-original': 'https://img.youtube.com/vi/' + this.id + '/hqdefault.jpg'}));

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

/* Share */

$('.social-toggle').on('click', function() {
	$(this).next().toggleClass('open-menu');
});

$('.show-comments').on('click', function() {
	$(".comments span").toggleClass('hide');
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