---
title: "Свои шрифты в Эгее"
thumbnail: "v1519562707/thumb_ny948f.jpg"
category: "Веб"
tags:
- Эгея
- Гайд
---

Меня тут спрашивают «Как прикрутить свои шрифты к Эгее, но не от Google Fonts?», а потому, расскажу на примере стандартного шаблона `plain` и движка стабильной версии `3118`.

<!-- more -->

Для начала нам понадобятся сами шрифты. Для примера изменим стандартный шрифт заголовков на Gilroy Extra Bold, бесплатную версию которого можно [скачать у автора][1], а бесплатную `webfont` версию, которую я использую в примере, можно скачать [отсюда][2]. После, откроем каталог шаблона:

{% highlight shell %}
../themes/plain/styles/
{% endhighlight %}

И создадим в нем папки `../fonts/gilroy`, куда положим скачанные файлы шрифта в форматах `eot`, `ttf`, `woff` и `woff2`. В папке `styles` шаблона создадим файл `fonts.css` где подключаем шрифт:

{% highlight css %}
@font-face {
    font-family: 'Gilroy-ExtraBold';
    src: url('fonts/gilroy/34D194_0_0.eot');
    src: url('fonts/gilroy/34D194_0_0.eot?#iefix') format('embedded-opentype'),
         url('fonts/gilroy/34D194_0_0.woff2') format('woff2'),
         url('fonts/gilroy/34D194_0_0.woff') format('woff'),
         url('fonts/gilroy/34D194_0_0.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
}
{% endhighlight %}

К слову, подробнее о @font-face можно почитать [здесь][3]. Чтобы подключить `fonts.css` с вашими шрифтами к шаблону, внесем изменения в `main.tmpl.php`, для этого скопируем его из:

{% highlight shell %}
../system/theme/templates/
{% endhighlight %}

И вставим в:

{% highlight shell %}
../themes/plain/templates/
{% endhighlight %}

Помните, что вносить изменения в файлы стандартного шаблона можно только скопировав их в папку своего шаблона, иначе при обновлении движка все ваши измнениея пропадут. Откроем скопированный `main.tmpl.php` и после 41 строки добавим:

{% highlight php %}
<?php _CSS ('fonts') ?>
{% endhighlight %}

Всё, css с вашими шрифтами подключен к шаблону. Тепепь внесем изменения в основной файл стилей `main.css`, найдем класс `.e2-note h1` и заменим на:

{% highlight css %}
.e2-note h1 {
    color: #000;
    font-size: 40px;
    line-height: 1.4;
    max-width: 720px;
    margin-bottom: 8px;
    padding-right: 25px;
    font-family: 'Gilroy-ExtraBold', sans-serif;
}
{% endhighlight %}

Чтобы разминимизировать `main.css`, для более удобного внесения правок, стоит воспользоваться полезным [сервисом][4]. Таким несложным образом можно добавлять любые нестандартные шрифты в свой шаблон Эгеи.

Смотрите ещё: [Кат в Эгее][5], [Пишем свой шаблон для Эгеи][6] и [Сноски на полях в Эгее][7].
{: .aside}

[1]:	https://www.tinkov.info/gilroy.html
[2]:	https://www.myfonts.com/fonts/radomir-tinkov/gilroy/extra-bold/
[3]:	http://htmlbook.ru/css/font-face
[4]:	http://unminify.com/
[5]:	/blog/kat-v-egee
[6]:	/blog/pishem-svoy-shablon-dlya-egei/
[7]:    /blog/snoski-na-poljah-v-egee/