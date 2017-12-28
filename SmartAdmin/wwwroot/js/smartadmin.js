/*         ______________________________________
  ________|                                      |_______
  \       |           SmartAdmin WebApp          |      /
   \      |      Copyright © 2015 MyOrange       |     /
   /      |______________________________________|     \
  /__________)                                (_________\

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * =======================================================================
 * SmartAdmin is FULLY owned and LICENSED by MYORANGE INC.
 * =======================================================================
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =======================================================================
 * original filename: app.config.js
 * filesize: 12kb
 * version: 1.8.1
 * author: Sunny (@bootstraphunt)
 * email: info@myorange.ca
 * =======================================================================
 * 
 * GLOBAL ROOT (DO NOT CHANGE)
 */
	$.root_ = $('body');	
/*
 * APP CONFIGURATION (HTML/AJAX/PHP Versions ONLY)
 * Description: Enable / disable certain theme features here
 * GLOBAL: Your left nav in your app will no longer fire ajax calls, set 
 * it to false for HTML version
 */	
	$.navAsAjax = false; 
/*
 * GLOBAL: Sound Config (define sound path, enable or disable all sounds)
 */
	$.sound_path = "sound/";
	$.sound_on = true; 
/*
 * SAVE INSTANCE REFERENCE (DO NOT CHANGE)
 * Save a reference to the global object (window in the browser)
 */
	var root = this,	
/*
 * DEBUGGING MODE
 * debugState = true; will spit all debuging message inside browser console.
 * The colors are best displayed in chrome browser.
 */
	debugState = false,	
	debugStyle = 'font-weight: bold; color: #00f;',
	debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;',
	debugStyle_red = 'font-weight: bold; color: #ed1c24;',
	debugStyle_warning = 'background-color:yellow',
	debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;',
	debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;',
/*
 * Impacts the responce rate of some of the responsive elements (lower 
 * value affects CPU but improves speed)
 */
	throttle_delay = 350,
/*
 * The rate at which the menu expands revealing child elements on click
 */
	menu_speed = 235,	
/*
 * Collapse current menu item as other menu items are expanded
 * Careful when using this option, if you have a long menu it will
 * keep expanding and may distrupt the user experience This is best 
 * used with fixed-menu class
 */
	menu_accordion = true,	
/*
 * Turn on JarvisWidget functionality
 * Global JarvisWidget Settings
 * For a greater control of the widgets, please check app.js file
 * found within COMMON_ASSETS/UNMINIFIED_JS folder and see from line 1355
 * dependency: js/jarviswidget/jarvis.widget.min.js
 */
	enableJarvisWidgets = true,
/*
 * Use localstorage to save widget settings
 * turn this off if you prefer to use the onSave hook to save
 * these settings to your datatabse instead
 */	
	localStorageJarvisWidgets = true,
/*
 * Turn on/off sortable feature for JarvisWidgets 
 */	
	sortableJarvisWidgets = true,		
/*
 * Warning: Enabling mobile widgets could potentially crash your webApp 
 * if you have too many widgets running at once 
 * (must have enableJarvisWidgets = true)
 */
	enableMobileWidgets = false,	
/*
 * Turn on fast click for mobile devices
 * Enable this to activate fastclick plugin
 * dependency: js/plugin/fastclick/fastclick.js 
 */
	fastClick = false,
/*
 * SMARTCHAT PLUGIN ARRAYS & CONFIG
 * Dependency: js/plugin/moment/moment.min.js 
 *             js/plugin/cssemotions/jquery.cssemoticons.min.js 
 *             js/smart-chat-ui/smart.chat.ui.js
 * (DO NOT CHANGE) 
 */	
	boxList = [],
	showList = [],
 	nameList = [],
	idList = [],
/*
 * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
 */	
	chatbox_config = {
	    width: 200,
	    gap: 35
	},
/*
 * These elements are ignored during DOM object deletion for ajax version 
 * It will delete all objects during page load with these exceptions:
 */
	ignore_key_elms = ["#header, #left-panel, #right-panel, #main, div.page-footer, #shortcut, #divSmallBoxes, #divMiniIcons, #divbigBoxes, #voiceModal, script, .ui-chatbox"],
/*
 * VOICE COMMAND CONFIG
 * dependency: js/speech/voicecommand.js
 */
	voice_command = true,
/*
 * Turns on speech as soon as the page is loaded
 */	
	voice_command_auto = false,
/*
 * 	Sets the language to the default 'en-US'. (supports over 50 languages 
 * 	by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  Català            ['ca-ES']
 *  Čeština           ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  Español           ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'España']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'México']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'Panamá']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'Perú']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'República Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  Français          ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  Íslenska          ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmål      ['nb-NO']
 *  Polski            ['pl-PL']
 *  Português         ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  Română            ['ro-RO']
 *  Slovenčina        ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  Türkçe            ['tr-TR']
 *  български         ['bg-BG']
 *  Pусский           ['ru-RU']
 *  Српски            ['sr-RS']
 *  한국어          ['ko-KR']
 *  中文                            ['cmn-Hans-CN', '普通话 (中国大陆)']
 *                    ['cmn-Hans-HK', '普通话 (香港)']
 *                    ['cmn-Hant-TW', '中文 (台灣)']
 *                    ['yue-Hant-HK', '粵語 (香港)']
 *  日本語                         ['ja-JP']
 *  Lingua latīna     ['la']
 */
	voice_command_lang = 'en-US',
/*
 * 	Use localstorage to remember on/off (best used with HTML Version
 * 	when going from one page to the next)
 */	
	voice_localStorage = false;
/*
 * Voice Commands
 * Defines voice command variables and functions
 */	
 	if (voice_command) {
	 		
		var commands = {
					
			'show dashboard' : function() { $('nav a[href="ajax/dashboard.html"]').trigger("click"); },
			'show inbox' : function() { $('nav a[href="ajax/inbox.html"]').trigger("click"); },
			'show graphs' : function() { $('nav a[href="ajax/flot.html"]').trigger("click"); },
			'show flotchart' : function() { $('nav a[href="ajax/flot.html"]').trigger("click"); },
			'show morris chart' : function() { $('nav a[href="ajax/morris.html"]').trigger("click"); },
			'show inline chart' : function() { $('nav a[href="ajax/inline-charts.html"]').trigger("click"); },
			'show dygraphs' : function() { $('nav a[href="ajax/dygraphs.html"]').trigger("click"); },
			'show tables' : function() { $('nav a[href="ajax/table.html"]').trigger("click"); },
			'show data table' : function() { $('nav a[href="ajax/datatables.html"]').trigger("click"); },
			'show jquery grid' : function() { $('nav a[href="ajax/jqgrid.html"]').trigger("click"); },
			'show form' : function() { $('nav a[href="ajax/form-elements.html"]').trigger("click"); },
			'show form layouts' : function() { $('nav a[href="ajax/form-templates.html"]').trigger("click"); },
			'show form validation' : function() { $('nav a[href="ajax/validation.html"]').trigger("click"); },
			'show form elements' : function() { $('nav a[href="ajax/bootstrap-forms.html"]').trigger("click"); },
			'show form plugins' : function() { $('nav a[href="ajax/plugins.html"]').trigger("click"); },
			'show form wizards' : function() { $('nav a[href="ajax/wizards.html"]').trigger("click"); },
			'show bootstrap editor' : function() { $('nav a[href="ajax/other-editors.html"]').trigger("click"); },
			'show dropzone' : function() { $('nav a[href="ajax/dropzone.html"]').trigger("click"); },
			'show image cropping' : function() { $('nav a[href="ajax/image-editor.html"]').trigger("click"); },
			'show general elements' : function() { $('nav a[href="ajax/general-elements.html"]').trigger("click"); },
			'show buttons' : function() { $('nav a[href="ajax/buttons.html"]').trigger("click"); },
			'show fontawesome' : function() { $('nav a[href="ajax/fa.html"]').trigger("click"); },
			'show glyph icons' : function() { $('nav a[href="ajax/glyph.html"]').trigger("click"); },
			'show flags' : function() { $('nav a[href="ajax/flags.html"]').trigger("click"); },
			'show grid' : function() { $('nav a[href="ajax/grid.html"]').trigger("click"); },
			'show tree view' : function() { $('nav a[href="ajax/treeview.html"]').trigger("click"); },
			'show nestable lists' : function() { $('nav a[href="ajax/nestable-list.html"]').trigger("click"); },
			'show jquery U I' : function() { $('nav a[href="ajax/jqui.html"]').trigger("click"); },
			'show typography' : function() { $('nav a[href="ajax/typography.html"]').trigger("click"); },
			'show calendar' : function() { $('nav a[href="ajax/calendar.html"]').trigger("click"); },
			'show widgets' : function() { $('nav a[href="ajax/widgets.html"]').trigger("click"); },
			'show gallery' : function() { $('nav a[href="ajax/gallery.html"]').trigger("click"); },
			'show maps' : function() { $('nav a[href="ajax/gmap-xml.html"]').trigger("click"); },
			'show pricing tables' : function() { $('nav a[href="ajax/pricing-table.html"]').trigger("click"); },
			'show invoice' : function() { $('nav a[href="ajax/invoice.html"]').trigger("click"); },
			'show search' : function() { $('nav a[href="ajax/search.html"]').trigger("click"); },
			'go back' :  function() { history.back(1); }, 
			'scroll up' : function () { $('html, body').animate({ scrollTop: 0 }, 100); },
			'scroll down' : function () { $('html, body').animate({ scrollTop: $(document).height() }, 100);},
			'hide navigation' : function() { 
				if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")){
					$('span.minifyme').trigger("click");
				} else {
					$('#hide-menu > span > a').trigger("click"); 
				}
			},
			'show navigation' : function() { 
				if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")){
					$('span.minifyme').trigger("click");
				} else {
					$('#hide-menu > span > a').trigger("click"); 
				}
			},
			'mute' : function() {
				$.sound_on = false;
				$.smallBox({
					title : "MUTE",
					content : "All sounds have been muted!",
					color : "#a90329",
					timeout: 4000,
					icon : "fa fa-volume-off"
				});
			},
			'sound on' : function() {
				$.sound_on = true;
				$.speechApp.playConfirmation();
				$.smallBox({
					title : "UNMUTE",
					content : "All sounds have been turned on!",
					color : "#40ac2b",
					sound_file: 'voice_alert',
					timeout: 5000,
					icon : "fa fa-volume-up"
				});
			},
			'stop' : function() {
				smartSpeechRecognition.abort();
				$.root_.removeClass("voice-command-active");
				$.smallBox({
					title : "VOICE COMMAND OFF",
					content : "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
					color : "#40ac2b",
					sound_file: 'voice_off',
					timeout: 8000,
					icon : "fa fa-microphone-slash"
				});
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			},
			'help' : function() {
				$('#voiceModal').removeData('modal').modal( { remote: "ajax/modal-content/modal-voicecommand.html", show: true } );
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			},		
			'got it' : function() {
				$('#voiceModal').modal('hide');
			},	
			'logout' : function() {
				$.speechApp.stop();
				window.location = $('#logout > span > a').attr("href");
			}
		}; 
		
	};
/*
 * END APP.CONFIG
 */ 
 
 
 
 
 	
/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function b(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var c,d=a.ui.mouse.prototype,e=d._mouseInit;d._touchStart=function(a){var d=this;!c&&d._mouseCapture(a.originalEvent.changedTouches[0])&&(c=!0,d._touchMoved=!1,b(a,"mouseover"),b(a,"mousemove"),b(a,"mousedown"))},d._touchMove=function(a){c&&(this._touchMoved=!0,b(a,"mousemove"))},d._touchEnd=function(a){c&&(b(a,"mouseup"),b(a,"mouseout"),this._touchMoved||b(a,"click"),c=!1)},d._mouseInit=function(){var b=this;b.element.bind("touchstart",a.proxy(b,"_touchStart")).bind("touchmove",a.proxy(b,"_touchMove")).bind("touchend",a.proxy(b,"_touchEnd")),e.call(b)}}}(jQuery);
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={"WebkitTransition":"webkitTransitionEnd","MozTransition":"transitionend","OTransition":"oTransitionEnd otransitionend","transition":"transitionend"};for(var c in b)if(void 0!==a.style[c])return{"end":b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={"bindType":a.support.transition.end,"delegateType":a.support.transition.end,"handle":function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={"loadingText":"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={"interval":5e3,"pause":"hover","wrap":!0,"keyboard":!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{"relatedTarget":j,"direction":h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{"relatedTarget":j,"direction":h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={"toggle":!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={"relatedTarget":this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={"relatedTarget":this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={"backdrop":!0,"keyboard":!0,"show":!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{"relatedTarget":b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{"relatedTarget":b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({"paddingLeft":!this.bodyIsOverflowing&&a?this.scrollbarWidth:"","paddingRight":this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({"paddingLeft":"","paddingRight":""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({"remote":!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={"animation":!0,"placement":"top","selector":!1,"template":'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',"trigger":"hover focus","title":"","delay":0,"html":!1,"container":!1,"viewport":{"selector":"body","padding":0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={"click":!1,"hover":!1,"focus":!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{"trigger":"manual","selector":""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={"show":b.delay,"hide":b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({"top":0,"left":0,"display":"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({"using":function(a){d.css({"top":Math.round(a.top),"left":Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{"width":e.right-e.left,"height":e.bottom-e.top}));var f=d?{"top":0,"left":0}:b.offset(),g={"scroll":d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{"width":a(window).width(),"height":a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{"top":b.top+b.height,"left":b.left+b.width/2-c/2}:"top"==a?{"top":b.top-d,"left":b.left+b.width/2-c/2}:"left"==a?{"top":b.top+b.height/2-d/2,"left":b.left-c}:{"top":b.top+b.height/2-d/2,"left":b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={"top":0,"left":0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{"placement":"right","trigger":"click","content":"","template":'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={"offset":10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{"relatedTarget":b[0]}),g=a.Event("show.bs.tab",{"relatedTarget":e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({"type":"hidden.bs.tab","relatedTarget":b[0]}),b.trigger({"type":"shown.bs.tab","relatedTarget":e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={"offset":0,"target":window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({"top":g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
function SmartUnLoading(){$(".divMessageBox").fadeOut(300,function(){$(this).remove()}),$(".LoadingBoxContainer").fadeOut(300,function(){$(this).remove()})}function getInternetExplorerVersion(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}function checkVersion(){var a="You're not using Windows Internet Explorer.",b=getInternetExplorerVersion();b>-1&&(a=b>=8?"You're using a recent copy of Windows Internet Explorer.":"You should upgrade your copy of Windows Internet Explorer."),alert(a)}function isIE8orlower(){var a="0",b=getInternetExplorerVersion();return b>-1&&(a=b>=9?0:1),a}jQuery(document).ready(function(){$("body").append("<div id='divSmallBoxes'></div>"),$("body").append("<div id='divMiniIcons'></div><div id='divbigBoxes'></div>")});var ExistMsg=0,SmartMSGboxCount=0,PrevTop=0;$.SmartMessageBox=function(a,b){var c,d;a=$.extend({"title":"","content":"","NormalButton":void 0,"ActiveButton":void 0,"buttons":void 0,"input":void 0,"inputValue":void 0,"placeholder":"","options":void 0},a);var e=0;if(e=1,0==isIE8orlower()&&$.sound_on){var f=document.createElement("audio");f.setAttribute("src",$.sound_path+"messagebox.mp3"),f.addEventListener("load",function(){f.play()},!0),f.pause(),f.play()}SmartMSGboxCount+=1,0==ExistMsg&&(ExistMsg=1,c="<div class='divMessageBox animated fadeIn fast' id='MsgBoxBack'></div>",$("body").append(c),1==isIE8orlower()&&$("#MsgBoxBack").addClass("MessageIE"));var g="",h=0;if(void 0!=a.input)switch(h=1,a.input=a.input.toLowerCase(),a.input){case"text":a.inputValue="string"===$.type(a.inputValue)?a.inputValue.replace(/'/g,"&#x27;"):a.inputValue,g="<input class='form-control' type='"+a.input+"' id='txt"+SmartMSGboxCount+"' placeholder='"+a.placeholder+"' value='"+a.inputValue+"'/><br/><br/>";break;case"password":g="<input class='form-control' type='"+a.input+"' id='txt"+SmartMSGboxCount+"' placeholder='"+a.placeholder+"'/><br/><br/>";break;case"select":if(void 0==a.options)alert("For this type of input, the options parameter is required.");else{g="<select class='form-control' id='txt"+SmartMSGboxCount+"'>";for(var i=0;i<=a.options.length-1;i++)"["==a.options[i]?j="":"]"==a.options[i]?(k+=1,j="<option>"+j+"</option>",g+=j):j+=a.options[i];g+="</select>"}break;default:alert("That type of input is not handled yet")}d="<div class='MessageBoxContainer animated fadeIn fast' id='Msg"+SmartMSGboxCount+"'>",d+="<div class='MessageBoxMiddle'>",d+="<span class='MsgTitle'>"+a.title+"</span class='MsgTitle'>",d+="<p class='pText'>"+a.content+"</p>",d+=g,d+="<div class='MessageBoxButtonSection'>",void 0==a.buttons&&(a.buttons="[Accept]"),a.buttons=$.trim(a.buttons),a.buttons=a.buttons.split("");var j="",k=0;void 0==a.NormalButton&&(a.NormalButton="#232323"),void 0==a.ActiveButton&&(a.ActiveButton="#ed145b");for(var i=0;i<=a.buttons.length-1;i++)"["==a.buttons[i]?j="":"]"==a.buttons[i]?(k+=1,j="<button id='bot"+k+"-Msg"+SmartMSGboxCount+"' class='btn btn-default btn-sm botTempo'> "+j+"</button>",d+=j):j+=a.buttons[i];d+="</div>",d+="</div>",d+="</div>",SmartMSGboxCount>1&&($(".MessageBoxContainer").hide(),$(".MessageBoxContainer").css("z-index",99999)),$(".divMessageBox").append(d),1==h&&$("#txt"+SmartMSGboxCount).focus(),$(".botTempo").hover(function(){$(this).attr("id")},function(){$(this).attr("id")}),$(".botTempo").click(function(){var a=$(this).attr("id"),c=a.substr(a.indexOf("-")+1),d=$.trim($(this).text());if(1==h){if("function"==typeof b){var e=c.replace("Msg",""),f=$("#txt"+e).val();b&&b(d,f)}}else"function"==typeof b&&b&&b(d);$("#"+c).addClass("animated fadeOut fast"),SmartMSGboxCount-=1,0==SmartMSGboxCount&&$("#MsgBoxBack").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function(){ExistMsg=0,$(this).remove()})})};var BigBoxes=0;$.bigBox=function(a,b){var c;if(a=$.extend({"title":"","content":"","icon":void 0,"number":void 0,"color":void 0,"sound":$.sound_on,"sound_file":"bigbox","timeout":void 0,"colortime":1500,"colors":void 0},a),a.sound&&0==isIE8orlower()){var d=document.createElement("audio");navigator.userAgent.match("Firefox/")?d.setAttribute("src",$.sound_path+a.sound_file+".ogg"):d.setAttribute("src",$.sound_path+a.sound_file+".mp3"),d.addEventListener("load",function(){d.play()},!0),d.pause(),d.play()}BigBoxes+=1,c="<div id='bigBox"+BigBoxes+"' class='bigBox animated fadeIn fast'><div id='bigBoxColor"+BigBoxes+"'><i class='botClose fa fa-times' id='botClose"+BigBoxes+"'></i>",c+="<span>"+a.title+"</span>",c+="<p>"+a.content+"</p>",c+="<div class='bigboxicon'>",void 0==a.icon&&(a.icon="fa fa-cloud"),c+="<i class='"+a.icon+"'></i>",c+="</div>",c+="<div class='bigboxnumber'>",void 0!=a.number&&(c+=a.number),c+="</div></div>",c+="</div>",$("#divbigBoxes").append(c),void 0==a.color&&(a.color="#004d60"),$("#bigBox"+BigBoxes).css("background-color",a.color),$("#divMiniIcons").append("<div id='miniIcon"+BigBoxes+"' class='cajita animated fadeIn' style='background-color: "+a.color+";'><i class='"+a.icon+"'/></i></div>"),$("#miniIcon"+BigBoxes).bind("click",function(){var a=$(this).attr("id"),b=a.replace("miniIcon","bigBox"),c=a.replace("miniIcon","bigBoxColor");$(".cajita").each(function(a){var b=$(this).attr("id"),c=b.replace("miniIcon","bigBox");$("#"+c).css("z-index",9998)}),$("#"+b).css("z-index",9999),$("#"+c).removeClass("animated fadeIn").delay(1).queue(function(){$(this).show(),$(this).addClass("animated fadeIn"),$(this).clearQueue()})});var e,f=$("#botClose"+BigBoxes),g=$("#bigBox"+BigBoxes),h=$("#miniIcon"+BigBoxes);if(void 0!=a.colors&&a.colors.length>0&&(f.attr("colorcount","0"),e=setInterval(function(){var b=f.attr("colorcount");f.animate({"backgroundColor":a.colors[b].color}),g.animate({"backgroundColor":a.colors[b].color}),h.animate({"backgroundColor":a.colors[b].color}),b<a.colors.length-1?f.attr("colorcount",1*b+1):f.attr("colorcount",0)},a.colortime)),f.bind("click",function(){clearInterval(e),"function"==typeof b&&b&&b();var a=$(this).attr("id"),c=a.replace("botClose","bigBox"),d=a.replace("botClose","miniIcon");$("#"+c).removeClass("fadeIn fast"),$("#"+c).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()}),$("#"+d).removeClass("fadeIn fast"),$("#"+d).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()})}),void 0!=a.timeout){var i=BigBoxes;setTimeout(function(){clearInterval(e),$("#bigBox"+i).removeClass("fadeIn fast"),$("#bigBox"+i).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()}),$("#miniIcon"+i).removeClass("fadeIn fast"),$("#miniIcon"+i).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()})},a.timeout)}};var SmallBoxes=0,SmallCount=0,SmallBoxesAnchos=0;$.smallBox=function(a,b){var c;if(a=$.extend({"title":"","content":"","icon":void 0,"iconSmall":void 0,"sound":$.sound_on,"sound_file":"smallbox","color":void 0,"timeout":void 0,"colortime":1500,"colors":void 0},a),a.sound&&0==isIE8orlower()){var d=document.createElement("audio");navigator.userAgent.match("Firefox/")?d.setAttribute("src",$.sound_path+a.sound_file+".ogg"):d.setAttribute("src",$.sound_path+a.sound_file+".mp3"),d.addEventListener("load",function(){d.play()},!0),d.pause(),d.play()}SmallBoxes+=1,c="";var e="",f="smallbox"+SmallBoxes;if(e=void 0==a.iconSmall?"<div class='miniIcono'></div>":"<div class='miniIcono'><i class='miniPic "+a.iconSmall+"'></i></div>",c=void 0==a.icon?"<div id='smallbox"+SmallBoxes+"' class='SmallBox animated fadeInRight fast'><div class='textoFull'><span>"+a.title+"</span><p>"+a.content+"</p></div>"+e+"</div>":"<div id='smallbox"+SmallBoxes+"' class='SmallBox animated fadeInRight fast'><div class='foto'><i class='"+a.icon+"'></i></div><div class='textoFoto'><span>"+a.title+"</span><p>"+a.content+"</p></div>"+e+"</div>",1==SmallBoxes)$("#divSmallBoxes").append(c),SmallBoxesAnchos=$("#smallbox"+SmallBoxes).height()+40;else{var g=$(".SmallBox").size();0==g?($("#divSmallBoxes").append(c),SmallBoxesAnchos=$("#smallbox"+SmallBoxes).height()+40):($("#divSmallBoxes").append(c),$("#smallbox"+SmallBoxes).css("top",SmallBoxesAnchos),SmallBoxesAnchos=SmallBoxesAnchos+$("#smallbox"+SmallBoxes).height()+20,$(".SmallBox").each(function(a){0==a?($(this).css("top",20),heightPrev=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).css("top",heightPrev),heightPrev=heightPrev+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)}))}var h=$("#smallbox"+SmallBoxes);void 0==a.color?h.css("background-color","#004d60"):h.css("background-color",a.color);var i;void 0!=a.colors&&a.colors.length>0&&(h.attr("colorcount","0"),i=setInterval(function(){var b=h.attr("colorcount");h.animate({"backgroundColor":a.colors[b].color}),b<a.colors.length-1?h.attr("colorcount",1*b+1):h.attr("colorcount",0)},a.colortime)),void 0!=a.timeout&&setTimeout(function(){clearInterval(i);var a=$(this).height()+20;$("#"+f).css("top");0!=$("#"+f+":hover").length?$("#"+f).on("mouseleave",function(){SmallBoxesAnchos-=a,$("#"+f).remove(),"function"==typeof b&&b&&b();var c=0;$(".SmallBox").each(function(a){0==a?($(this).animate({"top":20},300),c=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":c},350),c=c+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})}):(clearInterval(i),SmallBoxesAnchos-=a,"function"==typeof b&&b&&b(),$("#"+f).removeClass().addClass("SmallBox").animate({"opacity":0},300,function(){$(this).remove();var a=0;$(".SmallBox").each(function(b){0==b?($(this).animate({"top":20},300),a=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":a}),a=a+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})}))},a.timeout),$("#smallbox"+SmallBoxes).bind("click",function(){clearInterval(i),"function"==typeof b&&b&&b();var a=$(this).height()+20;$(this).attr("id"),$(this).css("top");SmallBoxesAnchos-=a,$(this).removeClass().addClass("SmallBox").animate({"opacity":0},300,function(){$(this).remove();var a=0;$(".SmallBox").each(function(b){0==b?($(this).animate({"top":20},300),a=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":a},350),a=a+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})})})};
!function(a,b,c,d){function e(b,c){this.obj=a(b),this.o=a.extend({},a.fn[f].defaults,c),this.objId=this.obj.attr("id"),this.pwCtrls=".jarviswidget-ctrls",this.widget=this.obj.find(this.o.widgets),this.toggleClass=this.o.toggleClass.split("|"),this.editClass=this.o.editClass.split("|"),this.fullscreenClass=this.o.fullscreenClass.split("|"),this.customClass=this.o.customClass.split("|"),this.storage={"enabled":this.o.localStorage},this.initialized=!1,this.init()}var f="jarvisWidgets",g=("ontouchstart"in b||b.DocumentTouch&&c instanceof DocumentTouch?"touchstart":"click")+"."+f;e.prototype={"_runLoaderWidget":function(a){var b=this;b.o.indicator===!0&&a.parents(b.o.widgets).find(".jarviswidget-loader:first").stop(!0,!0).fadeIn(100).delay(b.o.indicatorTime).fadeOut(100)},"_getPastTimestamp":function(a){var b=this,c=new Date(a),d=c.getMonth()+1,e=c.getDate(),f=c.getFullYear(),g=c.getHours(),h=c.getMinutes(),i=c.getUTCSeconds();10>d&&(d="0"+d),10>e&&(e="0"+e),10>g&&(g="0"+g),10>h&&(h="0"+h),10>i&&(i="0"+i);var j=b.o.timestampFormat.replace(/%d%/g,e).replace(/%m%/g,d).replace(/%y%/g,f).replace(/%h%/g,g).replace(/%i%/g,h).replace(/%s%/g,i);return j},"_loadAjaxFile":function(b,c,d){var e=this;b.find(".widget-body").load(c,function(c,d,f){var g=a(this);if("error"==d&&g.html('<h4 class="alert alert-danger">'+e.o.labelError+"<b> "+f.status+" "+f.statusText+"</b></h4>"),"success"==d){var h=b.find(e.o.timestampPlaceholder);h.length&&h.html(e._getPastTimestamp(new Date)),"function"==typeof e.o.afterLoad&&e.o.afterLoad.call(this,b)}e=null}),this._runLoaderWidget(d)},"_loadKeys":function(){var a=this;if(a.o.ajaxnav===!0){var b=location.hash.replace(/^#/,"");a.storage.keySettings="Plugin_settings_"+b+"_"+a.objId,a.storage.keyPosition="Plugin_position_"+b+"_"+a.objId}else if(a.initialized===!1){var b=a.o.pageKey||location.pathname;a.storage.keySettings="jarvisWidgets_settings_"+b+"_"+a.objId,a.storage.keyPosition="jarvisWidgets_position_"+b+"_"+a.objId}},"_saveSettingsWidget":function(){var b=this,c=b.storage;b._loadKeys();var d=b.obj.find(b.o.widgets).map(function(){var b={};return b.id=a(this).attr("id"),b.style=a(this).attr("data-widget-attstyle"),b.title=a(this).children("header").children("h2").text(),b.hidden="none"==a(this).css("display")?1:0,b.collapsed=a(this).hasClass("jarviswidget-collapsed")?1:0,b}).get(),e=JSON.stringify({"widget":d});c.enabled&&c.getKeySettings!=e&&(localStorage.setItem(c.keySettings,e),c.getKeySettings=e),"function"==typeof b.o.onSave&&b.o.onSave.call(this,null,e,c.keySettings)},"_savePositionWidget":function(){var b=this,c=b.storage;b._loadKeys();var d=b.obj.find(b.o.grid+".sortable-grid").map(function(){var c=a(this).children(b.o.widgets).map(function(){return{"id":a(this).attr("id")}}).get();return{"section":c}}).get(),e=JSON.stringify({"grid":d});c.enabled&&c.getKeyPosition!=e&&(localStorage.setItem(c.keyPosition,e),c.getKeyPosition=e),"function"==typeof b.o.onSave&&b.o.onSave.call(this,e,c.keyPosition)},"init":function(){var b=this;if(!b.initialized){if(b._initStorage(b.storage),a("#"+b.objId).length||alert("It looks like your using a class instead of an ID, dont do that!"),b.o.rtl===!0&&a("body").addClass("rtl"),a(b.o.grid).each(function(){a(this).find(b.o.widgets).length&&a(this).addClass("sortable-grid")}),b.storage.enabled&&b.storage.getKeyPosition){var c=JSON.parse(b.storage.getKeyPosition);for(var e in c.grid){var h=b.obj.find(b.o.grid+".sortable-grid").eq(e);for(var i in c.grid[e].section)h.append(a("#"+c.grid[e].section[i].id))}}if(b.storage.enabled&&b.storage.getKeySettings){var j=JSON.parse(b.storage.getKeySettings);for(var e in j.widget){var k=a("#"+j.widget[e].id);j.widget[e].style&&k.removeClassPrefix("jarviswidget-color-").addClass(j.widget[e].style).attr("data-widget-attstyle",""+j.widget[e].style),1==j.widget[e].hidden?k.hide(1):k.show(1).removeAttr("data-widget-hidden"),1==j.widget[e].collapsed&&k.addClass("jarviswidget-collapsed").children("div").hide(1),k.children("header").children("h2").text()!=j.widget[e].title&&k.children("header").children("h2").text(j.widget[e].title)}}if(b.widget.each(function(){var c,e,f,g,h,i,j,k,l=a(this),m=a(this).children("header");if(!m.parent().attr("role")){l.data("widget-hidden")===!0&&l.hide(),l.data("widget-collapsed")===!0&&l.addClass("jarviswidget-collapsed").children("div").hide(),c=b.o.customButton===!0&&l.data("widget-custombutton")===d&&0!==b.customClass[0].length?'<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="'+b.customClass[0]+'"></i></a>':"",e=b.o.deleteButton===!0&&l.data("widget-deletebutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="'+b.o.deleteClass+'"></i></a>':"",f=b.o.editButton===!0&&l.data("widget-editbutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="'+b.editClass[0]+'"></i></a>':"",g=b.o.fullscreenButton===!0&&l.data("widget-fullscreenbutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="'+b.fullscreenClass[0]+'"></i></a>':"",b.o.colorButton===!0&&l.data("widget-colorbutton")===d?(h='<a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul>',m.prepend('<div class="widget-toolbar">'+h+"</div>")):h="",b.o.toggleButton===!0&&l.data("widget-togglebutton")===d?(j=l.data("widget-collapsed")===!0||l.hasClass("jarviswidget-collapsed")?b.toggleClass[1]:b.toggleClass[0],i='<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="'+j+'"></i></a>'):i="",k=b.o.refreshButton===!0&&l.data("widget-refreshbutton")!==!1&&l.data("widget-load")?'<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="'+b.o.refreshButtonClass+'"></i></a>':"";var n=b.o.buttonOrder.replace(/%refresh%/g,k).replace(/%delete%/g,e).replace(/%custom%/g,c).replace(/%fullscreen%/g,g).replace(/%edit%/g,f).replace(/%toggle%/g,i);(""!==k||""!==e||""!==c||""!==g||""!==f||""!==i)&&m.prepend('<div class="jarviswidget-ctrls">'+n+"</div>"),b.o.sortable===!0&&l.data("widget-sortable")===d&&l.addClass("jarviswidget-sortable"),l.find(b.o.editPlaceholder).length&&l.find(b.o.editPlaceholder).find("input").val(a.trim(m.children("h2").text())),m.append('<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'),l.attr("role","widget").children("div").attr("role","content").prev("header").attr("role","heading").children("div").attr("role","menu")}}),b.o.buttonsHidden===!0&&a(b.o.pwCtrls).hide(),a(".jarviswidget header [rel=tooltip]").tooltip(),b.obj.find("[data-widget-load]").each(function(){var c=a(this),d=c.children(),e=c.data("widget-load"),f=1e3*c.data("widget-refresh");c.children();c.find(".jarviswidget-ajax-placeholder").length||(c.children("widget-body").append('<div class="jarviswidget-ajax-placeholder">'+b.o.loadingLabel+"</div>"),c.data("widget-refresh")>0?(b._loadAjaxFile(c,e,d),a.intervalArr.push(setInterval(function(){b._loadAjaxFile(c,e,d)},f))):b._loadAjaxFile(c,e,d))}),b.o.sortable===!0&&jQuery.ui){var l=b.obj.find(b.o.grid+".sortable-grid").not("[data-widget-excludegrid]");l.sortable({"items":l.find(b.o.widgets+".jarviswidget-sortable"),"connectWith":l,"placeholder":b.o.placeholderClass,"cursor":"move","revert":!0,"opacity":b.o.opacity,"delay":200,"cancel":".button-icon, #jarviswidget-fullscreen-mode > div","zIndex":1e4,"handle":b.o.dragHandle,"forcePlaceholderSize":!0,"forceHelperSize":!0,"update":function(a,c){b._runLoaderWidget(c.item.children()),b._savePositionWidget(),"function"==typeof b.o.onChange&&b.o.onChange.call(this,c.item)}})}b.o.buttonsHidden===!0&&b.widget.children("header").on("mouseenter."+f,function(){a(this).children(b.o.pwCtrls).stop(!0,!0).fadeTo(100,1)}).on("mouseleave."+f,function(){a(this).children(b.o.pwCtrls).stop(!0,!0).fadeTo(100,0)}),b._clickEvents(),b.storage.enabled&&(a(b.o.deleteSettingsKey).on(g,this,function(a){var c=confirm(b.o.settingsKeyLabel);c&&localStorage.removeItem(keySettings),a.preventDefault()}),a(b.o.deletePositionKey).on(g,this,function(a){var c=confirm(b.o.positionKeyLabel);c&&localStorage.removeItem(keyPosition),a.preventDefault()})),initialized=!0}},"_initStorage":function(a){a.enabled=a.enabled&&!!function(){var a,b=+new Date;try{return localStorage.setItem(b,b),a=localStorage.getItem(b)==b,localStorage.removeItem(b),a}catch(c){}}(),this._loadKeys(),a.enabled&&(a.getKeySettings=localStorage.getItem(a.keySettings),a.getKeyPosition=localStorage.getItem(a.keyPosition))},"_clickEvents":function(){function c(){if(a("#jarviswidget-fullscreen-mode").length){var c=a(b).height(),e=a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("header").height();a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("div").height(c-e-15)}}var d=this,e=d.widget.children("header");e.on(g,".jarviswidget-toggle-btn",function(b){var c=a(this),e=c.parents(d.o.widgets);d._runLoaderWidget(c),e.hasClass("jarviswidget-collapsed")?c.children().removeClass(d.toggleClass[1]).addClass(d.toggleClass[0]).parents(d.o.widgets).removeClass("jarviswidget-collapsed").children("[role=content]").slideDown(d.o.toggleSpeed,function(){d._saveSettingsWidget()}):c.children().removeClass(d.toggleClass[0]).addClass(d.toggleClass[1]).parents(d.o.widgets).addClass("jarviswidget-collapsed").children("[role=content]").slideUp(d.o.toggleSpeed,function(){d._saveSettingsWidget()}),"function"==typeof d.o.onToggle&&d.o.onToggle.call(this,e),b.preventDefault()}),e.on(g,".jarviswidget-fullscreen-btn",function(b){var e=a(this).parents(d.o.widgets),f=e.children("div");d._runLoaderWidget(a(this)),a("#jarviswidget-fullscreen-mode").length?(a(".nooverflow").removeClass("nooverflow"),e.unwrap("<div>").children("div").removeAttr("style").end().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[1]).addClass(d.fullscreenClass[0]).parents(d.pwCtrls).children("a").show(),f.hasClass("jarviswidget-visible")&&f.hide().removeClass("jarviswidget-visible")):(a("body").addClass("nooverflow"),e.wrap('<div id="jarviswidget-fullscreen-mode"/>').parent().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[0]).addClass(d.fullscreenClass[1]).parents(d.pwCtrls).children("a:not(.jarviswidget-fullscreen-btn)").hide(),f.is(":hidden")&&f.show().addClass("jarviswidget-visible")),c(),"function"==typeof d.o.onFullscreen&&d.o.onFullscreen.call(this,e),b.preventDefault()}),a(b).on("resize."+f,function(){c()}),e.on(g,".jarviswidget-edit-btn",function(b){var c=a(this).parents(d.o.widgets);d._runLoaderWidget(a(this)),c.find(d.o.editPlaceholder).is(":visible")?a(this).children().removeClass(d.editClass[1]).addClass(d.editClass[0]).parents(d.o.widgets).find(d.o.editPlaceholder).slideUp(d.o.editSpeed,function(){d._saveSettingsWidget()}):a(this).children().removeClass(d.editClass[0]).addClass(d.editClass[1]).parents(d.o.widgets).find(d.o.editPlaceholder).slideDown(d.o.editSpeed),"function"==typeof d.o.onEdit&&d.o.onEdit.call(this,c),b.preventDefault()}),a(d.o.editPlaceholder).find("input").keyup(function(){a(this).parents(d.o.widgets).children("header").children("h2").text(a(this).val())}),e.on(g,"[data-widget-setstyle]",function(b){var c=a(this).data("widget-setstyle"),e="";a(this).parents(d.o.editPlaceholder).find("[data-widget-setstyle]").each(function(){e+=a(this).data("widget-setstyle")+" "}),a(this).parents(d.o.widgets).attr("data-widget-attstyle",""+c).removeClassPrefix("jarviswidget-color-").addClass(c),d._runLoaderWidget(a(this)),d._saveSettingsWidget(),b.preventDefault()}),e.on(g,".jarviswidget-custom-btn",function(b){var c=a(this).parents(d.o.widgets);d._runLoaderWidget(a(this)),a(this).children("."+d.customClass[0]).length?(a(this).children().removeClass(d.customClass[0]).addClass(d.customClass[1]),"function"==typeof d.o.customStart&&d.o.customStart.call(this,c)):(a(this).children().removeClass(d.customClass[1]).addClass(d.customClass[0]),"function"==typeof d.o.customEnd&&d.o.customEnd.call(this,c)),d._saveSettingsWidget(),b.preventDefault()}),e.on(g,".jarviswidget-delete-btn",function(b){var c=a(this).parents(d.o.widgets),e=c.attr("id"),f=c.children("header").children("h2").text();a.SmartMessageBox?a.SmartMessageBox({"title":"<i class='fa fa-times' style='color:#ed1c24'></i> "+d.o.labelDelete+' "'+f+'"',"content":d.o.deleteMsg,"buttons":"[No][Yes]"},function(b){"Yes"==b&&(d._runLoaderWidget(a(this)),a("#"+e).fadeOut(d.o.deleteSpeed,function(){a(this).remove(),"function"==typeof d.o.onDelete&&d.o.onDelete.call(this,c)}))}):a("#"+e).fadeOut(d.o.deleteSpeed,function(){a(this).remove(),"function"==typeof d.o.onDelete&&d.o.onDelete.call(this,c)}),b.preventDefault()}),e.on(g,".jarviswidget-refresh-btn",function(b){var c=a(this).parents(d.o.widgets),e=c.data("widget-load"),f=c.children(),g=a(this);g.button("loading"),f.addClass("widget-body-ajax-loading"),setTimeout(function(){g.button("reset"),f.removeClass("widget-body-ajax-loading"),d._loadAjaxFile(c,e,f)},1e3),b.preventDefault()}),e=null},"destroy":function(){var c=this,d="."+f,e=c.obj.find(c.o.grid+".sortable-grid").not("[data-widget-excludegrid]");e.sortable("destroy"),c.widget.children("header").off(d),a(c.o.deleteSettingsKey).off(d),a(c.o.deletePositionKey).off(d),a(b).off(d),c.obj.removeData(f)}},a.fn[f]=function(b){return this.each(function(){var c=a(this),d=c.data(f);if(!d){var g="object"==typeof b&&b;c.data(f,d=new e(this,g))}"string"==typeof b&&d[b]()})},a.fn[f].defaults={"grid":"section","widgets":".jarviswidget","localStorage":!0,"deleteSettingsKey":"","settingsKeyLabel":"Reset settings?","deletePositionKey":"","positionKeyLabel":"Reset position?","sortable":!0,"buttonsHidden":!1,"toggleButton":!0,"toggleClass":"min-10 | plus-10","toggleSpeed":200,"onToggle":function(){},"deleteButton":!0,"deleteMsg":"Warning: This action cannot be undone","deleteClass":"trashcan-10","deleteSpeed":200,"onDelete":function(){},"editButton":!0,"editPlaceholder":".jarviswidget-editbox","editClass":"pencil-10 | delete-10","editSpeed":200,"onEdit":function(){},"colorButton":!0,"fullscreenButton":!0,"fullscreenClass":"fullscreen-10 | normalscreen-10","fullscreenDiff":3,"onFullscreen":function(){},"customButton":!0,"customClass":"","customStart":function(){},"customEnd":function(){},"buttonOrder":"%refresh% %delete% %custom% %edit% %fullscreen% %toggle%","opacity":1,"dragHandle":"> header","placeholderClass":"jarviswidget-placeholder","indicator":!0,"indicatorTime":600,"ajax":!0,"loadingLabel":"loading...","timestampPlaceholder":".jarviswidget-timestamp","timestampFormat":"Last update: %m%/%d%/%y% %h%:%i%:%s%","refreshButton":!0,"refreshButtonClass":"refresh-10","labelError":"Sorry but there was a error:","labelUpdated":"Last Update:","labelRefresh":"Refresh","labelDelete":"Delete widget:","afterLoad":function(){},"rtl":!1,"onChange":function(){},"onSave":function(){},"ajaxnav":!0},a.fn.removeClassPrefix=function(b){return this.each(function(c,d){var e=d.className.split(" ").map(function(a){return 0===a.indexOf(b)?"":a});d.className=a.trim(e.join(" "))}),this}}(jQuery,window,document);
/*! jQuery Validation Plugin - v1.11.0 - 2/4/2013
 https://github.com/jzaefferer/jquery-validation
 Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
!function(a){a.extend(a.fn,{"validate":function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},"valid":function(){if(a(this[0]).is("form"))return this.validate().form();var b=!0,c=a(this[0].form).validate();return this.each(function(){b&=c.element(this)}),b},"removeAttrs":function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},"rules":function(b,c){var d=this[0];if(b){var e=a.data(d.form,"validator").settings,f=e.rules,g=a.validator.staticRules(d);switch(b){case"add":a.extend(g,a.validator.normalizeRule(c)),f[d.name]=g,c.messages&&(e.messages[d.name]=a.extend(e.messages[d.name],c.messages));break;case"remove":if(!c)return delete f[d.name],g;var h={};return a.each(c.split(/\s/),function(a,b){h[b]=g[b],delete g[b]}),h}}var i=a.validator.normalizeRules(a.extend({},a.validator.classRules(d),a.validator.attributeRules(d),a.validator.dataRules(d),a.validator.staticRules(d)),d);if(i.required){var j=i.required;delete i.required,i=a.extend({"required":j},i)}return i}}),a.extend(a.expr[":"],{"blank":function(b){return!a.trim(""+b.value)},"filled":function(b){return!!a.trim(""+b.value)},"unchecked":function(a){return!a.checked}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{"defaults":{"messages":{},"groups":{},"rules":{},"errorClass":"invalid","validClass":"valid","errorElement":"em","focusInvalid":!0,"errorContainer":a([]),"errorLabelContainer":a([]),"onsubmit":!0,"ignore":":hidden","ignoreTitle":!1,"onfocusin":function(a,b){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},"onfocusout":function(a,b){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},"onkeyup":function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},"onclick":function(a,b){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},"highlight":function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d).parent().addClass("state-error").removeClass("state-success"):a(b).addClass(c).removeClass(d).parent().addClass("state-error").removeClass("state-success")},"unhighlight":function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d).parent().addClass("state-success").removeClass("state-error"):a(b).removeClass(c).addClass(d).parent().addClass("state-success").removeClass("state-error")}},"setDefaults":function(b){a.extend(a.validator.defaults,b)},"messages":{"required":"This field is required","remote":"Please fix this field","email":"Please enter a valid email address","url":"Please enter a valid URL","date":"Please enter a valid date","dateISO":"Please enter a valid date (ISO)","number":"Please enter a valid number","digits":"Please enter only digits","creditcard":"Please enter a valid credit card number","equalTo":"Please enter the same value again","maxlength":a.validator.format("Please enter no more than {0} characters"),"minlength":a.validator.format("Please enter at least {0} characters"),"rangelength":a.validator.format("Please enter a value between {0} and {1} characters long"),"range":a.validator.format("Please enter a value between {0} and {1}"),"max":a.validator.format("Please enter a value less than or equal to {0}"),"min":a.validator.format("Please enter a value greater than or equal to {0}")},"autoCreateRanges":!1,"prototype":{"init":function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,"");c.settings[d]&&c.settings[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c=this.groups={};a.each(this.settings.groups,function(b,d){"string"==typeof d&&(d=d.split(/\s/)),a.each(d,function(a,d){c[d]=b})});var d=this.settings.rules;a.each(d,function(b,c){d[b]=a.validator.normalizeRule(c)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",b).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},"form":function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},"checkForm":function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},"element":function(b){b=this.validationTargetFor(this.clean(b)),this.lastElement=b,this.prepareElement(b),this.currentElements=a(b);var c=this.check(b)!==!1;return c?delete this.invalid[b.name]:this.invalid[b.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),c},"showErrors":function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({"message":b[c],"element":this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},"resetForm":function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},"numberOfInvalids":function(){return this.objectLength(this.invalid)},"objectLength":function(a){var b=0;for(var c in a)b++;return b},"hideErrors":function(){this.addWrapper(this.toHide).hide()},"valid":function(){return 0===this.size()},"size":function(){return this.errorList.length},"focusInvalid":function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},"findLastActive":function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},"elements":function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},"clean":function(b){return a(b)[0]},"errors":function(){var b=this.settings.errorClass.replace(" ",".");return a(this.settings.errorElement+"."+b,this.errorContext)},"reset":function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},"prepareForm":function(){this.reset(),this.toHide=this.errors().add(this.containers)},"prepareElement":function(a){this.reset(),this.toHide=this.errorsFor(a)},"elementValue":function(b){var c=a(b).attr("type"),d=a(b).val();return"radio"===c||"checkbox"===c?a("input[name='"+a(b).attr("name")+"']:checked").val():"string"==typeof d?d.replace(/\r/g,""):d},"check":function(b){b=this.validationTargetFor(this.clean(b));var c,d=a(b).rules(),e=!1,f=this.elementValue(b);for(var g in d){var h={"method":g,"parameters":d[g]};try{if(c=a.validator.methods[g].call(this,f,b,h.parameters),"dependency-mismatch"===c){e=!0;continue}if(e=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,h),!1}catch(i){throw this.settings.debug&&window.console&&console.log("Exception occured when checking element "+b.id+", check the '"+h.method+"' method.",i),i}}return e?void 0:(this.objectLength(d)&&this.successList.push(b),!0)},"customDataMessage":function(b,c){return a(b).data("msg-"+c.toLowerCase())||b.attributes&&a(b).attr("data-msg-"+c.toLowerCase())},"customMessage":function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},"findDefined":function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},"defaultMessage":function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},"formatAndAdd":function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({"message":d,"element":b}),this.errorMap[b.name]=d,this.submitted[b.name]=d},"addWrapper":function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},"defaultShowErrors":function(){var a,b;for(a=0;this.errorList[a];a++){var c=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},"validElements":function(){return this.currentElements.not(this.invalidElements())},"invalidElements":function(){return a(this.errorList).map(function(){return this.element})},"showLabel":function(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.html(c)):(d=a("<"+this.settings.errorElement+">").attr("for",this.idOrName(b)).addClass(this.settings.errorClass).html(c||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,b)),this.toShow=this.toShow.add(d)},"errorsFor":function(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")===c})},"idOrName":function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},"validationTargetFor":function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},"checkable":function(a){return/radio|checkbox/i.test(a.type)},"findByName":function(b){return a(this.currentForm).find("[name='"+b+"']")},"getLength":function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},"depend":function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},"dependTypes":{"boolean":function(a,b){return a},"string":function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},"optional":function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},"startRequest":function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},"stopRequest":function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},"previousValue":function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{"old":null,"valid":!0,"message":this.defaultMessage(b,"remote")})}},"classRuleSettings":{"required":{"required":!0},"email":{"email":!0},"url":{"url":!0},"date":{"date":!0},"dateISO":{"dateISO":!0},"number":{"number":!0},"digits":{"digits":!0},"creditcard":{"creditcard":!0}},"addClassRules":function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},"classRules":function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},"attributeRules":function(b){var c={},d=a(b);for(var e in a.validator.methods){var f;"required"===e?(f=d.get(0).getAttribute(e),""===f&&(f=!0),f=!!f):f=d.attr(e),f?c[e]=f:d[0].getAttribute("type")===e&&(c[e]=!0)}return c.maxlength&&/-1|2147483647|524288/.test(c.maxlength)&&delete c.maxlength,c},"dataRules":function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule-"+c.toLowerCase()),void 0!==d&&(e[c]=d);return e},"staticRules":function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},"normalizeRules":function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},"normalizeRule":function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},"addMethod":function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},"methods":{"required":function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},"remote":function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e=this.previousValue(c);if(this.settings.messages[c.name]||(this.settings.messages[c.name]={}),e.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=e.message,d="string"==typeof d&&{"url":d}||d,e.old===b)return e.valid;e.old=b;var f=this;this.startRequest(c);var g={};return g[c.name]=b,a.ajax(a.extend(!0,{"url":d,"mode":"abort","port":"validate"+c.name,"dataType":"json","data":g,"success":function(d){f.settings.messages[c.name].remote=e.originalMessage;var g=d===!0||"true"===d;if(g){var h=f.formSubmitted;f.prepareElement(c),f.formSubmitted=h,f.successList.push(c),delete f.invalid[c.name],f.showErrors()}else{var i={},j=d||f.defaultMessage(c,"remote");i[c.name]=e.message=a.isFunction(j)?j(b):j,f.invalid[c.name]=!0,f.showErrors(i)}e.valid=g,f.stopRequest(c,g)}},d)),"pending"},"minlength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},"maxlength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||d>=e},"rangelength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},"min":function(a,b,c){return this.optional(b)||a>=c},"max":function(a,b,c){return this.optional(b)||c>=a},"range":function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},"email":function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},"url":function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},"date":function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},"dateISO":function(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},"number":function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},"digits":function(a,b){return this.optional(b)||/^\d+$/.test(a)},"creditcard":function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c=0,d=0,e=!1;a=a.replace(/\D/g,"");for(var f=a.length-1;f>=0;f--){var g=a.charAt(f);d=parseInt(g,10),e&&(d*=2)>9&&(d-=9),c+=d,e=!e}return c%10===0},"equalTo":function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()}}}),a.format=a.validator.format}(jQuery),function(a){var b={};if(a.ajaxPrefilter)a.ajaxPrefilter(function(a,c,d){var e=a.port;"abort"===a.mode&&(b[e]&&b[e].abort(),b[e]=d)});else{var c=a.ajax;a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(b[f]&&b[f].abort(),b[f]=c.apply(this,arguments)):c.apply(this,arguments)}}}(jQuery),function(a){a.extend(a.fn,{"validateDelegate":function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})}(jQuery);
!function(a){function b(){var a=document.createElement("input"),b="onpaste";return a.setAttribute(b,""),"function"==typeof a[b]?"paste":"input"}var c,d=b()+".mask",e=navigator.userAgent,f=/iphone/i.test(e),g=/android/i.test(e);a.mask={"definitions":{"9":"[0-9]","a":"[A-Za-z]","*":"[A-Za-z0-9]"},"dataName":"rawMaskFn","placeholder":"_"},a.fn.extend({"caret":function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{"begin":a,"end":b})},"unmask":function(){return this.trigger("unmask")},"mask":function(b,e){var h,i,j,k,l,m;return!b&&this.length>0?(h=a(this[0]),h.data(a.mask.dataName)()):(e=a.extend({"placeholder":a.mask.placeholder,"completed":null},e),i=a.mask.definitions,j=[],k=m=b.length,l=null,a.each(b.split(""),function(a,b){"?"==b?(m--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(a){for(;++a<m&&!j[a];);return a}function n(a){for(;--a>=0&&!j[a];);return a}function o(a,b){var c,d;if(!(0>a)){for(c=a,d=h(b);m>c;c++)if(j[c]){if(!(m>d&&j[c].test(w[d])))break;w[c]=w[d],w[d]=e.placeholder,d=h(d)}t(),v.caret(Math.max(l,a))}}function p(a){var b,c,d,f;for(b=a,c=e.placeholder;m>b;b++)if(j[b]){if(d=h(b),f=w[b],w[b]=c,!(m>d&&j[d].test(f)))break;c=f}}function q(a){var b,c,d,e=a.which;8===e||46===e||f&&127===e?(b=v.caret(),c=b.begin,d=b.end,d-c===0&&(c=46!==e?n(c):d=h(c-1),d=46===e?h(d):d),s(c,d),o(c,d-1),a.preventDefault()):27==e&&(v.val(x),v.caret(0,u()),a.preventDefault())}function r(b){var c,d,f,i=b.which,k=v.caret();b.ctrlKey||b.altKey||b.metaKey||32>i||i&&(k.end-k.begin!==0&&(s(k.begin,k.end),o(k.begin,k.end-1)),c=h(k.begin-1),m>c&&(d=String.fromCharCode(i),j[c].test(d)&&(p(c),w[c]=d,t(),f=h(c),g?setTimeout(a.proxy(a.fn.caret,v,f),0):v.caret(f),e.completed&&f>=m&&e.completed.call(v))),b.preventDefault())}function s(a,b){var c;for(c=a;b>c&&m>c;c++)j[c]&&(w[c]=e.placeholder)}function t(){v.val(w.join(""))}function u(a){var b,c,d=v.val(),f=-1;for(b=0,pos=0;m>b;b++)if(j[b]){for(w[b]=e.placeholder;pos++<d.length;)if(c=d.charAt(pos-1),j[b].test(c)){w[b]=c,f=b;break}if(pos>d.length)break}else w[b]===d.charAt(pos)&&b!==k&&(pos++,f=b);return a?t():k>f+1?(v.val(""),s(0,m)):(t(),v.val(v.val().substring(0,f+1))),k?b:l}var v=a(this),w=a.map(b.split(""),function(a,b){return"?"!=a?i[a]?e.placeholder:a:void 0}),x=v.val();v.data(a.mask.dataName,function(){return a.map(w,function(a,b){return j[b]&&a!=e.placeholder?a:null}).join("")}),v.attr("readonly")||v.one("unmask",function(){v.unbind(".mask").removeData(a.mask.dataName)}).bind("focus.mask",function(){clearTimeout(c);var a;x=v.val(),a=u(),c=setTimeout(function(){t(),a==b.length?v.caret(0,a):v.caret(a)},10)}).bind("blur.mask",function(){u(),v.val()!=x&&v.change()}).bind("keydown.mask",q).bind("keypress.mask",r).bind(d,function(){setTimeout(function(){var a=u(!0);v.caret(a),e.completed&&a==v.val().length&&e.completed.call(v)},0)}),u()}))}})}(jQuery);
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{"each2":function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function c(b){var c=a(document.createTextNode(""));b.before(c),c.before(b),c.remove()}function d(a){function b(a){return O[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function e(a,b){for(var c=0,d=b.length;d>c;c+=1)if(g(a,b[c]))return c;return-1}function f(){var b=a(N);b.appendTo("body");var c={"width":b.width()-b[0].clientWidth,"height":b.height()-b[0].clientHeight};return b.remove(),c}function g(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function h(b,c){var d,e,f;if(null===b||b.length<1)return[];for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);return d}function i(a){return a.outerWidth(!1)-a.width()}function j(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function k(c){c.on("mousemove",function(c){var d=M;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function l(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function m(a,b){var c=l(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){e(a.target,b.get())>=0&&c(a)})}function n(a){a[0]!==document.activeElement&&window.setTimeout(function(){var b,c=a[0],d=a.val().length;a.focus();var e=c.offsetWidth>0||c.offsetHeight>0;e&&c===document.activeElement&&(c.setSelectionRange?c.setSelectionRange(d,d):c.createTextRange&&(b=c.createTextRange(),b.collapse(!1),b.select()))},0)}function o(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{"offset":c,"length":d}}function p(a){a.preventDefault(),a.stopPropagation()}function q(a){a.preventDefault(),a.stopImmediatePropagation()}function r(b){if(!J){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);J=a(document.createElement("div")).css({"position":"absolute","left":"-10000px","top":"-10000px","display":"none","fontSize":c.fontSize,"fontFamily":c.fontFamily,"fontStyle":c.fontStyle,"fontWeight":c.fontWeight,"letterSpacing":c.letterSpacing,"textTransform":c.textTransform,"whiteSpace":"nowrap"}),J.attr("class","select2-sizer"),a("body").append(J)}return J.text(b.val()),J.width()}function s(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(f=d(this),f&&g.push(f))})),b.attr("class",g.join(" "))}function t(a,b,c,e){var f=d(a.toUpperCase()).indexOf(d(b.toUpperCase())),g=b.length;return 0>f?void c.push(e(a)):(c.push(e(a.substring(0,f))),c.push("<span class='select2-match'>"),c.push(e(a.substring(f,f+g))),c.push("</span>"),void c.push(e(a.substring(f+g,a.length))))}function u(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function v(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={"type":c.type||"GET","cache":c.cache||!1,"jsonpCallback":c.jsonpCallback||b,"dataType":c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{"url":f,"dataType":c.dataType,"data":d,"success":function(a){var b=c.results(a,i.page,i);i.callback(b)},"error":function(a,b,c){var d={"hasError":!0,"jqXHR":a,"textStatus":b,"errorThrown":c};i.callback(d)}}),e=j.call(h,l)},f)}}function w(b){var c,d,e=b,f=function(a){return""+a.text};a.isArray(e)&&(d=e,e={"results":d}),a.isFunction(e)===!1&&(d=e,e=function(){return d});var g=e();return g.text&&(f=g.text,a.isFunction(f)||(c=g.text,f=function(a){return a[c]})),function(b){var c,d=b.term,g={"results":[]};return""===d?void b.callback(e()):(c=function(e,g){var h,i;if(e=e[0],e.children){h={};for(i in e)e.hasOwnProperty(i)&&(h[i]=e[i]);h.children=[],a(e.children).each2(function(a,b){c(b,h.children)}),(h.children.length||b.matcher(d,f(h),e))&&g.push(h)}else b.matcher(d,f(e),e)&&g.push(e)},a(e().results).each2(function(a,b){c(b,g.results)}),void b.callback(g))}}function x(c){var d=a.isFunction(c);return function(e){var f=e.term,g={"results":[]},h=d?c(e):c;a.isArray(h)&&(a(h).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{"id":this,"text":this})}),e.callback(g))}}function y(b,c){if(a.isFunction(b))return!0;if(!b)return!1;if("string"==typeof b)return!0;throw new Error(c+" must be a string, function, or falsy value")}function z(b,c){if(a.isFunction(b)){var d=Array.prototype.slice.call(arguments,2);return b.apply(c,d)}return b}function A(b){var c=0;return a.each(b,function(a,b){b.children?c+=A(b.children):c++}),c}function B(a,c,d,e){var f,h,i,j,k,l=a,m=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(h=-1,i=0,j=e.tokenSeparators.length;j>i&&(k=e.tokenSeparators[i],h=a.indexOf(k),!(h>=0));i++);if(0>h)break;if(f=a.substring(0,h),a=a.substring(h+k.length),f.length>0&&(f=e.createSearchChoice.call(this,f,c),f!==b&&null!==f&&e.id(f)!==b&&null!==e.id(f))){for(m=!1,i=0,j=c.length;j>i;i++)if(g(e.id(f),e.id(c[i]))){m=!0;break}m||d(f)}}return l!==a?a:void 0}function C(){var b=this;a.each(arguments,function(a,c){b[c].remove(),b[c]=null})}function D(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var E,F,G,H,I,J,K,L,M={"x":0,"y":0},E={"TAB":9,"ENTER":13,"ESC":27,"SPACE":32,"LEFT":37,"UP":38,"RIGHT":39,"DOWN":40,"SHIFT":16,"CTRL":17,"ALT":18,"PAGE_UP":33,"PAGE_DOWN":34,"HOME":36,"END":35,"BACKSPACE":8,"DELETE":46,"isArrow":function(a){switch(a=a.which?a.which:a){case E.LEFT:case E.RIGHT:case E.UP:case E.DOWN:return!0}return!1},"isControl":function(a){var b=a.which;switch(b){case E.SHIFT:case E.CTRL:case E.ALT:return!0}return a.metaKey?!0:!1},"isFunctionKey":function(a){return a=a.which?a.which:a,a>=112&&123>=a}},N="<div class='select2-measure-scrollbar'></div>",O={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038a":"\u0399","\u03aa":"\u0399","\u038c":"\u039f","\u038e":"\u03a5","\u03ab":"\u03a5","\u038f":"\u03a9","\u03ac":"\u03b1","\u03ad":"\u03b5","\u03ae":"\u03b7","\u03af":"\u03b9","\u03ca":"\u03b9","\u0390":"\u03b9","\u03cc":"\u03bf","\u03cd":"\u03c5","\u03cb":"\u03c5","\u03b0":"\u03c5","\u03c9":"\u03c9","\u03c2":"\u03c3"};K=a(document),I=function(){var a=1;return function(){return a++}}(),F=D(Object,{"bind":function(a){var b=this;return function(){a.apply(b,arguments)}},"init":function(c){var d,e,g=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a("<span>",{"role":"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+I()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a("body"),s(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(z(c.containerCss,this.opts.element)),this.container.addClass(z(c.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",p),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),s(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(z(c.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",p),this.results=d=this.container.find(g),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",p),k(this.results),this.dropdown.on("mousemove-filtered",g,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",g,this.bind(function(a){this._touchEvent=!0,this.highlightUnderEvent(a)})),this.dropdown.on("touchmove",g,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",g,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(a){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),m(80,this.results),this.dropdown.on("scroll-debounced",g,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),p(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),p(a))}),j(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",g,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.nextSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),L=L||f(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},"destroy":function(){var a=this.opts.element,c=a.data("select2"),d=this;this.close(),a.length&&a[0].detachEvent&&a.each(function(){this.detachEvent("onpropertychange",d._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,c!==b&&(c.container.remove(),c.liveRegion.remove(),c.dropdown.remove(),a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({"tabindex":this.elementTabIndex}):a.removeAttr("tabindex"),a.show()),C.call(this,"container","liveRegion","dropdown","results","search")},"optionToData":function(a){return a.is("option")?{"id":a.prop("value"),"text":a.text(),"element":a.get(),"css":a.attr("class"),"disabled":a.prop("disabled"),"locked":g(a.attr("locked"),"locked")||g(a.data("locked"),!0)}:a.is("optgroup")?{"text":a.attr("label"),"children":[],"element":a.get(),"css":a.attr("class")}:void 0},"prepareOpts":function(c){var d,e,f,i,j=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c=a.extend({},{"populateResults":function(d,e,f){var g,h=this.opts.id,i=this.liveRegion;(g=function(d,e,k){var l,m,n,o,p,q,r,s,t,u;d=c.sortResults(d,e,f);var v=[];for(l=0,m=d.length;m>l;l+=1)n=d[l],p=n.disabled===!0,o=!p&&h(n)!==b,q=n.children&&n.children.length>0,r=a("<li></li>"),r.addClass("select2-results-dept-"+k),r.addClass("select2-result"),r.addClass(o?"select2-result-selectable":"select2-result-unselectable"),p&&r.addClass("select2-disabled"),q&&r.addClass("select2-result-with-children"),r.addClass(j.opts.formatResultCssClass(n)),r.attr("role","presentation"),s=a(document.createElement("div")),s.addClass("select2-result-label"),s.attr("id","select2-result-label-"+I()),s.attr("role","option"),u=c.formatResult(n,s,f,j.opts.escapeMarkup),u!==b&&(s.html(u),r.append(s)),q&&(t=a("<ul></ul>"),t.addClass("select2-result-sub"),g(n.children,t,k+1),r.append(t)),r.data("select2-data",n),v.push(r[0]);e.append(v),i.text(c.formatMatches(d.length))})(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){return a[f]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var c,e,f,g={"results":[],"more":!1},h=a.term;f=function(b,c){var d;b.is("option")?a.matcher(h,b.text(),b)&&c.push(j.optionToData(b)):b.is("optgroup")&&(d=j.optionToData(b),b.children().each2(function(a,b){f(b,d.children)}),d.children.length>0&&c.push(d))},c=d.children(),this.getPlaceholder()!==b&&c.length>0&&(e=this.getPlaceholderOption(),e&&(c=c.not(e))),c.each2(function(a,b){f(b,g.results)}),a.callback(g)}),c.id=function(a){return a.id}):"query"in c||("ajax"in c?(i=c.element.data("ajax-url"),i&&i.length>0&&(c.ajax.url=i),c.query=v.call(c.element,c.ajax)):"data"in c?c.query=w(c.data):"tags"in c&&(c.query=x(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{"id":a.trim(b),"text":a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(h(b.val(),c.separator)).each(function(){var b={"id":this,"text":this},d=c.tags;a.isFunction(d)&&(d=d()),a(d).each(function(){return g(this.id,b.id)?(b=this,!1):void 0}),e.push(b)}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},"monitorSource":function(){var c,d=this.opts.element,e=this;d.on("change.select2",this.bind(function(a){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),this._sync=this.bind(function(){var a=d.prop("disabled");a===b&&(a=!1),this.enable(!a);var c=d.prop("readonly");c===b&&(c=!1),this.readonly(c),s(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(z(this.opts.containerCssClass,this.opts.element)),s(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(z(this.opts.dropdownCssClass,this.opts.element))}),d.length&&d[0].attachEvent&&d.each(function(){this.attachEvent("onpropertychange",e._sync)}),c=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,c!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new c(function(b){a.each(b,e._sync)}),this.propertyObserver.observe(d.get(0),{"attributes":!0,"subtree":!1}))},"triggerSelect":function(b){var c=a.Event("select2-selecting",{"val":this.id(b),"object":b,"choice":b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},"triggerChange":function(b){b=b||{},b=a.extend({},b,{"type":"change","val":this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},"isInterfaceEnabled":function(){return this.enabledInterface===!0},"enableInterface":function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},"enable":function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},"disable":function(){this.enable(!1)},"readonly":function(a){a===b&&(a=!1),this._readonly!==a&&(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface())},"opened":function(){return this.container?this.container.hasClass("select2-dropdown-open"):!1},"positionDropdown":function(){var b,c,d,e,f,g=this.dropdown,h=this.container.offset(),i=this.container.outerHeight(!1),j=this.container.outerWidth(!1),k=g.outerHeight(!1),l=a(window),m=l.width(),n=l.height(),o=l.scrollLeft()+m,p=l.scrollTop()+n,q=h.top+i,r=h.left,s=p>=q+k,t=h.top-k>=l.scrollTop(),u=g.outerWidth(!1),v=o>=r+u,w=g.hasClass("select2-drop-above");w?(c=!0,!t&&s&&(d=!0,c=!1)):(c=!1,!s&&t&&(d=!0,c=!0)),d&&(g.hide(),h=this.container.offset(),i=this.container.outerHeight(!1),j=this.container.outerWidth(!1),k=g.outerHeight(!1),o=l.scrollLeft()+m,p=l.scrollTop()+n,q=h.top+i,r=h.left,u=g.outerWidth(!1),v=o>=r+u,g.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(f=a(".select2-results",g)[0],g.addClass("select2-drop-auto-width"),g.css("width",""),u=g.outerWidth(!1)+(f.scrollHeight===f.clientHeight?0:L.width),u>j?j=u:u=j,k=g.outerHeight(!1),v=o>=r+u):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(b=this.body.offset(),q-=b.top,r-=b.left),v||(r=h.left+this.container.outerWidth(!1)-u),e={"left":r,"width":j},c?(e.top=h.top-k,e.bottom="auto",this.container.addClass("select2-drop-above"),g.addClass("select2-drop-above")):(e.top=q,e.bottom="auto",this.container.removeClass("select2-drop-above"),g.removeClass("select2-drop-above")),e=a.extend(e,z(this.opts.dropdownCss,this.opts.element)),g.css(e)},"shouldOpen":function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},"clearDropdownAlignmentPreference":function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},"open":function(){return this.shouldOpen()?(this.opening(),K.on("mousemove.select2Event",function(a){M.x=a.pageX,M.y=a.pageY}),!0):!1},"opening":function(){var b,d=this.containerEventName,e="scroll."+d,f="resize."+d,g="orientationchange."+d;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),b=a("#select2-drop-mask"),0==b.length&&(b=a(document.createElement("div")),b.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),b.hide(),b.appendTo(this.body),b.on("mousedown touchstart click",function(d){c(b);var e,f=a("#select2-drop");f.length>0&&(e=f.data("select2"),e.opts.selectOnBlur&&e.selectHighlighted({"noFocus":!0}),e.close(),d.preventDefault(),d.stopPropagation())})),this.dropdown.prev()[0]!==b[0]&&this.dropdown.before(b),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),b.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var h=this;this.container.parents().add(window).each(function(){a(this).on(f+" "+e+" "+g,function(a){h.opened()&&h.positionDropdown()})})},"close":function(){if(this.opened()){var b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),K.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))}},"externalSearch":function(a){this.open(),this.search.val(a),this.updateResults(!1)},"clearSearch":function(){},"getMaximumSelectionSize":function(){return z(this.opts.maximumSelectionSize,this.opts.element)},"ensureHighlightVisible":function(){var b,c,d,e,f,g,h,i,j=this.results;if(c=this.highlight(),!(0>c)){if(0==c)return void j.scrollTop(0);b=this.findHighlightableChoices().find(".select2-result-label"),d=a(b[c]),i=(d.offset()||{}).top||0,e=i+d.outerHeight(!0),c===b.length-1&&(h=j.find("li.select2-more-results"),h.length>0&&(e=h.offset().top+h.outerHeight(!0))),f=j.offset().top+j.outerHeight(!0),e>f&&j.scrollTop(j.scrollTop()+(e-f)),g=i-j.offset().top,0>g&&"none"!=d.css("display")&&j.scrollTop(j.scrollTop()+g)}},"findHighlightableChoices":function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},
"moveHighlight":function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},"highlight":function(b){var c,d,f=this.findHighlightableChoices();return 0===arguments.length?e(f.filter(".select2-highlighted")[0],f.get()):(b>=f.length&&(b=f.length-1),0>b&&(b=0),this.removeHighlight(),c=a(f[b]),c.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",c.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(c.text()),d=c.data("select2-data"),void(d&&this.opts.element.trigger({"type":"select2-highlight","val":this.id(d),"choice":d})))},"removeHighlight":function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},"touchMoved":function(){this._touchMoved=!0},"clearTouchMoved":function(){this._touchMoved=!1},"countSelectableResults":function(){return this.findHighlightableChoices().length},"highlightUnderEvent":function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},"loadMoreIfNeeded":function(){var a,b=this.results,c=b.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==c.length&&(a=c.offset().top-b.offset().top-b.height(),a<=this.opts.loadMorePadding&&(c.addClass("select2-active"),this.opts.query({"element":this.opts.element,"term":f,"page":d,"context":g,"matcher":this.opts.matcher,"callback":this.bind(function(a){e.opened()&&(e.opts.populateResults.call(this,b,a.results,{"term":f,"page":d,"context":g}),e.postprocessResults(a,!1,!1),a.more===!0?(c.detach().appendTo(b).text(z(e.opts.formatLoadMore,e.opts.element,d+1)),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):c.remove(),e.positionDropdown(),e.resultsPage=d,e.context=a.context,this.opts.element.trigger({"type":"select2-loaded","items":a}))})})))},"tokenize":function(){},"updateResults":function(c){function d(){j.removeClass("select2-active"),m.positionDropdown(),k.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?m.liveRegion.text(k.text()):m.liveRegion.text(m.opts.formatMatches(k.find(".select2-result-selectable").length))}function e(a){k.html(a),d()}var f,h,i,j=this.search,k=this.results,l=this.opts,m=this,n=j.val(),o=a.data(this.container,"select2-last-term");if((c===!0||!o||!g(n,o))&&(a.data(this.container,"select2-last-term",n),c===!0||this.showSearchInput!==!1&&this.opened())){i=++this.queryCount;var p=this.getMaximumSelectionSize();if(p>=1&&(f=this.data(),a.isArray(f)&&f.length>=p&&y(l.formatSelectionTooBig,"formatSelectionTooBig")))return void e("<li class='select2-selection-limit'>"+z(l.formatSelectionTooBig,l.element,p)+"</li>");if(j.val().length<l.minimumInputLength)return e(y(l.formatInputTooShort,"formatInputTooShort")?"<li class='select2-no-results'>"+z(l.formatInputTooShort,l.element,j.val(),l.minimumInputLength)+"</li>":""),void(c&&this.showSearch&&this.showSearch(!0));if(l.maximumInputLength&&j.val().length>l.maximumInputLength)return void e(y(l.formatInputTooLong,"formatInputTooLong")?"<li class='select2-no-results'>"+z(l.formatInputTooLong,l.element,j.val(),l.maximumInputLength)+"</li>":"");l.formatSearching&&0===this.findHighlightableChoices().length&&e("<li class='select2-searching'>"+z(l.formatSearching,l.element)+"</li>"),j.addClass("select2-active"),this.removeHighlight(),h=this.tokenize(),h!=b&&null!=h&&j.val(h),this.resultsPage=1,l.query({"element":l.element,"term":j.val(),"page":this.resultsPage,"context":null,"matcher":l.matcher,"callback":this.bind(function(f){var h;if(i==this.queryCount){if(!this.opened())return void this.search.removeClass("select2-active");if(f.hasError!==b&&y(l.formatAjaxError,"formatAjaxError"))return void e("<li class='select2-ajax-error'>"+z(l.formatAjaxError,l.element,f.jqXHR,f.textStatus,f.errorThrown)+"</li>");if(this.context=f.context===b?null:f.context,this.opts.createSearchChoice&&""!==j.val()&&(h=this.opts.createSearchChoice.call(m,j.val(),f.results),h!==b&&null!==h&&m.id(h)!==b&&null!==m.id(h)&&0===a(f.results).filter(function(){return g(m.id(this),m.id(h))}).length&&this.opts.createSearchChoicePosition(f.results,h)),0===f.results.length&&y(l.formatNoMatches,"formatNoMatches"))return void e("<li class='select2-no-results'>"+z(l.formatNoMatches,l.element,j.val())+"</li>");k.empty(),m.opts.populateResults.call(this,k,f.results,{"term":j.val(),"page":this.resultsPage,"context":null}),f.more===!0&&y(l.formatLoadMore,"formatLoadMore")&&(k.append("<li class='select2-more-results'>"+l.escapeMarkup(z(l.formatLoadMore,l.element,this.resultsPage))+"</li>"),window.setTimeout(function(){m.loadMoreIfNeeded()},10)),this.postprocessResults(f,c),d(),this.opts.element.trigger({"type":"select2-loaded","items":f})}})})}},"cancel":function(){this.close()},"blur":function(){this.opts.selectOnBlur&&this.selectHighlighted({"noFocus":!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},"focusSearch":function(){n(this.search)},"selectHighlighted":function(a){if(this._touchMoved)return void this.clearTouchMoved();var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},"getPlaceholder":function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},"getPlaceholderOption":function(){if(this.select){var c=this.select.children("option").first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&c||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.trim(c.text())&&""===c.val())return c}},"initContainerWidth":function(){function c(){var c,d,e,f,g,h;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(h=d[f].replace(/\s/g,""),e=h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var d=c.call(this);null!==d&&this.container.css("width",d)}}),G=D(F,{"createContainer":function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));return b},"enableInterface":function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},"opening":function(){var c,d,e;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e))),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},"close":function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},"focus":function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},"isFocused":function(){return this.container.hasClass("select2-container-active")},"cancel":function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},"destroy":function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),C.call(this,"selection","focusser")},"initContainer":function(){var b,d,e=this.container,f=this.dropdown,g=I();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=e.find(".select2-choice"),this.focusser=e.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+g),this.focusser.attr("aria-labelledby","select2-chosen-"+g),this.results.attr("id","select2-results-"+g),this.search.attr("aria-owns","select2-results-"+g),this.focusser.attr("id","s2id_autogen"+g),d=a("label[for='"+this.opts.element.attr("id")+"']"),this.focusser.prev().text(d.text()).attr("for",this.focusser.attr("id"));var h=this.opts.element.attr("title");this.opts.element.attr("title",h||d.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&229!=a.keyCode){if(a.which===E.PAGE_UP||a.which===E.PAGE_DOWN)return void p(a);switch(a.which){case E.UP:case E.DOWN:return this.moveHighlight(a.which===E.UP?-1:1),void p(a);case E.ENTER:return this.selectHighlighted(),void p(a);case E.TAB:return void this.selectHighlighted({"noFocus":!0});case E.ESC:return this.cancel(a),void p(a)}}})),this.search.on("blur",this.bind(function(a){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==E.TAB&&!E.isControl(a)&&!E.isFunctionKey(a)&&a.which!==E.ESC){if(this.opts.openOnEnter===!1&&a.which===E.ENTER)return void p(a);if(a.which==E.DOWN||a.which==E.UP||a.which==E.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),void p(a)}return a.which==E.DELETE||a.which==E.BACKSPACE?(this.opts.allowClear&&this.clear(),void p(a)):void 0}})),j(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown touchstart","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),q(a),this.close(),this.selection.focus())})),b.on("mousedown touchstart",this.bind(function(d){c(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),p(d)})),f.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),b.on("focus",this.bind(function(a){p(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},"clear":function(b){var c=this.selection.data("select2-data");if(c){var d=a.Event("select2-clearing");if(this.opts.element.trigger(d),d.isDefaultPrevented())return;var e=this.getPlaceholderOption();this.opts.element.val(e?e.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),b!==!1&&(this.opts.element.trigger({"type":"select2-removed","val":this.id(c),"choice":c}),this.triggerChange({"removed":c}))}},"initSelection":function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var a=this;this.opts.initSelection.call(null,this.opts.element,function(c){c!==b&&null!==c&&(a.updateSelection(c),a.close(),a.setPlaceholder(),a.nextSearchTerm=a.opts.nextSearchTerm(c,a.search.val()))})}},"isPlaceholderOptionSelected":function(){var a;return this.getPlaceholder()===b?!1:(a=this.getPlaceholderOption())!==b&&a.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val()},"prepareOpts":function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find("option").filter(function(){return this.selected&&!this.disabled});b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({"matcher":function(a,c,d){var h=g(e,b.id(d));return h&&(f=d),h},"callback":a.isFunction(d)?function(){d(f)}:a.noop})}),b},"getPlaceholder":function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},"setPlaceholder":function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},"postprocessResults":function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return g(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var f=this.opts.minimumResultsForSearch;f>=0&&this.showSearch(A(a.results)>=f)}},"showSearch":function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},"onSelect":function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({"type":"select2-selected","val":this.id(a),"choice":a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),g(c,this.id(a))||this.triggerChange({"added":a,"removed":d})}},"updateSelection":function(a){var c,d,e=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),e.empty(),null!==a&&(c=this.opts.formatSelection(a,e,this.opts.escapeMarkup)),c!==b&&e.append(c),d=this.opts.formatSelectionCssClass(a,e),d!==b&&e.addClass(d),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},"val":function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({"added":d,"removed":f});else{if(!a&&0!==a)return void this.clear(c);if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({"added":a,"removed":f})})}},"clearSearch":function(){this.search.val(""),this.focusser.val("")},"data":function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),void(a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({"added":a,"removed":c})):this.clear(d)))}}),H=D(F,{"createContainer":function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},"prepareOpts":function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=h(c.val(),b.separator),f=[];b.query({"matcher":function(c,d,h){var i=a.grep(e,function(a){return g(a,b.id(h))}).length;return i&&f.push(h),i},"callback":a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var h=e[c],i=0;i<f.length;i++){var j=f[i];if(g(h,b.id(j))){a.push(j),f.splice(i,1);break}}d(a)}:a.noop})}),b},"selectChoice":function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},"destroy":function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),C.call(this,"searchContainer","selection")},"initContainer":function(){var b,c=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=b=this.container.find(c);var d=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",function(b){d.search[0].focus(),d.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+I()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var c=b.find(".select2-search-choice-focus"),d=c.prev(".select2-search-choice:not(.select2-locked)"),e=c.next(".select2-search-choice:not(.select2-locked)"),f=o(this.search);if(c.length&&(a.which==E.LEFT||a.which==E.RIGHT||a.which==E.BACKSPACE||a.which==E.DELETE||a.which==E.ENTER)){var g=c;return a.which==E.LEFT&&d.length?g=d:a.which==E.RIGHT?g=e.length?e:null:a.which===E.BACKSPACE?this.unselect(c.first())&&(this.search.width(10),g=d.length?d:e):a.which==E.DELETE?this.unselect(c.first())&&(this.search.width(10),g=e.length?e:null):a.which==E.ENTER&&(g=null),this.selectChoice(g),p(a),void(g&&g.length||this.open())}if((a.which===E.BACKSPACE&&1==this.keydowns||a.which==E.LEFT)&&0==f.offset&&!f.length)return this.selectChoice(b.find(".select2-search-choice:not(.select2-locked)").last()),void p(a);if(this.selectChoice(null),this.opened())switch(a.which){case E.UP:case E.DOWN:return this.moveHighlight(a.which===E.UP?-1:1),void p(a);case E.ENTER:return this.selectHighlighted(),void p(a);case E.TAB:return this.selectHighlighted({"noFocus":!0}),void this.close();case E.ESC:return this.cancel(a),void p(a)}if(a.which!==E.TAB&&!E.isControl(a)&&!E.isFunctionKey(a)&&a.which!==E.BACKSPACE&&a.which!==E.ESC){if(a.which===E.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===E.PAGE_UP||a.which===E.PAGE_DOWN)&&p(a),a.which===E.ENTER&&p(a)}}})),this.search.on("keyup",this.bind(function(a){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",c,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",c,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()},"enableInterface":function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},"initSelection":function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var a=this;this.opts.initSelection.call(null,this.opts.element,function(c){c!==b&&null!==c&&(a.updateSelection(c),a.close(),a.clearSearch())})}},"clearSearch":function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},"clearPlaceholder":function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},"opening":function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},"close":function(){this.opened()&&this.parent.close.apply(this,arguments)},"focus":function(){this.close(),this.search.focus()},"isFocused":function(){return this.search.hasClass("select2-focused")},"updateSelection":function(b){var c=[],d=[],f=this;a(b).each(function(){e(f.id(this),c)<0&&(c.push(f.id(this)),d.push(this))}),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){f.addSelectedChoice(this)}),f.postprocessResults()},"tokenize":function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},"onSelect":function(a,c){this.triggerSelect(a)&&""!==a.text&&(this.addSelectedChoice(a),this.opts.element.trigger({"type":"selected","val":this.id(a),"choice":a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.updateResults(),this.search.select()),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({"added":a}),c&&c.noFocus||this.focusSearch())},"cancel":function(){this.close(),this.focusSearch()},"addSelectedChoice":function(c){var d,e,f=!c.locked,g=a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),h=a("<li class='select2-search-choice select2-locked'><div></div></li>"),i=f?g:h,j=this.id(c),k=this.getVal();d=this.opts.formatSelection(c,i.find("div"),this.opts.escapeMarkup),d!=b&&i.find("div").replaceWith("<div>"+d+"</div>"),e=this.opts.formatSelectionCssClass(c,i.find("div")),e!=b&&i.addClass(e),f&&i.find(".select2-search-choice-close").on("mousedown",p).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),p(b),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),i.data("select2-data",c),i.insertBefore(this.searchContainer),k.push(j),this.setVal(k)},"unselect":function(b){var c,d,f=this.getVal();if(b=b.closest(".select2-search-choice"),0===b.length)throw"Invalid argument: "+b+". Must be .select2-search-choice";if(c=b.data("select2-data")){var g=a.Event("select2-removing");if(g.val=this.id(c),g.choice=c,this.opts.element.trigger(g),g.isDefaultPrevented())return!1;for(;(d=e(this.id(c),f))>=0;)f.splice(d,1),this.setVal(f),this.select&&this.postprocessResults();return b.remove(),this.opts.element.trigger({"type":"select2-removed","val":this.id(c),"choice":c}),this.triggerChange({"removed":c}),!0}},"postprocessResults":function(a,b,c){var d=this.getVal(),f=this.results.find(".select2-result"),g=this.results.find(".select2-result-with-children"),h=this;f.each2(function(a,b){var c=h.id(b.data("select2-data"));e(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),g.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&h.highlight(0),!this.opts.createSearchChoice&&!f.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&y(h.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+z(h.opts.formatNoMatches,h.opts.element,h.search.val())+"</li>")},"getMaxSearchWidth":function(){return this.selection.width()-i(this.search)},"resizeSearch":function(){var a,b,c,d,e,f=i(this.search);a=r(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(Math.floor(e))},"getVal":function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),h(a,this.opts.separator))},"setVal":function(b){var c;this.select?this.select.val(b):(c=[],a(b).each(function(){e(this,c)<0&&c.push(this)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))},"buildChangeDetails":function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)g(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c>0&&c--,a.splice(d,1),d--);return{"added":b,"removed":a}},"val":function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),void(d&&this.triggerChange({"added":this.data(),"removed":e}));if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,f.data()))})}this.clearSearch()},"onSortStart":function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},"onSortEnd":function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},"data":function(b,c){var d,e,f=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(e=this.data(),b||(b=[]),d=a.map(b,function(a){return f.opts.id(a)}),this.setVal(d),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(e,this.data())),void 0)}}),a.fn.select2=function(){var c,d,f,g,h,i=Array.prototype.slice.call(arguments,0),j=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],k=["opened","isFocused","container","dropdown"],l=["val","data"],m={"search":"externalSearch"};return this.each(function(){if(0===i.length||"object"==typeof i[0])c=0===i.length?{}:a.extend({},i[0]),c.element=a(this),"select"===c.element.get(0).tagName.toLowerCase()?h=c.element.prop("multiple"):(h=c.multiple||!1,"tags"in c&&(c.multiple=h=!0)),d=h?new window.Select2["class"].multi:new window.Select2["class"].single,d.init(c);else{if("string"!=typeof i[0])throw"Invalid arguments to select2 plugin: "+i;if(e(i[0],j)<0)throw"Unknown method: "+i[0];if(g=b,d=a(this).data("select2"),d===b)return;if(f=i[0],"container"===f?g=d.container:"dropdown"===f?g=d.dropdown:(m[f]&&(f=m[f]),g=d[f].apply(d,i.slice(1))),e(i[0],k)>=0||e(i[0],l)>=0&&1==i.length)return!1}}),g===b?this:g},a.fn.select2.defaults={"width":"copy","loadMorePadding":0,"closeOnSelect":!0,"openOnEnter":!0,"containerCss":{},"dropdownCss":{},"containerCssClass":"","dropdownCssClass":"","formatResult":function(a,b,c,d){var e=[];return t(a.text,c.term,e,d),e.join("")},"formatSelection":function(a,c,d){return a?d(a.text):b},"sortResults":function(a,b,c){return a},"formatResultCssClass":function(a){return a.css},"formatSelectionCssClass":function(a,c){return b},"minimumResultsForSearch":0,"minimumInputLength":0,"maximumInputLength":null,"maximumSelectionSize":0,"id":function(a){return a==b?null:a.id},"matcher":function(a,b){return d(""+b).toUpperCase().indexOf(d(""+a).toUpperCase())>=0;
},"separator":",","tokenSeparators":[],"tokenizer":B,"escapeMarkup":u,"blurOnChange":!1,"selectOnBlur":!1,"adaptContainerCssClass":function(a){return a},"adaptDropdownCssClass":function(a){return null},"nextSearchTerm":function(a,c){return b},"searchInputPlaceholder":"","createSearchChoicePosition":"top","shouldFocusInput":function(a){var b="ontouchstart"in window||navigator.msMaxTouchPoints>0;return b&&a.opts.minimumResultsForSearch<0?!1:!0}},a.fn.select2.locales=[],a.fn.select2.locales.en={"formatMatches":function(a){return 1===a?"One result is available, press enter to select it.":a+" results are available, use up and down arrow keys to navigate."},"formatNoMatches":function(){return"No matches found"},"formatAjaxError":function(a,b,c){return"Loading failed"},"formatInputTooShort":function(a,b){var c=b-a.length;return"Please enter "+c+" or more character"+(1==c?"":"s")},"formatInputTooLong":function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},"formatSelectionTooBig":function(a){return"You can only select "+a+" item"+(1==a?"":"s")},"formatLoadMore":function(a){return"Loading more results\u2026"},"formatSearching":function(){return"Searching\u2026"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.en),a.fn.select2.ajaxDefaults={"transport":a.ajax,"params":{"type":"GET","cache":!1,"dataType":"json"}},window.Select2={"query":{"ajax":v,"local":w,"tags":x},"util":{"debounce":l,"markMatch":t,"escapeMarkup":u,"stripDiacritics":d},"class":{"abstract":F,"single":G,"multi":H}}}}(jQuery);
!function(a){var b=function(b,c){this.element=a(b),this.picker=a('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).prepend(this.element),this.id=this.element.data("slider-id")||c.id,this.id&&(this.picker[0].id=this.id),"undefined"!=typeof Modernizr&&Modernizr.touch&&(this.touchCapable=!0);var d=this.element.data("slider-tooltip")||c.tooltip;switch(this.tooltip=this.picker.find(".tooltip"),this.tooltipInner=this.tooltip.find("div.tooltip-inner"),this.orientation=this.element.data("slider-orientation")||c.orientation,this.orientation){case"vertical":this.picker.addClass("slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight",this.tooltip.addClass("right")[0].style.left="100%";break;default:this.picker.addClass("slider-horizontal").css("width",this.element.outerWidth()),this.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth",this.tooltip.addClass("top")[0].style.top=-this.tooltip.outerHeight()-14+"px"}this.min=this.element.data("slider-min")||c.min,this.max=this.element.data("slider-max")||c.max,this.step=this.element.data("slider-step")||c.step,this.value=this.element.data("slider-value")||c.value,this.value[1]&&(this.range=!0),this.selection=this.element.data("slider-selection")||c.selection,this.selectionEl=this.picker.find(".slider-selection"),"none"===this.selection&&this.selectionEl.addClass("hide"),this.selectionElStyle=this.selectionEl[0].style,this.handle1=this.picker.find(".slider-handle:first"),this.handle1Stype=this.handle1[0].style,this.handle2=this.picker.find(".slider-handle:last"),this.handle2Stype=this.handle2[0].style;var e=this.element.data("slider-handle")||c.handle;switch(e){case"round":this.handle1.addClass("round"),this.handle2.addClass("round");break;case"triangle":this.handle1.addClass("triangle"),this.handle2.addClass("triangle")}this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),"after"==this.selection?this.value[1]=this.max:this.value[1]=this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos],this.formater=c.formater,this.layout(),this.touchCapable?this.picker.on({"touchstart":a.proxy(this.mousedown,this)}):this.picker.on({"mousedown":a.proxy(this.mousedown,this)}),"show"===d?this.picker.on({"mouseenter":a.proxy(this.showTooltip,this),"mouseleave":a.proxy(this.hideTooltip,this)}):this.tooltip.addClass("hide")};b.prototype={"constructor":b,"over":!1,"inDrag":!1,"showTooltip":function(){this.tooltip.addClass("in"),this.over=!0},"hideTooltip":function(){this.inDrag===!1&&this.tooltip.removeClass("in"),this.over=!1},"layout":function(){this.handle1Stype[this.stylePos]=this.percentage[0]+"%",this.handle2Stype[this.stylePos]=this.percentage[1]+"%","vertical"==this.orientation?(this.selectionElStyle.top=Math.min(this.percentage[0],this.percentage[1])+"%",this.selectionElStyle.height=Math.abs(this.percentage[0]-this.percentage[1])+"%"):(this.selectionElStyle.left=Math.min(this.percentage[0],this.percentage[1])+"%",this.selectionElStyle.width=Math.abs(this.percentage[0]-this.percentage[1])+"%"),this.range?(this.tooltipInner.text(this.formater(this.value[0])+" : "+this.formater(this.value[1])),this.tooltip[0].style[this.stylePos]=this.size*(this.percentage[0]+(this.percentage[1]-this.percentage[0])/2)/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px"):(this.tooltipInner.text(this.formater(this.value[0])),this.tooltip[0].style[this.stylePos]=this.size*this.percentage[0]/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px")},"mousedown":function(b){this.touchCapable&&"touchstart"===b.type&&(b=b.originalEvent),this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos];var c=this.getPercentage(b);if(this.range){var d=Math.abs(this.percentage[0]-c),e=Math.abs(this.percentage[1]-c);this.dragged=e>d?0:1}else this.dragged=0;this.percentage[this.dragged]=c,this.layout(),this.touchCapable?a(document).on({"touchmove":a.proxy(this.mousemove,this),"touchend":a.proxy(this.mouseup,this)}):a(document).on({"mousemove":a.proxy(this.mousemove,this),"mouseup":a.proxy(this.mouseup,this)}),this.inDrag=!0;var f=this.calculateValue();return this.element.trigger({"type":"slideStart","value":f}).trigger({"type":"slide","value":f}),!1},"mousemove":function(a){this.touchCapable&&"touchmove"===a.type&&(a=a.originalEvent);var b=this.getPercentage(a);this.range&&(0===this.dragged&&this.percentage[1]<b?(this.percentage[0]=this.percentage[1],this.dragged=1):1===this.dragged&&this.percentage[0]>b&&(this.percentage[1]=this.percentage[0],this.dragged=0)),this.percentage[this.dragged]=b,this.layout();var c=this.calculateValue();return this.element.trigger({"type":"slide","value":c}).data("value",c).prop("value",c),!1},"mouseup":function(b){this.touchCapable?a(document).off({"touchmove":this.mousemove,"touchend":this.mouseup}):a(document).off({"mousemove":this.mousemove,"mouseup":this.mouseup}),this.inDrag=!1,0==this.over&&this.hideTooltip(),this.element;var c=this.calculateValue();return this.element.trigger({"type":"slideStop","value":c}).data("value",c).prop("value",c),!1},"calculateValue":function(){var a;return this.range?(a=[this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,this.min+Math.round(this.diff*this.percentage[1]/100/this.step)*this.step],this.value=a):(a=this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,this.value=[a,this.value[1]]),a},"getPercentage":function(a){this.touchCapable&&(a=a.touches[0]);var b=100*(a[this.mousePos]-this.offset[this.stylePos])/this.size;return b=Math.round(b/this.percentage[2])*this.percentage[2],Math.max(0,Math.min(100,b))},"getValue":function(){return this.range?this.value:this.value[0]},"setValue":function(a){this.value=a,this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),"after"==this.selection?this.value[1]=this.max:this.value[1]=this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.layout()}},a.fn.slider=function(c,d){return this.each(function(){var e=a(this),f=e.data("slider"),g="object"==typeof c&&c;f||e.data("slider",f=new b(this,a.extend({},a.fn.slider.defaults,g))),"string"==typeof c&&f[c](d)})},a.fn.slider.defaults={"min":0,"max":10,"step":1,"orientation":"horizontal","value":5,"selection":"before","tooltip":"show","handle":"round","formater":function(a){return a}},a.fn.slider.Constructor=b}(window.jQuery);
/*!
 * bootstrap-progressbar v0.7.1 by @minddust
 * Copyright (c) 2012-2014 Stephan Gross
 *
 * https://www.minddust.com/bootstrap-progressbar
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
!function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.defaults,d)};b.defaults={"transition_delay":300,"refresh_speed":50,"display_text":"none","use_percentage":!0,"percent_format":function(a){return a+"%"},"amount_format":function(a,b){return a+" / "+b},"update":a.noop,"done":a.noop,"fail":a.noop},b.prototype.transition=function(){var c=this.$element,d=c.parent(),e=this.$back_text,f=this.$front_text,g=this.options,h=c.attr("aria-valuetransitiongoal"),i=c.attr("aria-valuemin")||0,j=c.attr("aria-valuemax")||100,k=d.hasClass("vertical"),l=g.update&&"function"==typeof g.update?g.update:b.defaults.update,m=g.done&&"function"==typeof g.done?g.done:b.defaults.done,n=g.fail&&"function"==typeof g.fail?g.fail:b.defaults.fail;if(!h)return void n("aria-valuetransitiongoal not set");var o=Math.round(100*(h-i)/(j-i));if("center"===g.display_text&&!e&&!f){this.$back_text=e=a("<span>").addClass("progressbar-back-text").prependTo(d),this.$front_text=f=a("<span>").addClass("progressbar-front-text").prependTo(c);var p;k?(p=d.css("height"),e.css({"height":p,"line-height":p}),f.css({"height":p,"line-height":p}),a(window).resize(function(){p=d.css("height"),e.css({"height":p,"line-height":p}),f.css({"height":p,"line-height":p})})):(p=d.css("width"),f.css({"width":p}),a(window).resize(function(){p=d.css("width"),f.css({"width":p})}))}setTimeout(function(){var a,b,n,p,q;k?c.css("height",o+"%"):c.css("width",o+"%");var r=setInterval(function(){k?(n=c.height(),p=d.height()):(n=c.width(),p=d.width()),a=Math.round(100*n/p),b=Math.round(n/p*(j-i)),a>=o&&(a=o,b=h,m(),clearInterval(r)),"none"!==g.display_text&&(q=g.use_percentage?g.percent_format(a):g.amount_format(b,j),"fill"===g.display_text?c.text(q):"center"===g.display_text&&(e.text(q),f.text(q))),c.attr("aria-valuenow",b),l(a)},g.refresh_speed)},g.transition_delay)};var c=a.fn.progressbar;a.fn.progressbar=function(c){return this.each(function(){var d=a(this),e=d.data("bs.progressbar"),f="object"==typeof c&&c;e||d.data("bs.progressbar",e=new b(this,f)),e.transition()})},a.fn.progressbar.Constructor=b,a.fn.progressbar.noConflict=function(){return a.fn.progressbar=c,this}}(window.jQuery);
!function(a){if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.msie=!1;var b=navigator.userAgent;jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var c,d,e;-1!=(d=b.indexOf("Opera"))?(jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=b.substring(d+6),-1!=(d=b.indexOf("Version"))&&(jQuery.browser.fullVersion=b.substring(d+8))):-1!=(d=b.indexOf("MSIE"))?(jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=b.substring(d+5)):-1!=(d=b.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=b.substring(d+7)):-1!=(d=b.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=b.substring(d+7),-1!=(d=b.indexOf("Version"))&&(jQuery.browser.fullVersion=b.substring(d+8))):-1!=(d=b.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=b.substring(d+8)):(c=b.lastIndexOf(" ")+1)<(d=b.lastIndexOf("/"))&&(jQuery.browser.name=b.substring(c,d),jQuery.browser.fullVersion=b.substring(d+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName)),-1!=(e=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,e)),-1!=(e=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,e)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}}(jQuery);
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @version 0.6.7
 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
function FastClick(a){var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.lastTouchIdentifier=this.touchStartY=this.touchStartX=0,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}FastClick.prototype.deviceIsAndroid=0<navigator.userAgent.indexOf("Android"),FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.focus=function(a){var b;this.deviceIsIOS&&a.setSelectionRange?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){var b,c,d;if(1<a.targetTouches.length)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,200>a.timeStamp-this.lastClickTime&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){return a=a.changedTouches[0],10<Math.abs(a.pageX-this.touchStartX)||10<Math.abs(a.pageY-this.touchStartY)?!0:!1},FastClick.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){var b,c,d;if(d=this.targetElement,this.touchHasMoved(a)&&(this.trackingClick=!1,this.targetElement=null),!this.trackingClick)return!0;if(200>a.timeStamp-this.lastClickTime)return this.cancelNextClick=!0;if(this.lastClickTime=a.timeStamp,b=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(d=a.changedTouches[0],d=document.elementFromPoint(d.pageX-window.pageXOffset,d.pageY-window.pageYOffset)),c=d.tagName.toLowerCase(),"label"===c){if(b=this.findControl(d)){if(this.focus(d),this.deviceIsAndroid)return!1;d=b}}else if(this.needsFocus(d))return 100<a.timeStamp-b||this.deviceIsIOS&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(d),this.deviceIsIOS4&&"select"===c||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(b=d.fastClickScrollParent)&&b.fastClickLastScrollTop!==b.scrollTop?!0:(this.needsClick(d)||(a.preventDefault(),this.sendClick(d,a)),!1)},FastClick.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){return this.targetElement&&!a.forwardedTouchEvent&&a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0},FastClick.prototype.onClick=function(a){return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(a=this.onMouse(a),a||(this.targetElement=null),a)},FastClick.prototype.destroy=function(){var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){var b;if("undefined"==typeof window.ontouchstart)return!0;if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(!FastClick.prototype.deviceIsAndroid)return!0;if((b=document.querySelector("meta[name=viewport]"))&&-1!==b.content.indexOf("user-scalable=no"))return!0}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
function runAllForms(){$.fn.slider&&$(".slider").slider(),$.fn.select2&&$("select.select2").each(function(){var a=$(this),b=a.attr("data-select-width")||"100%";a.select2({"allowClear":!0,"width":b}),a=null}),$.fn.mask&&$("[data-mask]").each(function(){var a=$(this),b=a.attr("data-mask")||"error...",c=a.attr("data-mask-placeholder")||"X";a.mask(b,{"placeholder":c}),a=null}),$.fn.autocomplete&&$("[data-autocomplete]").each(function(){var a=$(this),b=a.data("autocomplete")||["The","Quick","Brown","Fox","Jumps","Over","Three","Lazy","Dogs"];a.autocomplete({"source":b}),a=null}),$.fn.datepicker&&$(".datepicker").each(function(){var a=$(this),b=a.attr("data-dateformat")||"dd.mm.yy";a.datepicker({"dateFormat":b,"prevText":'<i class="fa fa-chevron-left"></i>',"nextText":'<i class="fa fa-chevron-right"></i>'}),a=null}),$("button[data-loading-text]").on("click",function(){var a=$(this);a.button("loading"),setTimeout(function(){a.button("reset"),a=null},3e3)})}function runAllCharts(){if($.fn.sparkline){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa;$(".sparkline:not(:has(>canvas))").each(function(){var ta=$(this),ua=ta.data("sparkline-type")||"bar";if("bar"==ua&&(a=ta.data("sparkline-bar-color")||ta.css("color")||"#0000f0",b=ta.data("sparkline-height")||"26px",c=ta.data("sparkline-barwidth")||5,d=ta.data("sparkline-barspacing")||2,e=ta.data("sparkline-negbar-color")||"#A90329",f=ta.data("sparkline-barstacked-color")||["#A90329","#0099c6","#98AA56","#da532c","#4490B1","#6E9461","#990099","#B4CAD3"],ta.sparkline("html",{"barColor":a,"type":ua,"height":b,"barWidth":c,"barSpacing":d,"stackedBarColor":f,"negBarColor":e,"zeroAxis":"false"}),ta=null),"line"==ua&&(b=ta.data("sparkline-height")||"20px",aa=ta.data("sparkline-width")||"90px",g=ta.data("sparkline-line-color")||ta.css("color")||"#0000f0",h=ta.data("sparkline-line-width")||1,i=ta.data("fill-color")||"#c0d0f0",j=ta.data("sparkline-spot-color")||"#f08000",k=ta.data("sparkline-minspot-color")||"#ed1c24",l=ta.data("sparkline-maxspot-color")||"#f08000",m=ta.data("sparkline-highlightspot-color")||"#50f050",n=ta.data("sparkline-highlightline-color")||"f02020",o=ta.data("sparkline-spotradius")||1.5,thisChartMinYRange=ta.data("sparkline-min-y")||"undefined",thisChartMaxYRange=ta.data("sparkline-max-y")||"undefined",thisChartMinXRange=ta.data("sparkline-min-x")||"undefined",thisChartMaxXRange=ta.data("sparkline-max-x")||"undefined",thisMinNormValue=ta.data("min-val")||"undefined",thisMaxNormValue=ta.data("max-val")||"undefined",thisNormColor=ta.data("norm-color")||"#c0c0c0",thisDrawNormalOnTop=ta.data("draw-normal")||!1,ta.sparkline("html",{"type":"line","width":aa,"height":b,"lineWidth":h,"lineColor":g,"fillColor":i,"spotColor":j,"minSpotColor":k,"maxSpotColor":l,"highlightSpotColor":m,"highlightLineColor":n,"spotRadius":o,"chartRangeMin":thisChartMinYRange,"chartRangeMax":thisChartMaxYRange,"chartRangeMinX":thisChartMinXRange,"chartRangeMaxX":thisChartMaxXRange,"normalRangeMin":thisMinNormValue,"normalRangeMax":thisMaxNormValue,"normalRangeColor":thisNormColor,"drawNormalOnTop":thisDrawNormalOnTop}),ta=null),"pie"==ua&&(p=ta.data("sparkline-piecolor")||["#B4CAD3","#4490B1","#98AA56","#da532c","#6E9461","#0099c6","#990099","#717D8A"],q=ta.data("sparkline-piesize")||90,r=ta.data("border-color")||"#45494C",s=ta.data("sparkline-offset")||0,ta.sparkline("html",{"type":"pie","width":q,"height":q,"tooltipFormat":'<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',"sliceColors":p,"borderWidth":1,"offset":s,"borderColor":r}),ta=null),"box"==ua&&(t=ta.data("sparkline-width")||"auto",u=ta.data("sparkline-height")||"auto",v=ta.data("sparkline-boxraw")||!1,w=ta.data("sparkline-targetval")||"undefined",x=ta.data("sparkline-min")||"undefined",y=ta.data("sparkline-max")||"undefined",z=ta.data("sparkline-showoutlier")||!0,A=ta.data("sparkline-outlier-iqr")||1.5,B=ta.data("sparkline-spotradius")||1.5,C=ta.css("color")||"#000000",D=ta.data("fill-color")||"#c0d0f0",E=ta.data("sparkline-whis-color")||"#000000",F=ta.data("sparkline-outline-color")||"#303030",G=ta.data("sparkline-outlinefill-color")||"#f0f0f0",H=ta.data("sparkline-outlinemedian-color")||"#f00000",I=ta.data("sparkline-outlinetarget-color")||"#40a020",ta.sparkline("html",{"type":"box","width":t,"height":u,"raw":v,"target":w,"minValue":x,"maxValue":y,"showOutliers":z,"outlierIQR":A,"spotRadius":B,"boxLineColor":C,"boxFillColor":D,"whiskerColor":E,"outlierLineColor":F,"outlierFillColor":G,"medianColor":H,"targetColor":I}),ta=null),"bullet"==ua){var va=ta.data("sparkline-height")||"auto";J=ta.data("sparkline-width")||2,K=ta.data("sparkline-bullet-color")||"#ed1c24",L=ta.data("sparkline-performance-color")||"#3030f0",M=ta.data("sparkline-bulletrange-color")||["#d3dafe","#a8b6ff","#7f94ff"],ta.sparkline("html",{"type":"bullet","height":va,"targetWidth":J,"targetColor":K,"performanceColor":L,"rangeColors":M}),ta=null}"discrete"==ua&&(N=ta.data("sparkline-height")||26,O=ta.data("sparkline-width")||50,P=ta.css("color"),Q=ta.data("sparkline-line-height")||5,R=ta.data("sparkline-threshold")||"undefined",S=ta.data("sparkline-threshold-color")||"#ed1c24",ta.sparkline("html",{"type":"discrete","width":O,"height":N,"lineColor":P,"lineHeight":Q,"thresholdValue":R,"thresholdColor":S}),ta=null),"tristate"==ua&&(T=ta.data("sparkline-height")||26,U=ta.data("sparkline-posbar-color")||"#60f060",V=ta.data("sparkline-negbar-color")||"#f04040",W=ta.data("sparkline-zerobar-color")||"#909090",X=ta.data("sparkline-barwidth")||5,Y=ta.data("sparkline-barspacing")||2,Z=ta.data("sparkline-zeroaxis")||!1,ta.sparkline("html",{"type":"tristate","height":T,"posBarColor":_,"negBarColor":V,"zeroBarColor":W,"barWidth":X,"barSpacing":Y,"zeroAxis":Z}),ta=null),"compositebar"==ua&&(b=ta.data("sparkline-height")||"20px",aa=ta.data("sparkline-width")||"100%",c=ta.data("sparkline-barwidth")||3,h=ta.data("sparkline-line-width")||1,g=ta.data("data-sparkline-linecolor")||"#ed1c24",_=ta.data("data-sparkline-barcolor")||"#333333",ta.sparkline(ta.data("sparkline-bar-val"),{"type":"bar","width":aa,"height":b,"barColor":_,"barWidth":c}),ta.sparkline(ta.data("sparkline-line-val"),{"width":aa,"height":b,"lineColor":g,"lineWidth":h,"composite":!0,"fillColor":!1}),ta=null),"compositeline"==ua&&(b=ta.data("sparkline-height")||"20px",aa=ta.data("sparkline-width")||"90px",ba=ta.data("sparkline-bar-val"),ca=ta.data("sparkline-bar-val-spots-top")||null,da=ta.data("sparkline-bar-val-spots-bottom")||null,ea=ta.data("sparkline-line-width-top")||1,fa=ta.data("sparkline-line-width-bottom")||1,ga=ta.data("sparkline-color-top")||"#333333",ha=ta.data("sparkline-color-bottom")||"#ed1c24",ia=ta.data("sparkline-spotradius-top")||1.5,ja=ta.data("sparkline-spotradius-bottom")||ia,j=ta.data("sparkline-spot-color")||"#f08000",ka=ta.data("sparkline-minspot-color-top")||"#ed1c24",la=ta.data("sparkline-maxspot-color-top")||"#f08000",ma=ta.data("sparkline-minspot-color-bottom")||ka,na=ta.data("sparkline-maxspot-color-bottom")||la,oa=ta.data("sparkline-highlightspot-color-top")||"#50f050",pa=ta.data("sparkline-highlightline-color-top")||"#f02020",qa=ta.data("sparkline-highlightspot-color-bottom")||oa,thisHighlightLineColor2=ta.data("sparkline-highlightline-color-bottom")||pa,ra=ta.data("sparkline-fillcolor-top")||"transparent",sa=ta.data("sparkline-fillcolor-bottom")||"transparent",ta.sparkline(ba,{"type":"line","spotRadius":ia,"spotColor":j,"minSpotColor":ka,"maxSpotColor":la,"highlightSpotColor":oa,"highlightLineColor":pa,"valueSpots":ca,"lineWidth":ea,"width":aa,"height":b,"lineColor":ga,"fillColor":ra}),ta.sparkline(ta.data("sparkline-line-val"),{"type":"line","spotRadius":ja,"spotColor":j,"minSpotColor":ma,"maxSpotColor":na,"highlightSpotColor":qa,"highlightLineColor":thisHighlightLineColor2,"valueSpots":da,"lineWidth":fa,"width":aa,"height":b,"lineColor":ha,"composite":!0,"fillColor":sa}),ta=null)})}$.fn.easyPieChart&&$(".easy-pie-chart").each(function(){var a=$(this),b=a.css("color")||a.data("pie-color"),c=a.data("pie-track-color")||"rgba(0,0,0,0.04)",d=parseInt(a.data("pie-size"))||25;a.easyPieChart({"barColor":b,"trackColor":c,"scaleColor":!1,"lineCap":"butt","lineWidth":parseInt(d/8.5),"animate":1500,"rotate":-90,"size":d,"onStep":function(a,b,c){$(this.el).find(".percent").text(Math.round(c))}}),a=null})}function setup_widgets_desktop(){$.fn.jarvisWidgets&&enableJarvisWidgets&&$("#widget-grid").jarvisWidgets({"grid":"article","widgets":".jarviswidget","localStorage":localStorageJarvisWidgets,"deleteSettingsKey":"#deletesettingskey-options","settingsKeyLabel":"Reset settings?","deletePositionKey":"#deletepositionkey-options","positionKeyLabel":"Reset position?","sortable":sortableJarvisWidgets,"buttonsHidden":!1,"toggleButton":!0,"toggleClass":"fa fa-minus | fa fa-plus","toggleSpeed":200,"onToggle":function(){},"deleteButton":!0,"deleteMsg":"Warning: This action cannot be undone!","deleteClass":"fa fa-times","deleteSpeed":200,"onDelete":function(){},"editButton":!0,"editPlaceholder":".jarviswidget-editbox","editClass":"fa fa-cog | fa fa-save","editSpeed":200,"onEdit":function(){},"colorButton":!0,"fullscreenButton":!0,"fullscreenClass":"fa fa-expand | fa fa-compress","fullscreenDiff":3,"onFullscreen":function(){},"customButton":!1,"customClass":"folder-10 | next-10","customStart":function(){alert("Hello you, this is a custom button...")},"customEnd":function(){alert("bye, till next time...")},"buttonOrder":"%refresh% %custom% %edit% %toggle% %fullscreen% %delete%","opacity":1,"dragHandle":"> header","placeholderClass":"jarviswidget-placeholder","indicator":!0,"indicatorTime":600,"ajax":!0,"timestampPlaceholder":".jarviswidget-timestamp","timestampFormat":"Last update: %m%/%d%/%y% %h%:%i%:%s%","refreshButton":!0,"refreshButtonClass":"fa fa-refresh","labelError":"Sorry but there was a error:","labelUpdated":"Last Update:","labelRefresh":"Refresh","labelDelete":"Delete widget:","afterLoad":function(){},"rtl":!1,"onChange":function(){},"onSave":function(){},"ajaxnav":$.navAsAjax})}function setup_widgets_mobile(){enableMobileWidgets&&enableJarvisWidgets&&setup_widgets_desktop()}function loadScript(a,b){if(jsArray[a])b&&(debugState&&root.root.console.log("This script was already loaded %c: "+a,debugStyle_warning),b());else{jsArray[a]=!0;var c=document.getElementsByTagName("body")[0],d=document.createElement("script");d.type="text/javascript",d.src=a,d.onload=b,c.appendChild(d)}}function checkURL(){var a=location.href.split("#").splice(1).join("#");if(!a)try{var b=window.document.URL;b&&b.indexOf("#",0)>0&&b.indexOf("#",0)<b.length+1&&(a=b.substring(b.indexOf("#",0)+1))}catch(c){}if(container=$("#content"),a){$("nav li.active").removeClass("active"),$('nav li:has(a[href="'+a+'"])').addClass("active");var d=$('nav a[href="'+a+'"]').attr("title");document.title=d||document.title,debugState&&root.console.log("Page title: %c "+document.title,debugStyle_green),loadURL(a+location.search,container)}else{var e=$('nav > ul > li:first-child > a[href!="#"]');window.location.hash=e.attr("href"),e=null}}function loadURL(a,b){debugState&&root.root.console.log("Loading URL: %c"+a,debugStyle),$.ajax({"type":"GET","url":a,"dataType":"html","cache":!0,"beforeSend":function(){if($.navAsAjax&&$(".google_maps")[0]&&b[0]==$("#content")[0]){var a=$(".google_maps"),c=0;a.each(function(){c++;var b=document.getElementById(this.id);c==a.length+1||(b&&b.parentNode.removeChild(b),debugState&&root.console.log("Destroying maps.........%c"+this.id,debugStyle_warning))}),debugState&&root.console.log("\u2714 Google map instances nuked!!!")}if($.navAsAjax&&$(".dataTables_wrapper")[0]&&b[0]==$("#content")[0]){var d=$.fn.dataTable.fnTables(!0);$(d).each(function(){0!=$(this).find(".details-control").length?($(this).find("*").addBack().off().remove(),$(this).dataTable().fnDestroy()):$(this).dataTable().fnDestroy()}),debugState&&root.console.log("\u2714 Datatable instances nuked!!!")}if($.navAsAjax&&$.intervalArr.length>0&&b[0]==$("#content")[0]&&enableJarvisWidgets){for(;$.intervalArr.length>0;)clearInterval($.intervalArr.pop());debugState&&root.console.log("\u2714 All JarvisWidget intervals cleared")}if($.navAsAjax&&b[0]==$("#content")[0]&&enableJarvisWidgets&&$("#widget-grid")[0]&&($("#widget-grid").jarvisWidgets("destroy"),debugState&&root.console.log("\u2714 JarvisWidgets destroyed")),$.navAsAjax&&b[0]==$("#content")[0]){if("function"==typeof pagedestroy)try{pagedestroy(),debugState&&root.console.log("\u2714 Pagedestroy()")}catch(e){pagedestroy=void 0,debugState&&root.console.log("! Pagedestroy() Catch Error")}$.fn.sparkline&&$("#content .sparkline")[0]&&($("#content .sparkline").sparkline("destroy"),debugState&&root.console.log("\u2714 Sparkline Charts destroyed!")),$.fn.easyPieChart&&$("#content .easy-pie-chart")[0]&&($("#content .easy-pie-chart").easyPieChart("destroy"),debugState&&root.console.log("\u2714 EasyPieChart Charts destroyed!")),$.fn.select2&&$("#content select.select2")[0]&&($("#content select.select2").select2("destroy"),debugState&&root.console.log("\u2714 Select2 destroyed!")),$.fn.mask&&$("#content [data-mask]")[0]&&($("#content [data-mask]").unmask(),debugState&&root.console.log("\u2714 Input Mask destroyed!")),$.fn.datepicker&&$("#content .datepicker")[0]&&($("#content .datepicker").off(),$("#content .datepicker").remove(),debugState&&root.console.log("\u2714 Datepicker destroyed!")),$.fn.slider&&$("#content .slider")[0]&&($("#content .slider").off(),$("#content .slider").remove(),debugState&&root.console.log("\u2714 Bootstrap Slider destroyed!"))}pagefunction=null,b.removeData().html(""),b.html('<h1 class="ajax-loading-animation"><i class="fa fa-cog fa-spin"></i> Loading...</h1>'),b[0]==$("#content")[0]&&($("body").find("> *").filter(":not("+ignore_key_elms+")").empty().remove(),drawBreadCrumb(),$("html").animate({"scrollTop":0},"fast"))},"success":function(a){b.css({"opacity":"0.0"}).html(a).delay(50).animate({"opacity":"1.0"},300),a=null,b=null},"error":function(c,d,e,f){b.html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">'+a+"</span>: "+c.status+' <span style="text-transform: capitalize;">'+e+"</span></h4>")},"async":!0})}function drawBreadCrumb(a){var b=$("nav li.active > a"),c=b.length;bread_crumb.empty(),bread_crumb.append($("<li>Home</li>")),b.each(function(){bread_crumb.append($("<li></li>").html($.trim($(this).clone().children(".badge").remove().end().text()))),--c||(document.title=bread_crumb.find("li:last-child").text())}),void 0!=a&&$.each(a,function(a,b){bread_crumb.append($("<li></li>").html(b)),document.title=bread_crumb.find("li:last-child").text()})}function pageSetUp(){"desktop"===thisDevice?($("[rel=tooltip], [data-rel=tooltip]").tooltip(),$("[rel=popover], [data-rel=popover]").popover(),$("[rel=popover-hover], [data-rel=popover-hover]").popover({"trigger":"hover"}),setup_widgets_desktop(),runAllCharts(),runAllForms()):($("[rel=popover], [data-rel=popover]").popover(),$("[rel=popover-hover], [data-rel=popover-hover]").popover({"trigger":"hover"}),runAllCharts(),setup_widgets_mobile(),runAllForms())}function getParam(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)",c=new RegExp(b),d=c.exec(window.location.href);return null==d?"":d[1]}$.intervalArr=[];var calc_navbar_height=function(){var a=null;return $("#header").length&&(a=$("#header").height()),null===a&&(a=$('<div id="header"></div>').height()),null===a?49:a},navbar_height=calc_navbar_height,shortcut_dropdown=$("#shortcut"),bread_crumb=$("#ribbon ol.breadcrumb"),topmenu=!1,thisDevice=null,ismobile=/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()),jsArray={},initApp=function(a){return a.addDeviceType=function(){return ismobile?($.root_.addClass("mobile-detected"),thisDevice="mobile",fastClick?($.root_.addClass("needsclick"),FastClick.attach(document.body),!1):void 0):($.root_.addClass("desktop-detected"),thisDevice="desktop",!1)},a.menuPos=function(){($.root_.hasClass("menu-on-top")||"top"==localStorage.getItem("sm-setmenu"))&&(topmenu=!0,$.root_.addClass("menu-on-top"))},a.SmartActions=function(){var a={"userLogout":function(a){function b(){window.location=a.attr("href")}$.SmartMessageBox({"title":"<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>"+$("#show-shortcut").text()+"</strong></span> ?","content":a.data("logout-msg")||"You can improve your security further after logging out by closing this opened browser","buttons":"[No][Yes]"},function(a){"Yes"==a&&($.root_.addClass("animated fadeOutUp"),setTimeout(b,1e3))})},"resetWidgets":function(a){$.SmartMessageBox({"title":"<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage","content":a.data("reset-msg")||"Would you like to RESET all your saved widgets and clear LocalStorage?1","buttons":"[No][Yes]"},function(a){"Yes"==a&&localStorage&&(localStorage.clear(),location.reload())})},"launchFullscreen":function(a){$.root_.hasClass("full-screen")?($.root_.removeClass("full-screen"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()):($.root_.addClass("full-screen"),a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen())},"minifyMenu":function(a){$.root_.hasClass("menu-on-top")||($.root_.toggleClass("minified"),$.root_.removeClass("hidden-menu"),$("html").removeClass("hidden-menu-mobile-lock"),a.effect("highlight",{},500))},"toggleMenu":function(){$.root_.hasClass("menu-on-top")?$.root_.hasClass("menu-on-top")&&$(window).width()<979&&($("html").toggleClass("hidden-menu-mobile-lock"),$.root_.toggleClass("hidden-menu"),$.root_.removeClass("minified")):($("html").toggleClass("hidden-menu-mobile-lock"),$.root_.toggleClass("hidden-menu"),$.root_.removeClass("minified"))},"toggleShortcut":function(){function a(){shortcut_dropdown.animate({"height":"hide"},300,"easeOutCirc"),$.root_.removeClass("shortcut-on")}function b(){shortcut_dropdown.animate({"height":"show"},200,"easeOutCirc"),$.root_.addClass("shortcut-on")}shortcut_dropdown.is(":visible")?a():b(),shortcut_dropdown.find("a").click(function(b){b.preventDefault(),window.location=$(this).attr("href"),setTimeout(a,300)}),$(document).mouseup(function(b){shortcut_dropdown.is(b.target)||0!==shortcut_dropdown.has(b.target).length||a()})}};$.root_.on("click",'[data-action="userLogout"]',function(b){var c=$(this);a.userLogout(c),b.preventDefault(),c=null}),$.root_.on("click",'[data-action="resetWidgets"]',function(b){var c=$(this);a.resetWidgets(c),b.preventDefault(),c=null}),$.root_.on("click",'[data-action="launchFullscreen"]',function(b){a.launchFullscreen(document.documentElement),b.preventDefault()}),$.root_.on("click",'[data-action="minifyMenu"]',function(b){var c=$(this);a.minifyMenu(c),b.preventDefault(),c=null}),$.root_.on("click",'[data-action="toggleMenu"]',function(b){a.toggleMenu(),b.preventDefault()}),$.root_.on("click",'[data-action="toggleShortcut"]',function(b){a.toggleShortcut(),b.preventDefault()})},a.leftNav=function(){topmenu||$("nav ul").jarvismenu({"accordion":menu_accordion||!0,"speed":menu_speed||!0,"closedSign":'<em class="fa fa-plus-square-o"></em>',"openedSign":'<em class="fa fa-minus-square-o"></em>'})},a.domReadyMisc=function(){$("[rel=tooltip]").length&&$("[rel=tooltip]").tooltip(),$("#search-mobile").click(function(){$.root_.addClass("search-mobile")}),$("#cancel-search-js").click(function(){$.root_.removeClass("search-mobile")}),$("#activity").click(function(a){var b=$(this);b.find(".badge").hasClass("bg-color-red")&&(b.find(".badge").removeClassPrefix("bg-color-"),b.find(".badge").text("0")),b.next(".ajax-dropdown").is(":visible")?(b.next(".ajax-dropdown").fadeOut(150),b.removeClass("active")):(b.next(".ajax-dropdown").fadeIn(150),b.addClass("active"));var c=b.next(".ajax-dropdown").find(".btn-group > .active > input").attr("id");b=null,c=null,a.preventDefault()}),$('input[name="activity"]').change(function(){var a=$(this);url=a.attr("id"),container=$(".ajax-notifications"),loadURL(url,container),a=null}),$(document).mouseup(function(a){$(".ajax-dropdown").is(a.target)||0!==$(".ajax-dropdown").has(a.target).length||($(".ajax-dropdown").fadeOut(150),$(".ajax-dropdown").prev().removeClass("active"))}),$("button[data-btn-loading]").on("click",function(){var a=$(this);a.button("loading"),setTimeout(function(){a.button("reset")},3e3)}),$this=$("#activity > .badge"),parseInt($this.text())>0&&($this.addClass("bg-color-red bounceIn animated"),$this=null)},a.mobileCheckActivation=function(){$(window).width()<979?($.root_.addClass("mobile-view-activated"),$.root_.removeClass("minified")):$.root_.hasClass("mobile-view-activated")&&$.root_.removeClass("mobile-view-activated"),debugState&&console.log("mobileCheckActivation")},a}({});initApp.addDeviceType(),initApp.menuPos(),jQuery(document).ready(function(){initApp.SmartActions(),initApp.leftNav(),initApp.domReadyMisc()}),function(a,b,c){function d(){e=b[h](function(){f.each(function(){var b,c,d=a(this),e=a.data(this,j);try{b=d.width()}catch(f){b=d.width}try{c=d.height()}catch(f){c=d.height}(b!==e.w||c!==e.h)&&d.trigger(i,[e.w=b,e.h=c])}),d()},g[k])}var e,f=a([]),g=a.resize=a.extend(a.resize,{}),h="setTimeout",i="resize",j=i+"-special-event",k="delay",l="throttleWindow";g[k]=throttle_delay,g[l]=!0,a.event.special[i]={"setup":function(){if(!g[l]&&this[h])return!1;var b=a(this);f=f.add(b);try{a.data(this,j,{"w":b.width(),"h":b.height()})}catch(c){a.data(this,j,{"w":b.width,"h":b.height})}1===f.length&&d()},"teardown":function(){if(!g[l]&&this[h])return!1;var b=a(this);f=f.not(b),b.removeData(j),f.length||clearTimeout(e)},"add":function(b){function d(b,d,f){var g=a(this),h=a.data(this,j);h.w=d!==c?d:g.width(),h.h=f!==c?f:g.height(),e.apply(this,arguments)}if(!g[l]&&this[h])return!1;var e;return a.isFunction(b)?(e=b,d):(e=b.handler,void(b.handler=d))}}}(jQuery,this),$("#main").resize(function(){initApp.mobileCheckActivation()});var ie=function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}();if($.fn.extend({"jarvismenu":function(a){var b={"accordion":"true","speed":200,"closedSign":"[+]","openedSign":"[-]"},c=$.extend(b,a),d=$(this);d.find("li").each(function(){0!==$(this).find("ul").size()&&($(this).find("a:first").append("<b class='collapse-sign'>"+c.closedSign+"</b>"),"#"==$(this).find("a:first").attr("href")&&$(this).find("a:first").click(function(){return!1}))}),d.find("li.active").each(function(){$(this).parents("ul").slideDown(c.speed),$(this).parents("ul").parent("li").find("b:first").html(c.openedSign),$(this).parents("ul").parent("li").addClass("open")}),d.find("li a").click(function(){0!==$(this).parent().find("ul").size()&&(c.accordion&&($(this).parent().find("ul").is(":visible")||(parents=$(this).parent().parents("ul"),visible=d.find("ul:visible"),visible.each(function(a){var b=!0;parents.each(function(c){return parents[c]==visible[a]?(b=!1,!1):void 0}),b&&$(this).parent().find("ul")!=visible[a]&&$(visible[a]).slideUp(c.speed,function(){$(this).parent("li").find("b:first").html(c.closedSign),$(this).parent("li").removeClass("open")})}))),$(this).parent().find("ul:first").is(":visible")&&!$(this).parent().find("ul:first").hasClass("active")?$(this).parent().find("ul:first").slideUp(c.speed,function(){$(this).parent("li").removeClass("open"),$(this).parent("li").find("b:first").delay(c.speed).html(c.closedSign)}):$(this).parent().find("ul:first").slideDown(c.speed,function(){$(this).parent("li").addClass("open"),$(this).parent("li").find("b:first").delay(c.speed).html(c.openedSign)}))})}}),jQuery.fn.doesExist=function(){return jQuery(this).length>0},$.navAsAjax||$(".google_maps")){var gMapsLoaded=!1;window.gMapsCallback=function(){gMapsLoaded=!0,$(window).trigger("gMapsLoaded")},window.loadGoogleMaps=function(){if(gMapsLoaded)return window.gMapsCallback();var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src","http://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback"),(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(a)}}$.navAsAjax&&($("nav").length&&checkURL(),$(document).on("click",'nav a[href!="#"]',function(a){a.preventDefault();var b=$(a.currentTarget);b.parent().hasClass("active")||b.attr("target")||($.root_.hasClass("mobile-view-activated")?($.root_.removeClass("hidden-menu"),$("html").removeClass("hidden-menu-mobile-lock"),window.setTimeout(function(){window.location.search?window.location.href=window.location.href.replace(window.location.search,"").replace(window.location.hash,"")+"#"+b.attr("href"):window.location.hash=b.attr("href")},150)):window.location.search?window.location.href=window.location.href.replace(window.location.search,"").replace(window.location.hash,"")+"#"+b.attr("href"):window.location.hash=b.attr("href"))}),$(document).on("click",'nav a[target="_blank"]',function(a){a.preventDefault();var b=$(a.currentTarget);window.open(b.attr("href"))}),$(document).on("click",'nav a[target="_top"]',function(a){a.preventDefault();var b=$(a.currentTarget);window.location=b.attr("href")}),$(document).on("click",'nav a[href="#"]',function(a){a.preventDefault()}),$(window).on("hashchange",function(){checkURL()})),$("body").on("click",function(a){$('[rel="popover"], [data-rel="popover"]').each(function(){$(this).is(a.target)||0!==$(this).has(a.target).length||0!==$(".popover").has(a.target).length||$(this).popover("hide")})}),$("body").on("hidden.bs.modal",".modal",function(){$(this).removeData("bs.modal")});
// Write your Javascript code.

/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				errorList = errorList.concat( validator.errorList );
			});
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				});
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param });
		}

		return data;
	}
});

// Custom selectors
$.extend( $.expr[ ":" ], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		return !!$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		});
	});
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {
			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element( element );
			}
		},
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date ( ISO ).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				});
			});
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			});

			function delegate( event ) {
				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox']", delegate)
				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend({}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if ( result ) {
					delete this.invalid[ checkElement.name ];
				} else {
					this.invalid[ checkElement.name ] = true;
				}
			}
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[ name ],
						element: this.findByName( name )[ 0 ]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			var i, elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
				}
			} else {
				elements.removeClass( this.settings.errorClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
					.filter( ":visible" )
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ this.name ] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var val,
				$element = $( element ),
				type = element.type;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter(":checked").val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? false : $element.val();
			}

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				}).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {

					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[ method ],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			});

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var place, group, errorID,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );
			if ( error.length ) {
				// refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				error.html( message );
			} else {
				// create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement( place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {
					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );
				} else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby

					errorID = error.attr( "id" ).replace( /(:|\.|\[|\]|\$)/g, "\\$1");
					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						$.each( this.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + name + "']", this.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						});
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.idOrName( element ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// aria-describedby should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
			}
			return this
				.errors()
				.filter( selector );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + name + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		},

		// cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ]);
				}
			});
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each( rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[ prop ];
				}
			}
		});

		// evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
		});

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		});
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn_algorithm
		creditcard: function( value, element ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test( value ) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace( /\D/g, "" );

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			}

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt( n );
				nDigit = parseInt( cDigit, 10 );
				if ( bEven ) {
					if ( ( nDigit *= 2 ) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return ( nCheck % 10 ) === 0;
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $( param );
			if ( this.settings.onfocusout ) {
				target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				});
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue( element ),
				validator, data;

			if (!this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = this.settings.messages[ element.name ].remote;
			this.settings.messages[ element.name ].remote = previous.message;

			param = typeof param === "string" && { url: param } || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						delete validator.invalid[ element.name ];
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, "remote" );
						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

});

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter(function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = xhr;
		}
	});
} else {
	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = ajax.apply(this, arguments);
			return pendingRequests[port];
		}
		return ajax.apply(this, arguments);
	};
}

}));
/*!
** Unobtrusive validation support library for jQuery and jQuery Validate
** Copyright (C) Microsoft Corporation. All rights reserved.
*/

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: false */
/*global document: false, jQuery: false */

(function ($) {
    var $jQval = $.validator,
        adapters,
        data_validation = "unobtrusiveValidation";

    function setValidationValues(options, ruleName, value) {
        options.rules[ruleName] = value;
        if (options.message) {
            options.messages[ruleName] = options.message;
        }
    }

    function splitAndTrim(value) {
        return value.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }

    function escapeAttributeValue(value) {
        // As mentioned on http://api.jquery.com/category/selectors/
        return value.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
    }

    function getModelPrefix(fieldName) {
        return fieldName.substr(0, fieldName.lastIndexOf(".") + 1);
    }

    function appendModelPrefix(value, prefix) {
        if (value.indexOf("*.") === 0) {
            value = value.replace("*.", prefix);
        }
        return value;
    }

    function onError(error, inputElement) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-for='" + escapeAttributeValue(inputElement[0].name) + "']"),
            replaceAttrValue = container.attr("data-valmsg-replace"),
            replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) !== false : null;

        container.removeClass("field-validation-valid").addClass("field-validation-error");
        error.data("unobtrusiveContainer", container);

        if (replace) {
            container.empty();
            error.removeClass("input-validation-error").appendTo(container);
        }
        else {
            error.hide();
        }
    }

    function onErrors(event, validator) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-summary=true]"),
            list = container.find("ul");

        if (list && list.length && validator.errorList.length) {
            list.empty();
            container.addClass("validation-summary-errors").removeClass("validation-summary-valid");

            $.each(validator.errorList, function () {
                $("<li />").html(this.message).appendTo(list);
            });
        }
    }

    function onSuccess(error) {  // 'this' is the form element
        var container = error.data("unobtrusiveContainer");

        if (container) {
            var replaceAttrValue = container.attr("data-valmsg-replace"),
                replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) : null;

            container.addClass("field-validation-valid").removeClass("field-validation-error");
            error.removeData("unobtrusiveContainer");

            if (replace) {
                container.empty();
            }
        }
    }

    function onReset(event) {  // 'this' is the form element
        var $form = $(this),
            key = '__jquery_unobtrusive_validation_form_reset';
        if ($form.data(key)) {
            return;
        }
        // Set a flag that indicates we're currently resetting the form.
        $form.data(key, true);
        try {
            $form.data("validator").resetForm();
        } finally {
            $form.removeData(key);
        }

        $form.find(".validation-summary-errors")
            .addClass("validation-summary-valid")
            .removeClass("validation-summary-errors");
        $form.find(".field-validation-error")
            .addClass("field-validation-valid")
            .removeClass("field-validation-error")
            .removeData("unobtrusiveContainer")
            .find(">*")  // If we were using valmsg-replace, get the underlying error
                .removeData("unobtrusiveContainer");
    }

    function validationInfo(form) {
        var $form = $(form),
            result = $form.data(data_validation),
            onResetProxy = $.proxy(onReset, form),
            defaultOptions = $jQval.unobtrusive.options || {},
            execInContext = function (name, args) {
                var func = defaultOptions[name];
                func && $.isFunction(func) && func.apply(form, args);
            }

        if (!result) {
            result = {
                options: {  // options structure passed to jQuery Validate's validate() method
                    errorClass: defaultOptions.errorClass || "input-validation-error",
                    errorElement: defaultOptions.errorElement || "span",
                    errorPlacement: function () {
                        onError.apply(form, arguments);
                        execInContext("errorPlacement", arguments);
                    },
                    invalidHandler: function () {
                        onErrors.apply(form, arguments);
                        execInContext("invalidHandler", arguments);
                    },
                    messages: {},
                    rules: {},
                    success: function () {
                        onSuccess.apply(form, arguments);
                        execInContext("success", arguments);
                    }
                },
                attachValidation: function () {
                    $form
                        .off("reset." + data_validation, onResetProxy)
                        .on("reset." + data_validation, onResetProxy)
                        .validate(this.options);
                },
                validate: function () {  // a validation function that is called by unobtrusive Ajax
                    $form.validate();
                    return $form.valid();
                }
            };
            $form.data(data_validation, result);
        }

        return result;
    }

    $jQval.unobtrusive = {
        adapters: [],

        parseElement: function (element, skipAttach) {
            /// <summary>
            /// Parses a single HTML element for unobtrusive validation attributes.
            /// </summary>
            /// <param name="element" domElement="true">The HTML element to be parsed.</param>
            /// <param name="skipAttach" type="Boolean">[Optional] true to skip attaching the
            /// validation to the form. If parsing just this single element, you should specify true.
            /// If parsing several elements, you should specify false, and manually attach the validation
            /// to the form when you are finished. The default is false.</param>
            var $element = $(element),
                form = $element.parents("form")[0],
                valInfo, rules, messages;

            if (!form) {  // Cannot do client-side validation without a form
                return;
            }

            valInfo = validationInfo(form);
            valInfo.options.rules[element.name] = rules = {};
            valInfo.options.messages[element.name] = messages = {};

            $.each(this.adapters, function () {
                var prefix = "data-val-" + this.name,
                    message = $element.attr(prefix),
                    paramValues = {};

                if (message !== undefined) {  // Compare against undefined, because an empty message is legal (and falsy)
                    prefix += "-";

                    $.each(this.params, function () {
                        paramValues[this] = $element.attr(prefix + this);
                    });

                    this.adapt({
                        element: element,
                        form: form,
                        message: message,
                        params: paramValues,
                        rules: rules,
                        messages: messages
                    });
                }
            });

            $.extend(rules, { "__dummy__": true });

            if (!skipAttach) {
                valInfo.attachValidation();
            }
        },

        parse: function (selector) {
            /// <summary>
            /// Parses all the HTML elements in the specified selector. It looks for input elements decorated
            /// with the [data-val=true] attribute value and enables validation according to the data-val-*
            /// attribute values.
            /// </summary>
            /// <param name="selector" type="String">Any valid jQuery selector.</param>

            // $forms includes all forms in selector's DOM hierarchy (parent, children and self) that have at least one
            // element with data-val=true
            var $selector = $(selector),
                $forms = $selector.parents()
                                  .addBack()
                                  .filter("form")
                                  .add($selector.find("form"))
                                  .has("[data-val=true]");

            $selector.find("[data-val=true]").each(function () {
                $jQval.unobtrusive.parseElement(this, true);
            });

            $forms.each(function () {
                var info = validationInfo(this);
                if (info) {
                    info.attachValidation();
                }
            });
        }
    };

    adapters = $jQval.unobtrusive.adapters;

    adapters.add = function (adapterName, params, fn) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="params" type="Array" optional="true">[Optional] An array of parameter names (strings) that will
        /// be extracted from the data-val-nnnn-mmmm HTML attributes (where nnnn is the adapter name, and
        /// mmmm is the parameter name).</param>
        /// <param name="fn" type="Function">The function to call, which adapts the values from the HTML
        /// attributes into jQuery Validate rules and/or messages.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        if (!fn) {  // Called with no params, just a function
            fn = params;
            params = [];
        }
        this.push({ name: adapterName, params: params, adapt: fn });
        return this;
    };

    adapters.addBool = function (adapterName, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has no parameter values.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, function (options) {
            setValidationValues(options, ruleName || adapterName, true);
        });
    };

    adapters.addMinMax = function (adapterName, minRuleName, maxRuleName, minMaxRuleName, minAttribute, maxAttribute) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation has three potential rules (one for min-only, one for max-only, and
        /// one for min-and-max). The HTML parameters are expected to be named -min and -max.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="minRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a minimum value.</param>
        /// <param name="maxRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a maximum value.</param>
        /// <param name="minMaxRuleName" type="String">The name of the jQuery Validate rule to be used when you
        /// have both a minimum and maximum value.</param>
        /// <param name="minAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the minimum value. The default is "min".</param>
        /// <param name="maxAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the maximum value. The default is "max".</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [minAttribute || "min", maxAttribute || "max"], function (options) {
            var min = options.params.min,
                max = options.params.max;

            if (min && max) {
                setValidationValues(options, minMaxRuleName, [min, max]);
            }
            else if (min) {
                setValidationValues(options, minRuleName, min);
            }
            else if (max) {
                setValidationValues(options, maxRuleName, max);
            }
        });
    };

    adapters.addSingleVal = function (adapterName, attribute, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has a single value.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute(where nnnn is the adapter name).</param>
        /// <param name="attribute" type="String">[Optional] The name of the HTML attribute that contains the value.
        /// The default is "val".</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [attribute || "val"], function (options) {
            setValidationValues(options, ruleName || adapterName, options.params[attribute]);
        });
    };

    $jQval.addMethod("__dummy__", function (value, element, params) {
        return true;
    });

    $jQval.addMethod("regex", function (value, element, params) {
        var match;
        if (this.optional(element)) {
            return true;
        }

        match = new RegExp(params).exec(value);
        return (match && (match.index === 0) && (match[0].length === value.length));
    });

    $jQval.addMethod("nonalphamin", function (value, element, nonalphamin) {
        var match;
        if (nonalphamin) {
            match = value.match(/\W/g);
            match = match && match.length >= nonalphamin;
        }
        return match;
    });

    if ($jQval.methods.extension) {
        adapters.addSingleVal("accept", "mimtype");
        adapters.addSingleVal("extension", "extension");
    } else {
        // for backward compatibility, when the 'extension' validation method does not exist, such as with versions
        // of JQuery Validation plugin prior to 1.10, we should use the 'accept' method for
        // validating the extension, and ignore mime-type validations as they are not supported.
        adapters.addSingleVal("extension", "extension", "accept");
    }

    adapters.addSingleVal("regex", "pattern");
    adapters.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    adapters.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    adapters.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    adapters.add("equalto", ["other"], function (options) {
        var prefix = getModelPrefix(options.element.name),
            other = options.params.other,
            fullOtherName = appendModelPrefix(other, prefix),
            element = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(fullOtherName) + "']")[0];

        setValidationValues(options, "equalTo", element);
    });
    adapters.add("required", function (options) {
        // jQuery Validate equates "required" with "mandatory" for checkbox elements
        if (options.element.tagName.toUpperCase() !== "INPUT" || options.element.type.toUpperCase() !== "CHECKBOX") {
            setValidationValues(options, "required", true);
        }
    });
    adapters.add("remote", ["url", "type", "additionalfields"], function (options) {
        var value = {
            url: options.params.url,
            type: options.params.type || "GET",
            data: {}
        },
            prefix = getModelPrefix(options.element.name);

        $.each(splitAndTrim(options.params.additionalfields || options.element.name), function (i, fieldName) {
            var paramName = appendModelPrefix(fieldName, prefix);
            value.data[paramName] = function () {
                var field = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(paramName) + "']");
                // For checkboxes and radio buttons, only pick up values from checked fields.
                if (field.is(":checkbox")) {
                    return field.filter(":checked").val() || field.filter(":hidden").val() || '';
                }
                else if (field.is(":radio")) {
                    return field.filter(":checked").val() || '';
                }
                return field.val();
            };
        });

        setValidationValues(options, "remote", value);
    });
    adapters.add("password", ["min", "nonalphamin", "regex"], function (options) {
        if (options.params.min) {
            setValidationValues(options, "minlength", options.params.min);
        }
        if (options.params.nonalphamin) {
            setValidationValues(options, "nonalphamin", options.params.nonalphamin);
        }
        if (options.params.regex) {
            setValidationValues(options, "regex", options.params.regex);
        }
    });

    $(function () {
        $jQval.unobtrusive.parse(document);
    });
}(jQuery));
/*!
* Globalize
*
* http://github.com/jquery/globalize
*
* Copyright Software Freedom Conservancy, Inc.
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/

(function (window, undefined) {

    var Globalize,
    // private variables
	regexHex,
	regexInfinity,
	regexParseFloat,
	regexTrim,
    // private JavaScript utility functions
	arrayIndexOf,
	endsWith,
	extend,
	isArray,
	isFunction,
	isObject,
	startsWith,
	trim,
	truncate,
	zeroPad,
    // private Globalization utility functions
	appendPreOrPostMatch,
	expandFormat,
	formatDate,
	formatNumber,
	getTokenRegExp,
	getEra,
	getEraYear,
	parseExact,
	parseNegativePattern;

    // Global variable (Globalize) or CommonJS module (globalize)
    Globalize = function (cultureSelector) {
        return new Globalize.prototype.init(cultureSelector);
    };

    if (typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined") {
        // Assume CommonJS
        module.exports = Globalize;
    } else {
        // Export as global variable
        window.Globalize = Globalize;
    }

    Globalize.cultures = {};

    Globalize.prototype = {
        constructor: Globalize,
        init: function (cultureSelector) {
            this.cultures = Globalize.cultures;
            this.cultureSelector = cultureSelector;

            return this;
        }
    };
    Globalize.prototype.init.prototype = Globalize.prototype;

    // 1. When defining a culture, all fields are required except the ones stated as optional.
    // 2. Each culture should have a ".calendars" object with at least one calendar named "standard"
    //    which serves as the default calendar in use by that culture.
    // 3. Each culture should have a ".calendar" object which is the current calendar being used,
    //    it may be dynamically changed at any time to one of the calendars in ".calendars".
    Globalize.cultures["default"] = {
        // A unique name for the culture in the form <language code>-<country/region code>
        name: "en",
        // the name of the culture in the english language
        englishName: "English",
        // the name of the culture in its own language
        nativeName: "English",
        // whether the culture uses right-to-left text
        isRTL: false,
        // "language" is used for so-called "specific" cultures.
        // For example, the culture "es-CL" means "Spanish, in Chili".
        // It represents the Spanish-speaking culture as it is in Chili,
        // which might have different formatting rules or even translations
        // than Spanish in Spain. A "neutral" culture is one that is not
        // specific to a region. For example, the culture "es" is the generic
        // Spanish culture, which may be a more generalized version of the language
        // that may or may not be what a specific culture expects.
        // For a specific culture like "es-CL", the "language" field refers to the
        // neutral, generic culture information for the language it is using.
        // This is not always a simple matter of the string before the dash.
        // For example, the "zh-Hans" culture is netural (Simplified Chinese).
        // And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
        // field is "zh-CHS", not "zh".
        // This field should be used to navigate from a specific culture to it's
        // more general, neutral culture. If a culture is already as general as it
        // can get, the language may refer to itself.
        language: "en",
        // numberFormat defines general number formatting rules, like the digits in
        // each grouping, the group separator, and how negative numbers are displayed.
        numberFormat: {
            // [negativePattern]
            // Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
            // but is still defined as an array for consistency with them.
            //   negativePattern: one of "(n)|-n|- n|n-|n -"
            pattern: ["-n"],
            // number of decimal places normally shown
            decimals: 2,
            // string that separates number groups, as in 1,000,000
            ",": ",",
            // string that separates a number from the fractional portion, as in 1.99
            ".": ".",
            // array of numbers indicating the size of each number group.
            // TODO: more detailed description and example
            groupSizes: [3],
            // symbol used for positive numbers
            "+": "+",
            // symbol used for negative numbers
            "-": "-",
            // symbol used for NaN (Not-A-Number)
            "NaN": "NaN",
            // symbol used for Negative Infinity
            negativeInfinity: "-Infinity",
            // symbol used for Positive Infinity
            positiveInfinity: "Infinity",
            percent: {
                // [negativePattern, positivePattern]
                //   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
                //   positivePattern: one of "n %|n%|%n|% n"
                pattern: ["-n %", "n %"],
                // number of decimal places normally shown
                decimals: 2,
                // array of numbers indicating the size of each number group.
                // TODO: more detailed description and example
                groupSizes: [3],
                // string that separates number groups, as in 1,000,000
                ",": ",",
                // string that separates a number from the fractional portion, as in 1.99
                ".": ".",
                // symbol used to represent a percentage
                symbol: "%"
            },
            currency: {
                // [negativePattern, positivePattern]
                //   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
                //   positivePattern: one of "$n|n$|$ n|n $"
                pattern: ["($n)", "$n"],
                // number of decimal places normally shown
                decimals: 2,
                // array of numbers indicating the size of each number group.
                // TODO: more detailed description and example
                groupSizes: [3],
                // string that separates number groups, as in 1,000,000
                ",": ",",
                // string that separates a number from the fractional portion, as in 1.99
                ".": ".",
                // symbol used to represent currency
                symbol: "$"
            }
        },
        // calendars defines all the possible calendars used by this culture.
        // There should be at least one defined with name "standard", and is the default
        // calendar used by the culture.
        // A calendar contains information about how dates are formatted, information about
        // the calendar's eras, a standard set of the date formats,
        // translations for day and month names, and if the calendar is not based on the Gregorian
        // calendar, conversion functions to and from the Gregorian calendar.
        calendars: {
            standard: {
                // name that identifies the type of calendar this is
                name: "Gregorian_USEnglish",
                // separator of parts of a date (e.g. "/" in 11/05/1955)
                "/": "/",
                // separator of parts of a time (e.g. ":" in 05:44 PM)
                ":": ":",
                // the first day of the week (0 = Sunday, 1 = Monday, etc)
                firstDay: 0,
                days: {
                    // full day names
                    names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    // abbreviated day names
                    namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    // shortest day names
                    namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                },
                months: {
                    // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                    names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    // abbreviated month names
                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
                },
                // AM and PM designators in one of these forms:
                // The usual view, and the upper and lower case versions
                //   [ standard, lowercase, uppercase ]
                // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
                //   null
                AM: ["AM", "am", "AM"],
                PM: ["PM", "pm", "PM"],
                eras: [
                // eras in reverse chronological order.
                // name: the name of the era in this culture (e.g. A.D., C.E.)
                // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
                // offset: offset in years from gregorian calendar
				{
				    "name": "A.D.",
				    "start": null,
				    "offset": 0
				}
                ],
                // when a two digit year is given, it will never be parsed as a four digit
                // year greater than this year (in the appropriate era for the culture)
                // Set it as a full year (e.g. 2029) or use an offset format starting from
                // the current year: "+19" would correspond to 2029 if the current year 2010.
                twoDigitYearMax: 2029,
                // set of predefined date and time patterns used by the culture
                // these represent the format someone in this culture would expect
                // to see given the portions of the date that are shown.
                patterns: {
                    // short date pattern
                    d: "M/d/yyyy",
                    // long date pattern
                    D: "dddd, MMMM dd, yyyy",
                    // short time pattern
                    t: "h:mm tt",
                    // long time pattern
                    T: "h:mm:ss tt",
                    // long date, short time pattern
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    // long date, long time pattern
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    // month/day pattern
                    M: "MMMM dd",
                    // month/year pattern
                    Y: "yyyy MMMM",
                    // S is a sortable format that does not vary by culture
                    S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
                }
                // optional fields for each calendar:
                /*
                monthsGenitive:
                Same as months but used when the day preceeds the month.
                Omit if the culture has no genitive distinction in month names.
                For an explaination of genitive months, see http://blogs.msdn.com/michkap/archive/2004/12/25/332259.aspx
                convert:
                Allows for the support of non-gregorian based calendars. This convert object is used to
                to convert a date to and from a gregorian calendar date to handle parsing and formatting.
                The two functions:
                fromGregorian( date )
                Given the date as a parameter, return an array with parts [ year, month, day ]
                corresponding to the non-gregorian based year, month, and day for the calendar.
                toGregorian( year, month, day )
                Given the non-gregorian year, month, and day, return a new Date() object
                set to the corresponding date in the gregorian calendar.
                */
            }
        },
        // For localized strings
        messages: {}
    };

    Globalize.cultures["default"].calendar = Globalize.cultures["default"].calendars.standard;

    Globalize.cultures.en = Globalize.cultures["default"];

    Globalize.cultureSelector = "en";

    //
    // private variables
    //

    regexHex = /^0x[a-f0-9]+$/i;
    regexInfinity = /^[+\-]?infinity$/i;
    regexParseFloat = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
    regexTrim = /^\s+|\s+$/g;

    //
    // private JavaScript utility functions
    //

    arrayIndexOf = function (array, item) {
        if (array.indexOf) {
            return array.indexOf(item);
        }
        for (var i = 0, length = array.length; i < length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
        return -1;
    };

    endsWith = function (value, pattern) {
        return value.substr(value.length - pattern.length) === pattern;
    };

    extend = function () {
        var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }

        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];

                        } else {
                            clone = src && isObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    isArray = Array.isArray || function (obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };

    isFunction = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Function]";
    };

    isObject = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    };

    startsWith = function (value, pattern) {
        return value.indexOf(pattern) === 0;
    };

    trim = function (value) {
        return (value + "").replace(regexTrim, "");
    };

    truncate = function (value) {
        if (isNaN(value)) {
            return NaN;
        }
        return Math[value < 0 ? "ceil" : "floor"](value);
    };

    zeroPad = function (str, count, left) {
        var l;
        for (l = str.length; l < count; l += 1) {
            str = (left ? ("0" + str) : (str + "0"));
        }
        return str;
    };

    //
    // private Globalization utility functions
    //

    appendPreOrPostMatch = function (preMatch, strings) {
        // appends pre- and post- token match strings while removing escaped characters.
        // Returns a single quote count which is used to determine if the token occurs
        // in a string literal.
        var quoteCount = 0,
		escaped = false;
        for (var i = 0, il = preMatch.length; i < il; i++) {
            var c = preMatch.charAt(i);
            switch (c) {
                case "\'":
                    if (escaped) {
                        strings.push("\'");
                    }
                    else {
                        quoteCount++;
                    }
                    escaped = false;
                    break;
                case "\\":
                    if (escaped) {
                        strings.push("\\");
                    }
                    escaped = !escaped;
                    break;
                default:
                    strings.push(c);
                    escaped = false;
                    break;
            }
        }
        return quoteCount;
    };

    expandFormat = function (cal, format) {
        // expands unspecified or single character date formats into the full pattern.
        format = format || "F";
        var pattern,
		patterns = cal.patterns,
		len = format.length;
        if (len === 1) {
            pattern = patterns[format];
            if (!pattern) {
                throw "Invalid date format string \'" + format + "\'.";
            }
            format = pattern;
        }
        else if (len === 2 && format.charAt(0) === "%") {
            // %X escape format -- intended as a custom format string that is only one character, not a built-in format.
            format = format.charAt(1);
        }
        return format;
    };

    formatDate = function (value, format, culture) {
        var cal = culture.calendar,
		convert = cal.convert,
		ret;

        if (!format || !format.length || format === "i") {
            if (culture && culture.name.length) {
                if (convert) {
                    // non-gregorian calendar, so we cannot use built-in toLocaleString()
                    ret = formatDate(value, cal.patterns.F, culture);
                }
                else {
                    var eraDate = new Date(value.getTime()),
					era = getEra(value, cal.eras);
                    eraDate.setFullYear(getEraYear(value, cal, era));
                    ret = eraDate.toLocaleString();
                }
            }
            else {
                ret = value.toString();
            }
            return ret;
        }

        var eras = cal.eras,
		sortable = format === "s";
        format = expandFormat(cal, format);

        // Start with an empty string
        ret = [];
        var hour,
		zeros = ["0", "00", "000"],
		foundDay,
		checkedDay,
		dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g,
		quoteCount = 0,
		tokenRegExp = getTokenRegExp(),
		converted;

        function padZeros(num, c) {
            var r, s = num + "";
            if (c > 1 && s.length < c) {
                r = (zeros[c - 2] + s);
                return r.substr(r.length - c, c);
            }
            else {
                r = s;
            }
            return r;
        }

        function hasDay() {
            if (foundDay || checkedDay) {
                return foundDay;
            }
            foundDay = dayPartRegExp.test(format);
            checkedDay = true;
            return foundDay;
        }

        function getPart(date, part) {
            if (converted) {
                return converted[part];
            }
            switch (part) {
                case 0:
                    return date.getFullYear();
                case 1:
                    return date.getMonth();
                case 2:
                    return date.getDate();
                default:
                    throw "Invalid part value " + part;
            }
        }

        if (!sortable && convert) {
            converted = convert.fromGregorian(value);
        }

        for (; ;) {
            // Save the current index
            var index = tokenRegExp.lastIndex,
            // Look for the next pattern
			ar = tokenRegExp.exec(format);

            // Append the text before the pattern (or the end of the string if not found)
            var preMatch = format.slice(index, ar ? ar.index : format.length);
            quoteCount += appendPreOrPostMatch(preMatch, ret);

            if (!ar) {
                break;
            }

            // do not replace any matches that occur inside a string literal.
            if (quoteCount % 2) {
                ret.push(ar[0]);
                continue;
            }

            var current = ar[0],
			clength = current.length;

            switch (current) {
                case "ddd":
                    //Day of the week, as a three-letter abbreviation
                case "dddd":
                    // Day of the week, using the full name
                    var names = (clength === 3) ? cal.days.namesAbbr : cal.days.names;
                    ret.push(names[value.getDay()]);
                    break;
                case "d":
                    // Day of month, without leading zero for single-digit days
                case "dd":
                    // Day of month, with leading zero for single-digit days
                    foundDay = true;
                    ret.push(
					padZeros(getPart(value, 2), clength)
				);
                    break;
                case "MMM":
                    // Month, as a three-letter abbreviation
                case "MMMM":
                    // Month, using the full name
                    var part = getPart(value, 1);
                    ret.push(
					(cal.monthsGenitive && hasDay()) ?
					(cal.monthsGenitive[clength === 3 ? "namesAbbr" : "names"][part]) :
					(cal.months[clength === 3 ? "namesAbbr" : "names"][part])
				);
                    break;
                case "M":
                    // Month, as digits, with no leading zero for single-digit months
                case "MM":
                    // Month, as digits, with leading zero for single-digit months
                    ret.push(
					padZeros(getPart(value, 1) + 1, clength)
				);
                    break;
                case "y":
                    // Year, as two digits, but with no leading zero for years less than 10
                case "yy":
                    // Year, as two digits, with leading zero for years less than 10
                case "yyyy":
                    // Year represented by four full digits
                    part = converted ? converted[0] : getEraYear(value, cal, getEra(value, eras), sortable);
                    if (clength < 4) {
                        part = part % 100;
                    }
                    ret.push(
					padZeros(part, clength)
				);
                    break;
                case "h":
                    // Hours with no leading zero for single-digit hours, using 12-hour clock
                case "hh":
                    // Hours with leading zero for single-digit hours, using 12-hour clock
                    hour = value.getHours() % 12;
                    if (hour === 0) hour = 12;
                    ret.push(
					padZeros(hour, clength)
				);
                    break;
                case "H":
                    // Hours with no leading zero for single-digit hours, using 24-hour clock
                case "HH":
                    // Hours with leading zero for single-digit hours, using 24-hour clock
                    ret.push(
					padZeros(value.getHours(), clength)
				);
                    break;
                case "m":
                    // Minutes with no leading zero for single-digit minutes
                case "mm":
                    // Minutes with leading zero for single-digit minutes
                    ret.push(
					padZeros(value.getMinutes(), clength)
				);
                    break;
                case "s":
                    // Seconds with no leading zero for single-digit seconds
                case "ss":
                    // Seconds with leading zero for single-digit seconds
                    ret.push(
					padZeros(value.getSeconds(), clength)
				);
                    break;
                case "t":
                    // One character am/pm indicator ("a" or "p")
                case "tt":
                    // Multicharacter am/pm indicator
                    part = value.getHours() < 12 ? (cal.AM ? cal.AM[0] : " ") : (cal.PM ? cal.PM[0] : " ");
                    ret.push(clength === 1 ? part.charAt(0) : part);
                    break;
                case "f":
                    // Deciseconds
                case "ff":
                    // Centiseconds
                case "fff":
                    // Milliseconds
                    ret.push(
					padZeros(value.getMilliseconds(), 3).substr(0, clength)
				);
                    break;
                case "z":
                    // Time zone offset, no leading zero
                case "zz":
                    // Time zone offset with leading zero
                    hour = value.getTimezoneOffset() / 60;
                    ret.push(
					(hour <= 0 ? "+" : "-") + padZeros(Math.floor(Math.abs(hour)), clength)
				);
                    break;
                case "zzz":
                    // Time zone offset with leading zero
                    hour = value.getTimezoneOffset() / 60;
                    ret.push(
					(hour <= 0 ? "+" : "-") + padZeros(Math.floor(Math.abs(hour)), 2) +
                    // Hard coded ":" separator, rather than using cal.TimeSeparator
                    // Repeated here for consistency, plus ":" was already assumed in date parsing.
					":" + padZeros(Math.abs(value.getTimezoneOffset() % 60), 2)
				);
                    break;
                case "g":
                case "gg":
                    if (cal.eras) {
                        ret.push(
						cal.eras[getEra(value, eras)].name
					);
                    }
                    break;
                case "/":
                    ret.push(cal["/"]);
                    break;
                default:
                    throw "Invalid date format pattern \'" + current + "\'.";
            }
        }
        return ret.join("");
    };

    // formatNumber
    (function () {
        var expandNumber;

        expandNumber = function (number, precision, formatInfo) {
            var groupSizes = formatInfo.groupSizes,
			curSize = groupSizes[0],
			curGroupIndex = 1,
			factor = Math.pow(10, precision),
			rounded = Math.round(number * factor) / factor;

            if (!isFinite(rounded)) {
                rounded = number;
            }
            number = rounded;

            var numberString = number + "",
			right = "",
			split = numberString.split(/e/i),
			exponent = split.length > 1 ? parseInt(split[1], 10) : 0;
            numberString = split[0];
            split = numberString.split(".");
            numberString = split[0];
            right = split.length > 1 ? split[1] : "";

            var l;
            if (exponent > 0) {
                right = zeroPad(right, exponent, false);
                numberString += right.slice(0, exponent);
                right = right.substr(exponent);
            }
            else if (exponent < 0) {
                exponent = -exponent;
                numberString = zeroPad(numberString, exponent + 1, true);
                right = numberString.slice(-exponent, numberString.length) + right;
                numberString = numberString.slice(0, -exponent);
            }

            if (precision > 0) {
                right = formatInfo["."] +
				((right.length > precision) ? right.slice(0, precision) : zeroPad(right, precision));
            }
            else {
                right = "";
            }

            var stringIndex = numberString.length - 1,
			sep = formatInfo[","],
			ret = "";

            while (stringIndex >= 0) {
                if (curSize === 0 || curSize > stringIndex) {
                    return numberString.slice(0, stringIndex + 1) + (ret.length ? (sep + ret + right) : right);
                }
                ret = numberString.slice(stringIndex - curSize + 1, stringIndex + 1) + (ret.length ? (sep + ret) : "");

                stringIndex -= curSize;

                if (curGroupIndex < groupSizes.length) {
                    curSize = groupSizes[curGroupIndex];
                    curGroupIndex++;
                }
            }

            return numberString.slice(0, stringIndex + 1) + sep + ret + right;
        };

        formatNumber = function (value, format, culture) {
            if (!isFinite(value)) {
                if (value === Infinity) {
                    return culture.numberFormat.positiveInfinity;
                }
                if (value === -Infinity) {
                    return culture.numberFormat.negativeInfinity;
                }
                return culture.numberFormat["NaN"];
            }
            if (!format || format === "i") {
                return culture.name.length ? value.toLocaleString() : value.toString();
            }
            format = format || "D";

            var nf = culture.numberFormat,
			number = Math.abs(value),
			precision = -1,
			pattern;
            if (format.length > 1) precision = parseInt(format.slice(1), 10);

            var current = format.charAt(0).toUpperCase(),
			formatInfo;

            switch (current) {
                case "D":
                    pattern = "n";
                    number = truncate(number);
                    if (precision !== -1) {
                        number = zeroPad("" + number, precision, true);
                    }
                    if (value < 0) number = "-" + number;
                    break;
                case "N":
                    formatInfo = nf;
                    /* falls through */
                case "C":
                    formatInfo = formatInfo || nf.currency;
                    /* falls through */
                case "P":
                    formatInfo = formatInfo || nf.percent;
                    pattern = value < 0 ? formatInfo.pattern[0] : (formatInfo.pattern[1] || "n");
                    if (precision === -1) precision = formatInfo.decimals;
                    number = expandNumber(number * (current === "P" ? 100 : 1), precision, formatInfo);
                    break;
                default:
                    throw "Bad number format specifier: " + current;
            }

            var patternParts = /n|\$|-|%/g,
			ret = "";
            for (; ;) {
                var index = patternParts.lastIndex,
				ar = patternParts.exec(pattern);

                ret += pattern.slice(index, ar ? ar.index : pattern.length);

                if (!ar) {
                    break;
                }

                switch (ar[0]) {
                    case "n":
                        ret += number;
                        break;
                    case "$":
                        ret += nf.currency.symbol;
                        break;
                    case "-":
                        // don't make 0 negative
                        if (/[1-9]/.test(number)) {
                            ret += nf["-"];
                        }
                        break;
                    case "%":
                        ret += nf.percent.symbol;
                        break;
                }
            }

            return ret;
        };

    }());

    getTokenRegExp = function () {
        // regular expression for matching date and time tokens in format strings.
        return (/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g);
    };

    getEra = function (date, eras) {
        if (!eras) return 0;
        var start, ticks = date.getTime();
        for (var i = 0, l = eras.length; i < l; i++) {
            start = eras[i].start;
            if (start === null || ticks >= start) {
                return i;
            }
        }
        return 0;
    };

    getEraYear = function (date, cal, era, sortable) {
        var year = date.getFullYear();
        if (!sortable && cal.eras) {
            // convert normal gregorian year to era-shifted gregorian
            // year by subtracting the era offset
            year -= cal.eras[era].offset;
        }
        return year;
    };

    // parseExact
    (function () {
        var expandYear,
		getDayIndex,
		getMonthIndex,
		getParseRegExp,
		outOfRange,
		toUpper,
		toUpperArray;

        expandYear = function (cal, year) {
            // expands 2-digit year into 4 digits.
            if (year < 100) {
                var now = new Date(),
				era = getEra(now),
				curr = getEraYear(now, cal, era),
				twoDigitYearMax = cal.twoDigitYearMax;
                twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt(twoDigitYearMax, 10) : twoDigitYearMax;
                year += curr - (curr % 100);
                if (year > twoDigitYearMax) {
                    year -= 100;
                }
            }
            return year;
        };

        getDayIndex = function (cal, value, abbr) {
            var ret,
			days = cal.days,
			upperDays = cal._upperDays;
            if (!upperDays) {
                cal._upperDays = upperDays = [
				toUpperArray(days.names),
				toUpperArray(days.namesAbbr),
				toUpperArray(days.namesShort)
                ];
            }
            value = toUpper(value);
            if (abbr) {
                ret = arrayIndexOf(upperDays[1], value);
                if (ret === -1) {
                    ret = arrayIndexOf(upperDays[2], value);
                }
            }
            else {
                ret = arrayIndexOf(upperDays[0], value);
            }
            return ret;
        };

        getMonthIndex = function (cal, value, abbr) {
            var months = cal.months,
			monthsGen = cal.monthsGenitive || cal.months,
			upperMonths = cal._upperMonths,
			upperMonthsGen = cal._upperMonthsGen;
            if (!upperMonths) {
                cal._upperMonths = upperMonths = [
				toUpperArray(months.names),
				toUpperArray(months.namesAbbr)
                ];
                cal._upperMonthsGen = upperMonthsGen = [
				toUpperArray(monthsGen.names),
				toUpperArray(monthsGen.namesAbbr)
                ];
            }
            value = toUpper(value);
            var i = arrayIndexOf(abbr ? upperMonths[1] : upperMonths[0], value);
            if (i < 0) {
                i = arrayIndexOf(abbr ? upperMonthsGen[1] : upperMonthsGen[0], value);
            }
            return i;
        };

        getParseRegExp = function (cal, format) {
            // converts a format string into a regular expression with groups that
            // can be used to extract date fields from a date string.
            // check for a cached parse regex.
            var re = cal._parseRegExp;
            if (!re) {
                cal._parseRegExp = re = {};
            }
            else {
                var reFormat = re[format];
                if (reFormat) {
                    return reFormat;
                }
            }

            // expand single digit formats, then escape regular expression characters.
            var expFormat = expandFormat(cal, format).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"),
			regexp = ["^"],
			groups = [],
			index = 0,
			quoteCount = 0,
			tokenRegExp = getTokenRegExp(),
			match;

            // iterate through each date token found.
            while ((match = tokenRegExp.exec(expFormat)) !== null) {
                var preMatch = expFormat.slice(index, match.index);
                index = tokenRegExp.lastIndex;

                // don't replace any matches that occur inside a string literal.
                quoteCount += appendPreOrPostMatch(preMatch, regexp);
                if (quoteCount % 2) {
                    regexp.push(match[0]);
                    continue;
                }

                // add a regex group for the token.
                var m = match[0],
				len = m.length,
				add;
                switch (m) {
                    case "dddd": case "ddd":
                    case "MMMM": case "MMM":
                    case "gg": case "g":
                        add = "(\\D+)";
                        break;
                    case "tt": case "t":
                        add = "(\\D*)";
                        break;
                    case "yyyy":
                    case "fff":
                    case "ff":
                    case "f":
                        add = "(\\d{" + len + "})";
                        break;
                    case "dd": case "d":
                    case "MM": case "M":
                    case "yy": case "y":
                    case "HH": case "H":
                    case "hh": case "h":
                    case "mm": case "m":
                    case "ss": case "s":
                        add = "(\\d\\d?)";
                        break;
                    case "zzz":
                        add = "([+-]?\\d\\d?:\\d{2})";
                        break;
                    case "zz": case "z":
                        add = "([+-]?\\d\\d?)";
                        break;
                    case "/":
                        add = "(\\/)";
                        break;
                    default:
                        throw "Invalid date format pattern \'" + m + "\'.";
                }
                if (add) {
                    regexp.push(add);
                }
                groups.push(match[0]);
            }
            appendPreOrPostMatch(expFormat.slice(index), regexp);
            regexp.push("$");

            // allow whitespace to differ when matching formats.
            var regexpStr = regexp.join("").replace(/\s+/g, "\\s+"),
			parseRegExp = { "regExp": regexpStr, "groups": groups };

            // cache the regex for this format.
            return re[format] = parseRegExp;
        };

        outOfRange = function (value, low, high) {
            return value < low || value > high;
        };

        toUpper = function (value) {
            // "he-IL" has non-breaking space in weekday names.
            return value.split("\u00A0").join(" ").toUpperCase();
        };

        toUpperArray = function (arr) {
            var results = [];
            for (var i = 0, l = arr.length; i < l; i++) {
                results[i] = toUpper(arr[i]);
            }
            return results;
        };

        parseExact = function (value, format, culture) {
            // try to parse the date string by matching against the format string
            // while using the specified culture for date field names.
            value = trim(value);
            var cal = culture.calendar,
            // convert date formats into regular expressions with groupings.
            // use the regexp to determine the input format and extract the date fields.
			parseInfo = getParseRegExp(cal, format),
			match = new RegExp(parseInfo.regExp).exec(value);
            if (match === null) {
                return null;
            }
            // found a date format that matches the input.
            var groups = parseInfo.groups,
			era = null, year = null, month = null, date = null, weekDay = null,
			hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
			pmHour = false;
            // iterate the format groups to extract and set the date fields.
            for (var j = 0, jl = groups.length; j < jl; j++) {
                var matchGroup = match[j + 1];
                if (matchGroup) {
                    var current = groups[j],
					clength = current.length,
					matchInt = parseInt(matchGroup, 10);
                    switch (current) {
                        case "dd": case "d":
                            // Day of month.
                            date = matchInt;
                            // check that date is generally in valid range, also checking overflow below.
                            if (outOfRange(date, 1, 31)) return null;
                            break;
                        case "MMM": case "MMMM":
                            month = getMonthIndex(cal, matchGroup, clength === 3);
                            if (outOfRange(month, 0, 11)) return null;
                            break;
                        case "M": case "MM":
                            // Month.
                            month = matchInt - 1;
                            if (outOfRange(month, 0, 11)) return null;
                            break;
                        case "y": case "yy":
                        case "yyyy":
                            year = clength < 4 ? expandYear(cal, matchInt) : matchInt;
                            if (outOfRange(year, 0, 9999)) return null;
                            break;
                        case "h": case "hh":
                            // Hours (12-hour clock).
                            hour = matchInt;
                            if (hour === 12) hour = 0;
                            if (outOfRange(hour, 0, 11)) return null;
                            break;
                        case "H": case "HH":
                            // Hours (24-hour clock).
                            hour = matchInt;
                            if (outOfRange(hour, 0, 23)) return null;
                            break;
                        case "m": case "mm":
                            // Minutes.
                            min = matchInt;
                            if (outOfRange(min, 0, 59)) return null;
                            break;
                        case "s": case "ss":
                            // Seconds.
                            sec = matchInt;
                            if (outOfRange(sec, 0, 59)) return null;
                            break;
                        case "tt": case "t":
                            // AM/PM designator.
                            // see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
                            // the AM tokens. If not, fail the parse for this format.
                            pmHour = cal.PM && (matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2]);
                            if (
							!pmHour && (
								!cal.AM || (matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2])
							)
						) return null;
                            break;
                        case "f":
                            // Deciseconds.
                        case "ff":
                            // Centiseconds.
                        case "fff":
                            // Milliseconds.
                            msec = matchInt * Math.pow(10, 3 - clength);
                            if (outOfRange(msec, 0, 999)) return null;
                            break;
                        case "ddd":
                            // Day of week.
                        case "dddd":
                            // Day of week.
                            weekDay = getDayIndex(cal, matchGroup, clength === 3);
                            if (outOfRange(weekDay, 0, 6)) return null;
                            break;
                        case "zzz":
                            // Time zone offset in +/- hours:min.
                            var offsets = matchGroup.split(/:/);
                            if (offsets.length !== 2) return null;
                            hourOffset = parseInt(offsets[0], 10);
                            if (outOfRange(hourOffset, -12, 13)) return null;
                            var minOffset = parseInt(offsets[1], 10);
                            if (outOfRange(minOffset, 0, 59)) return null;
                            tzMinOffset = (hourOffset * 60) + (startsWith(matchGroup, "-") ? -minOffset : minOffset);
                            break;
                        case "z": case "zz":
                            // Time zone offset in +/- hours.
                            hourOffset = matchInt;
                            if (outOfRange(hourOffset, -12, 13)) return null;
                            tzMinOffset = hourOffset * 60;
                            break;
                        case "g": case "gg":
                            var eraName = matchGroup;
                            if (!eraName || !cal.eras) return null;
                            eraName = trim(eraName.toLowerCase());
                            for (var i = 0, l = cal.eras.length; i < l; i++) {
                                if (eraName === cal.eras[i].name.toLowerCase()) {
                                    era = i;
                                    break;
                                }
                            }
                            // could not find an era with that name
                            if (era === null) return null;
                            break;
                    }
                }
            }
            var result = new Date(), defaultYear, convert = cal.convert;
            defaultYear = convert ? convert.fromGregorian(result)[0] : result.getFullYear();
            if (year === null) {
                year = defaultYear;
            }
            else if (cal.eras) {
                // year must be shifted to normal gregorian year
                // but not if year was not specified, its already normal gregorian
                // per the main if clause above.
                year += cal.eras[(era || 0)].offset;
            }
            // set default day and month to 1 and January, so if unspecified, these are the defaults
            // instead of the current day/month.
            if (month === null) {
                month = 0;
            }
            if (date === null) {
                date = 1;
            }
            // now have year, month, and date, but in the culture's calendar.
            // convert to gregorian if necessary
            if (convert) {
                result = convert.toGregorian(year, month, date);
                // conversion failed, must be an invalid match
                if (result === null) return null;
            }
            else {
                // have to set year, month and date together to avoid overflow based on current date.
                result.setFullYear(year, month, date);
                // check to see if date overflowed for specified month (only checked 1-31 above).
                if (result.getDate() !== date) return null;
                // invalid day of week.
                if (weekDay !== null && result.getDay() !== weekDay) {
                    return null;
                }
            }
            // if pm designator token was found make sure the hours fit the 24-hour clock.
            if (pmHour && hour < 12) {
                hour += 12;
            }
            result.setHours(hour, min, sec, msec);
            if (tzMinOffset !== null) {
                // adjust timezone to utc before applying local offset.
                var adjustedMin = result.getMinutes() - (tzMinOffset + result.getTimezoneOffset());
                // Safari limits hours and minutes to the range of -127 to 127.  We need to use setHours
                // to ensure both these fields will not exceed this range.	adjustedMin will range
                // somewhere between -1440 and 1500, so we only need to split this into hours.
                result.setHours(result.getHours() + parseInt(adjustedMin / 60, 10), adjustedMin % 60);
            }
            return result;
        };
    }());

    parseNegativePattern = function (value, nf, negativePattern) {
        var neg = nf["-"],
		pos = nf["+"],
		ret;
        switch (negativePattern) {
            case "n -":
                neg = " " + neg;
                pos = " " + pos;
                /* falls through */
            case "n-":
                if (endsWith(value, neg)) {
                    ret = ["-", value.substr(0, value.length - neg.length)];
                }
                else if (endsWith(value, pos)) {
                    ret = ["+", value.substr(0, value.length - pos.length)];
                }
                break;
            case "- n":
                neg += " ";
                pos += " ";
                /* falls through */
            case "-n":
                if (startsWith(value, neg)) {
                    ret = ["-", value.substr(neg.length)];
                }
                else if (startsWith(value, pos)) {
                    ret = ["+", value.substr(pos.length)];
                }
                break;
            case "(n)":
                if (startsWith(value, "(") && endsWith(value, ")")) {
                    ret = ["-", value.substr(1, value.length - 2)];
                }
                break;
        }
        return ret || ["", value];
    };

    //
    // public instance functions
    //

    Globalize.prototype.findClosestCulture = function (cultureSelector) {
        return Globalize.findClosestCulture.call(this, cultureSelector);
    };

    Globalize.prototype.format = function (value, format, cultureSelector) {
        return Globalize.format.call(this, value, format, cultureSelector);
    };

    Globalize.prototype.localize = function (key, cultureSelector) {
        return Globalize.localize.call(this, key, cultureSelector);
    };

    Globalize.prototype.parseInt = function (value, radix, cultureSelector) {
        return Globalize.parseInt.call(this, value, radix, cultureSelector);
    };

    Globalize.prototype.parseFloat = function (value, radix, cultureSelector) {
        return Globalize.parseFloat.call(this, value, radix, cultureSelector);
    };

    Globalize.prototype.culture = function (cultureSelector) {
        return Globalize.culture.call(this, cultureSelector);
    };

    //
    // public singleton functions
    //

    Globalize.addCultureInfo = function (cultureName, baseCultureName, info) {

        var base = {},
		isNew = false;

        if (typeof cultureName !== "string") {
            // cultureName argument is optional string. If not specified, assume info is first
            // and only argument. Specified info deep-extends current culture.
            info = cultureName;
            cultureName = this.culture().name;
            base = this.cultures[cultureName];
        } else if (typeof baseCultureName !== "string") {
            // baseCultureName argument is optional string. If not specified, assume info is second
            // argument. Specified info deep-extends specified culture.
            // If specified culture does not exist, create by deep-extending default
            info = baseCultureName;
            isNew = (this.cultures[cultureName] == null);
            base = this.cultures[cultureName] || this.cultures["default"];
        } else {
            // cultureName and baseCultureName specified. Assume a new culture is being created
            // by deep-extending an specified base culture
            isNew = true;
            base = this.cultures[baseCultureName];
        }

        this.cultures[cultureName] = extend(true, {},
		base,
		info
	);
        // Make the standard calendar the current culture if it's a new culture
        if (isNew) {
            this.cultures[cultureName].calendar = this.cultures[cultureName].calendars.standard;
        }
    };

    Globalize.findClosestCulture = function (name) {
        var match;
        if (!name) {
            return this.findClosestCulture(this.cultureSelector) || this.cultures["default"];
        }
        if (typeof name === "string") {
            name = name.split(",");
        }
        if (isArray(name)) {
            var lang,
			cultures = this.cultures,
			list = name,
			i, l = list.length,
			prioritized = [];
            for (i = 0; i < l; i++) {
                name = trim(list[i]);
                var pri, parts = name.split(";");
                lang = trim(parts[0]);
                if (parts.length === 1) {
                    pri = 1;
                }
                else {
                    name = trim(parts[1]);
                    if (name.indexOf("q=") === 0) {
                        name = name.substr(2);
                        pri = parseFloat(name);
                        pri = isNaN(pri) ? 0 : pri;
                    }
                    else {
                        pri = 1;
                    }
                }
                prioritized.push({ lang: lang, pri: pri });
            }
            prioritized.sort(function (a, b) {
                if (a.pri < b.pri) {
                    return 1;
                } else if (a.pri > b.pri) {
                    return -1;
                }
                return 0;
            });
            // exact match
            for (i = 0; i < l; i++) {
                lang = prioritized[i].lang;
                match = cultures[lang];
                if (match) {
                    return match;
                }
            }

            // neutral language match
            for (i = 0; i < l; i++) {
                lang = prioritized[i].lang;
                do {
                    var index = lang.lastIndexOf("-");
                    if (index === -1) {
                        break;
                    }
                    // strip off the last part. e.g. en-US => en
                    lang = lang.substr(0, index);
                    match = cultures[lang];
                    if (match) {
                        return match;
                    }
                }
                while (1);
            }

            // last resort: match first culture using that language
            for (i = 0; i < l; i++) {
                lang = prioritized[i].lang;
                for (var cultureKey in cultures) {
                    var culture = cultures[cultureKey];
                    if (culture.language == lang) {
                        return culture;
                    }
                }
            }
        }
        else if (typeof name === "object") {
            return name;
        }
        return match || null;
    };

    Globalize.format = function (value, format, cultureSelector) {
        var culture = this.findClosestCulture(cultureSelector);
        if (value instanceof Date) {
            value = formatDate(value, format, culture);
        }
        else if (typeof value === "number") {
            value = formatNumber(value, format, culture);
        }
        return value;
    };

    Globalize.localize = function (key, cultureSelector) {
        return this.findClosestCulture(cultureSelector).messages[key] ||
		this.cultures["default"].messages[key];
    };

    Globalize.parseDate = function (value, formats, culture) {
        culture = this.findClosestCulture(culture);

        var date, prop, patterns;
        if (formats) {
            if (typeof formats === "string") {
                formats = [formats];
            }
            if (formats.length) {
                for (var i = 0, l = formats.length; i < l; i++) {
                    var format = formats[i];
                    if (format) {
                        date = parseExact(value, format, culture);
                        if (date) {
                            break;
                        }
                    }
                }
            }
        } else {
            patterns = culture.calendar.patterns;
            for (prop in patterns) {
                date = parseExact(value, patterns[prop], culture);
                if (date) {
                    break;
                }
            }
        }

        return date || null;
    };

    Globalize.parseInt = function (value, radix, cultureSelector) {
        return truncate(Globalize.parseFloat(value, radix, cultureSelector));
    };

    Globalize.parseFloat = function (value, radix, cultureSelector) {
        // radix argument is optional
        if (typeof radix !== "number") {
            cultureSelector = radix;
            radix = 10;
        }

        var culture = this.findClosestCulture(cultureSelector);
        var ret = NaN,
		nf = culture.numberFormat;

        if (value.indexOf(culture.numberFormat.currency.symbol) > -1) {
            // remove currency symbol
            value = value.replace(culture.numberFormat.currency.symbol, "");
            // replace decimal seperator
            value = value.replace(culture.numberFormat.currency["."], culture.numberFormat["."]);
        }

        // trim leading and trailing whitespace
        value = trim(value);

        // allow infinity or hexidecimal
        if (regexInfinity.test(value)) {
            ret = parseFloat(value);
        }
        else if (!radix && regexHex.test(value)) {
            ret = parseInt(value, 16);
        }
        else {

            // determine sign and number
            var signInfo = parseNegativePattern(value, nf, nf.pattern[0]),
			sign = signInfo[0],
			num = signInfo[1];

            // #44 - try parsing as "(n)"
            if (sign === "" && nf.pattern[0] !== "(n)") {
                signInfo = parseNegativePattern(value, nf, "(n)");
                sign = signInfo[0];
                num = signInfo[1];
            }

            // try parsing as "-n"
            if (sign === "" && nf.pattern[0] !== "-n") {
                signInfo = parseNegativePattern(value, nf, "-n");
                sign = signInfo[0];
                num = signInfo[1];
            }

            sign = sign || "+";

            // determine exponent and number
            var exponent,
			intAndFraction,
			exponentPos = num.indexOf("e");
            if (exponentPos < 0) exponentPos = num.indexOf("E");
            if (exponentPos < 0) {
                intAndFraction = num;
                exponent = null;
            }
            else {
                intAndFraction = num.substr(0, exponentPos);
                exponent = num.substr(exponentPos + 1);
            }
            // determine decimal position
            var integer,
			fraction,
			decSep = nf["."],
			decimalPos = intAndFraction.indexOf(decSep);
            if (decimalPos < 0) {
                integer = intAndFraction;
                fraction = null;
            }
            else {
                integer = intAndFraction.substr(0, decimalPos);
                fraction = intAndFraction.substr(decimalPos + decSep.length);
            }
            // handle groups (e.g. 1,000,000)
            var groupSep = nf[","];
            integer = integer.split(groupSep).join("");
            var altGroupSep = groupSep.replace(/\u00A0/g, " ");
            if (groupSep !== altGroupSep) {
                integer = integer.split(altGroupSep).join("");
            }
            // build a natively parsable number string
            var p = sign + integer;
            if (fraction !== null) {
                p += "." + fraction;
            }
            if (exponent !== null) {
                // exponent itself may have a number patternd
                var expSignInfo = parseNegativePattern(exponent, nf, "-n");
                p += "e" + (expSignInfo[0] || "+") + expSignInfo[1];
            }
            if (regexParseFloat.test(p)) {
                ret = parseFloat(p);
            }
        }
        return ret;
    };

    Globalize.culture = function (cultureSelector) {
        // setter
        if (typeof cultureSelector !== "undefined") {
            this.cultureSelector = cultureSelector;
        }
        // getter
        return this.findClosestCulture(cultureSelector) || this.cultures["default"];
    };

}(this));