---
title: "Сноски на полях в Эгее"
category: "Веб"
tags:
- Эгея
- Гайд
---

Вновь из вопросов в телеграм «Как сделать сноски на полях в Эгее?». Добавим немного магии и стилей в css файл вашего шаблона.

<!-- more -->

<div full color class="light-dark">
{% highlight css %}
@media screen and (min-width: 1050px) {
    .e2-text .aside {
        position: relative;
        text-align: left;
        max-width: 200px;
        margin-left: 4%;
        margin-top: .15em;
        float: right;
        clear: right;
    }
}
.e2-text .aside {
    line-height: 16px;
    font-size: 14px;
    opacity: .8;
}
{% endhighlight %}
</div>

Как использовать? Начиная с Эгеи 2.7 в редакторе можно сделать вот так:

{% highlight html %}
.aside Текст сноски на полях.
{% endhighlight %}

И текст будет обернут классом `.aside`. Можно обернуть напрямую:

{% highlight html %}
<p class="aside">Текст сноски на полях.</p>
{% endhighlight %}

Добавив `.aside` после первого абзаца текста сноска будет отображаться справа от следующего абзаца.

## Способ второй

<div full color class="light-dark">
{% highlight css %}
@media screen and (min-width: 1050px) {
    .e2-text [main] {
        float: left;
        clear: left;
    }
    .e2-text [main]+[aside] {
        position: relative;
        max-width: 200px;
        margin-left: 4%;
        margin-top: .15em;
        float: right;
        clear: right;
    }
    .e2-text [main]+[aside]+* {
        clear: left;
    }
}
.e2-text [aside] {
    line-height: 16px;
    font-size: 14px;
    opacity: .8;
}
{% endhighlight %}
</div>

Как использовать? В редакторе:

{% highlight html %}
<p main>Основной абзац текста.</p>
<p aside>Текст сноски на полях.</p>
{% endhighlight %}

Сноска будет отображаться справа от основного абзаца текста.

---

Для того, чтобы добавить свои стили к шаблону, в папке styles шаблона создайте файл `style.css`, скопируйте `main.tmpl.php` из:

{% highlight shell %}
../system/theme/templates
{% endhighlight %}

И вставьте в:

{% highlight shell %}
../themes/plain/templates
{% endhighlight %}

Отредактируйте `main.tmpl.php` добавив стили после основных стилей `<?php_CSS ('main') ?>` в конце файла.

{% highlight php %}
<?php_CSS ('style') ?>
{% endhighlight %}

Смотрите ещё: [Кат в Эгее][1], [Свои шрифты в Эгее][2] и [Пишем свой шаблон для Эгеи][3].
{: .aside}

[1]:	/blog/kat-v-egee/
[2]:	/blog/svoi-shrifty-v-egee/
[3]:	/blog/pishem-svoy-shablon-dlya-egei/