Vue.component('Tabs', {
  props: {
    tabs: {
      type: Array,
    },
    value: {
      type: String,
    },
    className: {
      type: String,
    },
    hideContent: {
      type: Boolean,
    }
  },
  
  template: `
    <div class="tabs-wrapper">
      <div ref="tabs" class="tabs" :class="className">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          :ref="tab.value"
          class="tab"
          :class="{ 'is-active': tab.value === value }"
          @click="showTab(tab.value)">
          {{ tab.name }}
        </div>
        <div
          class="tab-selected-border"
          :style="{
            width: bWidth + 'px',
            left: bLeft + 'px',
          }"></div>
      </div>
      <div class="tab-content" v-if="!hideContent">
        <div
          v-for="(tab, idx) in tabs"
          class="slot-content"
          :class="{'active-content': tab.value === value}"
          :key="idx">        
          <slot :name="tab.value"/>
        </div>
      </div>
    </div>`,
  
  data() {
    return {
      bWidth: 0,
      bLeft: 0
    }
  },
  
  mounted() {
    if (!this.value) this.showTab(this.tabs[0].value);
    
    this.$nextTick(() => {
      this.bWidth = this.$refs[this.value][0].getBoundingClientRect().width;
      this.bLeft = this.$refs[this.value][0].offsetLeft;
    });
  },
  
  watch: {
    value() {
      this.bWidth = this.$refs[this.value][0].getBoundingClientRect().width;
      this.bLeft = this.$refs[this.value][0].offsetLeft;
    }
  },
  
  methods: {
    showTab(tab) {
      this.$emit("input", tab);
    },
  }
});


let app = new Vue({
  el: '#app',
   
  data() {
    return {
      tabs: [
        {
          name: "General",
          value: "general"
        },
        {
          name: "Advanced",
          value: "advanced"
        },
        {
          name: "Something",
          value: "something"
        },
        {
          name: "Anything",
          value: "anything"
        },
        {
          name: "Streamlabs",
          value: "streamlabs"
        },
        {
          name: "Really Long Name Thing",
          value: "reallylongnamething"
        }
      ],
      selectedTab: "general",
    }
  },
      
  methods: {
    onSelectTabHandler(tab) {
      this.selectedTab = tab;
    }
  }
});

/* Поиск */

SimpleJekyllSearch({
	searchInput: document.getElementById('search-input'),
	resultsContainer: document.getElementById('results-container'),
	json: base_url + '/search.json',
	searchResultTemplate: '<li><a href="{url}" title="{title}">{title}</a></li>',
	noResultsText: '<li>Увы, ничего не найдено :(</li>',
	limit: 10,
	fuzzy: false
});

/* Подменяем youtube плеер картинкой */

$(".video .youtube").each(function() {
	$(document).delegate('#'+this.id, 'click', function() {
		var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
		if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
		var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url });
		$(this).html(iframe).addClass('playing');
		$(this).fitVids();
	});
});

/* Фоторама */

$('.fotorama').fotorama({
	width: '100%',
	maxwidth: '100%',
	allowfullscreen: 'native',
	fit: 'cover'
});

/* ========================================================================
 * Bootstrap: transition.js v3.4.0
 * https://getbootstrap.com/docs/3.4/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: https://modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // https://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* */

const setProp = (el, prop, value) => el.style.setProperty(prop, value) 
	
const el =  document.getElementById('motion')

const onMouseUpdate = e => {
    let width = el.offsetWidth
    let XRel = e.pageX - el.offsetLeft
    let YRel = e.pageY - el.offsetTop
  
    let YAngle = -(0.5 - (XRel / width)) * 40; 
    let XAngle = (0.5 - (YRel / width)) * 40;
  
    setProp(el, '--dy', `${YAngle}deg`)
    setProp(el, '--dx', `${XAngle}deg`)
}

el.addEventListener('mousemove', onMouseUpdate, false)
el.addEventListener('mouseenter', onMouseUpdate, false)
el.addEventListener('mouseleave', () => {
   el.style.setProperty('--dy', '0')
  el.style.setProperty('--dx', '0')
})

/* Yandex */

(function (d, w, c) {
	(w[c] = w[c] || []).push(function() {
		try {
			w.yaCounter50392522 = new Ya.Metrika2({
				id:50392522,
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true,
				trackHash:true
			});
		} catch(e) { }
	});

	var n = d.getElementsByTagName("script")[0],
		s = d.createElement("script"),
		f = function () { n.parentNode.insertBefore(s, n); };
	s.type = "text/javascript";
	s.async = true;
	s.src = "https://mc.yandex.ru/metrika/tag.js";

	if (w.opera == "[object Opera]") {
		d.addEventListener("DOMContentLoaded", f, false);
	} else { f(); }
})(document, window, "yandex_metrika_callbacks2");