---
layout: post
permalink: /blog/pishem-svoy-shablon-dlya-egei/
redirect_from: /blog/all/pishem-svoy-shablon-dlya-egei/
title: "Пишем свой шаблон для Эгеи"
category: "Веб"
toc: "true"
description: "Написать свой шаблон для Эгеи не так сложно как может показаться на первый взгляд. Давайте разберем основные принципы построения шаблона используя некоторые простые примеры."
tags:
- Эгея
- Гайд
---

Написать свой шаблон для [Эгеи](http://blogengine.ru) не так сложно как может показаться на первый взгляд. Давайте разберем основные принципы построения шаблона используя некоторые простые примеры.

* Пользовательские шаблоны находятся в папке ../themes вашего блога. Создадим в ней папку и назовем ее так, как хотим чтобы назывался наш шаблон. Например «ghost» — ../themes/ghost.
* Файл с каринкой-превьюшкой вашего шаблона должен называться preview@2x.png и находится в корне шаблона.
* Информация о вашем шаблоне хранится в файле theme-info.php в корневой папке шаблона и содержит в себе:

{% highlight ruby %}
<?php return array (
    'display_name' => array (
        'en' => 'Ghost',
        'ru' => 'Призрак',
    ),
); ?>
{% endhighlight %}

Называем свою тему для русской и английской версии для отображения в ~~админке~~ настройках сайта.

## Структура папок

<div block>
<p><mark>../themes/ghost/images</mark> — Папка с изображениями темы.</p>
<p><mark>../themes/ghost/js</mark> — Папка со скриптами.</p>
<p><mark>../themes/ghost/styles</mark> — Папка со стилями.</p>
<p><mark>../themes/ghost/templates</mark> — Файлы шаблона.</p>
</div>

Если файлов в папках вашего шаблона нет, они будут браться из стандартной темы Эгеи, которая располагается по пути <mark>../system/theme</mark>.

## Шаблоны

Теперь стоит подробнее разобрать содержимое папки <mark>../system/theme/templates</mark> стандартного шаблона Эгеи. Чтобы понять как выглядит тот или иной элемент шаблона я добавила скриншоты, наводите мышью на заголовки для их отображения.

<div base>
<p pic><mark>author-menu.tmpl.php</mark> — Меню автора.
<img src="http://i.imgur.com/Xixlisq.png"/></p>
<p pic><mark>comments-heading.tmpl.php</mark> — Заголовок списка комментариев с счетчиком их количества.
<img src="http://i.imgur.com/j4FJTYb.png"/></p>
<p pic><mark>comments.tmpl.php</mark> — Список комментариев.
<img src="http://i.imgur.com/aBRjPgN.png"/></p>
<p pic><mark>drafts.tmpl.php</mark> — Список черновиков.
<img src="http://i.imgur.com/y5rRFnl.png"/></p>
<p pic><mark>form-comment.tmpl.php</mark> — Форма комментирования.
<img src="http://i.imgur.com/k9i1Fiq.png"/></p>
<p pic><mark>form-database.tmpl.php</mark> — Форма подключения к базе данных.
<img src="http://i.imgur.com/yLs600v.png"/></p>
<p pic><mark>form-install.tmpl.php</mark> — Форма установки Эгеи.</p>
<p pic><mark>form-login.tmpl.php</mark> — Форма авторизации.
<img src="http://i.imgur.com/s25cnt0.png"/></p>
<p pic><mark>form-note-delete.tmpl.php</mark> — Форма удаления поста.
<img src="http://i.imgur.com/9odhCTC.png"/></p>
<p pic><mark>form-note-publish.tmpl.php</mark> — Кнопка публикации поста.
<img src="http://i.imgur.com/Oteslpu.png"/></p>
<p pic><mark>form-note.tmpl.php</mark> — Форма публикации поста.
<img src="http://i.imgur.com/YibeAcF.png"/></p>
<p pic><mark>form-password.tmpl.php</mark> — Форма смены админ-пароля.
<img src="http://i.imgur.com/E6Y6Hdk.png"/></p>
<p pic><mark>form-preferences.tmpl.php</mark> — Форма общих настроек блога.
<img src="http://i.imgur.com/TT6aEAI.png"/></p>
<p pic><mark>form-tag-delete.tmpl.php</mark> — Форма удаления тега.
<img src="http://i.imgur.com/qnX41i4.png"/></p>
<p pic><mark>form-tag.tmpl.php</mark> — Форма редактирования тега.
<img src="http://i.imgur.com/hSugesE.png"/></p>
<p pic><mark>head.tmpl.php</mark> — Метатеги в head.</p>
<p pic><mark>heading.tmpl.php</mark> — Заголовки.
<img src="http://i.imgur.com/ErKitlN.png"/></p>
<p pic><mark>init-script.tmpl.php</mark> — Подключение дополнительных скриптов.</p>
<p pic><mark>layout.tmpl.php</mark> — Основная разметка шаблона внтури body.</p>
<p pic><mark>login-element.tmpl.php</mark> — Кнопка авторизации.
<img src="http://i.imgur.com/n6AasoE.png"/></p>
<p pic><mark>main.tmpl.php</mark> — Общая разметка, подключение скриптов.</p>
<p pic><mark>notes-list.tmpl.php</mark> — Список избранных постов.</p>
<p pic><mark>notes.tmpl.php</mark> — Шаблон поста. Заголовок, текст, дата, теги, ссылка на комментарии.</p>
<p pic><mark>pages-earlier.tmpl.php</mark> — Кнопка к постам «Ранее».
<img src="http://i.imgur.com/Wjgz62o.png"/></p>
<p pic><mark>pages-later.tmpl.php</mark> — Кнопка к постам «Позднее».
<img src="http://i.imgur.com/g0uovmp.png"/></p>
<p pic><mark>pages.tmpl.php</mark> — Навигация между постами.
<img src="http://i.imgur.com/wFFluuo.png"/></p>
<p pic><mark>popular.tmpl.php</mark> — Блок популярных постов.
<img src="http://i.imgur.com/ZEmPi29.png"/></p>
<p pic><mark>search.tmpl.php</mark> — Форма поиска и теги.
<img src="http://i.imgur.com/P7mrga1.png"/></p>
<p pic><mark>tags-menu.tmpl.php</mark> — Список избранных тегов.
<img src="http://i.imgur.com/RHERlFp.png"/></p>
<p pic><mark>tags.tmpl.php</mark> — Страница тегов.
<img src="http://i.imgur.com/t5bEc9V.png"/></p>
<p pic><mark>user-picture.tmpl.php</mark> — Аватар блога.
<img src="http://i.imgur.com/e65kuj9.png"/></p>
</div>

Чтобы внести изменения в ту или иную часть шаблона скопируйте соответствующий файл из стандартной темы <mark>../system/theme/templates</mark> в папку <mark>templates</mark> вашего шаблона и уже там производите все изменения.

## Подключение частей шаблона

Официальная [документация](https://docs.google.com/document/d/1yn7KCHq47oli7IH--skhymjjj2OSlXjcyGOxZ2ZEPeA/edit#heading=h.j2h2wr6xhlie) по шаблонам Эгеи сообщает:

> Шаблон может вызывать другие шаблоны для отображения конкретного фрагмента:
> _T () — вызывает шаблон по имени.
> _T_FOR () — вызывает шаблон по имени, если в массиве $content есть ключ с таким именем.
> _X () — вставляет дополнительный блок (не забывайте это использовать в своих шаблонах там, где это делают комплектные).
> Шаблон layout.tmpl.php «срабатывает» потому, что main.tmpl.php вызывает его для формирования тела страницы.

Давайте разберем это на примере — добавим блок со случайной цитатой. Создадим файл <mark>quote.tmpl.php</mark> в <mark>../themes/ghost/templates</mark> со следующим несложным кодом:

{% highlight ruby %}
<div class="e2-quote">
    <?php
        $quotes[] = '
        <p>Ибо здесь, похоже, мы не найдем ничего, кроме, как сказала бы Мильва, ремонтизма.</p>
        <span>Анджей Сапковский - Владычица Озера</span>';
        $quotes[] = '
        <p>Цири громко чертыхнулась, повторив любимое выражение Весемира, значение которого было ей не вполне ясно. Потом добавила еще несколько слов, услышанных от Ярпена Зигрина, значение которых было для нее вообще полнейшей загадкой.</p>
        <span>Анджей Сапковский - Кровь Эльфов</span>';
        $quotes[] = '
        <p>Весемир кивал, время от времени вставляя замечания, из которых следовало только то, что «в его времена» все было лучше, логичнее, приличнее и здоровее.</p>
        <span>Анджей Сапковский - Последнее Желание</span>';

        srand ((double) microtime() * 1000000);
        $random_number = rand(0,count($quotes)-1);
        echo ($quotes[$random_number]);
    ?>
</div>
{% endhighlight %}

Теперь достаточно открыть <mark>layout.tmpl.php</mark> и где-нибудь перед footer’ом добавить вывод шаблона <mark>quote.tmpl.php</mark> средством специального макроса.

{% highlight ruby %}
<?php _T ('quote') ?>
{% endhighlight %}

Чтобы блок с случайными цитатами отображался только на главной странице оберните его соответствующим параметром:

{% highlight ruby %}
<?php if ($content['class'] == 'frontpage') { ?>
    <?php _T ('quote') ?>
<?php } ?>
{% endhighlight %}

Таким несложным способом вы можете добавлять новые блоки на страницы своего блога. По такому же принципу строятся все остальные страницы шаблона. Например если мы посмотрим стандартный <p>layout.tmpl.php</p> с 47 по 59 строку, то увидим как подхватываются почти все основные шаблоны сайта.

## Подключение собственных JS и CSS

Для подключения JS и CSS в Эгее также существуют специальные макросы. Для наглядности откройте стандартный <mark>main.tmpl.php</mark> и посмотрите в конец файла, после закрывающегося тега <mark>body</mark>:

{% highlight ruby %}
<?php _CSS ('main') ?>
<?php _JS ('main') ?>
{% endhighlight %}

Здесь подхватываются <mark>../js/main.js</mark> и <mark>../styles/main.css</mark> из папки вашего шаблона. Для примера, давайте добавим анимацию появления постов с помощью [wow.js](https://github.com/matthieua/WOW). Скачайте сам wow.js и положите в папку <mark>js</mark> вашего шаблона. Также скачайте [animate.css](https://github.com/daneden/animate.css) и разместите в папке <mark>styles</mark>. Откройте <mark>main.tmpl.php</mark> и подключите их:

{% highlight ruby %}
<?php _CSS ('animate') ?>
<?php _JS ('wow') ?>
{% endhighlight %}

Далее в файл <mark>init-script.tmpl.php</mark> понадобится добавить следующий код с настройками wow.js:

{% highlight ruby %}
<script type="text/javascript">
    var wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function(box) {
            },
            scrollContainer: null
        }
    );
    wow.init();
</script>
{% endhighlight %}

Теперь остается открыть шаблон <mark>notes.tmpl.php</mark> и к основному div’у поста (18 строка) добавить класс <mark>wow fadeIn</mark>, а в <mark>main.css</mark> добавить <mark>.wow { visibility: hidden; }</mark>. По аналогии с данным примером в ваш шаблон можно добавлять какие угодно скрипты и стили.