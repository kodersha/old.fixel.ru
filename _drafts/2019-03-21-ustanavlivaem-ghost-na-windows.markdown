---
title: Устанавливаем Ghost на Windows
tags:
- Веб
- Ghost
- Гайды
- CMS
- PowerShell
---

Для того чтобы установить блоговоый движок [Ghost][1] на `Windows`, перове, что нужно сделать, установить [node.js для windows][2]. После чего, открываем `PowerShell` от Администратора и устанавливаем `npm` пакет [ghost][3]:

{% highlight shell %}
npm install ghost-cli@latest -g
{% endhighlight %}

Дополнительно установите [windows-build-tools][4]*:

{% highlight shell %}
npm install --global --production windows-build-tools
{% endhighlight %}

_*Установка может занять до получаса._
---

На случай возникновения ошибок, проверьте правильность путей `PowerShell`. Для этого нажмите правой кнопкой мыши на `Этот компьютер`, откройте `Свойства`, далее `Дополнительные параметры системы`, внизу кликните на `Переменные среды...`. В разделе `Системные переменные`, в графе `PATH`, среди проичх должны быть эти пути:

{% highlight shell %}
%SystemRoot%\system32\WindowsPowerShell\v1.0\Modules
%SystemRoot%\system32\WindowsPowerShell\v1.0
{% endhighlight %}

_Будьте внимательны, удалив из `Переменных сред` нужные занчения, можно сломать Windows. Перед изменениями лучше создать точку восстановления. На всякий случай._

[1]:    https://ghost.org/ru/
[2]:    https://nodejs.org/en/
[3]:    https://www.npmjs.com/package/ghost
[4]:    https://www.npmjs.com/package/windows-build-tools