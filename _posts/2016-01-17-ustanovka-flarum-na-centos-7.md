---
title: "Установка flarum на centOS"
category: "Веб"
tags:
- Гайд
---

Все же если есть блог, стоит в него что нибудь написать. Так вот, не так давно на просторах сети повстречала относительно новый форумный движок — [flarum][1]. Судя по тому, что уже есть, CMS довольно перспективная, симпатичная и вообще быстро развивающаяся. Не смотря на то, что flarum все еще в бета-версии, захотелось поставить её на поддомен и посмотреть чуть более детально. Собственно говоря, в этой статье я описываю процесс установки flarum’a на centOS 7.

<!-- more -->

Ставилась flarum на centOS 7 самого обычного [VDS хостинга][2]. Для установки требуется Apache (с mod_rewrite), Nginx и Lighttpd. PHP версии 5.5 и выше, MySQL 5.5 и конечно же SSH консоль, так как ставится flarum через Сomposer.

## Обновляем PHP

Так как на сервере стоял PHP версии 5.4 нам придется его обновить. Открываем консоль и добавляем репозиторий:

{% highlight shell %}
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
{% endhighlight %}

После добавления репозитория на сервере появится папка /etc/yum.repos.d, переходим в папку и редактируем файл remi.repo. Ищем секцию:

{% highlight conf %}
[remi-php56]
name=Les RPM de remi de PHP 5.6 pour Enterprise Linux 6 - $basearch&nbsp
#baseurl=http://rpms.famillecollet.com/enterprise/6/php56/$basearch/
mirrorlist=http://rpms.famillecollet.com/enterprise/6/php56/mirror
#WARNING: If you enable this repository, you must also enable "remi" 
enabled=0 
gpgcheck=1 
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-remi
{% endhighlight %}

И меняем параметр enabled=0 на enabled=1. Аналогично можно обновится с PHP версии 5.4 до 5.5 в соответствующей секции remi-php55.

Далее редактируем /etc/httpd/conf.d/phpmyadmin.conf. Находим строку с параметром php_admin_value open_basedir и добавляем :/usr/share/doc/. Должно получится следующее:

{% highlight conf %}
php_admin_value open_basedir "/usr/share/phpMyAdmin/:/etc/phpMyAdmin/:/var/lib/phpMyAdmin/:/tmp/:/usr/share/php/:/var/lib/php/session/:/usr/share/doc/"
{% endhighlight %}

Делается это для того, что бы не возникло проблем при обновлении phpmyadmin.

Теперь в консоль можно ввести следующее:

{% highlight shell %}
yum install php -y
{% endhighlight %}

И PHP обновится до 5.6 версии, соответственно. Проверяем:

{% highlight shell %}
php -v
{% endhighlight %}

## Обновляем остальные пакеты

{% highlight shell %}
уum update
{% endhighlight %}

## Устанавливаем Lighttpd

Ставим wget:

{% highlight shell %}
sudo yum install wget
{% endhighlight %}

Обновляем репозитории:

{% highlight shell %}
sudo rpm --import https://fedoraproject.org/static/0608B895.txt
sudo wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
sudo rpm -ivh epel-release-6-8.noarch.rpm
{% endhighlight %}

Устанавливаем lighttpd:

{% highlight shell %}
sudo yum install lighttpd
{% endhighlight %}

Прописываем автостарт:

{% highlight shell %}
sudo chkconfig --levels 235 lighttpd on
{% endhighlight %}

Запускаем и проверяем:

{% highlight shell %}
sudo service lighttpd start
sudo service lighttpd status
{% endhighlight %}

## Устанавливаем Composer

Установка composer предельно проста:

{% highlight shell %}
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

Проверяем:

{% highlight shell %}
composer -v
{% endhighlight %}

## Устанавливаем Flarum

Если все сделано правильно, то вы смело можете приступать к установке flarum. Переходим в папку с сайтом:

{% highlight shell %}
cd /var/www/имя/data/www/домен
{% endhighlight %}

Папка домена должна быть пуста. Вводим:

{% highlight shell %}
composer create-project flarum/flarum . --stability=beta
{% endhighlight %}

Начнется установка flarum. После завершения установки откройте сайт в браузере и завершите установку flarum.

## Возникающие ошибки

<div block>
<p><b>Q</b>: Нет доступа к сайту, в логах ссылается на «Option Multiviews not allowed here».</p>
<p><b>A</b>: Править /etc/httpd/conf.d/z1_home.conf, изменить значение параметра AllowOverride на All.</p>
<p><b>Q</b>: При установке flarum composer выдает ошибку: PHP Fatal error: Uncaught exception ‘ErrorException’ with message ’proc_open(): fork failed — Cannot allocate memory’ in phar</p>
<p><b>A</b>: Смотрите заметку на <a href="https://getcomposer.org/doc/articles/troubleshooting.md#proc-open-fork-failed-errors">getcomposer.org</a></p>
</div>

[1]:    http://flarum.org/
[2]:    https://www.ihor.ru/vds   