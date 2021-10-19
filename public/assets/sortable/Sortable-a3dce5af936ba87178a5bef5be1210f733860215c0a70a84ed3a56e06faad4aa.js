!function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=t():window.Sortable=t()}(function(){"use strict";function t(e,n){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, not "+{}.toString.call(e);this.el=e,this.options=n=T({},n),e[ft]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0,draggable:/[uo]l/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return It(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,touchStartThreshold:vt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==t.supportPointer&&("PointerEvent"in window||window.navigator&&"msPointerEnabled"in window.navigator),emptyInsertThreshold:5};for(var r in o)!(r in n)&&(n[r]=o[r]);for(var a in jt(n),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!n.forceFallback&&xt,this.nativeDraggable&&(this.options.touchStartThreshold=1),n.supportPointer?i(e,"pointerdown",this._onTapStart):(i(e,"mousedown",this._onTapStart),i(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(i(e,"dragover",this),i(e,"dragenter",this)),st.push(this.el),n.store&&n.store.get&&this.sort(n.store.get(this)||[])}function e(t,e,o,i){if(t){o=o||gt;do{if(null!=e&&(">"===e[0]&&t.parentNode===o&&y(t,e.substring(1))||y(t,e))||i&&t===o)return t;if(t===o)break}while(t=n(t))}return null}function n(t){return t.host&&t!==gt&&t.host.nodeType?t.host:t.parentNode}function o(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function i(t,e,n){t.addEventListener(e,n,_t)}function r(t,e,n){t.removeEventListener(e,n,_t)}function a(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(ut," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(ut," ")}}function l(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return gt.defaultView&&gt.defaultView.getComputedStyle?n=gt.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function s(t){var e="";do{var n=l(t,"transform");n&&"none"!==n&&(e=n+" "+e)}while(t=t.parentNode);return window.DOMMatrix?new DOMMatrix(e):window.WebKitCSSMatrix?new WebKitCSSMatrix(e):window.CSSMatrix?new CSSMatrix(e):void 0}function c(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function d(t,e,n,o,i,r,a,l,s){var c,d=(t=t||e[ft]).options,h="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||yt||Dt?(c=gt.createEvent("Event")).initEvent(n,!0,!0):c=new CustomEvent(n,{bubbles:!0,cancelable:!0}),c.to=i||e,c.from=r||e,c.item=o||e,c.clone=I,c.oldIndex=a,c.newIndex=l,c.originalEvent=s,c.pullMode=U?U.lastPutMode:undefined,e&&e.dispatchEvent(c),d[h]&&d[h].call(t,c)}function h(t,e,n,o,i,r,a,l){var s,c,d=t[ft],h=d.options.onMove;return!window.CustomEvent||yt||Dt?(s=gt.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||M(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),h&&(c=h.call(d,s,a)),c}function u(t){t.draggable=!1}function f(){Mt=!1}function p(t,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==k&&a[r]!==Y&&e(a[r],o.draggable,t,!1)){if(i===n)return a[r];i++}r++}return null}function g(t){for(var e=t.lastElementChild;e&&(e===k||"none"===e.style.display);)e=e.previousElementSibling;return e||null}function v(t,e,n){var o=M(g(n)),i="vertical"===e?t.clientY:t.clientX,r="vertical"===e?t.clientX:t.clientY,a="vertical"===e?o.bottom:o.right,l="vertical"===e?o.left:o.top,s="vertical"===e?o.right:o.bottom,c=10;return"vertical"===e?r>s+c||r<=s&&i>a&&r>=l:i>a&&r>l||i<=a&&r>s+c}function m(t,e,n,o,i,r,a){var l=M(e),s="vertical"===n?t.clientY:t.clientX,c="vertical"===n?l.height:l.width,d="vertical"===n?l.top:l.left,h="vertical"===n?l.bottom:l.right,u=M(Y),f=!1;if(!r)if(a&&et<c*o)if(!ct&&(1===$?s>d+c*i/2:s<h-c*i/2)&&(ct=!0),ct)f=!0;else{"vertical"===n?u.top:u.left,"vertical"===n?u.bottom:u.right;if(1===$?s<d+et:s>h-et)return-1*$}else if(s>d+c*(1-o)/2&&s<h-c*(1-o)/2)return b(e);return(f=f||r)&&(s<d+c*i/2||s>h-c*i/2)?s>d+c/2?1:-1:0}function b(t){return _(Y)<_(t)?1:-1}function w(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function _(t){var e=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&t!==I&&e++;return e}function y(t,e){if(t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return!1}return!1}function D(t,e){return function(){if(!Zt){var n=arguments,o=this;Zt=mt(function(){1===n.length?t.call(o,n[0]):t.apply(o,n),Zt=void 0},e)}}}function S(){clearTimeout(Zt),Zt=void 0}function T(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function C(t){return wt&&wt.dom?wt.dom(t).cloneNode(!0):bt?bt(t).clone(!0)[0]:t.cloneNode(!0)}function E(t){kt.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n];o.checked&&kt.push(o)}}function x(t){return mt(t,0)}function N(t){return clearTimeout(t)}function M(t,e,n,o){if(t.getBoundingClientRect||t===pt){var i,r,a,c,d,h,u;if(t!==pt&&t!==Lt()?(r=(i=t.getBoundingClientRect()).top,a=i.left,c=i.bottom,d=i.right,h=i.height,u=i.width):(r=0,a=0,c=window.innerHeight,d=window.innerWidth,h=window.innerHeight,u=window.innerWidth),o&&t!==pt&&(n=n||t.parentNode,!yt))do{if(n&&n.getBoundingClientRect&&"none"!==l(n,"transform")){var f=n.getBoundingClientRect();r-=f.top+vt(l(n,"border-top-width")),a-=f.left+vt(l(n,"border-left-width")),c=r+i.height,d=a+i.width;break}}while(n=n.parentNode);if(e&&t!==pt){var p=s(n||t),g=p&&p.a,v=p&&p.d;p&&(c=(r/=v)+(h/=v),d=(a/=g)+(u/=g))}return{top:r,left:a,bottom:c,right:d,width:u,height:h}}}function P(t,e){for(var n=Rt(t,!0),o=M(t)[e];n;){var i=M(n)[e];if(!("top"===e||"left"===e?o>=i:o<=i))return n;if(n===Lt())break;n=Rt(n,!1)}return!1}function X(t){var e=0,n=0,o=Lt();if(t)do{var i=s(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var Y,A,k,I,B,O,H,R,L,W,F,z,j,U,V,q,G,K,Z,Q,J,$,tt,et,nt,ot,it=[],rt=!1,at=!1,lt=!1,st=[],ct=!1,dt=!1,ht=[],ut=/\s+/g,ft="Sortable"+(new Date).getTime(),pt=window,gt=pt.document,vt=pt.parseInt,mt=pt.setTimeout,bt=pt.jQuery||pt.Zepto,wt=pt.Polymer,_t={capture:!1,passive:!1},yt=!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),Dt=!!navigator.userAgent.match(/Edge/i),St=!!navigator.userAgent.match(/firefox/i),Tt=!(!navigator.userAgent.match(/safari/i)||navigator.userAgent.match(/chrome/i)||navigator.userAgent.match(/android/i)),Ct=!!navigator.userAgent.match(/iP(ad|od|hone)/i),Et=Dt||yt?"cssFloat":"float",xt="draggable"in gt.createElement("div"),Nt=function(){if(yt)return!1;var t=gt.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),Mt=!1,Pt=!1,Xt=Math.abs,Yt=Math.min,At=Math.max,kt=[],It=function(t,e){var n=l(t),o=vt(n.width)-vt(n.paddingLeft)-vt(n.paddingRight)-vt(n.borderLeftWidth)-vt(n.borderRightWidth),i=p(t,0,e),r=p(t,1,e),a=i&&l(i),s=r&&l(r),c=a&&vt(a.marginLeft)+vt(a.marginRight)+M(i).width,d=s&&vt(s.marginLeft)+vt(s.marginRight)+M(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&"none"!==a.float){var h="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==h?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||c>=o&&"none"===n[Et]||r&&"none"===n[Et]&&c+d>o)?"vertical":"horizontal"},Bt=function(t,e){for(var n=0;n<st.length;n++)if(!g(st[n])){var o=M(st[n]),i=st[n][ft].options.emptyInsertThreshold,r=t>=o.left-i&&t<=o.right+i,a=e>=o.top-i&&e<=o.bottom+i;if(r&&a)return st[n]}},Ot=function(t,e,n,o){var i=M(n),r="vertical"===o?i.left:i.top,a="vertical"===o?i.right:i.bottom,l="vertical"===o?t:e;return r<l&&l<a},Ht=function(t,e,n){var o=t===Y&&ot||M(t),i=e===Y&&ot||M(e),r="vertical"===n?o.left:o.top,a="vertical"===n?o.right:o.bottom,l="vertical"===n?o.width:o.height,s="vertical"===n?i.left:i.top,c="vertical"===n?i.right:i.bottom,d="vertical"===n?i.width:i.height;return r===s||a===c||r+l/2===s+d/2},Rt=function(t,e){if(!t||!t.getBoundingClientRect)return Lt();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=l(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n||!n.getBoundingClientRect||n===gt.body)return Lt();if(o||e)return n;o=!0}}}while(n=n.parentNode);return Lt()},Lt=function(){return yt?gt.documentElement:gt.scrollingElement},Wt=function(t,e,n){t.scrollLeft+=e,t.scrollTop+=n},Ft=D(function(e,n,o,i){if(n.scroll){var r=o?o[ft]:window,a=n.scrollSensitivity,s=n.scrollSpeed,c=e.clientX,d=e.clientY,h=Lt(),u=!1;L!==o&&(zt(),R=n.scroll,W=n.scrollFn,!0===R&&(R=Rt(o,!0),L=R));var f=0,p=R;do{var g,v,m,b,w,_,y,D,S,T=p,C=M(T),E=C.top,x=C.bottom,N=C.left,P=C.right,X=C.width,Y=C.height;if(g=T.scrollWidth,v=T.scrollHeight,m=l(T),D=T.scrollLeft,S=T.scrollTop,T===h?(_=X<g&&("auto"===m.overflowX||"scroll"===m.overflowX||"visible"===m.overflowX),y=Y<v&&("auto"===m.overflowY||"scroll"===m.overflowY||"visible"===m.overflowY)):(_=X<g&&("auto"===m.overflowX||"scroll"===m.overflowX),y=Y<v&&("auto"===m.overflowY||"scroll"===m.overflowY)),b=_&&(Xt(P-c)<=a&&D+X<g)-(Xt(N-c)<=a&&!!D),w=y&&(Xt(x-d)<=a&&S+Y<v)-(Xt(E-d)<=a&&!!S),!it[f])for(var A=0;A<=f;A++)it[A]||(it[A]={});it[f].vx==b&&it[f].vy==w&&it[f].el===T||(it[f].el=T,it[f].vx=b,it[f].vy=w,clearInterval(it[f].pid),!T||0==b&&0==w||(u=!0,it[f].pid=setInterval(function(){i&&0===this.layer&&(t.active._emulateDragOver(!0),t.active._onTouchMove(Z,!0));var n=it[this.layer].vy?it[this.layer].vy*s:0,o=it[this.layer].vx?it[this.layer].vx*s:0;"function"==typeof W&&"continue"!==W.call(r,o,n,e,Z,it[this.layer].el)||Wt(it[this.layer].el,o,n)}.bind({layer:f}),24))),f++}while(n.bubbleScroll&&p!==h&&(p=Rt(p,!1)));rt=u}},30),zt=function(){it.forEach(function(t){clearInterval(t.pid)}),it=[]},jt=function(t){function e(t,n){return function(o,i,r,a){var l=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name;if(null==t&&(n||l))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a);var s=(n?o:i).options.group.name;return!0===t||"string"==typeof t&&t===s||t.join&&t.indexOf(s)>-1}}var n={},o=t.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},Ut=function(t){Y&&Y.parentNode&&Y.parentNode[ft]&&Y.parentNode[ft]._computeIsAligned(t)},Vt=function(t,e){for(var n=e;!n[ft];)n=n.parentNode;return t===n},qt=function(t,e,n){for(var o=t.parentNode;o&&!o[ft];)o=o.parentNode;o&&o[ft][n](T(e,{artificialBubble:!0}))},Gt=function(){!Nt&&k&&l(k,"display","none")},Kt=function(){!Nt&&k&&l(k,"display","")};gt.addEventListener("click",function(t){if(lt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),lt=!1,!1},!0);var Zt,Qt=function(t){if(t=t.touches?t.touches[0]:t,Y){var e=Bt(t.clientX,t.clientY);e&&e[ft]._onDragOver({clientX:t.clientX,clientY:t.clientY,target:e,rootEl:e})}};return i(gt,"dragover",Qt),i(gt,"mousemove",Qt),i(gt,"touchmove",Qt),t.prototype={constructor:t,_computeIsAligned:function(t){var n;if(k&&!Nt?(Gt(),n=gt.elementFromPoint(t.clientX,t.clientY),Kt()):n=t.target,n=e(n,this.options.draggable,this.el,!1),!Pt&&Y&&Y.parentNode===this.el){for(var o=this.el.children,i=0;i<o.length;i++)e(o[i],this.options.draggable,this.el,!1)&&o[i]!==n&&(o[i].sortableMouseAligned=Ot(t.clientX,t.clientY,o[i],this._getDirection(t,null),this.options));e(n,this.options.draggable,this.el,!0)||(J=null),Pt=!0,mt(function(){Pt=!1},30)}},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Y):this.options.direction},_onTapStart:function(t){if(t.cancelable){var n,o=this,i=this.el,r=this.options,a=r.preventOnFilter,l=t.type,s=t.touches&&t.touches[0],c=(s||t).target,h=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||c,u=r.filter;if(E(i),(!yt||t.artificialBubble||Vt(i,c))&&!Y&&!(/mousedown|pointerdown/.test(l)&&0!==t.button||r.disabled||h.isContentEditable))if(c=e(c,r.draggable,i,!1)){if(H!==c){if(n=_(c,r.draggable),"function"==typeof u){if(u.call(this,t,c,this))return d(o,h,"filter",c,i,i,n),void(a&&t.cancelable&&t.preventDefault())}else if(u&&(u=u.split(",").some(function(t){if(t=e(h,t.trim(),i,!1))return d(o,t,"filter",c,i,i,n),!0})))return void(a&&t.cancelable&&t.preventDefault());r.handle&&!e(h,r.handle,i,!1)||this._prepareDragStart(t,s,c,n)}}else yt&&qt(i,t,"_onTapStart")}},_handleAutoScroll:function(t,e){if(Y&&this.options.scroll){var n=t.clientX,o=t.clientY,i=gt.elementFromPoint(n,o),r=this;if(e||Dt||yt||Tt){Ft(t,r.options,i,e);var a=Rt(i,!0);!rt||V&&n===q&&o===G||(V&&clearInterval(V),V=setInterval(function(){if(Y){var i=Rt(gt.elementFromPoint(n,o),!0);i!==a&&(a=i,zt(),Ft(t,r.options,a,e))}},10),q=n,G=o)}else{if(!r.options.bubbleScroll||Rt(i,!0)===Lt())return void zt();Ft(t,r.options,Rt(i,!1),!1)}}},_prepareDragStart:function(t,e,n,o){var r,l=this,s=l.el,h=l.options,f=s.ownerDocument;n&&!Y&&n.parentNode===s&&(B=s,A=(Y=n).parentNode,O=Y.nextSibling,H=n,j=h.group,F=o,K={target:Y,clientX:(e||t).clientX,clientY:(e||t).clientY},this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,Y.style["will-change"]="all",Y.style.transition="",Y.style.transform="",r=function(){l._disableDelayedDragEvents(),!St&&l.nativeDraggable&&(Y.draggable=!0),l._triggerDragStart(t,e),d(l,B,"choose",Y,B,B,F),a(Y,h.chosenClass,!0)},h.ignore.split(",").forEach(function(t){c(Y,t.trim(),u)}),h.supportPointer?i(f,"pointerup",l._onDrop):(i(f,"mouseup",l._onDrop),i(f,"touchend",l._onDrop),i(f,"touchcancel",l._onDrop)),St&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Y.draggable=!0),!h.delay||this.nativeDraggable&&(Dt||yt)?r():(i(f,"mouseup",l._disableDelayedDrag),i(f,"touchend",l._disableDelayedDrag),i(f,"touchcancel",l._disableDelayedDrag),i(f,"mousemove",l._delayedDragTouchMoveHandler),i(f,"touchmove",l._delayedDragTouchMoveHandler),h.supportPointer&&i(f,"pointermove",l._delayedDragTouchMoveHandler),l._dragStartTimer=mt(r,h.delay)))},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;At(Xt(e.clientX-this._lastX),Xt(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Y&&u(Y),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;r(t,"mouseup",this._disableDelayedDrag),r(t,"touchend",this._disableDelayedDrag),r(t,"touchcancel",this._disableDelayedDrag),r(t,"mousemove",this._delayedDragTouchMoveHandler),r(t,"touchmove",this._delayedDragTouchMoveHandler),r(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||("touch"==t.pointerType?t:null),!this.nativeDraggable||e?this.options.supportPointer?i(gt,"pointermove",this._onTouchMove):i(gt,e?"touchmove":"mousemove",this._onTouchMove):(i(Y,"dragend",this),i(B,"dragstart",this._onDragStart));try{gt.selection?x(function(){gt.selection.empty()}):window.getSelection().removeAllRanges()}catch(n){}},_dragStarted:function(e,n){if(at=!1,B&&Y){this.nativeDraggable&&(i(gt,"dragover",this._handleAutoScroll),i(gt,"dragover",Ut));var o=this.options;!e&&a(Y,o.dragClass,!1),a(Y,o.ghostClass,!0),l(Y,"transform",""),t.active=this,e&&this._appendGhost(),d(this,B,"start",Y,B,B,F,undefined,n)}else this._nulling()},_emulateDragOver:function(t){if(Z){if(this._lastX===Z.clientX&&this._lastY===Z.clientY&&!t)return;this._lastX=Z.clientX,this._lastY=Z.clientY,Gt();for(var e=gt.elementFromPoint(Z.clientX,Z.clientY),n=e;e&&e.shadowRoot;)n=e=e.shadowRoot.elementFromPoint(Z.clientX,Z.clientY);if(n)do{if(n[ft])if(n[ft]._onDragOver({clientX:Z.clientX,clientY:Z.clientY,target:e,rootEl:n})&&!this.options.dragoverBubble)break;e=n}while(n=n.parentNode);Y.parentNode[ft]._computeIsAligned(Z),Kt()}},_onTouchMove:function(e,n){if(K){var o=this.options,i=o.fallbackTolerance,r=o.fallbackOffset,a=e.touches?e.touches[0]:e,c=k&&s(k),d=k&&c&&c.a,h=k&&c&&c.d,u=Ct&&nt&&X(nt),f=(a.clientX-K.clientX+r.x)/(d||1)+(u?u[0]-ht[0]:0)/(d||1),p=(a.clientY-K.clientY+r.y)/(h||1)+(u?u[1]-ht[1]:0)/(h||1),g=e.touches?"translate3d("+f+"px,"+p+"px,0)":"translate("+f+"px,"+p+"px)";if(!t.active&&!at){if(i&&Yt(Xt(a.clientX-this._lastX),Xt(a.clientY-this._lastY))<i)return;this._onDragStart(e,!0)}!n&&this._handleAutoScroll(a,!0),Q=!0,Z=a,l(k,"webkitTransform",g),l(k,"mozTransform",g),l(k,"msTransform",g),l(k,"transform",g),e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!k){var t=this.options.fallbackOnBody?gt.body:B,e=M(Y,!0,t,!Ct),n=(l(Y),this.options);if(Ct){for(nt=t;"static"===l(nt,"position")&&"none"===l(nt,"transform")&&nt!==gt;)nt=nt.parentNode;if(nt!==gt){var o=M(nt,!0);e.top-=o.top,e.left-=o.left}nt!==gt.body&&nt!==gt.documentElement?(nt===gt&&(nt=Lt()),e.top+=nt.scrollTop,e.left+=nt.scrollLeft):nt=Lt(),ht=X(nt)}a(k=Y.cloneNode(!0),n.ghostClass,!1),a(k,n.fallbackClass,!0),a(k,n.dragClass,!0),l(k,"box-sizing","border-box"),l(k,"margin",0),l(k,"top",e.top),l(k,"left",e.left),l(k,"width",e.width),l(k,"height",e.height),l(k,"opacity","0.8"),l(k,"position",Ct?"absolute":"fixed"),l(k,"zIndex","100000"),l(k,"pointerEvents","none"),t.appendChild(k)}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,s=n.options;(I=C(Y)).draggable=!1,I.style["will-change"]="",this._hideClone(),a(I,n.options.chosenClass,!1),n._cloneId=x(function(){n.options.removeCloneOnHide||B.insertBefore(I,Y),d(n,B,"clone",Y)}),!e&&a(Y,s.dragClass,!0),e?(lt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(r(gt,"mouseup",n._onDrop),r(gt,"touchend",n._onDrop),r(gt,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",s.setData&&s.setData.call(n,o,Y)),i(gt,"drop",n),l(Y,"transform","translateZ(0)")),at=!0,n._dragStartId=x(n._dragStarted.bind(n,e,t)),i(gt,"selectstart",n),Tt&&l(gt.body,"user-select","none")},_onDragOver:function(n){function o(e){return e&&(D?y._hideClone():y._showClone(T),y&&(a(Y,U?U.options.ghostClass:y.options.ghostClass,!1),a(Y,p.ghostClass,!0)),U!==T&&T!==t.active?U=T:T===t.active&&(U=null),r&&T._animate(r,Y),u&&l&&T._animate(l,u)),(u===Y&&!Y.animated||u===c&&!u.animated)&&(J=null),p.dragoverBubble||n.rootEl||u===gt||(T._handleAutoScroll(n),Y.parentNode[ft]._computeIsAligned(n)),!p.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),!0}function i(){d(T,B,"change",u,c,B,F,_(Y,p.draggable),n)}var r,l,s,c=this.el,u=n.target,p=this.options,w=p.group,y=t.active,D=j===w,S=p.sort,T=this;if(!Mt&&(!yt||n.rootEl||n.artificialBubble||Vt(c,u))){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),Q=!0,u=e(u,p.draggable,c,!0),e(n.target,null,Y,!0)||u.animated)return o(!1);if(u!==Y&&(lt=!1),y&&!p.disabled&&(D?S||(s=!B.contains(Y)):U===this||(this.lastPutMode=j.checkPull(this,y,Y,n))&&w.checkPut(this,y,Y,n))){var C=this._getDirection(n,u);if(r=M(Y),s)return this._hideClone(),A=B,O?B.insertBefore(Y,O):B.appendChild(Y),o(!0);var E=g(c);if(!E||v(n,C,c)&&!E.animated){if(E&&c===n.target&&(u=E),u&&(l=M(u)),D?y._hideClone():y._showClone(this),!1!==h(B,c,Y,r,u,l,n,!!u))return c.appendChild(Y),A=c,ot=null,i(),o(!0)}else if(u&&u!==Y&&u.parentNode===c){var x,N=0,X=u.sortableMouseAligned,k=Y.parentNode!==c,I="vertical"===C?"top":"left",H=P(u,"top")||P(Y,"top"),R=H?H.scrollTop:void 0;if(J!==u&&(tt=null,x=M(u)[I],ct=!1),Ht(Y,u,C)&&X||k||H||p.invertSwap||"insert"===tt||"swap"===tt?("swap"!==tt&&(dt=p.invertSwap||k),N=m(n,u,C,p.swapThreshold,null==p.invertedSwapThreshold?p.swapThreshold:p.invertedSwapThreshold,dt,J===u),tt="swap"):(N=b(u),tt="insert"),0===N)return o(!1);ot=null,J=u,$=N,l=M(u);var L=u.nextElementSibling,W=!1,z=h(B,c,Y,r,u,l,n,W=1===N);if(!1!==z)return 1!==z&&-1!==z||(W=1===z),Mt=!0,mt(f,30),D?y._hideClone():y._showClone(this),W&&!L?c.appendChild(Y):u.parentNode.insertBefore(Y,W?L:u),H&&Wt(H,0,R-H.scrollTop),A=Y.parentNode,x===undefined||dt||(et=Xt(x-M(u)[I])),i(),o(!0)}if(c.contains(Y))return o(!1)}return yt&&!n.rootEl&&qt(c,n,"_onDragOver"),!1}},_animate:function(t,e){var n=this.options.animation;if(n){var o=M(e);if(e===Y&&(ot=o),1===t.nodeType&&(t=M(t)),t.left+t.width/2!==o.left+o.width/2||t.top+t.height/2!==o.top+o.height/2){var i=s(this.el),r=i&&i.a,a=i&&i.d;l(e,"transition","none"),l(e,"transform","translate3d("+(t.left-o.left)/(r||1)+"px,"+(t.top-o.top)/(a||1)+"px,0)"),e.offsetWidth,l(e,"transition","transform "+n+"ms"+(this.options.easing?" "+this.options.easing:"")),l(e,"transform","translate3d(0,0,0)")}"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=mt(function(){l(e,"transition",""),l(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;r(gt,"touchmove",this._onTouchMove),r(gt,"pointermove",this._onTouchMove),r(t,"mouseup",this._onDrop),r(t,"touchend",this._onDrop),r(t,"pointerup",this._onDrop),r(t,"touchcancel",this._onDrop),r(gt,"selectstart",this)},_onDrop:function(e){var n=this.el,o=this.options;at=!1,rt=!1,dt=!1,ct=!1,clearInterval(this._loopId),clearInterval(V),zt(),S(),clearTimeout(this._dragStartTimer),N(this._cloneId),N(this._dragStartId),r(gt,"mousemove",this._onTouchMove),this.nativeDraggable&&(r(gt,"drop",this),r(n,"dragstart",this._onDragStart),r(gt,"dragover",this._handleAutoScroll),r(gt,"dragover",Ut)),Tt&&l(gt.body,"user-select",""),this._offUpEvents(),e&&(Q&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),k&&k.parentNode&&k.parentNode.removeChild(k),(B===A||U&&"clone"!==U.lastPutMode)&&I&&I.parentNode&&I.parentNode.removeChild(I),Y&&(this.nativeDraggable&&r(Y,"dragend",this),u(Y),Y.style["will-change"]="",a(Y,U?U.options.ghostClass:this.options.ghostClass,!1),a(Y,this.options.chosenClass,!1),d(this,B,"unchoose",Y,A,B,F,null,e),B!==A?((z=_(Y,o.draggable))>=0&&(d(null,A,"add",Y,A,B,F,z,e),d(this,B,"remove",Y,A,B,F,z,e),d(null,A,"sort",Y,A,B,F,z,e),d(this,B,"sort",Y,A,B,F,z,e)),U&&U.save()):Y.nextSibling!==O&&(z=_(Y,o.draggable))>=0&&(d(this,B,"update",Y,A,B,F,z,e),d(this,B,"sort",Y,A,B,F,z,e)),t.active&&(null!=z&&-1!==z||(z=F),d(this,B,"end",Y,A,B,F,z,e),this.save()))),this._nulling()},_nulling:function(){B=Y=A=k=O=I=H=R=L=it.length=V=q=G=K=Z=Q=z=F=J=$=ot=U=j=t.active=null,kt.forEach(function(t){t.checked=!0}),kt.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":Y&&(this._onDragOver(t),o(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,n=[],o=this.el.children,i=0,r=o.length,a=this.options;i<r;i++)e(t=o[i],a.draggable,this.el,!1)&&n.push(t.getAttribute(a.dataIdAttr)||w(t));return n},sort:function(t){var n={},o=this.el;this.toArray().forEach(function(t,i){var r=o.children[i];e(r,this.options.draggable,o,!1)&&(n[t]=r)},this),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,n){return e(t,n||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&jt(n)},destroy:function(){var t=this.el;t[ft]=null,r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),r(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(r(t,"dragover",this),r(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),st.splice(st.indexOf(this.el),1),this.el=t=null},_hideClone:function(){I.cloneHidden||(l(I,"display","none"),I.cloneHidden=!0,I.parentNode&&this.options.removeCloneOnHide&&I.parentNode.removeChild(I))},_showClone:function(t){"clone"===t.lastPutMode?I.cloneHidden&&(B.contains(Y)&&!this.options.group.revertClone?B.insertBefore(I,Y):O?B.insertBefore(I,O):B.appendChild(I),this.options.group.revertClone&&this._animate(Y,I),l(I,"display",""),I.cloneHidden=!1):this._hideClone()}},i(gt,"touchmove",function(e){(t.active||at)&&e.cancelable&&e.preventDefault()}),t.utils={on:i,off:r,css:l,find:c,is:function(t,n){return!!e(t,n,t,!1)},extend:T,throttle:D,closest:e,toggleClass:a,clone:C,index:_,nextTick:x,cancelNextTick:N,detectDirection:It,getChild:p},t.create=function(e,n){return new t(e,n)},t.version="1.8.4",t});