/* Добавляем lazyload к изображениям */

$('.post p img').each(function() {
	$(this).parent().addClass('picture lazyload');
	$(this).wrapAll('<a href="' + $(this).attr('src') + '" data-lightbox="image" class="image" />');
	$(this).attr({'data-src': $(this).attr('src'), 'data-sizes': 'auto', 'class': 'lazyload'});
	$(this).after('<noscript><img data-src="' + $(this).attr('src') + '" /></noscript>');
	$(this).removeAttr('src');
});

/* Full */

$( '[full]' ).addClass('space-minus-h-micro-xs space-minus-h-mili-md space-minus-h-base-lg space-out-h-zero-xl');