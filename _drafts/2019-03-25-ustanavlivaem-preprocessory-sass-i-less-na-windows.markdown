---
title: Устанавливаем препроцессоры Sass и Less на Windows
tags:
- Веб
- Гайды
- PowerShell
---

Устанавливаем [node.js][1], затем открываем `PowerShell` от Администратора и устанавливаем [Sass][2].

{% highlight shell %}
npm install sass -g
{% endhighlight %}

---

Устанваливаем [Less][3]:

{% highlight shell %}
npm install less -g
npm install less-plugin-clean-css -g
{% endhighlight %}

Скомпилировать less в минимизированный и чистый css можно командой:

{% highlight shell %}
lessc build.less style.css --clean-css="--s1 --advanced --compatibility=ie8"
{% endhighlight %}

Живой пример использования:

{% highlight shell %}
lessc D:/Dropbox/#github/blog/assets/less/build.less D:/Dropbox/#github/blog/assets/style.css --clean-css="--s1 --advanced --compatibility=ie8"
{% endhighlight %}

[1]:    https://nodejs.org/en/
[2]:    https://sass-lang.com
[3]:    http://lesscss.org