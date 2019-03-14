---
title: Хакинтош на PC
tags:
- Гайды
- ОС
---

Расставшись со своим тормозящим [MacBook Air][1] в пользу домашнего компьютера, я столкнулась с вопросом о том, какой операционной системой пользоваться вместо удобной и ставшей уже привычной OS X. Windows 10, пожалуй, подходит только для игр, а linux не слишком дружелюбна к пользователю. А потому, вместо покупки очередного яблочного девайса, было принято решение поставить hackintosh на свой свежесобранный PC. Первым опытом установки которого я и хотела бы поделиться, для себя и для вас.

{% image src:004.jpg %}

Собственно, характеристики компьютера на котором и был поднят hackintosh:

- Корпус: Raijintek Metis Red.
- Материнская плата: ASRock Z370M-ITX/ac.
- Процессор: i7-8700T.
- Оперативная память: GoodRam DDR4 2133MHz 16GB Kit 2x8GB.
- SSD: KingDian N480 240GB, KingDian S280 480GB, Micron 1100 MTFDDAK256TBN Media.
- Wi-Fi: Broadcom BCM94352Z NGFF Dual Band 802.11ac 867M Wifi BT 4.0 Lenovo FRU 04X6020.
- Блок питания: Corsair RM550x.

В качестве видеокарты пока используется встроенная Intel UHD630. А для того, чтобы Wi-Fi материнской платы заработал в hackintosh пришлось покупать [на ebay][2] новый модуль - Broadcom BCM4352, так как для стандартного модуля от Intel нет необходимых kext’ов.

## Образ диска

Для установки hackintosh я скачала [образ с High Sierra 10.13.4][3] (Сейчас там более актуальная версия) с небезиветсного rutracker.org и по инструкции из темы записала его на флешку.

## Программы

Для установки и настройки OS X понадобится некоторый набор программ, которые ставятся после первого запуска операционной системы. Можно заранее скачать их на свободную флешку так как сразу после установки интернета еще не будет.

- **Clover EFI Bootloader** - Загрузчик EFI, позволяет запускать hackintosh, windows, linux и их вместе. ([sourceforge.net][4])
- **Clover Configurator** - Для более легкой правки config.plist Clover’a. ([tonymacx86.com][5])
- **EFI Mounter** - Программа для монтирования EFI раздела диска hackintosh. ([tonymacx86.com][6])
- **Kext Utility** - Утилита для установки kext’ов. ([insanelymac.com][7])

## Kext

Или «kernel extension», можно назвать их своего рода драйверами для hackintosh.

- **FakeSMC** - эмулирует работу SMC контроллера который передает операционной системе информацию о компьютере, температуре процессора и т.д. Обязателен для запуска hackintosh. ([bitbucket.org][8])
- **FakePCIID** - Перехватывает запросы PCI-ID, и возвращает значение, указанное через FakeID в Clover. Понадобится для работы некоторых kext’ов wi-fi и встроенной графики. ([bitbucket.org][9])
- **BrcmPatchRAM** - Kext’ы для работы Wi-Fi модуля Broadcom. ([bitbucket.org][10])
- **VoodooHD** - Универсальный kext для аудио. ([sourceforge.net][11])
- **AppleALC** - Альтернативный kext аудио. ([github.com][12])
- **IntelMausiEthernet** - Kext для запуска Intel ethernet. ([bitbucket.org][13])
- **IntelGraphicsFixup** - Фикс для различных встроенных видеокарт от Intel. ([github.com][14])
- **Shiki** - Исправление возможных проблем с воспроизведеним видео. ([github.com][15])
- ** Lilu** - Расширение для поддержки различных kext’ов. ([github.com][16])

## Установка

Загрузившись с установочной флешки в режиме UEFI приступаем к установке. В окне Clover выбираем «Boot Mac OS from OS X Base System» и дожидаемся появления установки OS X, на что уйдет до пяти минут. Переходим в дисковую утилиту и форматируем нужный диск. На одном из SSD дисков я оставила уже установленную ранее Windows 10, а другой SSD отформатировала из установщика в формат `AFPS` назвав его классическим `Macintosh HD`. Устанавливаем OS X и дожидаемся перезагрузки. После перезагрузки вновь видим Clover.

Так как у меня встроенная видеокарта Intel UHD630, то мне пришлось прописать параметр загрузки `-disablegfxfirmware` чтобы установка продолжилась дальше после циклической перезагрузки с ошибкой «Begin Gfx firmware load process». Чтобы прописать параметр загрузки в Clover откройте раздел `Options`, в строке `Boot Args` впишите `-disablegfxfirmware` и нажмите Enter.

После установки оказываемся в OS X и первым делом устанавливаем ранее скачанный **Clover EFI Bootloader**. В пункте `Тип установки` выбираем `Настройки` и расставляем галочки:

{% image src:005.jpg %}

Далее, устанавливаем и запускаем **Kext Utility**, дожидаемся сообщения «Drag files on window to process them» и перетаскиваем прямо в окно программы необходимые kext’ы.

{% image src:006.jpg %}

Вот перечень kext’ов установленных у меня:

- FakeSMC.kext
- FakeSMC_LPCSensors.kext
- FakeSMC_GPUSensors.kext
- FakeSMC_CPUSensors.kext
- FakeSMC_ACPISensors.kext
- FakePCIID.kext
- FakePCIID_Intel_HD_Graphics.kext
- FakePCIID_Broadcom_WiFi.kext
- BrcmFirmwareData.kext
- BrcmPatchRAM2.kext
- IntelGraphicsFixup.kext
- IntelMausiEthernet.kext
- VoodooHDA.kext
- Shiki.kext
- Lilu.kext

Также поместите ваши kext’ы в папку `EFI/EFI/CLOVER/kexts/Other` для загрузчика Clover.

Если диск отформатирован в `AFPS` может понадобится исправить проблему с загрузкой:
- В Finder - Переход - Переход к папке
- Ввести `/usr/standalone/i386/`
- Скопировать `apfs.efi` в `/EFI/EFI/CLOVER/drivers64UEFI/`

Конфигурация Clover редактируется в файле `EFI/EFI/CLOVER/config.plist`. Его можно править программой **Clover Configurator** или вручную, с помощью **Microsoft Visual Studio Code**.

## Исправление совместимости Intel UHD 630 на Coffee Lake

После установки в `config.plist`, в раздел `Boot` - `Arguments` я добавила параметр `-disablegfxfirmware`.

Возникшее мерцание изображения, на встроенной графике процессора поколения Coffee Lake, исправляется по несложной инструкции. Открыть терминал и ввести:

{% highlight shell %}
sudo nano /System/Library/Extensions/AppleIntelKBLGraphics.kext/Contents/Info.plist
{% endhighlight %}

В открывшемся файле, в терминале, найти внизу файла:

{% highlight shell %}
<key>IOPCIPrimaryMatch</key>
{% endhighlight %}

В конце следующей строки - `<string>`, найти `0x3E928086` и перед ним добавить `0x3E918086`.

{% image src:007.jpg %}

Сохраняем изменения файла комбинацией `Ctrl + X`, соглашаемся с изменениями `Y` и нажимаем `Enter`.

Далее, в терминале открываем файл:

{% highlight shell %}
sudo nano /System/Library/Extensions/AppleIntelKBLGraphicsFramebuffer.kext/Contents/Info.plist
{% endhighlight %}

В котором ищем `<key>IOPCIPrimaryMatch</key>`, где в конец строки `<string>` добавляем `0x3E918086 0x3E928086`.

{% image src:008.jpg %}

Очищаем кеш командой:

{% highlight shell %}
sudo kextcache -i /
sudo touch /System/Library/Extensions && sudo kextcache -u /
{% endhighlight %}

## Исправление громкости VoodooHDA.kext

Иногда VoodooHDA.kext выдает звук тише, чем в Windows 10. Исправить можно открыв kext правой кнопко мыши `Показать содержимое пакета` - Папка `Contents` - Открыть редактором файл `Info.plist`.

Найти строку `VoodooHDAEnableHalfVolumeFix` и изменить занчение следующей строки на `<true/>`.

Если значительных изменеий не произолшло, можно найти блок:

{% highlight xml %}
<key>PCM</key>
<integer>90</integer>
<key>Rec</key>
<integer>90</integer>
<key>iGain</key>
<integer>90</integer>
<key>iMix</key>
<integer>90</integer>
{% endhighlight %}

И изменить все `90` на `100`, затем переустановить kext.

## В итоге

Таким образом был установлен hackintosh 10.13.4, который вскоре, без каких либо проблем, обновился до 10.13.5.

{% image src:009.jpg %}

Привязка к учетной записи, логин в iCloud и прочих Apple сервисах прошли без каких-либо проблем. Операционная система работает стабильно, а установка не столь сложна, как это казалось на первый взгляд. Проблемы возникли только с поддержкой Wi-Fi модуля, из-за чего пришлось покупать Broadcom BCM4352 и ждать его доставки из Китая. В итоге, на одном из SSD у меня установлен Windows 10 для игр, а на другом hackintosh, загружаемый по умолчанию. Выбор системы происходит при загрузке в Clover.

## Использовались материалы

- Статья с [habrahabr][17].
- Опыт человека с аналогичной материнской платой на [tonymacx86.com][18].
- Инструкция по исправлению Intel UHD 630, на [hackintosher.com][19].
- Образ с [rutracker.org][20].

[1]:	/blog/znakomstvo-s-mac/
[2]:	https://www.ebay.com/itm/Broadcom-BCM94352Z-NGFF-Dual-Band-802-11ac-867M-Wifi-BT-4-0-Lenovo-FRU-04X6020/191855727748?ssPageName=STRK:MEBIDX:IT&_trksid=p2060353.m2749.l2649
[3]:	https://rutracker.org/forum/viewtopic.php?t=5413589
[4]:	https://sourceforge.net/projects/cloverefiboot/
[5]:	https://www.tonymacx86.com/resources/clover-configurator.335/
[6]:	https://www.tonymacx86.com/resources/efi-mounter-v3.280/
[7]:	https://www.insanelymac.com/forum/topic/140647-latest-kext-utility-macos-sierra-super-speed-edition/
[8]:	https://bitbucket.org/RehabMan/os-x-fakesmc-kozlek/downloads/
[9]:	https://bitbucket.org/RehabMan/os-x-fake-pci-id/downloads/
[10]:	https://bitbucket.org/RehabMan/os-x-brcmpatchram/downloads/
[11]:	https://sourceforge.net/projects/voodoohda/files/latest/download
[12]:	https://github.com/vit9696/AppleALC/releases
[13]:	https://bitbucket.org/RehabMan/os-x-intel-network/downloads/
[14]:	https://github.com/lvs1974/IntelGraphicsFixup/releases
[15]:	https://github.com/vit9696/Shiki/releases
[16]:	https://github.com/vit9696/Lilu/releases
[17]:	https://habr.com/post/318448/
[18]:	https://www.tonymacx86.com/threads/eriks-tiny-but-mighty-htpc-asrock-z370m-itx-ac-i5-8400-uhd-630-graphics-high-sierra.239157/
[19]:	https://hackintosher.com/forums/thread/coffee-lake-uhd-630-graphics-framebuffer-injection-0x3e918086-0x3e928086-for-high-sierra.210/
[20]:	https://rutracker.org/forum/viewtopic.php?t=5413589