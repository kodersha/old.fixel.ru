---
title: Устанавливаем Jekyll на Windows
tags:
- Веб
- Гайды
- Jekyll
---

По мере настройки и доведения блога до ума я столкнулась с необходимостью установки тех или иных плагинов на [Jekyll][1], а значит ограничиваться [GitHub Pages][2] стало нельзя. А потому, я решила собирать сайт локально и отправлять на GitHub Pages уже готовое. Минусы - Сайт привязан к компьютеру, если Windows слетит настраивать придется заново. Плюсы - Можно использовать любые плагины, редактировать сайт локально прежде чем выпустить в свет. В целом, за сохранность блога можно не беспокоится, исходные файлы хранится в `master` ветке репозитория, а собранный сайт в ветке `gh-pages`, до кучи мой сайт хранятся еще и в Dropbox, таким образом его можно синхронизировать между компьютерами, но на каждый из них придется ставить Ruby и прочие дистрибутивы.  В общем, для себя и для вас написала этот гайд по установке Jekyll на Windows.

---

Для установки Jekyll на Windows у вас должна быть 64-разрядная Windows 10 старше версии 1607 Anniversary Update. Чтобы узнать версию своей операционной системы откройте **Параметры** - **Система** - **О системе**. Если все в порядке, запустите `PowerShell` от администратора и введите:

{% highlight shell %}
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
{% endhighlight %}

Компьютер перезагрузится. Далее, чтобы установить среду Ubuntu в Windows понадобится включить режим разработчика, откройте **Параметры** - **Обновление и безопасность** - **Для разработчиков** и включите «Режим разработчика».

Устанавливаем среду Ubuntu из [Windows маркета][5], затем запускаем. Дождитесь окончания установки. После её завершения будет предложено ввести имя пользователя и пароль которые могут пригодиться в будущем.

Приступим к установке Jekyll. Но для начала обновим пакеты:

{% highlight shell %}
sudo apt-get update -y && sudo apt-get upgrade -y
{% endhighlight %}

Теперь можно установить Ruby на котором работает Jekyll. Для этого используем репозиторий [BrightBox][6] оптимизированный для Ubuntu. Вводим команды:

{% highlight shell %}
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.6 ruby2.6-dev build-essential
{% endhighlight %}

Обновляем RubyGems.

{% highlight shell %}
sudo gem update
{% endhighlight %}

Теперь осталось установить сам Jekyll.

{% highlight shell %}
sudo gem install jekyll bundler
{% endhighlight %}

Проверить правильность установки можно командой:

{% highlight shell %}
jekyll -v
{% endhighlight %}

Jekyll установлен. Теперь создайте свой блог.

{% highlight shell %}
jekyll new my_blog
{% endhighlight %}

По умолчанию файлы блога  будут находиться по адресу `C:/Пользователи/Имя_пользователя/my_blog`, но его можно размещать и в любой другой папке, на любом диске. Чтобы ничего не потерялось и можно было синхронизироваться между компьютерами я размещаю и использую блог прямо из папки Dropbox'a. Далее переходим в папку с блогом:

{% highlight shell %}
cd my_blog
{% endhighlight %}

Теперь можно запустить Jekyll.

{% highlight shell %}
bundle exec jekyll serve
{% endhighlight %}

Блог станет доступен по локальному адресу [localhost:4000][7].

---
{: .easy}

Для одного из плагинов jekyll мне понадобился gem `nokogiri`, но при установке на Windows Ubuntu он выдавал ошибку. Решение:

{% highlight shell %}
sudo apt install ruby-dev libxml2-dev libxslt-dev pkg-config make clang
{% endhighlight %}

Затем сам nokogiri:

{% highlight shell %}
sudo gem install nokogiri -- --use-system-libraries
{% endhighlight %}

---
{: .easy}

От проблемы `Temporary failure resolving` поможет правка файла:

{% highlight shell %}
sudo nano /etc/resolv.conf 
{% endhighlight %}

Добавить в файл:

{% highlight shell %}
nameserver 8.8.8.8
nameserver 8.8.4.4
{% endhighlight %}

И обновить

{% highlight shell %}
sudo apt-get update && sudo apt-get upgrade
{% endhighlight %}

---

Использованы материалы: [Инструкция с сайта Microsoft][3] и [Официальная документация][4] Jekyll.
{: .subtext}

[1]:    http://jekyllrb.com/
[2]:    https://pages.github.com/
[3]:    https://msdn.microsoft.com/en-us/commandline/wsl/install_guide#for-anniversary-update-and-creators-update-install-using-lxrun
[4]:    https://jekyllrb.com/docs/windows/
[5]:    https://www.microsoft.com/store/productId/9NBLGGH4MSV6
[6]:    https://www.brightbox.com/docs/ruby/ubuntu/
[7]:    http://localhost:4000