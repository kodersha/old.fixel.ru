---
title: "Упрощаем получение карточек на распродаже Steam"
category: "Заметки"
thumbnail: "https://i.imgur.com/LURxN1pl.png"
tags:
- Steam
- Гайд
---

Как известно, каждый год в Steam стартуют две крупные распродажи - летняя и зимняя, где за просмотр списка рекомендаций можно получить по три карточки в день которые, в свою очередь, можно продать или потратить на создание значка распродажи. Дабы упростить и ускорить процесс просмотра скучного списка рекомендаций участник GitHub [AceLewis][1] написал небольшой скрипт для браузера который автоматически просматривает список за несколько секунд прошествии которых и выпадают заветные три карточки. Способ безопасен и работает уже несколько лет, бана Steam аккаунта вы не получите, а вот чтобы получить карточки достаточно выполнить несколько незаурядных шагов без регистрации и смс.

1. Открыть свой любимый браузер и авторизоваться в Steam аккаунте на [steampowered.com][2].
2. Открыть страницу рекомендаций: [store.steampowered.com/explore][3].
3. Открыть консоль разработчика.
- В Google Chrome сочетанием клавиш <mark>Ctrl + Shift + J</mark> или <mark>Cmd + Option + J</mark> на устройствах Mac.
- В Firefox <mark>Ctrl + Shift + I</mark> или <mark>Cmd + Option + I</mark>.
- В Safari <mark>Cmd + Option + C</mark>, предварительно включив режим разработчика <mark>Настройки - Дополнения - Показывать меню «Разработка» в строке меню</mark>.
4. Скопировать и вставить скрипт в консоль, нажать <mark>Enter</mark> и немного подождать до обновления страницы.

{% highlight javascript %}
var GenerateQueue = function( queueNumber )
{
	console.log( 'Queue #' + ++queueNumber );
	jQuery.post( 'http://store.steampowered.com/explore/generatenewdiscoveryqueue', { sessionid: g_sessionID, queuetype: 0 } ).done( function( data )
	{
	    var requests = [];
	    for( var i = 0; i < data.queue.length; i++ )
	    {
	        requests.push( jQuery.post( 'http://store.steampowered.com/app/10', { appid_to_clear_from_queue: data.queue[ i ], sessionid: g_sessionID } ) );
	    }
	    jQuery.when.apply( jQuery, requests ).done( function()
	    {
	        if( queueNumber < 3 )
	        {
	            GenerateQueue( queueNumber );
	        }
	        else
	        {
	            window.location.reload();
	        }
	    } );
	} );
};
GenerateQueue( 0 );
{% endhighlight %}

Собственно говоря, таким нехитрым образом можно получать все три распродажные карточки за считаные секунды, что ещё более актуально при наличии нескольких Steam аккаунтов. 

[1]:	https://github.com/AceLewis/
[2]:	http://steampowered.com/
[3]:	http://store.steampowered.com/explore/