define('nyt5/analytics',[],function() {

  var canonical = document.querySelector("link[rel='canonical']").href,
      pageview = ['_trackPageview'];

  if (canonical) {
    var a = document.createElement("a");
    a.href = canonical;
    if (a.pathname != document.location.pathname) pageview.push(a.pathname);
  }

  _gaq = [['_setAccount', 'UA-9262032-1'], pageview];

  require(['http://www.google-analytics.com/ga.js']);

});

/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. *
 */
/**
 * jquery.balancetext.js
 *
 * Author: Randy Edmunds
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global jQuery, $ */

/*
 * Copyright (c) 2007-2009 unscriptable.com and John M. Hann
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the “Software”), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Except as contained in this notice, the name(s) of the above
 * copyright holders (unscriptable.com and John M. Hann) shall not be
 * used in advertising or otherwise to promote the sale, use or other
 * dealings in this Software without prior written authorization.
 *
 * http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
 *
 */

define('lib/text-balancer',[
  'jquery/nyt'
  ], function($) {

     "use strict";
    var sr = "smartresize";

    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeout = null;
            }

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }
            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    // smartresize
    $.fn[sr] = function (fn) {  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    var style = document.documentElement.style,
        hasTextWrap = (style.textWrap || style.WebkitTextWrap || style.MozTextWrap || style.MsTextWrap || style.OTextWrap),
        wsMatches;

    function NextWS_params() {
        this.reset();
    }
    NextWS_params.prototype.reset = function () {
        this.index = 0;
        this.width = 0;
    };

    /**
     * Returns true iff char at index is a space character outside of HTML < > tags.
     */
    var isWS = function (txt, index) {
        var re = /\s(?![^<]*>)/g,
            match;

        if (!wsMatches) {
            // Only calc ws matches once per line
            wsMatches = [];
            while ((match = re.exec(txt)) !== null) {
                wsMatches.push(match.index);
            }
        }

        return wsMatches.indexOf(index) !== -1;
    };

    var removeTags = function ($el) {
        $el.find('br[data-owner="balance-text"]').replaceWith(" ");
        var $span = $el.find('span[data-owner="balance-text"]');
        if ($span.length > 0) {
            var txt = "";
            $span.each(function () {
                txt += $(this).text();
                $(this).remove();
            });
            $el.html(txt);
        }
    };

    /**
     * Checks to see if we should justify the balanced text with the
     * element based on the textAlign property in the computed CSS
     *
     * @param $el        - $(element)
     */
    var isJustified = function ($el) {
        style = $el.get(0).currentStyle || window.getComputedStyle($el.get(0), null);
        return (style.textAlign === 'justify');
    };

    /**
     * Add whitespace after words in text to justify the string to
     * the specified size.
     *
     * @param txt      - text string
     * @param conWidth - container width
     */
    var justify = function ($el, txt, conWidth) {
        txt = $.trim(txt);
        var words = txt.split(' ').length;
        txt = txt + ' ';

        // if we don't have at least 2 words, no need to justify.
        if (words < 2) {
            return txt;
        }

        // Find width of text in the DOM
        var tmp = $('<span></span>').html(txt);
        $el.append(tmp);
        var size = tmp.width();
        tmp.remove();

        // Figure out our word spacing and return the element
        var wordSpacing = Math.floor((conWidth - size) / (words - 1));
        tmp.css('word-spacing', wordSpacing + 'px')
            .attr('data-owner', 'balance-text');

        return $('<div></div>').append(tmp).html();
    };

    /**
     * In the current simple implementation, an index i is a break
     * opportunity in txt iff it is 0, txt.length, or the
     * index of a non-whitespace char immediately preceded by a
     * whitespace char.  (Thus, it doesn't honour 'white-space' or
     * any Unicode line-breaking classes.)
     *
     * @precondition 0 <= index && index <= txt.length
     */
    var isBreakOpportunity = function (txt, index) {
        return ((index === 0) || (index === txt.length) ||
                (isWS(txt, index - 1) && !isWS(txt, index)));
    };

    /**
     * Finds the first break opportunity (@see isBreakOpportunity)
     * in txt that's both after-or-equal-to index c in the direction dir
     * and resulting in line width equal to or past clamp(desWidth,
     * 0, conWidth) in direction dir.  Sets ret.index and ret.width
     * to the corresponding index and line width (from the start of
     * txt to ret.index).
     *
     * @param $el      - $(element)
     * @param txt      - text string
     * @param conWidth - container width
     * @param desWidth - desired width
     * @param dir      - direction (-1 or +1)
     * @param c        - char index (0 <= c && c <= txt.length)
     * @param ret      - return object; index and width of previous/next break
     *
     */
    var findBreakOpportunity = function ($el, txt, conWidth, desWidth, dir, c, ret) {
        var w;

        for(;;) {
            while (!isBreakOpportunity(txt, c)) {
                c += dir;
            }

            $el.html(txt.substr(0, c));
            w = $el.width();

            if ((dir < 0)
                    ? ((w <= desWidth) || (w <= 0) || (c === 0))
                    : ((desWidth <= w) || (conWidth <= w) || (c === txt.length))) {
                break;
            }
            c += dir;
        }
        ret.index = c;
        ret.width = w;
    };

    /**
     * Detects the width of a non-breaking space character, given the height of
     * the element with no-wrap applied.
     *
     * @param $el      - $(element)
     * @param h         - height
     *
     */
    var getSpaceWidth = function ($el, h) {
        var container = document.createElement('div');

        container.style.display = "block";
        container.style.position = "absolute";
        container.style.bottom = 0;
        container.style.right = 0;
        container.style.width = 0;
        container.style.height = 0;
        container.style.margin = 0;
        container.style.padding = 0;
        container.style.visibility = "hidden";
        container.style.overflow = "hidden";

        var space = document.createElement('span');

        space.style.fontSize = "2000px";
        space.innerHTML = "&nbsp;";

        container.appendChild(space);

        $el.append(container);

        var dims = space.getBoundingClientRect();
        container.parentNode.removeChild(container);

        var spaceRatio = dims.height / dims.width;

        return (h / spaceRatio);
    };

    // Selectors to watch; calling balanceText() on a new selector adds it to this list.
    var balancedElements = ['.balance-text'];

    // Call the balanceText plugin on the elements with "balance-text" class. When a browser
    // has native support for the text-wrap property, the text balanceText plugin will let
    // the browser handle it natively, otherwise it will apply its own text balancing code.
    var applyBalanceText = function () {
        var selector = balancedElements.join(',');
        $(selector).balanceText(true);
    };

    $.fn.balanceTextUpdate = applyBalanceText;

    $.fn.balanceText = function (skipResize) {
        var selector = this.selector;

        if (!skipResize && balancedElements.indexOf(selector) === -1) {
            // record the selector so we can re-balance it on resize
            balancedElements.push(selector);
        }

        if (hasTextWrap) {
            // browser supports text-wrap, so do nothing
            return this;
        }

        return this.each(function () {
            var $this = $(this);

            // In a lower level language, this algorithm takes time
            // comparable to normal text layout other than the fact
            // that we do two passes instead of one, so we should
            // be able to do without this limit.
            var maxTextWidth = 5000;

            removeTags($this);                        // strip balance-text tags

            // save line-height if set via inline style
            var oldLH = '';
            if ($this.attr('style') &&
                    $this.attr('style').indexOf('line-height') >= 0) {
                oldLH = $this.css('line-height');
            }

            // remove line height before measuring container size
            $this.css('line-height', 'normal');

            var containerWidth = $this.width();
            var containerHeight = $this.height();

            // save settings
            var oldWS = $this.css('white-space');
            var oldFloat = $this.css('float');
            var oldDisplay = $this.css('display');
            var oldPosition = $this.css('position');

            // temporary settings
            $this.css({
                'white-space': 'nowrap',
                'float': 'none',
                'display': 'inline',
                'position': 'static'
            });

            var nowrapWidth = $this.width();
            var nowrapHeight = $this.height();

            // An estimate of the average line width reduction due
            // to trimming trailing space that we expect over all
            // lines other than the last.

            var spaceWidth = ((oldWS === 'pre-wrap') ? 0 : getSpaceWidth($this, nowrapHeight));

            if (containerWidth > 0 &&                  // prevent divide by zero
                    nowrapWidth > containerWidth &&    // text is more than 1 line
                    nowrapWidth < maxTextWidth) {      // text is less than arbitrary limit (make this a param?)

                var remainingText = $this.html();
                var newText = "";
                var lineText = "";
                var shouldJustify = isJustified($this);
                var totLines = Math.round(containerHeight / nowrapHeight);
                var remLines = totLines;

                // Determine where to break:
                while (remLines > 1) {

                    // clear whitespace match cache for each line
                    wsMatches = null;

                    var desiredWidth = Math.round((nowrapWidth + spaceWidth)
                                                  / remLines
                                                  - spaceWidth);

                    // Guessed char index
                    var guessIndex = Math.round((remainingText.length + 1) / remLines) - 1;

                    var le = new NextWS_params();

                    // Find a breaking space somewhere before (or equal to) desired width,
                    // not necessarily the closest to the desired width.
                    findBreakOpportunity($this, remainingText, containerWidth, desiredWidth, -1, guessIndex, le);

                    // Find first breaking char after (or equal to) desired width.
                    var ge = new NextWS_params();
                    guessIndex = le.index;
                    findBreakOpportunity($this, remainingText, containerWidth, desiredWidth, +1, guessIndex, ge);

                    // Find first breaking char before (or equal to) desired width.
                    le.reset();
                    guessIndex = ge.index;
                    findBreakOpportunity($this, remainingText, containerWidth, desiredWidth, -1, guessIndex, le);

                    // Find closest string to desired length
                    var splitIndex;
                    if (le.index === 0) {
                        splitIndex = ge.index;
                    } else if ((containerWidth < ge.width) || (le.index === ge.index)) {
                        splitIndex = le.index;
                    } else {
                        splitIndex = ((Math.abs(desiredWidth - le.width) < Math.abs(ge.width - desiredWidth))
                                           ? le.index
                                           : ge.index);
                    }

                    // Break string
                    lineText = remainingText.substr(0, splitIndex);
                    if (shouldJustify) {
                        newText += justify($this, lineText, containerWidth);
                    } else {
                        newText += lineText.replace(/\s$/, "");
                        newText += '<br data-owner="balance-text" />';
                    }
                    remainingText = remainingText.substr(splitIndex);

                    // update counters
                    remLines--;
                    $this.html(remainingText);
                    nowrapWidth = $this.width();
                }

                if (shouldJustify) {
                    $this.html(newText + justify($this, remainingText, containerWidth));
                } else {
                    $this.html(newText + remainingText);
                }
            }

            // restore settings
            $this.css({
                'position': oldPosition,
                'display': oldDisplay,
                'float': oldFloat,
                'white-space': oldWS,
                'line-height': oldLH
            });
        });
    };

    return function(selectors) {
        if ($.isArray(selectors)) selectors = selectors.join(', ');
        function applyBalanceText() {
            $(selectors)
                .each(function() {
                    // look for html nodes in this element
                    var el = $(this), updated, related;
                    if (el.hasClass('interactive-leadin')) {
                        // save dateline and related link
                        updated = el.find('time.dateline');
                        related = el.find('a.related-link');
                        el.data('updated', updated.get(0))
                            .data('related', related.get(0))
                            .data('filter', $.trim((updated.text() + ' ' + related.text()).replace(/[ \n\t]+/g, ' ')));
                    } else if (el.hasClass('g-intro')) { 
                        // special treatment for stacks
                        updated = el.find('.g-updated');
                        related = el.find('.g-related-link');
                        el.data('updated', updated.get(0))
                            .data('related', related.get(0))
                            .data('filter', $.trim((updated.text() + (related.get(0) ? ' ' + related.text() : '')).replace(/[ \n\t]+/g, ' ')));
                        console.log(el.data('filter'), related.get(0));
                    }
                })
                .balanceText()
                .each(function() {
                    var el = $(this), filter, summary, nobr;
                    if (el.hasClass('interactive-leadin')) {
                        el.find('.dateline,.related-link').remove();
                        filter = el.data('filter');
                        summary = el.html().replace(/[ \n\t]+/g, ' ').replace(filter, '');
                        el.html('<span class="summary-text">'+summary+'</span>');
                        nobr = $('<span />')
                            .css('white-space', 'nowrap')
                            .appendTo(el);
                        nobr.append(el.data('updated'));
                        nobr.append(' ');
                        nobr.append(el.data('related'));
                    } else if (el.hasClass('g-intro')) {
                        // special treatment for stacks
                        el.find('.g-updated,.g-related-link').remove();
                        filter = el.data('filter');
                        summary = el.html().replace(/[ \n\t]+/g, ' ').replace(filter, '');
                        el.html('<span class="summary-text">'+summary+'</span>');
                        nobr = $('<span />')
                            .css('white-space', 'nowrap')
                            .appendTo(el);
                        nobr.append(el.data('updated'));
                        if (el.data('related')) {
                            nobr.append(' ');
                            nobr.append(el.data('related'));
                        }
                    }
                    
                });
        }
        // Apply on DOM ready
        $(window).ready(applyBalanceText);
        // Reapply on resize
        $(window).smartresize(applyBalanceText);
    };

});

define('templates',[],function() {

var templates = {};

templates['jst'] = {};

templates['jst']['example_template'] = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<p>'+
((__t=( text ))==null?'':__t)+
'</p>\n';
}
return __p;
}

return templates;

});
define('lib/loadVHS',[
  'jquery/nyt'
  ], function($) {

  // check if there are any video elements on the page
  if ($('.g-item-video').length > 0) {

    // load VHS
    require([
      'vhs'
    ], function(VHS){
      $('.g-scoop-vhs').each(function(){

        videoId = $(this).attr("id");

        VHS.player({
          id: videoId,
          container: videoId,
          width: '100%',
          height: '100%',
          type: 'player-test',
          mode: 'html5',
          cover: { mode: 'clean' },
          ads: false
        });
      });

      $('.g-videotape-vhs').each(function(){

        var videotapeBase = 'http://int.nyt.com/data/videotape/finished/',
          videoUrl = $(this).data("videotape-url"),
          videoId = $(this).attr("id");

        VHS.player({
          id: videoId,
          name: videoId,
          container: videoId,
          width: '100%',
          height: '100%',
          poster: videotapeBase + videoUrl + ".jpg",
          source: {
            "video/mp4": videotapeBase + videoUrl + ".mp4",
            "video/webm": videotapeBase + videoUrl + ".webm"
          },
          mode: 'html5',
          cover: { mode: 'clean' },
          api: false,
          ads: false
        });
      });
    });
  }

});

// resize graphics based on class names
define('node_modules/nytg-resizer/script',[
  'jquery/nyt',
  'underscore/nyt',
  'foundation/views/base-view',
  'foundation/views/page-manager'
], function($, _, BaseView, PageManager) {

  var GraphicsResizer = BaseView.extend({

    sizes: {
      "v1": {
         180:  ".g-show-xsmall",
         300:  ".g-show-small",
         460:  ".g-show-smallplus",
         600:  ".g-show-submedium",
         720:  ".g-show-medium",
         945:  ".g-show-large",
        1050:  ".g-show-xlarge"
      },
      // V2 is assumed to be a superset of V1
      "v2": {
         180:  ".g-show-xsmall",
         300:  ".g-show-small",
         460:  ".g-show-smallplus",
         495:  ".g-text-width",
         600:  ".g-show-submedium",
         720:  ".g-show-medium",
         945:  ".g-show-large",
        1050:  ".g-show-xlarge",
        1400:  ".g-show-xxlarge"
      },
    },

    initialize: function(options) {
      // only want one resizer on the page
      if ($("html").hasClass("g-resizer-init")) return false;
      this.selector = _.values(this.sizes.v2).join(", ");
      _.bindAll(this, "render", "selectElements");
      this.selectElements();
      this.pageManager.on("nyt:page-resize", this.render);
      this.render();
      $("html").addClass("g-resizer-init");
      $(document).ready(this.selectElements);
    },

    render: function() {
      var self = this;
      self.elements.each(function() {
        var element = $(this);
        var version = "v1";
        if (element.hasClass("g-resizer-v2")) version = "v2";
        var widths = _.map(_.keys(self.sizes[version]), Number);
        var parentWidth = element.parent().width();
        var width = _.max(_.filter(widths, function(width) { return width <= parentWidth; }));
        var css = self.sizes[version][width] || "";
        var show = element.hasClass(css.replace(".", ""));
        element.toggle(show);
      });
    },

    selectElements: function() {
      this.elements = $(this.selector);
      this.elements.hide();
      this.render();
    }

  });

  return new GraphicsResizer();

});
define('jquery',["jquery/nyt"], function ($) { return $ });
/**
 * @preserve LaziestLoader - v0.7.2 - 2015-11-17
 * A responsive lazy loader for jQuery.
 * http://sjwilliams.github.io/laziestloader/
 * Copyright (c) 2015 Josh Williams; Licensed MIT
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define('node_modules/laziestloader/jquery.laziestloader',['jquery'], factory);
  } else {
    factory(jQuery);
  }
}(function($) {

  var laziestLoader = function(options, callback) {

    var $w = $(window),
      $elements = this,
      $loaded = $(), // elements with the correct source set
      retina = window.devicePixelRatio > 1,
      didScroll = false;

    options = $.extend(true, {
      threshold: 0,
      sizePattern: /{{SIZE}}/ig,
      getSource: getSource,
      event: 'scroll',
      scrollThrottle: 250, // time in ms to throttle scroll. Increase for better performance.
      sizeOffsetPercent: 0, // prefer smaller images
      setSourceMode: true // plugin sets source attribute of the element. Set to false if you would like to, instead, use the callback to completely manage the element on trigger.
    }, options);


    var useNativeScroll = (typeof options.event === 'string') && (options.event.indexOf('scroll') === 0);

    /**
     * Generate source path of image to load. Take into account
     * type of data supplied and whether or not a retina
     * image is available.
     *
     * Basic option: data attributes specifing a single image to load,
     * regardless of viewport.
     * Eg:
     *
     * <img data-src="yourimage.jpg">
     * <img data-src="yourimage.jpg" data-src-retina="yourretinaimage.jpg">
     *
     * Range of sizes: specify a string path with a {{size}} that
     * will be replaced by an integer from a list of available sizes.
     * Eg:
     *
     * <img data-pattern="path/toyourimage-{{size}}.jpg" data-widths="[320, 640, 970]">
     * <img data-pattern="path/toyourimage-{{size}}.jpg" data-pattern-retina="path/toyourimage-{{size}}@2x.jpg" data-widths="[320, 640, 970]">
     * <img data-pattern="path/toyourimage/{{size}}/slug.jpg" data-pattern-retina="path/toyourimage/{{size}}/slug@2x.jpg" data-widths="[320, 640, 970]">
     *
     * Range of sizes, with slugs: specify a string path with a {{size}} that
     * will be replaced by a slug representing an image size.
     * Eg:
     *
     * <img data-pattern="path/toyourimage-{{size}}.jpg" data-widths="[{width: 320, slug: 'small'},{width:900, slug: 'large'}]">
     *
     * @param  {jQuery object} $el
     * @return {String}
     */

    function getSource($el) {
      var source, slug;
      var data = $el.data();
      if (data.pattern && data.widths && $.isArray(data.widths)) {
        source = retina ? data.patternRetina : data.pattern;
        source = source || data.pattern;

        // width or slug version?
        if (typeof data.widths[0] === 'object') {
          slug = (function() {
            var widths = $.map(data.widths, function(val) {
              return val.size;
            });

            var bestFitWidth = bestFit($el.width(), widths);

            // match best width back to its corresponding slug
            for (var i = data.widths.length - 1; i >= 0; i--) {
              if (data.widths[i].size === bestFitWidth) {
                return data.widths[i].slug;
              }
            }
          })();

          source = source.replace(options.sizePattern, slug);
        } else {
          source = source.replace(options.sizePattern, bestFit($el.width(), data.widths));
        }
      } else {
        source = retina ? data.srcRetina : data.src;
        source = source || data.src;
      }

      return source;
    }

    /**
     * Reflect loaded state in class names
     * and fire event.
     *
     * @param  {jQuery Object} $el
     */
    function onLoad($el) {
      $el.addClass('ll-loaded').removeClass('ll-notloaded');
      $el.trigger('loaded');

      if (typeof callback === 'function') {
        callback.call($el);
      }
    }

    /**
     * Attach event handler that sets correct
     * media source for the elements' width, or
     * allows callback to manipulate element
     * exclusively.
     */

    function bindLoader() {
      $elements.one('laziestloader', function() {
        var $el = $(this);
        var source;

        // set height?
        if ($el.data().ratio) {
          setHeight.call(this);
        }

        // set content. default: set element source
        if (options.setSourceMode) {
          source = options.getSource($el);
          if (source && this.getAttribute('src') !== source) {
            this.setAttribute('src', source);
          }
        }

        // applied immediately to reflect that media has started but,
        // perhaps, hasn't finished downloading.
        $el.addClass('ll-loadstarted');

        // Determine when to fire `loaded` event. Wait until
        // media is truly loaded if possible, otherwise immediately.
        if (options.setSourceMode && (this.nodeName === 'IMG' || this.nodeName === 'VIDEO' || this.nodeName === 'AUDIO') ) {
          if (this.nodeName === 'IMG') {
            this.onload = function() {
              onLoad($el);
            };
          } else {
            this.onloadstart = function() {
              onLoad($el);
            };
          }
        } else {
          onLoad($el);
        }
      });
    }

    /**
     * Remove even handler from elements
     */

    function unbindLoader() {
      $elements.off('laziestloader');
    }

    /**
     * Find the best sized image, opting for larger over smaller
     *
     * @param  {Number} targetWidth   element width
     * @param  {Array} widths         array of numbers
     * @return {Number}
     */

    var bestFit = laziestLoader.bestFit = function(targetWidth, widths) {
      var selectedWidth = widths[widths.length - 1],
        i = widths.length,
        offset = targetWidth * (options.sizeOffsetPercent / 100);

      // sort smallest to largest
      widths.sort(function(a, b) {
        return a - b;
      });

      while (i--) {
        if ((targetWidth - offset) <= widths[i]) {
          selectedWidth = widths[i];
        }
      }

      return selectedWidth;
    };

    /**
     * Cycle through elements that haven't had their
     * source set and, if they're in the viewport within
     * the threshold, load their media
     */

    function laziestloader() {
      var docEl = document.documentElement;
      var wHeight = window.innerHeight || docEl.clientHeight;
      var wWidth = window.innerWidth || docEl.clientWidth;
      var threshold = options.threshold;

      var $inview = $elements.not($loaded).filter(function() {
        if ($(this).is(':hidden')) return;
        var rect = $(this)[0].getBoundingClientRect();

        return (
          rect.bottom + threshold > 0 &&
          rect.right + threshold > 0 &&
          rect.left < wWidth + threshold &&
          rect.top < wHeight + threshold
        );
      });

      $inview.trigger('laziestloader');
      $loaded.add($inview);
    }


    /**
     * Given a lazy element, check if it should have
     * its height set based on a data-ratio multiplier.
     */
    function setHeight() {
      var $el = $(this),
        data = $el.data();

      data.ratio = data.ratio || data.heightMultiplier; // backwards compatible for old data-height-multiplier code.

      if (data.ratio) {
        $el.css({
          height: Math.round($el.width() * data.ratio)
        });
      }
    }

    // add inital state classes, and check if
    // element dimensions need to be set.
    $elements.addClass('ll-init ll-notloaded').each(setHeight);

    // initial binding
    bindLoader();


    // Watch either native scroll events, throttled by
    // options.scrollThrottle, or a custom event that
    // implements its own throttling.

    if (useNativeScroll) {
      $w.scroll(function(){
        didScroll = true;
      });

      setInterval(function() {
        if (didScroll) {
          didScroll = false;
          laziestloader();
        }
      }, options.scrollThrottle);

    } else {

      // if custom event is a function, it'll need
      // to call laziestloader() manually, like so:
      //
      //   $('.g-lazy').laziestloader({
      //    event: function(cb){
      //      // custom scroll event on nytimes.com
      //      PageManager.on('nyt:page-scroll', function(){
      //       // do something interesting if you like
      //       // and then call the passed in laziestloader();
      //       cb();
      //     });
      //    }
      //  });
      //
      //
      // Otherwise, it's a string representing an event on the
      // window to subscribe to, like so:
      //
      // // some code dispatching throttled events
      // $window.trigger('nytg-scroll');
      //
      // $('.g-lazy').laziestloader({
      //   event: 'nytg-scroll'
      // });
      //

      if (typeof options.event === 'function') {
        options.event(laziestloader);
      } else {
        $w.on(options.event, function(){
          laziestloader();
        });
      }
    }



    // reset state on resize
    $w.resize(function() {
      $loaded = $();
      unbindLoader();
      bindLoader();
      laziestloader();
    });

    // initial check for lazy images
    $(document).ready(function() {
      laziestloader();
    });

    return this;
  };

  $.fn.laziestloader = laziestLoader;

}));

/*! LaziestLoader - v0.0.2 - 2014-02-25
 * A responsive-aware jQuery plugin to smartly lazy load images and other elements.
 * https://github.com/sjwilliams/laziestloader
 * Thanks to Luís Almeida for 'unveil,' on which this project is based.
 * Copyright (c) 2014 Josh Williams; Licensed MIT
 */

define('resizerScript',[
  "jquery/nyt",
  "node_modules/nytg-resizer/script",
  "node_modules/laziestloader/jquery.laziestloader"
], function($, GraphicsResizer) {
    $(".g-aiImg").laziestloader({ threshold: 1000 });
    var isEmbeddedTemplate = $('html').hasClass('page-interactive-embedded');
    if (isEmbeddedTemplate) {
      var embedWidth = $(window).width();
      require([
        "shared/interactive/instances/app-communicator",
        "foundation/views/page-manager"
      ], function(AppCommunicator, PageManager) {
        AppCommunicator.triggerResize();
        PageManager.on("nyt:page-resize", function() {
          // Currently can't listen to "lazy loader" event, so just wait 500ms for now
          var windowWidth = $(window).width();
          if (embedWidth != windowWidth) {
            embedWidth = windowWidth;
            setTimeout(function() {
              AppCommunicator.triggerResize();
            }, 500);
          }
        });
      });
    }
    return GraphicsResizer;
});
(function() {

    function jetpack(d3) {
        d3.selection.prototype.translate = function(xy) {
            return this.node() && this.node().nearestViewportElement ?
                // svg
                this.attr('transform', function(d,i) {
                    return 'translate('+(typeof xy == 'function' ? xy.call(this, d,i) : xy)+')';
                }) :
                // html
                this.style('transform', html_translate)
                    .style('-webkit-transform', html_translate)
                    .style('-ms-transform', html_translate);

            function html_translate(d,i) {
                return 'translate('+(typeof xy == 'function' ? xy.call(this, d,i) : xy).map(function(p) {
                    return p+'px';
                })+')'; 
            }
        };

        d3.selection.prototype.tspans = function(lines, lh) {
            return this.selectAll('tspan')
                .data(function(d,i) {
                    var h = typeof lh == 'function' ? lh(d,i) : lh || 15,
                        ls = typeof lines == 'function' ? lines(d,i) : lines;
                    return ls.map(function(line) {
                        return [line, h, ls.length];
                    });
                })
                .enter()
                .append('tspan')
                .text(function(d) { return d[0]; })
                .attr('x', 0)
                //.style('alignment-baseline', 'central')
                .attr('dy', function(d, i) { return i ? d[1] : -d[1] * 0.5 *(d[2]-1.7); });
        };

        d3.selection.prototype.append =
        d3.selection.enter.prototype.append = function(name) {
            var n = d3_parse_attributes(name), s;
            name = n.attr ? n.tag : name;
            name = d3_selection_creator(name);
            s = this.select(function() {
                return this.appendChild(name.apply(this, arguments));
            });
            return n.attr ? s.attr(n.attr) : s;
        };

        d3.selection.prototype.insert =
        d3.selection.enter.prototype.insert = function(name, before) {
            var n = d3_parse_attributes(name), s;
            name = n.attr ? n.tag : name;
            name = d3_selection_creator(name);
            before = d3_selection_selector(before);
            s = this.select(function() {
                return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
            });
            return n.attr ? s.attr(n.attr) : s;
        };

        var d3_parse_attributes_regex = /([\.#])/g;

        function d3_parse_attributes(name) {
            if (typeof name === "string") {
                var attr = {},
                    parts = name.split(d3_parse_attributes_regex), p;
                    name = parts.shift();
                while ((p = parts.shift())) {
                    if (p == '.') attr['class'] = attr['class'] ? attr['class'] + ' ' + parts.shift() : parts.shift();
                    else if (p == '#') attr.id = parts.shift();
                }
                return attr.id || attr['class'] ? { tag: name, attr: attr } : name;
            }
            return name;
        }

        function d3_selection_creator(name) {
            return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? function() {
                return this.ownerDocument.createElementNS(name.space, name.local);
            } : function() {
                return this.ownerDocument.createElementNS(this.namespaceURI, name);
            };
        }

        function d3_selection_selector(selector) {
            return typeof selector === "function" ? selector : function() {
                return this.querySelector(selector);
            };
        }

        d3.wordwrap = function(line, maxCharactersPerLine) {
            var w = line.split(' '),
                lines = [],
                words = [],
                maxChars = maxCharactersPerLine || 40,
                l = 0;
            w.forEach(function(d, i) {
                if (l+d.length > maxChars && (words.join('').length > 5 || i == w.length-2)) {
                    lines.push(words.join(' '));
                    words.length = 0;
                    l = 0;
                }
                l += d.length;
                words.push(d);
            });
            if (words.length) {
                lines.push(words.join(' '));
            }
            return lines;
        };

        d3.ascendingKey = function(key) {
            return typeof key == 'function' ? function (a, b) {
                  return key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : key(a) >= key(b) ? 0 : NaN;
            } : function (a, b) {
                  return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : a[key] >= b[key] ? 0 : NaN;
            };
        };

        d3.descendingKey = function(key) {
            return typeof key == 'function' ? function (a, b) {
                return key(b) < key(a) ? -1 : key(b) > key(a) ? 1 : key(b) >= key(a) ? 0 : NaN;
            } : function (a, b) {
                return b[key] < a[key] ? -1 : b[key] > a[key] ? 1 : b[key] >= a[key] ? 0 : NaN;
            };
        };

        d3.f = function(){
            var functions = arguments;
            //convert all string arguments into field accessors
            var i = 0, l = functions.length;
            while (i < l) {
                if (typeof(functions[i]) === 'string' || typeof(functions[i]) === 'number'){
                    functions[i] = (function(str){ return function(d){ return d[str] }; })(functions[i])
                } else if (typeof(functions[i]) === 'object'){
                    functions[i] = (function(map){ return function(d){ return map[d] }; })(functions[i])
                }
                i++;
            }
             //return composition of functions
            return function(d) {
                var i=0, l = functions.length;
                while (i++ < l) d = functions[i-1].call(this, d);
                return d;
            };
        };
        // store d3.f as convenient unicode character function (alt-f on macs)
        if (!window.hasOwnProperty('ƒ')) window.ƒ = d3.f;
    }

    if (typeof d3 === 'object' && d3.version) jetpack(d3);
    else if (typeof define === 'function' && define.amd) {
        define('lib/d3-jetpack',['d3/3'], jetpack);
    }

})();

require([
    '_nytg/2015-12-07-gun-sales/assets',
    '_nytg/2015-12-07-gun-sales/big-assets',
    '_nytg/2015-12-07-gun-sales/annotations',
    'jquery/nyt',
    'd3/3',
    'queue/1',
    'underscore/1.6',
    'foundation/views/page-manager',
    'nyt5/analytics',
    'lib/text-balancer',
    'templates',
    'lib/loadVHS',
    'resizerScript',
    'lib/d3-jetpack',  // uncomment to activate d3-jetpack
], function(NYTG_ASSETS, NYTG_BIG_ASSETS, annotationOpts, $, d3, queue, _, PageManager, Analytics, balanceText, tpl) {

    // begin code for your graphic here:
    window.pm = PageManager;
    balanceText([
        '.interactive-headline.story-heading',
        '.interactive-leadin',
        'h2.g-subhed',
        // '.g-intro' // uncomment if you want to balance intros, too
    ]);

    // will overwrite annotation settings 
    var mobile_annotation_exceptions = {
        'obama-election-1': { ha: 'right', dx: 10 },
        'obama-election-2': { ha: 'right', dx: -15, dy: 15 },
        'total': { ha: 'right', va: 'bottom', x: new Date(2015,10,1), y: 5e5, dx: 0 },
        'obama-election-1-raw': { ha: 'right', dx: 10 },
        'obama-election-2-raw': { ha: 'right', dx: -15, dy: 15 },
        'total-raw': { ha: 'right', va: 'bottom', x: new Date(2015,10,1), y: 5e5, dx: 0 },
        'new-jersey': { y: 1.1, va: 'middle', dx: -5 },
        'katrina': { ha: 'left', dx: 30, dy: 7, line: 1, valign: 'top' },
        'louisiana': { dy: 5 },
        'mississippi': { y: 1.6 },
        'more-handguns': { dx: 25, dy: 48 },
        'handguns': { dy: -14 },
        'longguns': { dy: 7, dx: -5 },
        'dc': { y: 19, va: 'top', dy: 0 },
        'recent': { dx: 5, dy: -10, ha: "right", va: "bottom", text: "1.6 million<br>Dec. ’15" },

    };

    queue()
        .defer(d3.csv, NYTG_ASSETS + 'all-data.csv')
        .await(ready);

    function ready(err, data) {
        parseData(data);

        var main = d3.select('#main').node(),
            _vpWidth = main.clientWidth;

        render();

        PageManager.on('nyt:page-viewportchange', _.debounce(function() {
            var w = main.clientWidth;
            if (w != _vpWidth) {
                _vpWidth = w;
                render();
            }
        }, 300));

        function render() {

            var mobile = _vpWidth < 450;

            d3.selectAll('div.g-line-chart > *').remove();

            var num = d3.format('d'),
                pct = d3.format('.1%');

            var topchart = initChart('.g-total-gun-sales', 400, [5e5,2e6])   // v--- years_since_2000 * 12 + months_minus1
                .addLine('guns_total_seas', '#b13A3A', [1*12 + 8, 8*12+10, 13*12, 15*12+11]);

            initChart('.g-handguns-vs-longguns', 255, [25,76], true, 0, ' percent of total gun sales', [75,25+12.5,50,50+12.5,25])
                .addLine('handgun_share', '#b13A3A')
                .addLine('longgun_share', 'orange');

            initChart('.g-new-jersey', 220, [0.4,1.3], true)
                .addLine('new_jersey', '#EC6626', [1*12 + 8]);

            initChart('.g-maryland', mobile ? 200 : 220, [0, _vpWidth >= 720 ? 4 : 4.7], true, 0)
                .addLine('maryland', '#EC6626');

            initChart('.g-katrina-states', mobile ? 320 : 280, [0.9,mobile ? 4.4 : 4.1], true, 0)
                .addLine('georgia', 'orange')
                .addLine('louisiana', '#EC6626')
                .addLine('mississippi', '#b13A3A', [14*12+8, 15*12+8]);

            initChart('.g-gun-laws', mobile ? 220 : 190, [1.8,4], true, 0)
                .addLine('missouri', '#EC6626');

            initChart('.g-dc', mobile ? 220 : 180, [0,mobile ? 20 : 15], true, 0, ' per 100,000 national handgun sales')
                .addLine('dc_handguns_per_100k_national_sales', 'orange');

            var adjusted = true,
                top_annotations = {
                    raw: JSON.parse(topchart.container.node().dataset.annotationsAlt),
                    adj: JSON.parse(topchart.container.node().dataset.annotations)
                };

            var seas_tgl = topchart.container.append('div.g-seas-toggle.g-adjusted');
                
            var seas_tgl_btn = seas_tgl.selectAll('button')
                .data(['Seasonally adjusted', 'Unadjusted'])
                .enter()
                .append('button.button')
                .text(_.identity)
                .classed('g-active', function(d,i){ return !i; })
                .on('click', function() {
                    adjusted = !adjusted;
                    seas_tgl.classed('g-adjusted', adjusted);
                    seas_tgl_btn.classed('g-active', function(d,i) {
                        return adjusted ? !i : i;
                    });
                    topchart.removeAnnotations();
                    topchart.transitionLine(adjusted ? 'guns_total_seas' : 'guns_total');
                    setTimeout(function() {
                        topchart.showAnnotations(top_annotations[adjusted ? 'adj' : 'raw']);
                    }, 2000);
                });
        }

        function initChart(cont_id, height, yrange, percent, pct_decimals, custom_label, custom_ticks) {
            
            var cont = d3.select(cont_id);
            
            if (!cont.node()) {
                var fake = {
                    addLine: function() { return fake; }
                };
                return fake;
            }

            var annotations = JSON.parse(cont.node().dataset.annotations);

            var w = _vpWidth < 720 ? _vpWidth - 10 : _vpWidth,
                h = height,
                margin = { t: 20, l: 0, r: 5, b: 40 };
            
            var svg = cont.append('svg.g-line-chart')
                .attr({ width: w, height: h });

            w -= margin.l + margin.r;
            h -= margin.t + margin.b;

            svg = svg.append('g').translate([margin.l, margin.t]);

            var x = d3.time.scale()
                .domain([data[0].date, _.last(data).date])
                .range([30, w-10]);

            var y = d3.scale.linear()
                .domain(yrange)
                .range([h, 0]);

            var y_tick_values = custom_ticks || y.ticks(h/50).reverse();

            var line = d3.svg.line().x(ƒ('x', x)).y(ƒ('y', y));

            var x_tick = svg.append('g.x-grid')
                .selectAll('g.tick')
                .data(x.ticks(w / 56))
                .enter().append('g.tick')
                .translate(function(d) { return [x(d), h]; });

            x_tick.append('line')
                .attr('y1', -h+y(y_tick_values[0]))
                .attr('y2', 4);
            x_tick.append('text')
                .text(function(d, i) {
                    return d.getFullYear();
                })
                .attr('y', 25);

            var y_tick = svg.append('g.y-grid')
                .selectAll('g.tick')
                .data(y_tick_values)
                .enter().append('g.tick')
                .translate(function(d) { return [0, y(d)]; });

            y_tick.append('line').attr('x2', w);
            y_tick.append('text')
                .text(function(d, i) {
                    if (!percent) d = d / 1e6;
                    return d.toFixed(percent ? pct_decimals !== undefined ? pct_decimals : 1 : 1) +
                    (i ? '' : custom_label ||(percent ? ' '+(w < 450 ? 'pct.' : 'percent')+' of national gun sales' : ' million guns sold per month'));
                })
                .attr('y', -5);

            function showAnnotations(annotations) {
                
                annotations = _.keys(annotations)
                    .filter(ƒ(annotationOpts))
                    .map(function(a_id) {
                        annotationOpts[a_id].x = new Date(annotationOpts[a_id].x);
                        var a = _.extend({
                            text: '',
                            x: 0, x2: null, dx: 0,
                            y: 0, dy: 0,
                            ha: 'left', va: 'bottom',
                            bar: 0, line: 0
                        }, {
                            id: a_id,
                            text: annotations[a_id]
                        },
                        annotationOpts[a_id] || {},
                        _vpWidth < 720 ? mobile_annotation_exceptions[a_id] || {} : {}
                    );
                    return a;
                }).filter(function(a) {
                    return !a.min_width || _vpWidth >= a.min_width;
                });

                var annotationBars = svg.append('g.annotation-bars')
                    .selectAll('rect')
                    .data(annotations.filter(ƒ('bar')))
                    .enter().append('rect')
                    .attr('width', function(d) {
                        return d.x2 ? x(new Date(d.x2)) - x(d.x) : d.bar;
                    })
                    .attr('height', h - y(y_tick_values[0]))
                    .attr('y', +y(y_tick_values[0]))
                    .translate(function(d) {
                        return [ x(d.x) - (d.x2 ? 0 : d.bar * 0.5), 0];
                    });

                var annotationLines = svg.append('g.annotation-lines')
                    .selectAll('line.annotation')
                    .data(annotations.filter(ƒ('line')))
                    .enter().append('line.annotation')
                    .translate(function(d) {
                        return [ x(d.x), y(d.y)];
                    })
                    .attr('x1', function(d) { return Math.abs(d.dx) > Math.abs(d.dy) ? d.dx ? d.dx - (5 * d.dx / Math.abs(d.dx)) : 0 : 0; })
                    .attr('y1', function(d) { return Math.abs(d.dy) > Math.abs(d.dx) ? d.dy ? d.dy - (2 * d.dy / Math.abs(d.dy)) : 0 : 0; });

                var annotation = cont.append('div.annotations')
                    .style('left', margin.l+'px')
                    .style('top', margin.t+'px')
                    .selectAll('.annotation')
                    .data(annotations)
                    .enter()
                    .append('div')
                    .attr('class', function(d) {
                        return 'annotation annotation-'+d.id+' g-va-'+d.va+' g-ha-'+d.ha;
                    })
                    .style('left', function(d) {
                        return d.dx + x(d.x) +
                        (!d.dx && d.dy && d.line && d.ha == 'left' ? -3 : 0) + 'px';
                    })
                    .style('top', function(d) {
                        return d.dy + y(d.y) +
                            (!d.dy && d.dx && d.line && d.va == 'top' ? -5 : 0) + 'px';
                    });

                annotation.append('span')
                    .html(ƒ('text'));

                annotation.style('transform', annotation_transform);
                annotation.style('-webkit-transform', annotation_transform);

                function annotation_transform(d) {
                    var bb = this.getBoundingClientRect(),
                        m = { left: 0, center: -0.5, right: -1,
                              top: 0, bottom: -1, middle: -0.5 },
                        res = 'translate('+[bb.width * m[d.ha]+'px', bb.height * m[d.va] + 'px']+')';
                    // console.log(res);
                    return res;
                }

                cont.selectAll('.annotation span a')
                    .attr('target', '_blank');
            }

            
            showAnnotations(annotations);

            var lineGroup = svg.append('g.lines'),
                _dots;

            var chart = {
                addLine: function(column, color, dots) {
                    _dots = dots;
                    var linedata = data.map(function(r) {
                        return { x: r.date, y: r[column] };
                    });
                    lineGroup.append('path.line')
                        .classed(column, true)
                        .attr('d', line(linedata))
                        .style('stroke', color);
                    // var lst = _.last(linedata);
                    dots = dots ? dots.map(ƒ(linedata)) : null;
                    if (dots) {
                        lineGroup.append('g.line-dots')
                            .selectAll('circle')
                            .data(dots)
                            .enter()
                            .append('circle')
                            .style('fill', color)
                            .attr('r', 3)
                            .translate(function(d) {
                                return [x(d.x), y(d.y)];
                            });
                    }
                    return chart;
                },
                transitionLine: function(column) {
                    var linedata = data.map(function(r) {
                        return { x: r.date, y: r[column] };
                    });
                    var dots = _dots ? _dots.map(ƒ(linedata)) : null;
                    if (dots) {
                        lineGroup.select('g.line-dots')
                            .selectAll('circle')
                            .transition()
                            .duration(2000)
                            .attr('transform', function(d, i) {
                                return 'translate('+ [x(dots[i].x), y(dots[i].y)] + ')';
                            });
                    }
                    lineGroup.select('path.line')
                        .transition()
                        .duration(2000)
                        .attr('d', line(linedata));
                },
                container: cont,
                removeAnnotations: function() {
                    cont.selectAll('.annotations .annotation, g.annotation-bars, g.annotation-lines')
                        .transition().duration(300)
                        .style('opacity', 0)
                        .each('end', function() {
                            d3.select(this).remove();
                        });
                },
                showAnnotations: showAnnotations
            };
            return chart;
        }
    }



    function parseData(d) {
        d.forEach(function(r) {
            _.each(r, function(v, k) { r[k] = +v; });
            r.date = new Date(r.year, r.month - 1, 1);
            r.handguns_total = r.guns_total * r.handgun_share;
            r.longguns_total = r.guns_total * r.longgun_share;
            r.handguns_total_seas = r.guns_total_seas * r.handgun_share;
            r.longguns_total_seas = r.guns_total_seas * r.longgun_share;
            r.handgun_share *= 100;
            r.longgun_share *= 100;
        });
    }

}); // end require
;
define("script", function(){});

