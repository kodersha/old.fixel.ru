---
title: "Устанавливаем Jekyll на Mac OS"
thumbnail: "v1519563355/thumb_kvlvd6.jpg"
category: "Веб"
tags:
- Гайд
- Jekyll
---

В продолжении темы локальной установки Jekyll, на этот раз небольшой гайд для пользователей Mac OS.

<!-- more -->

Чтобы установить Jekyll на Mac OS, для начала понадобится установить инструмент разработчика [Xcode из AppStore][1], запустить его и принять лицензионное соглашение. После, установим инструменты командной строки:

{% highlight shell %}
xcode-select --install
{% endhighlight %}

Далее, установим менеджер недостающих пакетов [Homebrew][2], для этого вводим в терминал:

{% highlight shell %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

Теперь установим Ruby.

{% highlight shell %}
brew install ruby
{% endhighlight %}

Проверим установку.

{% highlight shell %}
ruby -v
{% endhighlight %}

Установим bundler.

{% highlight shell %}
gem install bundler
{% endhighlight %}

Теперь установим сам Jekyll.

{% highlight shell %}
gem install jekyll
{% endhighlight %}

Проверим установленную версию.

{% highlight shell %}
jekyll -v
{% endhighlight %}

Теперь можно создать папку для Jekyll блога, например по пути `~/Documents/Jekyll`. Переходим в нее:

{% highlight shell %}
cd ~/Documents/Jekyll/
{% endhighlight %}

Устанавливаем сам блог, `site-name` можно заменить на свое.

{% highlight shell %}
jekyll new site-name
{% endhighlight %}

Перейдём в каталог с созданным блогом.

{% highlight shell %}
cd ~/Documents/Jekyll/site-name/
{% endhighlight %}

Запустим:

{% highlight shell %}
bundle exec jekyll serve
{% endhighlight %}

Теперь ваш сайт доступен по локальному адресу [localhost:4000][3].

[1]:    https://itunes.apple.com/ru/app/xcode/id497799835?mt=12
[2]:    https://brew.sh/index_ru.html
[3]:    http://localhost:4000