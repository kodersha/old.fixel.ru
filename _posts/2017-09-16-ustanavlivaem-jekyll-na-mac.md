---
title: "Устанавливаем Jekyll на Mac OS"
layout: post
category: "Веб"
tags:
- CMS
- Гайд
- Jekyll
---

В продолжении темы локальной установки Jekyll, на этот раз небольшой гайд для пользователей Mac OS. Чтобы установить Jekyll на Mac OS, для начала понадобится установить инструмент разработчика [Xcode из AppStore](https://itunes.apple.com/ru/app/xcode/id497799835?mt=12), запустить его и принять лицензионное соглашение. После, установим инструменты командной строки:

{% highlight ruby %}
xcode-select --install
{% endhighlight %}

Далее, установим менеджер недостающих пакетов [Homebrew](https://brew.sh/index_ru.html), для этого вводим в терминал:

{% highlight ruby %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

Теперь установим Ruby.

{% highlight ruby %}
brew install ruby
{% endhighlight %}

Проверим установку.

{% highlight ruby %}
ruby -v
{% endhighlight %}

Установим bundler.

{% highlight ruby %}
gem install bundler
{% endhighlight %}

Теперь установим сам Jekyll.

{% highlight ruby %}
gem install jekyll
{% endhighlight %}

Проверим установленную версию.

{% highlight ruby %}
jekyll -v
{% endhighlight %}

Теперь можно создать папку для Jekyll блога, например по пути <mark>~/Documents/Jekyll</mark>. Переходим в нее:

{% highlight ruby %}
cd ~/Documents/Jekyll/
{% endhighlight %}

Устанавливаем сам блог, <mark>site-name</mark> можно заменить на свое.

{% highlight ruby %}
jekyll new site-name
{% endhighlight %}

Перейдём в каталог с созданным блогом.

{% highlight ruby %}
cd ~/Documents/Jekyll/site-name/
{% endhighlight %}

Запустим:

{% highlight ruby %}
bundle exec jekyll serve
{% endhighlight %}

Теперь ваш сайт доступен по локальному адресу [locaclhost:4000](http://localhost:4000).