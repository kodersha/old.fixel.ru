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

{% highlight php %}
<?php return array (
    'display_name' => array (
        'en' => 'Ghost',
        'ru' => 'Призрак',
    ),
); ?>
{% endhighlight %}

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

Теперь стоит подробнее разобрать содержимое папки `../system/theme/templates` стандартного шаблона Эгеи. Чтобы понять как выглядит тот или иной элемент шаблона я добавила скриншоты.

---
{: .easy}

`author-menu.tmpl.php` — Меню автора.

{% cloudinary src:v1519055157/01_u94w7j.png class:"left wrap without-shadow" %}

---
{: .easy}

`comments-heading.tmpl.php` — Заголовок списка комментариев с счетчиком их количества.

{% cloudinary src:v1519055157/02_dqegcp.png class:"left wrap without-shadow" %}

---
{: .easy}

`comments.tmpl.php` — Список комментариев.

{% cloudinary src:v1519055157/03_oiureh.png class:"left wrap without-shadow" %}

---
{: .easy}

`drafts.tmpl.php` — Список черновиков.

{% cloudinary src:v1519055157/04_gegc6o.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-comment.tmpl.php` — Форма комментирования.

{% cloudinary src:v1519055157/05_iffrnu.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-database.tmpl.php` — Форма подключения к базе данных.

{% cloudinary src:v1519055157/06_yor8w5.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-install.tmpl.php` — Форма установки Эгеи.

---
{: .easy}

`form-login.tmpl.php` — Форма авторизации.

{% cloudinary src:v1519055158/07_tyqwia.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-note-delete.tmpl.php` — Форма удаления поста.

{% cloudinary src:v1519055158/08_qujnf6.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-note-publish.tmpl.php` — Кнопка публикации поста.

{% cloudinary src:v1519055158/09_li03z6.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-note.tmpl.php` — Форма публикации поста.

{% cloudinary src:v1519055158/10_ufuc0b.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-password.tmpl.php` — Форма смены админ-пароля.

{% cloudinary src:v1519055158/11_hhe2au.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-preferences.tmpl.php` — Форма общих настроек блога.

{% cloudinary src:v1519055160/13_i8udli.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-tag-delete.tmpl.php` — Форма удаления тега.

{% cloudinary src:v1519055159/14_jwipj8.png class:"left wrap without-shadow" %}

---
{: .easy}

`form-tag.tmpl.php` — Форма редактирования тега.

{% cloudinary src:v1519055160/15_p02lox.png class:"left wrap without-shadow" %}

---
{: .easy}

`head.tmpl.php` — Метатеги в head.

---
{: .easy}

`heading.tmpl.php` — Заголовки.

{% cloudinary src:v1519055159/16_sxxqud.png class:"left wrap without-shadow" %}

---
{: .easy}

`init-script.tmpl.php` — Подключение дополнительных скриптов.

---
{: .easy}

`layout.tmpl.php` — Основная разметка шаблона внтури body.

---
{: .easy}

`login-element.tmpl.php` — Кнопка авторизации.

{% cloudinary src:v1519055159/17_gtjx4a.png class:"left wrap without-shadow" %}

---
{: .easy}

`main.tmpl.php` — Общая разметка, подключение скриптов.

---
{: .easy}

`notes-list.tmpl.php` — Список избранных постов.

---
{: .easy}

`notes.tmpl.php` — Шаблон поста. Заголовок, текст, дата, теги, ссылка на комментарии.

---
{: .easy}

`pages-earlier.tmpl.php` — Кнопка к постам «Ранее».

{% cloudinary src:v1519055159/18_z1fn67.png class:"left wrap without-shadow" %}

---
{: .easy}

`pages-later.tmpl.php` — Кнопка к постам «Позднее».

{% cloudinary src:v1519055160/19_twa7wi.png class:"left wrap without-shadow" %}

---
{: .easy}

`pages.tmpl.php` — Навигация между постами.

{% cloudinary src:v1519055161/20_vsrib7.png class:"left wrap without-shadow" %}

---
{: .easy}

`popular.tmpl.php` — Блок популярных постов.

{% cloudinary src:v1519055160/21_ukwlhu.png class:"left wrap without-shadow" %}

---
{: .easy}

`search.tmpl.php` — Форма поиска и теги.

{% cloudinary src:v1519055160/22_r7lfmw.png class:"left wrap without-shadow" %}

---
{: .easy}

`tags-menu.tmpl.php` — Список избранных тегов.

{% cloudinary src:v1519055160/23_lbl7ii.png class:"left wrap without-shadow" %}

---
{: .easy}

`tags.tmpl.php` — Страница тегов.

{% cloudinary src:v1519055161/24_fldmsy.png class:"left wrap without-shadow" %}

---
{: .easy}

`user-blockture.tmpl.php` — Аватар блога.

{% cloudinary src:v1519055161/25_zw1ide.png class:"left wrap without-shadow" %}

---
{: .easy}

Чтобы внести изменения в ту или иную часть шаблона скопируйте соответствующий файл из стандартной темы `../system/theme/templates` в папку `templates` вашего шаблона и уже там производите все изменения.

## Подключение частей шаблона

Официальная [документация][2] по шаблонам Эгеи сообщает:


> Шаблон может вызывать другие шаблоны для отображения конкретного фрагмента:
> _T () — вызывает шаблон по имени.
> _T_FOR () — вызывает шаблон по имени, если в массиве $content есть ключ с таким именем.
> _X () — вставляет дополнительный блок (не забывайте это использовать в своих шаблонах там, где это делают комплектные).
> Шаблон layout.tmpl.php «срабатывает» потому, что main.tmpl.php вызывает его для формирования тела страницы.

Давайте разберем это на примере — добавим блок со случайной цитатой. Создадим файл `quote.tmpl.php` в `../themes/ghost/templates` со следующим несложным кодом:

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

Теперь достаточно открыть `layout.tmpl.php` и где-нибудь перед footer’ом добавить вывод шаблона `quote.tmpl.php` средством специального макроса.

{% highlight php %}
<?php _T ('quote') ?>
{% endhighlight %}

Чтобы блок с случайными цитатами отображался только на главной странице оберните его соответствующим параметром:

{% highlight php %}
<?php if ($content['class'] == 'frontpage') { ?>
    <?php _T ('quote') ?>
<?php } ?>
{% endhighlight %}

Таким несложным способом вы можете добавлять новые блоки на страницы своего блога. По такому же принципу строятся все остальные страницы шаблона. Например если мы посмотрим стандартный `layout.tmpl.php` с 47 по 59 строку, то увидим как подхватываются почти все основные шаблоны сайта.

## Подключение собственных JS и CSS

Для подключения JS и CSS в Эгее также существуют специальные макросы. Для наглядности откройте стандартный `main.tmpl.php` и посмотрите в конец файла, после закрывающегося тега `body`:

{% highlight php %}
<?php _CSS ('main') ?>
<?php _JS ('main') ?>
{% endhighlight %}

Здесь подхватываются `../js/main.js` и `../styles/main.css` из папки вашего шаблона. Для примера, давайте добавим анимацию появления постов с помощью [wow.js][3]. Скачайте сам wow.js и положите в папку `js` вашего шаблона. Также скачайте [animate.css][4] и разместите в папке `styles`. Откройте `main.tmpl.php` и подключите их:

{% highlight php %}
<?php _CSS ('animate') ?>
<?php _JS ('wow') ?>
{% endhighlight %}

Далее в файл `init-script.tmpl.php` понадобится добавить следующий код с настройками `wow.js`:

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

Теперь остается открыть шаблон `notes.tmpl.php` и к основному div’у поста (18 строка) добавить класс `wow fadeIn`, а в `main.css` добавить `.wow { visibility: hidden; }`. По аналогии с данным примером в ваш шаблон можно добавлять какие угодно скрипты и стили.

Смотрите ещё: [Кат в Эгее][5], [Свои шрифты в Эгее][6] и [Сноски на полях в Эгее][7].
{: .subtext}


[1]:    http://blogengine.ru
[2]:    https://docs.google.com/document/d/1yn7KCHq47oli7IH--skhymjjj2OSlXjcyGOxZ2ZEPeA/edit#heading=h.j2h2wr6xhlie
[3]:    https://github.com/matthieua/WOW
[4]:    https://github.com/daneden/animate.css
[5]:    /blog/kat-v-egee
[6]:    /blog/svoi-shrifty-v-egee/
[7]:    /blog/snoski-na-poljah-v-egee/