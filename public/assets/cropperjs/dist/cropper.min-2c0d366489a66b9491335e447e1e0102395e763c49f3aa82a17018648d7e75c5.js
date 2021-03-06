/*!
 * Cropper.js v1.5.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-03-10T09:55:53.729Z
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t=t||self).Cropper=i()}(this,function(){"use strict";function t(i){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(i)}function i(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t){return"number"==typeof t&&!xt(t)}function n(t){return void 0===t}function o(i){return"object"===t(i)&&null!==i}function h(t){if(!o(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&Mt.call(e,"isPrototypeOf")}catch(t){return!1}}function r(t){return"function"==typeof t}function s(t){return Array.from?Array.from(t):Ct.call(t)}function c(t,i){return t&&r(i)&&(Array.isArray(t)||a(t.length)?s(t).forEach(function(e,a){i.call(t,e,a,t)}):o(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)})),t}function d(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1e11;return Bt.test(t)?Math.round(t*i)/i:t}function l(t,i){var e=t.style;c(i,function(t,i){kt.test(i)&&a(t)&&(t="".concat(t,"px")),e[i]=t})}function p(t,i){if(i)if(a(t.length))c(t,function(t){p(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function m(t,i){i&&(a(t.length)?c(t,function(t){m(t,i)}):t.classList?t.classList.remove(i):0<=t.className.indexOf(i)&&(t.className=t.className.replace(i,"")))}function u(t,i,e){i&&(a(t.length)?c(t,function(t){u(t,i,e)}):e?p(t,i):m(t,i))}function g(t){return t.replace(Tt,"$1-$2").toLowerCase()}function f(t,i){return o(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(g(i)))}function v(t,i,e){o(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(g(i)),e)}function w(t,i,e){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},n=e;i.trim().split(Et).forEach(function(i){if(!Wt){var o=t.listeners;o&&o[i]&&o[i][e]&&(n=o[i][e],delete o[i][e],0===Object.keys(o[i]).length&&delete o[i],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(i,n,a)})}function b(t,i,e){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},n=e;i.trim().split(Et).forEach(function(i){if(a.once&&!Wt){var o=t.listeners,h=void 0===o?{}:o;n=function(){delete h[i][e],t.removeEventListener(i,n,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];e.apply(t,r)},h[i]||(h[i]={}),h[i][e]&&t.removeEventListener(i,h[i][e],a),h[i][e]=n,t.listeners=h}t.addEventListener(i,n,a)})}function x(t,i,e){var a;return r(Event)&&r(CustomEvent)?a=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,e),t.dispatchEvent(a)}function y(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}function M(t){var i=t.match(Ht);return null!==i&&(i[1]!==Nt.protocol||i[2]!==Nt.hostname||i[3]!==Nt.port)}function C(t){var i="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+i}function D(t){var i=t.rotate,e=t.scaleX,n=t.scaleY,o=t.translateX,h=t.translateY,r=[];a(o)&&0!==o&&r.push("translateX(".concat(o,"px)")),a(h)&&0!==h&&r.push("translateY(".concat(h,"px)")),a(i)&&0!==i&&r.push("rotate(".concat(i,"deg)")),a(e)&&1!==e&&r.push("scaleX(".concat(e,")")),a(n)&&1!==n&&r.push("scaleY(".concat(n,")"));var s=r.length?r.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function B(t,i){var e=t.pageX,a=t.pageY,n={endX:e,endY:a};return i?n:Dt({startX:e,startY:a},n)}function k(t){var i=t.aspectRatio,e=t.height,a=t.width,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"contain",o=yt(a),h=yt(e);if(o&&h){var r=e*i;"contain"===n&&a<r||"cover"===n&&r<a?e=a/i:a=e*i}else o?e=a/i:h&&(a=e*i);return{width:a,height:e}}function T(t){var i,e=new DataView(t);try{var a,n,o;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var h=e.byteLength,r=2;r+1<h;){if(255===e.getUint8(r)&&225===e.getUint8(r+1)){n=r;break}r+=1}if(n){var s=n+10;if("Exif"===function(t,i,e){var a="";e+=i;for(var n=i;n<e;n+=1)a+=Lt(t.getUint8(n));return a}(e,n+4,4)){var c=e.getUint16(s);if(((a=18761===c)||19789===c)&&42===e.getUint16(s+2,a)){var d=e.getUint32(s+4,a);8<=d&&(o=s+d)}}}if(o){var l,p,m=e.getUint16(o,a);for(p=0;p<m;p+=1)if(l=o+12*p+2,274===e.getUint16(l,a)){l+=8,i=e.getUint16(l,a),e.setUint16(l,1,a);break}}}catch(t){i=1}return i}var E="undefined"!=typeof window,W=E?window:{},N=!!E&&"ontouchstart"in W.document.documentElement,H=!!E&&"PointerEvent"in W,L="cropper",O="all",z="crop",Y="move",X="zoom",R="e",A="w",S="s",I="n",j="ne",U="nw",q="se",P="sw",$="".concat(L,"-crop"),Q="".concat(L,"-disabled"),Z="".concat(L,"-hidden"),K="".concat(L,"-hide"),G="".concat(L,"-invisible"),V="".concat(L,"-modal"),F="".concat(L,"-move"),J="".concat(L,"Action"),_="".concat(L,"Preview"),tt="crop",it="move",et="none",at="crop",nt="cropend",ot="cropmove",ht="cropstart",rt="dblclick",st=H?"pointerdown":N?"touchstart":"mousedown",ct=H?"pointermove":N?"touchmove":"mousemove",dt=H?"pointerup pointercancel":N?"touchend touchcancel":"mouseup",lt="ready",pt="resize",mt="wheel",ut="zoom",gt="image/jpeg",ft=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,vt=/^data:image\/jpeg;base64,/,wt=/^img|canvas$/i,bt={viewMode:0,dragMode:tt,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},xt=Number.isNaN||W.isNaN,yt=function(t){return 0<t&&t<1/0},Mt=Object.prototype.hasOwnProperty,Ct=Array.prototype.slice,Dt=Object.assign||function(t){for(var i=arguments.length,e=new Array(1<i?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];return o(t)&&0<e.length&&e.forEach(function(i){o(i)&&Object.keys(i).forEach(function(e){t[e]=i[e]})}),t},Bt=/\.\d*(?:0|9){12}\d*$/,kt=/^width|height|left|top|marginLeft|marginTop$/,Tt=/([a-z\d])([A-Z])/g,Et=/\s\s*/,Wt=function(){var t=!1;if(E){var i=!1,e=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});W.addEventListener("test",e,a),W.removeEventListener("test",e,a)}return t}(),Nt=W.location,Ht=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i,Lt=String.fromCharCode,Ot=/^data:.*,/,zt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,a=this.cropper;p(a,Z),m(t,Z);var n={width:Math.max(e.offsetWidth,Number(i.minContainerWidth)||200),height:Math.max(e.offsetHeight,Number(i.minContainerHeight)||100)};l(a,{width:(this.containerData=n).width,height:n.height}),p(t,Z),m(a,Z)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,a=Math.abs(i.rotate)%180==90,n=a?i.naturalHeight:i.naturalWidth,o=a?i.naturalWidth:i.naturalHeight,h=n/o,r=t.width,s=t.height;t.height*h>t.width?3===e?r=t.height*h:s=t.width/h:3===e?s=t.width/h:r=t.height*h;var c={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:r,height:s};c.left=(t.width-r)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImageData=Dt({},i),this.initialCanvasData=Dt({},c)},limitCanvas:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=e.viewMode,r=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(e.minCanvasWidth)||0,d=Number(e.minCanvasHeight)||0;1<h?(c=Math.max(c,a.width),d=Math.max(d,a.height),3===h&&(c<d*r?c=d*r:d=c/r)):0<h&&(c?c=Math.max(c,s?o.width:0):d?d=Math.max(d,s?o.height:0):s&&((c=o.width)<(d=o.height)*r?c=d*r:d=c/r));var l=k({aspectRatio:r,width:c,height:d});c=l.width,d=l.height,n.minWidth=c,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(i)if((s?0:1)<h){var p=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===h&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,i){var e=this.canvasData,a=this.imageData;if(i){var n=function(t){var i=t.width,e=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:e,height:i};var n=a%90*Math.PI/180,o=Math.sin(n),h=Math.cos(n),r=i*h+e*o,s=i*o+e*h;return 90<a?{width:s,height:r}:{width:r,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,h=n.height,r=e.width*(o/e.naturalWidth),s=e.height*(h/e.naturalHeight);e.left-=(r-e.width)/2,e.top-=(s-e.height)/2,e.width=r,e.height=s,e.aspectRatio=o/h,e.naturalWidth=o,e.naturalHeight=h,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,l(this.canvas,Dt({width:e.width,height:e.height},D({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,a=e.naturalWidth*(i.width/i.naturalWidth),n=e.naturalHeight*(i.height/i.naturalHeight);Dt(e,{width:a,height:n,left:(i.width-a)/2,top:(i.height-n)/2}),l(this.image,Dt({width:e.width,height:e.height},D(Dt({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:i.width,height:i.height};e&&(i.height*e>i.width?n.height=n.width/e:n.width=n.height*e),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=i.left+(i.width-n.width)/2,n.top=i.top+(i.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=Dt({},n)},limitCropBox:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=this.limited,r=e.aspectRatio;if(t){var s=Number(e.minCropBoxWidth)||0,c=Number(e.minCropBoxHeight)||0,d=h?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,l=h?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),r&&(s&&c?s<c*r?c=s/r:s=c*r:s?c=s/r:c&&(s=c*r),d<l*r?l=d/r:d=l*r),o.minWidth=Math.min(s,d),o.minHeight=Math.min(c,l),o.maxWidth=d,o.maxHeight=l}i&&(o.maxTop=h?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,a.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&v(this.face,J,e.width>=i.width&&e.height>=i.height?Y:O),l(this.cropBox,Dt({width:e.width,height:e.height},D({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),x(this.element,at,this.getData())}},Yt={initPreview:function(){var t=this.crossOrigin,i=this.options.preview,e=t?this.crossOriginUrl:this.url,a=document.createElement("img");if(t&&(a.crossOrigin=t),a.src=e,this.viewBox.appendChild(a),this.viewBoxImage=a,i){var n=i;"string"==typeof i?n=this.element.ownerDocument.querySelectorAll(i):i.querySelector&&(n=[i]),c(this.previews=n,function(i){var a=document.createElement("img");v(i,_,{width:i.offsetWidth,height:i.offsetHeight,html:i.innerHTML}),t&&(a.crossOrigin=t),a.src=e,a.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',i.innerHTML="",i.appendChild(a)})}},resetPreview:function(){c(this.previews,function(t){var i=f(t,_);l(t,{width:i.width,height:i.height}),t.innerHTML=i.html,function(i,e){if(o(i[e]))try{delete i[e]}catch(t){i[e]=void 0}else if(i.dataset)try{delete i.dataset[e]}catch(t){i.dataset[e]=void 0}else i.removeAttribute("data-".concat(g(e)))}(t,_)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,a=e.width,n=e.height,o=t.width,h=t.height,r=e.left-i.left-t.left,s=e.top-i.top-t.top;this.cropped&&!this.disabled&&(l(this.viewBoxImage,Dt({width:o,height:h},D(Dt({translateX:-r,translateY:-s},t)))),c(this.previews,function(i){var e=f(i,_),c=e.width,d=e.height,p=c,m=d,u=1;a&&(m=n*(u=c/a)),n&&d<m&&(p=a*(u=d/n),m=d),l(i,{width:p,height:m}),l(i.getElementsByTagName("img")[0],Dt({width:o*u,height:h*u},D(Dt({translateX:-r*u,translateY:-s*u},t))))}))}},Xt={bind:function(){var t=this.element,i=this.options,e=this.cropper;r(i.cropstart)&&b(t,ht,i.cropstart),r(i.cropmove)&&b(t,ot,i.cropmove),r(i.cropend)&&b(t,nt,i.cropend),r(i.crop)&&b(t,at,i.crop),r(i.zoom)&&b(t,ut,i.zoom),b(e,st,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&b(e,mt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&b(e,rt,this.onDblclick=this.dblclick.bind(this)),b(t.ownerDocument,ct,this.onCropMove=this.cropMove.bind(this)),b(t.ownerDocument,dt,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&b(window,pt,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;r(i.cropstart)&&w(t,ht,i.cropstart),r(i.cropmove)&&w(t,ot,i.cropmove),r(i.cropend)&&w(t,nt,i.cropend),r(i.crop)&&w(t,at,i.crop),r(i.zoom)&&w(t,ut,i.zoom),w(e,st,this.onCropStart),i.zoomable&&i.zoomOnWheel&&w(e,mt,this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&w(e,rt,this.onDblclick),w(t.ownerDocument,ct,this.onCropMove),w(t.ownerDocument,dt,this.onCropEnd),i.responsive&&w(window,pt,this.onResize)}},Rt={resize:function(){var t=this.options,i=this.container,e=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||e.width<=a||e.height<=n)){var o,h,r=i.offsetWidth/e.width;1===r&&i.offsetHeight===e.height||(t.restore&&(o=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(c(o,function(t,i){o[i]=t*r})),this.setCropBoxData(c(h,function(t,i){h[i]=t*r}))))}},dblclick:function(){var t,i;this.disabled||this.options.dragMode===et||this.setDragMode((t=this.dragBox,i=$,(t.classList?t.classList.contains(i):-1<t.className.indexOf(i))?it:tt))},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||a(i)&&1!==i||a(e)&&0!==e||t.ctrlKey)){var n,o=this.options,h=this.pointers;t.changedTouches?c(t.changedTouches,function(t){h[t.identifier]=B(t)}):h[t.pointerId||0]=B(t),n=1<Object.keys(h).length&&o.zoomable&&o.zoomOnTouch?X:f(t.target,J),ft.test(n)&&!1!==x(this.element,ht,{originalEvent:t,action:n})&&(t.preventDefault(),this.action=n,this.cropping=!1,n===z&&(this.cropping=!0,p(this.dragBox,V)))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers;t.preventDefault(),!1!==x(this.element,ot,{originalEvent:t,action:i})&&(t.changedTouches?c(t.changedTouches,function(t){Dt(e[t.identifier]||{},B(t,!0))}):Dt(e[t.pointerId||0]||{},B(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?c(t.changedTouches,function(t){delete e[t.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,u(this.dragBox,V,this.cropped&&this.options.modal)),x(this.element,nt,{originalEvent:t,action:i}))}}},At={change:function(t){var i,e=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,h=this.pointers,r=this.action,s=e.aspectRatio,d=o.left,l=o.top,p=o.width,u=o.height,g=d+p,f=l+u,v=0,w=0,b=n.width,x=n.height,M=!0;!s&&t.shiftKey&&(s=p&&u?p/u:1),this.limited&&(v=o.minLeft,w=o.minTop,b=v+Math.min(n.width,a.width,a.left+a.width),x=w+Math.min(n.height,a.height,a.top+a.height));var C,D,B,k=h[Object.keys(h)[0]],T={x:k.endX-k.startX,y:k.endY-k.startY},E=function(t){switch(t){case R:g+T.x>b&&(T.x=b-g);break;case A:d+T.x<v&&(T.x=v-d);break;case I:l+T.y<w&&(T.y=w-l);break;case S:f+T.y>x&&(T.y=x-f)}};switch(r){case O:d+=T.x,l+=T.y;break;case R:if(0<=T.x&&(b<=g||s&&(l<=w||x<=f))){M=!1;break}E(R),(p+=T.x)<0&&(r=A,d-=p=-p),s&&(u=p/s,l+=(o.height-u)/2);break;case I:if(T.y<=0&&(l<=w||s&&(d<=v||b<=g))){M=!1;break}E(I),u-=T.y,l+=T.y,u<0&&(r=S,l-=u=-u),s&&(p=u*s,d+=(o.width-p)/2);break;case A:if(T.x<=0&&(d<=v||s&&(l<=w||x<=f))){M=!1;break}E(A),p-=T.x,d+=T.x,p<0&&(r=R,d-=p=-p),s&&(u=p/s,l+=(o.height-u)/2);break;case S:if(0<=T.y&&(x<=f||s&&(d<=v||b<=g))){M=!1;break}E(S),(u+=T.y)<0&&(r=I,l-=u=-u),s&&(p=u*s,d+=(o.width-p)/2);break;case j:if(s){if(T.y<=0&&(l<=w||b<=g)){M=!1;break}E(I),u-=T.y,l+=T.y,p=u*s}else E(I),E(R),0<=T.x?g<b?p+=T.x:T.y<=0&&l<=w&&(M=!1):p+=T.x,T.y<=0?w<l&&(u-=T.y,l+=T.y):(u-=T.y,l+=T.y);p<0&&u<0?(r=P,l-=u=-u,d-=p=-p):p<0?(r=U,d-=p=-p):u<0&&(r=q,l-=u=-u);break;case U:if(s){if(T.y<=0&&(l<=w||d<=v)){M=!1;break}E(I),u-=T.y,l+=T.y,p=u*s,d+=o.width-p}else E(I),E(A),T.x<=0?v<d?(p-=T.x,d+=T.x):T.y<=0&&l<=w&&(M=!1):(p-=T.x,d+=T.x),T.y<=0?w<l&&(u-=T.y,l+=T.y):(u-=T.y,l+=T.y);p<0&&u<0?(r=q,l-=u=-u,d-=p=-p):p<0?(r=j,d-=p=-p):u<0&&(r=P,l-=u=-u);break;case P:if(s){if(T.x<=0&&(d<=v||x<=f)){M=!1;break}E(A),p-=T.x,d+=T.x,u=p/s}else E(S),E(A),T.x<=0?v<d?(p-=T.x,d+=T.x):0<=T.y&&x<=f&&(M=!1):(p-=T.x,d+=T.x),0<=T.y?f<x&&(u+=T.y):u+=T.y;p<0&&u<0?(r=j,l-=u=-u,d-=p=-p):p<0?(r=q,d-=p=-p):u<0&&(r=U,l-=u=-u);break;case q:if(s){if(0<=T.x&&(b<=g||x<=f)){M=!1;break}E(R),u=(p+=T.x)/s}else E(S),E(R),0<=T.x?g<b?p+=T.x:0<=T.y&&x<=f&&(M=!1):p+=T.x,0<=T.y?f<x&&(u+=T.y):u+=T.y;p<0&&u<0?(r=U,l-=u=-u,d-=p=-p):p<0?(r=P,d-=p=-p):u<0&&(r=j,l-=u=-u);break;case Y:this.move(T.x,T.y),M=!1;break;case X:this.zoom((D=Dt({},C=h),B=[],c(C,function(t,i){delete D[i],c(D,function(i){var e=Math.abs(t.startX-i.startX),a=Math.abs(t.startY-i.startY),n=Math.abs(t.endX-i.endX),o=Math.abs(t.endY-i.endY),h=Math.sqrt(e*e+a*a),r=(Math.sqrt(n*n+o*o)-h)/h;B.push(r)})}),B.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),B[0]),t),M=!1;break;case z:if(!T.x||!T.y){M=!1;break}i=y(this.cropper),d=k.startX-i.left,l=k.startY-i.top,p=o.minWidth,u=o.minHeight,0<T.x?r=0<T.y?q:j:T.x<0&&(d-=p,r=0<T.y?P:U),T.y<0&&(l-=u),this.cropped||(m(this.cropBox,Z),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}M&&(o.width=p,o.height=u,o.left=d,o.top=l,this.action=r,this.renderCropBox()),c(h,function(t){t.startX=t.endX,t.startY=t.endY})}},St={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&p(this.dragBox,V),m(this.cropBox,Z),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=Dt({},this.initialImageData),this.canvasData=Dt({},this.initialCanvasData),this.cropBoxData=Dt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(Dt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),m(this.dragBox,V),p(this.cropBox,Z)),this},replace:function(t){var i=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,c(this.previews,function(i){i.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,m(this.cropper,Q)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,p(this.cropper,Q)),this},destroy:function(){var t=this.element;return t[L]&&(t[L]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,a=e.left,o=e.top;return this.moveTo(n(t)?t:a+Number(t),n(i)?i:o+Number(i))},moveTo:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(a(t)&&(e.left=t,n=!0),a(i)&&(e.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var n,o,r,s=this.options,d=this.canvasData,l=d.width,p=d.height,m=d.naturalWidth,u=d.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&s.zoomable){var g=m*t,f=u*t;if(!1===x(this.element,ut,{ratio:t,oldRatio:l/m,originalEvent:e}))return this;if(e){var v=this.pointers,w=y(this.cropper),b=v&&Object.keys(v).length?(r=o=n=0,c(v,function(t){var i=t.startX,e=t.startY;n+=i,o+=e,r+=1}),{pageX:n/=r,pageY:o/=r}):{pageX:e.pageX,pageY:e.pageY};d.left-=(g-l)*((b.pageX-w.left-d.left)/l),d.top-=(f-p)*((b.pageY-w.top-d.top)/p)}else h(i)&&a(i.x)&&a(i.y)?(d.left-=(g-l)*((i.x-d.left)/l),d.top-=(f-p)*((i.y-d.top)/p)):(d.left-=(g-l)/2,d.top-=(f-p)/2);d.width=g,d.height=f,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return a(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,a(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(a(i)?i:1,t)},scale:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(a(t)&&(e.scaleX=t,n=!0),a(i)&&(e.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t,i=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){t={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var h=a.width/a.naturalWidth;if(c(t,function(i,e){t[e]=i/h}),i){var r=Math.round(t.y+t.height),s=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=s-t.x,t.height=r-t.y}}else t={x:0,y:0,width:0,height:0};return e.rotatable&&(t.rotate=a.rotate||0),e.scalable&&(t.scaleX=a.scaleX||1,t.scaleY=a.scaleY||1),t},setData:function(t){var i=this.options,e=this.imageData,n=this.canvasData,o={};if(this.ready&&!this.disabled&&h(t)){var r=!1;i.rotatable&&a(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,r=!0),i.scalable&&(a(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,r=!0),a(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,r=!0)),r&&this.renderCanvas(!0,!0);var s=e.width/e.naturalWidth;a(t.x)&&(o.left=t.x*s+n.left),a(t.y)&&(o.top=t.y*s+n.top),a(t.width)&&(o.width=t.width*s),a(t.height)&&(o.height=t.height*s),this.setCropBoxData(o)}return this},getContainerData:function(){return this.ready?Dt({},this.containerData):{}},getImageData:function(){return this.sized?Dt({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&c(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&h(t)&&(a(t.left)&&(i.left=t.left),a(t.top)&&(i.top=t.top),a(t.width)?(i.width=t.width,i.height=t.width/e):a(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,i=this.cropBoxData;return this.ready&&this.cropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var i,e,n=this.cropBoxData,o=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&h(t)&&(a(t.left)&&(n.left=t.left),a(t.top)&&(n.top=t.top),a(t.width)&&t.width!==n.width&&(i=!0,n.width=t.width),a(t.height)&&t.height!==n.height&&(e=!0,n.height=t.height),o&&(i?n.height=n.width/o:e&&(n.width=n.height*o)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i,a,n,o,h,r,s,c,l,p,m,u,g,f,v,w,b,x,y,M,C,D,B,T,E,W,N,H,L,O,z,Y,X,R,A,S,I,j,U,q,P,$=this.canvasData,Q=(i=this.image,n=$,o=t,h=(a=this.imageData).aspectRatio,r=a.naturalWidth,s=a.naturalHeight,l=void 0===(c=a.rotate)?0:c,m=void 0===(p=a.scaleX)?1:p,g=void 0===(u=a.scaleY)?1:u,f=n.aspectRatio,v=n.naturalWidth,w=n.naturalHeight,x=void 0===(b=o.fillColor)?"transparent":b,M=void 0===(y=o.imageSmoothingEnabled)||y,D=void 0===(C=o.imageSmoothingQuality)?"low":C,T=void 0===(B=o.maxWidth)?1/0:B,W=void 0===(E=o.maxHeight)?1/0:E,H=void 0===(N=o.minWidth)?0:N,O=void 0===(L=o.minHeight)?0:L,Y=(z=document.createElement("canvas")).getContext("2d"),X=k({aspectRatio:f,width:T,height:W}),R=k({aspectRatio:f,width:H,height:O},"cover"),A=Math.min(X.width,Math.max(R.width,v)),S=Math.min(X.height,Math.max(R.height,w)),I=k({aspectRatio:h,width:T,height:W}),j=k({aspectRatio:h,width:H,height:O},"cover"),P=[-(U=Math.min(I.width,Math.max(j.width,r)))/2,-(q=Math.min(I.height,Math.max(j.height,s)))/2,U,q],z.width=d(A),z.height=d(S),Y.fillStyle=x,Y.fillRect(0,0,A,S),Y.save(),Y.translate(A/2,S/2),Y.rotate(l*Math.PI/180),Y.scale(m,g),Y.imageSmoothingEnabled=M,Y.imageSmoothingQuality=D,Y.drawImage.apply(Y,[i].concat(e(P.map(function(t){return Math.floor(d(t))})))),Y.restore(),z);if(!this.cropped)return Q;var Z=this.getData(),K=Z.x,G=Z.y,V=Z.width,F=Z.height,J=Q.width/Math.floor($.naturalWidth);1!==J&&(K*=J,G*=J,V*=J,F*=J);var _=V/F,tt=k({aspectRatio:_,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),it=k({aspectRatio:_,width:t.minWidth||0,height:t.minHeight||0},"cover"),et=k({aspectRatio:_,width:t.width||(1!==J?Q.width:V),height:t.height||(1!==J?Q.height:F)}),at=et.width,nt=et.height;at=Math.min(tt.width,Math.max(it.width,at)),nt=Math.min(tt.height,Math.max(it.height,nt));var ot=document.createElement("canvas"),ht=ot.getContext("2d");ot.width=d(at),ot.height=d(nt),ht.fillStyle=t.fillColor||"transparent",ht.fillRect(0,0,at,nt);var rt=t.imageSmoothingEnabled,st=void 0===rt||rt,ct=t.imageSmoothingQuality;ht.imageSmoothingEnabled=st,ct&&(ht.imageSmoothingQuality=ct);var dt,lt,pt,mt,ut,gt,ft=Q.width,vt=Q.height,wt=K,bt=G;wt<=-V||ft<wt?ut=pt=dt=wt=0:wt<=0?(pt=-wt,wt=0,ut=dt=Math.min(ft,V+wt)):wt<=ft&&(pt=0,ut=dt=Math.min(V,ft-wt)),dt<=0||bt<=-F||vt<bt?gt=mt=lt=bt=0:bt<=0?(mt=-bt,bt=0,gt=lt=Math.min(vt,F+bt)):bt<=vt&&(mt=0,gt=lt=Math.min(F,vt-bt));var xt=[wt,bt,dt,lt];if(0<ut&&0<gt){var yt=at/V;xt.push(pt*yt,mt*yt,ut*yt,gt*yt)}return ht.drawImage.apply(ht,[Q].concat(e(xt.map(function(t){return Math.floor(d(t))})))),ot},setAspectRatio:function(t){var i=this.options;return this.disabled||n(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===tt,o=i.movable&&t===it;t=n||o?t:et,i.dragMode=t,v(e,J,t),u(e,$,n),u(e,F,o),i.cropBoxMovable||(v(a,J,t),u(a,$,n),u(a,F,o))}return this}},It=W.Cropper,jt=function(){function t(i){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(i){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this),!i||!wt.test(i.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=i,this.options=Dt({},bt,h(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var e,a,n;return e=t,n=[{key:"noConflict",value:function(){return window.Cropper=It,t}},{key:"setDefaults",value:function(t){Dt(bt,h(t)&&t)}}],(a=[{key:"init",value:function(){var t,i=this.element,e=i.tagName.toLowerCase();if(!i[L]){if(i[L]=this,"img"===e){if(this.isImg=!0,t=i.getAttribute("src")||"",!(this.originalUrl=t))return;t=i.src}else"canvas"===e&&window.HTMLCanvasElement&&(t=i.toDataURL());this.load(t)}}},{key:"load",value:function(t){var i=this;if(t){this.url=t,this.imageData={};var e=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(vt.test(t))this.read((n=t.replace(Ot,""),o=atob(n),h=new ArrayBuffer(o.length),c(r=new Uint8Array(h),function(t,i){r[i]=o.charCodeAt(i)}),h));else{var n,o,h,r,s=new XMLHttpRequest,d=this.clone.bind(this);this.reloading=!0,(this.xhr=s).onabort=d,s.onerror=d,s.ontimeout=d,s.onprogress=function(){s.getResponseHeader("content-type")!==gt&&s.abort()},s.onload=function(){i.read(s.response)},s.onloadend=function(){i.reloading=!1,i.xhr=null},a.checkCrossOrigin&&M(t)&&e.crossOrigin&&(t=C(t)),s.open("GET",t),s.responseType="arraybuffer",s.withCredentials="use-credentials"===e.crossOrigin,s.send()}else this.clone()}}},{key:"read",value:function(t){var i=this.options,e=this.imageData,a=T(t),n=0,o=1,h=1;if(1<a){this.url=function(t,i){for(var e=[],a=new Uint8Array(t);0<a.length;)e.push(Lt.apply(null,s(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(i,";base64,").concat(btoa(e.join("")))}(t,gt);var r=function(t){var i=0,e=1,a=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:a=-1;break;case 5:i=90,a=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90}return{rotate:i,scaleX:e,scaleY:a}}(a);n=r.rotate,o=r.scaleX,h=r.scaleY}i.rotatable&&(e.rotate=n),i.scalable&&(e.scaleX=o,e.scaleY=h),this.clone()}},{key:"clone",value:function(){var t,i,e=this.element,a=this.url;this.options.checkCrossOrigin&&M(a)&&(i=(t=e.crossOrigin)?a:(t="anonymous",C(a))),this.crossOrigin=t,this.crossOriginUrl=i;var n=document.createElement("img");t&&(n.crossOrigin=t),n.src=i||a,(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),p(n,K),e.parentNode.insertBefore(n,e.nextSibling)}},{key:"start",value:function(){var t=this,i=this.isImg?this.element:this.image;i.onload=null,i.onerror=null,this.sizing=!0;var e=W.navigator&&/^(?:.(?!chrome|android))*safari/i.test(W.navigator.userAgent),a=function(i,e){Dt(t.imageData,{naturalWidth:i,naturalHeight:e,aspectRatio:i/e}),t.sizing=!1,t.sized=!0,t.build()};if(!i.naturalWidth||e){var n=document.createElement("img"),o=document.body||document.documentElement;(this.sizingImage=n).onload=function(){a(n.width,n.height),e||o.removeChild(n)},n.src=i.src,
e||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(i.naturalWidth,i.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,i=this.options,e=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat(L,"-container")),h=o.querySelector(".".concat(L,"-canvas")),s=o.querySelector(".".concat(L,"-drag-box")),c=o.querySelector(".".concat(L,"-crop-box")),d=c.querySelector(".".concat(L,"-face"));this.container=a,this.cropper=o,this.canvas=h,this.dragBox=s,this.cropBox=c,this.viewBox=o.querySelector(".".concat(L,"-view-box")),this.face=d,h.appendChild(e),p(t,Z),a.insertBefore(o,t.nextSibling),this.isImg||m(e,K),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,p(c,Z),i.guides||p(c.getElementsByClassName("".concat(L,"-dashed")),Z),i.center||p(c.getElementsByClassName("".concat(L,"-center")),Z),i.background&&p(o,"".concat(L,"-bg")),i.highlight||p(d,G),i.cropBoxMovable&&(p(d,F),v(d,J,O)),i.cropBoxResizable||(p(c.getElementsByClassName("".concat(L,"-line")),Z),p(c.getElementsByClassName("".concat(L,"-point")),Z)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),r(i.ready)&&b(t,lt,i.ready,{once:!0}),x(t,lt)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),m(this.element,Z))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&i(e.prototype,a),n&&i(e,n),t}();return Dt(jt.prototype,zt,Yt,Xt,Rt,At,St),jt});