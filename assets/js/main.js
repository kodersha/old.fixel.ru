/* Подгрузка постов */

var ias = jQuery.ias({
	container:  '.post-list.infinite',
	item:       '.post',
	pagination: '.pagination',
	next:       '.next',
	negativeMargin: 1250
});

/*
ias.extension(new IASSpinnerExtension({
	src: "/assets/images/loader.gif",
    html: "<div class='pagination'><div class='spinner'><img src='{src}'/></div></div>"
}));

ias.extension(new IASTriggerExtension({
	htmlPrev: "<div class='pagination top'><a class='infinite'>Позднее</a></div>",
	html: "<div class='pagination bottom'><a class='infinite'>Ранее</a></div>"
}));

ias.extension(new IASPagingExtension());

ias.extension(new IASHistoryExtension({
    prev: '.previous',
}));
*/

/* Кат длинных постов  */

/* $('[data-component="readmore"]').readMore(params); */

/* Подгрузка постов и скриптов */

ias.on('rendered', function(items) {
	
	/* $('[data-component="readmore"]').readMore(params); */
	
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

	$(".post .maintenance .youtube").empty().each(function() {
		$(this).append($('<img/>', {'src': 'https://img.youtube.com/vi/' + this.id + '/hqdefault.jpg', 'class': 'lazyload', 'data-src': 'https://img.youtube.com/vi/' + this.id + '/hqdefault.jpg'}));

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