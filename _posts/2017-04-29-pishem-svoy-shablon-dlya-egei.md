---
title: "Пишем свой шаблон для Эгеи"
thumbnail: "v1519562826/thumb_hp106z.jpg"
toc: "true"
category: "Веб"
tags:
- Эгея
- Гайд
---

Написать свой шаблон для [Эгеи][1] не так сложно как может показаться на первый взгляд. Давайте разберем основные принципы построения шаблона используя некоторые простые примеры.

<!-- more -->

* Пользовательские шаблоны находятся в папке ../themes вашего блога. Создадим в ней папку и назовем ее так, как хотим чтобы назывался наш шаблон. Например «ghost» — ../themes/ghost.
* Файл с каринкой-превьюшкой вашего шаблона должен называться preview@2x.png и находится в корне шаблона.
* Информация о вашем шаблоне хранится в файле theme-info.php в корневой папке шаблона и содержит в себе:

<div color main>
{% highlight php %}
<?php return array (
    'display_name' => array (
        'en' => 'Ghost',
        'ru' => 'Призрак',
    ),
); ?>
{% endhighlight %}
</div>

Называем свою тему для русской и английской версии для отображения в настройках сайта.

## Структура папок

<div block>
    <p><mark>../themes/ghost/images</mark> — Папка с изображениями темы.</p>
    <p><mark>../themes/ghost/js</mark> — Папка со скриптами.</p>
    <p><mark>../themes/ghost/styles</mark> — Папка со стилями.</p>
    <p><mark>../themes/ghost/templates</mark> — Файлы шаблона.</p>
</div>

Если файлов в папках вашего шаблона нет, они будут браться из стандартной темы Эгеи, которая располагается по пути `../system/theme`.

## Шаблоны

Теперь стоит подробнее разобрать содержимое папки `../system/theme/templates` стандартного шаблона Эгеи. Чтобы понять как выглядит тот или иной элемент шаблона я добавила скриншоты, наводите мышью на заголовки для их отображения.

<div block>
    <div pic>
        <mark>author-menu.tmpl.php</mark> — Меню автора.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055157/01_u94w7j.png"/>
    </div>
    <div pic>
        <mark>comments-heading.tmpl.php</mark> — Заголовок списка комментариев с счетчиком их количества.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055157/02_dqegcp.png"/>
    </div>
    <div pic>
        <mark>comments.tmpl.php</mark> — Список комментариев.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055157/03_oiureh.png"/>
    </div>
    <div pic>
        <mark>drafts.tmpl.php</mark> — Список черновиков.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055157/04_gegc6o.png"/>
    </div>
    <div pic>
        <mark>form-comment.tmpl.php</mark> — Форма комментирования.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055157/05_iffrnu.png"/>
    </div>
    <div pic>
        <mark>form-database.tmpl.php</mark> — Форма подключения к базе данных.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055157/06_yor8w5.png"/>
    </div>
    <div pic>
        <mark>form-install.tmpl.php</mark> — Форма установки Эгеи.
    </div>
    <div pic>
        <mark>form-login.tmpl.php</mark> — Форма авторизации.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055158/07_tyqwia.png"/>
    </div>
    <div pic>
        <mark>form-note-delete.tmpl.php</mark> — Форма удаления поста.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055158/08_qujnf6.png"/>
    </div>
    <div pic>
        <mark>form-note-publish.tmpl.php</mark> — Кнопка публикации поста.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055158/09_li03z6.png"/>
    </div>
    <div pic>
        <mark>form-note.tmpl.php</mark> — Форма публикации поста.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055158/10_ufuc0b.png"/>
    </div>
    <div pic>
        <mark>form-password.tmpl.php</mark> — Форма смены админ-пароля.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055158/11_hhe2au.png"/>
    </div>
    <div pic>
        <mark>form-preferences.tmpl.php</mark> — Форма общих настроек блога.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055160/13_i8udli.png"/>
    </div>
    <div pic>
        <mark>form-tag-delete.tmpl.php</mark> — Форма удаления тега.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055159/14_jwipj8.png"/>
    </div>
    <div pic>
        <mark>form-tag.tmpl.php</mark> — Форма редактирования тега.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055160/15_p02lox.png"/>
    </div>
    <div pic>
        <mark>head.tmpl.php</mark> — Метатеги в head.
    </div>
    <div pic>
        <mark>heading.tmpl.php</mark> — Заголовки.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055159/16_sxxqud.png"/>
    </div>
    <div pic>
        <mark>init-script.tmpl.php</mark> — Подключение дополнительных скриптов.
    </div>
    <div pic>
        <mark>layout.tmpl.php</mark> — Основная разметка шаблона внтури body.
    </div>
    <div pic>
        <mark>login-element.tmpl.php</mark> — Кнопка авторизации.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055159/17_gtjx4a.png"/>
    </div>
    <div pic>
        <mark>main.tmpl.php</mark> — Общая разметка, подключение скриптов.
    </div>
    <div pic>
        <mark>notes-list.tmpl.php</mark> — Список избранных постов.
    </div>
    <div pic>
        <mark>notes.tmpl.php</mark> — Шаблон поста. Заголовок, текст, дата, теги, ссылка на комментарии.
    </div>
    <div pic>
        <mark>pages-earlier.tmpl.php</mark> — Кнопка к постам «Ранее».
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055159/18_z1fn67.png"/>
    </div>
    <div pic>
        <mark>pages-later.tmpl.php</mark> — Кнопка к постам «Позднее».
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055160/19_twa7wi.png"/>
    </div>
    <div pic>
        <mark>pages.tmpl.php</mark> — Навигация между постами.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055161/20_vsrib7.png"/>
    </div>
    <div pic>
        <mark>popular.tmpl.php</mark> — Блок популярных постов.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055160/21_ukwlhu.png"/>
    </div>
    <div pic>
        <mark>search.tmpl.php</mark> — Форма поиска и теги.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055160/22_r7lfmw.png"/>
    </div>
    <div pic>
        <mark>tags-menu.tmpl.php</mark> — Список избранных тегов.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055160/23_lbl7ii.png"/>
    </div>
    <div pic>
        <mark>tags.tmpl.php</mark> — Страница тегов.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055161/24_fldmsy.png"/>
    </div>
    <div pic>
        <mark>user-picture.tmpl.php</mark> — Аватар блога.
        <img src="https://res.cloudinary.com/milkleaks/image/upload/v1519055161/25_zw1ide.png"/>
    </div>
</div>

Чтобы внести изменения в ту или иную часть шаблона скопируйте соответствующий файл из стандартной темы `../system/theme/templates` в папку `templates` вашего шаблона и уже там производите все изменения.

## Подключение частей шаблона

Официальная [документация][2] по шаблонам Эгеи сообщает:


> Шаблон может вызывать другие шаблоны для отображения конкретного фрагмента:
> _T () — вызывает шаблон по имени.
> _T_FOR () — вызывает шаблон по имени, если в массиве $content есть ключ с таким именем.
> _X () — вставляет дополнительный блок (не забывайте это использовать в своих шаблонах там, где это делают комплектные).
> Шаблон layout.tmpl.php «срабатывает» потому, что main.tmpl.php вызывает его для формирования тела страницы.
{: .main}

Давайте разберем это на примере — добавим блок со случайной цитатой. Создадим файл `quote.tmpl.php` в `../themes/ghost/templates` со следующим несложным кодом:

<div color outer>
{% highlight php %}
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
</div>

Теперь достаточно открыть `layout.tmpl.php` и где-нибудь перед footer’ом добавить вывод шаблона `quote.tmpl.php` средством специального макроса.

{% highlight php %}
<?php _T ('quote') ?>
{% endhighlight %}

Чтобы блок с случайными цитатами отображался только на главной странице оберните его соответствующим параметром:

<div color main>
{% highlight php %}
<?php if ($content['class'] == 'frontpage') { ?>
    <?php _T ('quote') ?>
<?php } ?>
{% endhighlight %}
</div>

Таким несложным способом вы можете добавлять новые блоки на страницы своего блога. По такому же принципу строятся все остальные страницы шаблона. Например если мы посмотрим стандартный `layout.tmpl.php` с 47 по 59 строку, то увидим как подхватываются почти все основные шаблоны сайта.

## Подключение собственных JS и CSS

Для подключения JS и CSS в Эгее также существуют специальные макросы. Для наглядности откройте стандартный `main.tmpl.php` и посмотрите в конец файла, после закрывающегося тега `body`:

<div color main>
{% highlight php %}
<?php _CSS ('main') ?>
<?php _JS ('main') ?>
{% endhighlight %}
</div>

Здесь подхватываются `../js/main.js` и `../styles/main.css` из папки вашего шаблона. Для примера, давайте добавим анимацию появления постов с помощью [wow.js][3]. Скачайте сам wow.js и положите в папку `js` вашего шаблона. Также скачайте [animate.css][4] и разместите в папке `styles`. Откройте `main.tmpl.php` и подключите их:

<div color main>
{% highlight php %}
<?php _CSS ('animate') ?>
<?php _JS ('wow') ?>
{% endhighlight %}
</div>

Далее в файл `init-script.tmpl.php` понадобится добавить следующий код с настройками `wow.js`:

<div color main>
{% highlight html %}
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
</div>

Теперь остается открыть шаблон `notes.tmpl.php` и к основному div’у поста (18 строка) добавить класс `wow fadeIn`, а в `main.css` добавить `.wow { visibility: hidden; }`. По аналогии с данным примером в ваш шаблон можно добавлять какие угодно скрипты и стили.

Смотрите ещё: [Кат в Эгее][5] и [Свои шрифты в Эгее][6].
{: .aside}


[1]:    http://blogengine.ru
[2]:    https://docs.google.com/document/d/1yn7KCHq47oli7IH--skhymjjj2OSlXjcyGOxZ2ZEPeA/edit#heading=h.j2h2wr6xhlie
[3]:    https://github.com/matthieua/WOW
[4]:    https://github.com/daneden/animate.css
[5]:    /blog/kat-v-egee
[6]:    /blog/svoi-shrifty-v-egee/