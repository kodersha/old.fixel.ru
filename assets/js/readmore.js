(function() {

	var pluginName = 'readmore',
		defaults = {
		lineHeight: 24,
		size: 12,
		addClass: 'readmore',
		wrapClass: 'readmore-wrap',
		wrapClassOpen: 'readmore-wrap--open',
		buttonClass: 'slider',
		linkClassHidden: 'link--hidden',
		addLinkClass: null,
		linkClass: 'more link',
		linkClassOpen: 'link--hidden',
		linkText: 'Показать полностью',
		linkTextOpen: 'Показать полностью',
		hideIcon: true,
		iconClass: 'readmore-icon',
		iconClassOpen: 'readmore-icon--hidden',
		onWindowResize: function () {
			this.updateState();
		}
	};

	function Plugin(el, options) {
		this.el = el;
		this.$el = $(el);
		this.settings = $.extend({}, defaults, options || {});

		if (this.$el.data('readmore-text')) {
			this.settings.linkText = this.$el.data('readmore-text');
		}

		if (this.$el.data('readmore-text-open')) {
			this.settings.linkTextOpen = this.$el.data('readmore-text-open');
		}

		this._defaults = defaults;
		this._name = pluginName;    
		this.init();
	}

	$.extend(Plugin.prototype, {

		init: function () {
			this.initWrap();
			this.initLink();

			if (this.settings.addClass) {
				this.$el.addClass(this.settings.addClass);
			}

			if (typeof this.settings.onWindowResize === "function") {
				$(window).on('resize.readmore orientationchange', $.proxy(this.settings.onWindowResize, this));
			}

			this.updateState();
		},

		initWrap: function () {
			this.$el.wrapInner('<div class="' + this.settings.wrapClass + '"></div>');
			this.$wrap = this.$el.find("> :first");
			this.wrapTextNodes();
		},

		wrapTextNodes: function () {
			this.$wrap.contents()
			.filter(function() {
				return this.nodeType === 3 && $.trim(this.nodeValue) !== '';
			})
			.wrap('<p></p>')
			.end()
			.filter('br')
			.remove();
		},

		initLink: function () {
			this.$linkText = $('<button>', {
				class: this.settings.buttonClass,
				text: this.settings.linkText
			});
			this.$link = $('<a>', {
				class: this.settings.linkClass
			});

			if (this.settings.addLinkClass) {
				this.$link.addClass(this.settings.addLinkClass);
			}

			this.$link.append(this.$linkText);

			if (!this.settings.hideIcon) {
				this.$icon = $('<i>', {class: this.settings.iconClass});
				this.$link.append(this.$icon);
			}

			this.$link.on('click', $.proxy(function (e) {
				e.preventDefault();
				this.toggleState();
			}, this));

			this.$el.append(this.$link);
		},

		calculateHeightClose: function () {
			var that = this;
			var lines = [];
			var i = 0;

			this.$wrap.find(' > *').each(function() {
				var mTop = parseInt($(this).css('marginTop'), 10);
				var pTop = parseInt($(this).css('paddingTop'), 10);
				var top = $(this).position().top;
				var height = $(this).height();
				var countLine = Math.ceil(height/that.settings.lineHeight);

				for (i = 0; i < countLine; i++) {
					lines.push({
						top: top + mTop + pTop + that.settings.lineHeight * i,
						height: that.settings.lineHeight
					});
				}
			});

			var showAllLines = (lines.length <= this.settings.size);

			if (showAllLines) {
				return this.$wrap[0].scrollHeight;        
			}

			return lines[this.settings.size - 1].top + lines[this.settings.size - 1].height;
		},

		recalculateHeight: function () {
			this.heightClosed = this.calculateHeightClose();
			this.heightOpen = this.$wrap[0].scrollHeight;
		},

		updateState: function(size) {
			this.recalculateHeight();

			var showAllLines = this.heightClosed == this.heightOpen;
			this.$link.toggleClass(this.settings.linkClassHidden, showAllLines);
			this.$wrap.toggleClass(this.settings.wrapClassOpen, showAllLines);

			if (showAllLines) {
				this.$wrap.css('height', 'auto');
			} else {
				this.$wrap.css('height', this.heightClosed + 'px');
			}
		},

		toggleState: function () {
			this.$link.toggleClass(this.settings.linkClassOpen);
			this.$wrap.toggleClass(this.settings.wrapClassOpen);

			if (!this.settings.hideIcon) {
				this.$icon.toggleClass(this.settings.iconClassOpen);
			}

			if (this.$link.hasClass(this.settings.linkClassOpen)) {
				this.$wrap.css('height', 'auto');
				this.$linkText.html(this.settings.linkTextOpen);
			} else {
				this.$wrap.css('height', this.heightClosed);
				this.$linkText.html(this.settings.linkText);
			}
		}
	});

	$.fn.readMore = function(options) {
		this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
	};
}());

function responsiveParams() {
	var MAX_MOBILE_WIDTH = 640;
	var MAX_TABLET_WIDTH = 1024;
	var windowWidth = $(window).width();
	var params = {
		small: {
			size: 10,
			lineHeight: 24   
		},
		medium: {
			size: 11,
			lineHeight: 28
		},
		large: {
			size: 12,
			lineHeight: 34
		}
	};

	if (windowWidth <= MAX_MOBILE_WIDTH) {
		return params.small;
	} 
	if (windowWidth > MAX_MOBILE_WIDTH && windowWidth <= MAX_TABLET_WIDTH) {
		return params.medium;
	}

	return params.large;
}

var params = responsiveParams();
params.onWindowResize = function() {
	$.extend(this.settings, responsiveParams());
	this.updateState();
};