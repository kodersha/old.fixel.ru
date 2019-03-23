---
title: Устанавливаем Ghost на Windows
tags:
- Веб
- Ghost
- Гайды
- CMS
---

Для того чтобы установить блоговоый движок [Ghost][1] на `Windows`, перове, что нужно сделать, установить [node.js для windows][2]. После чего открываем `PowerShell` в Windows и устанавливаем необходимые компоненты:

{% highlight shell %}
npm install --global --production windows-build-tools
{% endhighlight %}

Затем, устанавливаем сам `ghost`:

{% highlight shell %}
npm install ghost-cli@latest -g
{% endhighlight %}

[1]:    https://ghost.org/ru/
[2]:    https://nodejs.org/en/