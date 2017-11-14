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