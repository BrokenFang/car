!function(e){"use strict";function t(i,n,s,o){function l(e){e.timeout&&(a.cycleTimeout=setTimeout(function(){t(i,e,0,!e.rev)},e.timeout))}if(!n.busy){var a=i[0].parentNode,r=i[n.currSlide],u=i[n.nextSlide];if(0!==a.cycleTimeout||s)if(s||!a.cyclePause){n.before.length&&e.each(n.before,function(e,t){t.apply(u,[r,u,n,o])});var d=function(){c&&this.style.removeAttribute("filter"),e.each(n.after,function(e,t){t.apply(u,[r,u,n,o])}),l(n)};n.nextSlide!=n.currSlide&&(n.busy=1,e.fn.cycle.custom(r,u,n,d));var h=n.nextSlide+1==i.length;n.nextSlide=h?0:n.nextSlide+1,n.currSlide=h?i.length-1:n.nextSlide-1}else l(n)}}function i(e,i,n){var c=e[0].parentNode,s=c.cycleTimeout;return s&&(clearTimeout(s),c.cycleTimeout=0),i.nextSlide=i.currSlide+n,i.nextSlide<0?i.nextSlide=e.length-1:i.nextSlide>=e.length&&(i.nextSlide=0),t(e,i,1,n>=0),!1}var n="Lite-1.7",c=/MSIE/.test(navigator.userAgent);e.fn.cycle=function(n){return this.each(function(){n=n||{},this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=0,this.cyclePause=0;var s=e(this),o=n.slideExpr?e(n.slideExpr,this):s.children(),l=o.get();if(l.length<2)return void(window.console&&console.log("terminating; too few slides: "+l.length));var a=e.extend({},e.fn.cycle.defaults,n||{},e.metadata?s.metadata():e.meta?s.data():{}),r=e.isFunction(s.data)?s.data(a.metaAttr):null;r&&(a=e.extend(a,r)),a.before=a.before?[a.before]:[],a.after=a.after?[a.after]:[],a.after.unshift(function(){a.busy=0});var u=this.className;a.width=parseInt((u.match(/w:(\d+)/)||[])[1],10)||a.width,a.height=parseInt((u.match(/h:(\d+)/)||[])[1],10)||a.height,a.timeout=parseInt((u.match(/t:(\d+)/)||[])[1],10)||a.timeout,"static"==s.css("position")&&s.css("position","relative"),a.width&&s.width(a.width),a.height&&"auto"!=a.height&&s.height(a.height);var d=0;o.css({position:"absolute"}).each(function(t){e(this).css("z-index",l.length-t)}),e(l[d]).css("opacity",1).show(),c&&l[d].style.removeAttribute("filter"),a.fit&&a.width&&o.width(a.width),a.fit&&a.height&&"auto"!=a.height&&o.height(a.height),a.pause&&s.hover(function(){this.cyclePause=1},function(){this.cyclePause=0});var h=e.fn.cycle.transitions[a.fx];if(h&&h(s,o,a),o.each(function(){var t=e(this);this.cycleH=a.fit&&a.height?a.height:t.height(),this.cycleW=a.fit&&a.width?a.width:t.width()}),a.cssFirst&&e(o[d]).css(a.cssFirst),a.timeout)for(a.speed.constructor==String&&(a.speed={slow:600,fast:200}[a.speed]||400),a.sync||(a.speed=a.speed/2);a.timeout-a.speed<250;)a.timeout+=a.speed;a.speedIn=a.speed,a.speedOut=a.speed,a.slideCount=l.length,a.currSlide=d,a.nextSlide=1;var f=o[d];a.before.length&&a.before[0].apply(f,[f,f,a,!0]),a.after.length>1&&a.after[1].apply(f,[f,f,a,!0]),a.click&&!a.next&&(a.next=a.click),a.next&&e(a.next).unbind("click.cycle").bind("click.cycle",function(){return i(l,a,a.rev?-1:1)}),a.prev&&e(a.prev).unbind("click.cycle").bind("click.cycle",function(){return i(l,a,a.rev?1:-1)}),a.timeout&&(this.cycleTimeout=setTimeout(function(){t(l,a,0,!a.rev)},a.timeout+(a.delay||0)))})},e.fn.cycle.custom=function(t,i,n,c){var s=e(t),o=e(i);o.css(n.cssBefore);var l=function(){o.animate(n.animIn,n.speedIn,n.easeIn,c)};s.animate(n.animOut,n.speedOut,n.easeOut,function(){s.css(n.cssAfter),n.sync||l()}),n.sync&&l()},e.fn.cycle.transitions={fade:function(e,t,i){t.not(":eq(0)").hide(),i.cssBefore={opacity:0,display:"block"},i.cssAfter={display:"none"},i.animOut={opacity:0},i.animIn={opacity:1}},fadeout:function(t,i,n){n.before.push(function(t,i,n,c){e(t).css("zIndex",n.slideCount+(c===!0?1:0)),e(i).css("zIndex",n.slideCount+(c===!0?0:1))}),i.not(":eq(0)").hide(),n.cssBefore={opacity:1,display:"block",zIndex:1},n.cssAfter={display:"none",zIndex:0},n.animOut={opacity:0},n.animIn={opacity:1}}},e.fn.cycle.ver=function(){return n},e.fn.cycle.defaults={animIn:{},animOut:{},fx:"fade",after:null,before:null,cssBefore:{},cssAfter:{},delay:0,fit:0,height:"auto",metaAttr:"cycle",next:null,pause:!1,prev:null,speed:1e3,slideExpr:null,sync:!0,timeout:4e3}}(jQuery);