!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,(function(){"use strict";function e(e){return e&&"[object Function]"==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function n(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function o(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body;var r=t(e),i=r.overflow,f=r.overflowX,s=r.overflowY;return/(auto|scroll)/.test(i+s+f)?e:o(n(e))}function r(e){var n=e&&e.offsetParent,o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===t(n,"position")?r(n):n:window.document.documentElement}function i(e){return null===e.parentNode?e:i(e.parentNode)}function f(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,s=n?t:e,a=document.createRange();a.setStart(o,0),a.setEnd(s,0);var p=a.commonAncestorContainer;if(e!==p&&t!==p||o.contains(s))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||r(e.firstElementChild)===e)}(p)?p:r(p);var u=i(e);return u.host?f(u.host,t):f(e,i(t).host)}function s(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=window.document.documentElement,i=window.document.scrollingElement||r;return i[n]}return e[n]}function a(e,t){var n="x"===t?"Left":"Top",o="Left"==n?"Right":"Bottom";return+e["border"+n+"Width"].split("px")[0]+ +e["border"+o+"Width"].split("px")[0]}function p(e,t,n,o){return R(t["offset"+e],n["client"+e],n["offset"+e],X()?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function u(){var e=window.document.body,t=window.document.documentElement,n=X()&&window.getComputedStyle(t);return{height:p("Height",e,t,n),width:p("Width",e,t,n)}}function d(e){return Z({},e,{right:e.left+e.width,bottom:e.top+e.height})}function l(e){var n={};if(X())try{n=e.getBoundingClientRect();var o=s(e,"top"),r=s(e,"left");n.top+=o,n.left+=r,n.bottom+=o,n.right+=r}catch(e){}else n=e.getBoundingClientRect();var i={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},f="HTML"===e.nodeName?u():{},p=f.width||e.clientWidth||i.right-i.left,l=f.height||e.clientHeight||i.bottom-i.top,c=e.offsetWidth-p,h=e.offsetHeight-l;if(c||h){var m=t(e);c-=a(m,"x"),h-=a(m,"y"),i.width-=c,i.height-=h}return d(i)}function c(e,n){var r=X(),i="HTML"===n.nodeName,f=l(e),a=l(n),p=o(e),u=t(n),c=+u.borderTopWidth.split("px")[0],h=+u.borderLeftWidth.split("px")[0],m=d({top:f.top-a.top-c,left:f.left-a.left-h,width:f.width,height:f.height});if(m.marginTop=0,m.marginLeft=0,!r&&i){var g=+u.marginTop.split("px")[0],v=+u.marginLeft.split("px")[0];m.top-=c-g,m.bottom-=c-g,m.left-=h-v,m.right-=h-v,m.marginTop=g,m.marginLeft=v}return(r?n.contains(p):n===p&&"BODY"!==p.nodeName)&&(m=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=s(t,"top"),r=s(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}(m,n)),m}function h(e){var o=e.nodeName;return"BODY"!==o&&"HTML"!==o&&("fixed"===t(e,"position")||h(n(e)))}function m(e,t,r,i){var a={top:0,left:0},p=f(e,t);if("viewport"===i)a=function(e){var t=window.document.documentElement,n=c(e,t),o=R(t.clientWidth,window.innerWidth||0),r=R(t.clientHeight,window.innerHeight||0),i=s(t),f=s(t,"left");return d({top:i-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:o,height:r})}(p);else{var l;"scrollParent"===i?"BODY"===(l=o(n(e))).nodeName&&(l=window.document.documentElement):l="window"===i?window.document.documentElement:i;var m=c(l,p);if("HTML"!==l.nodeName||h(p))a=m;else{var g=u(),v=g.height,b=g.width;a.top+=m.top-m.marginTop,a.bottom=v+m.top,a.left+=m.left-m.marginLeft,a.right=b+m.left}}return a.left+=r,a.top+=r,a.right-=r,a.bottom-=r,a}function g(e){return e.width*e.height}function v(e,t,n,o,r){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var f=m(n,o,i,r),s={top:{width:f.width,height:t.top-f.top},right:{width:f.right-t.right,height:f.height},bottom:{width:f.width,height:f.bottom-t.bottom},left:{width:t.left-f.left,height:f.height}},a=Object.keys(s).map((function(e){return Z({key:e},s[e],{area:g(s[e])})})).sort((function(e,t){return t.area-e.area})),p=a.filter((function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight})),u=0<p.length?p[0].key:a[0].key,d=e.split("-")[1];return u+(d?"-"+d:"")}function b(e,t,n){return c(n,f(t,n))}function w(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function y(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function O(e,t,n){n=n.split("-")[0];var o=w(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",s=i?"left":"top",a=i?"height":"width",p=i?"width":"height";return r[f]=t[f]+t[a]/2-o[a]/2,r[s]=n===s?t[s]-o[p]:t[y(s)],r}function E(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function x(t,n,o){var r=void 0===o?t:t.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var o=E(e,(function(e){return e[t]===n}));return e.indexOf(o)}(t,"name",o));return r.forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=t.function||t.fn;t.enabled&&e(o)&&(n.offsets.popper=d(n.offsets.popper),n.offsets.reference=d(n.offsets.reference),n=o(n,t))})),n}function L(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=b(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=O(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=x(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function T(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function N(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length-1;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==window.document.body.style[i])return i}return null}function k(){return this.state.isDestroyed=!0,T(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[N("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e,t,n,r){var i="BODY"===e.nodeName,f=i?window:e;f.addEventListener(t,n,{passive:!0}),i||A(o(f.parentNode),t,n,r),r.push(f)}function B(e,t,n,r){n.updateBound=r,window.addEventListener("resize",n.updateBound,{passive:!0});var i=o(e);return A(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function D(){this.state.eventsEnabled||(this.state=B(this.reference,this.options,this.state,this.scheduleUpdate))}function H(){var e;this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=(this.reference,e=this.state,window.removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function C(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function M(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&C(t[n])&&(o="px"),e.style[n]=t[n]+o}))}function W(e,t,n){var o=E(e,(function(e){return e.name===t})),r=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!r){var i="`"+t+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function P(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=ee.indexOf(e),o=ee.slice(n+1).concat(ee.slice(0,n));return t?o.reverse():o}function j(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),f=e.split(/(\+|\-)/).map((function(e){return e.trim()})),s=f.indexOf(E(f,(function(e){return-1!==e.search(/,|\s/)})));f[s]&&-1===f[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var a=/\s*,\s*|\s+/,p=-1===s?[f]:[f.slice(0,s).concat([f[s].split(a)[0]]),[f[s].split(a)[1]].concat(f.slice(s+1))];return p=p.map((function(e,o){var r=(1===o?!i:i)?"height":"width",f=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,f=!0,e):f?(e[e.length-1]+=t,f=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],f=r[2];if(!i)return e;if(0===f.indexOf("%")){return d("%p"===f?n:o)[t]/100*i}return"vh"===f||"vw"===f?("vh"===f?R(document.documentElement.clientHeight,window.innerHeight||0):R(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i}(e,r,t,n)}))})),p.forEach((function(e,t){e.forEach((function(n,o){C(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))}))})),r}for(var S=Math.min,F=Math.floor,R=Math.max,U=["native code","[object MutationObserverConstructor]"],Y="undefined"!=typeof window,I=["Edge","Trident","Firefox"],q=0,z=0;z<I.length;z+=1)if(Y&&0<=navigator.userAgent.indexOf(I[z])){q=1;break}var G,V,_=Y&&(V=window.MutationObserver,U.some((function(e){return-1<(V||"").toString().indexOf(e)})))?function(e){var t=!1,n=0,o=document.createElement("span");return new MutationObserver((function(){e(),t=!1})).observe(o,{attributes:!0}),function(){t||(t=!0,o.setAttribute("x-index",n),++n)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),q))}},X=function(){return null==G&&(G=-1!==navigator.appVersion.indexOf("MSIE 10")),G},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),Q=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Z=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},$=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ee=$.slice(3),te="flip",ne="clockwise",oe="counterclockwise",re=function(){function t(n,o){var r=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};J(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=_(this.update.bind(this)),this.options=Z({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n.jquery?n[0]:n,this.popper=o.jquery?o[0]:o,this.options.modifiers={},Object.keys(Z({},t.Defaults.modifiers,i.modifiers)).forEach((function(e){r.options.modifiers[e]=Z({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return Z({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(t){t.enabled&&e(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)})),this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners(),this.state.eventsEnabled=f}return K(t,[{key:"update",value:function(){return L.call(this)}},{key:"destroy",value:function(){return k.call(this)}},{key:"enableEventListeners",value:function(){return D.call(this)}},{key:"disableEventListeners",value:function(){return H.call(this)}}]),t}();return re.Utils=("undefined"==typeof window?global:window).PopperUtils,re.placements=$,re.Defaults={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,f=r.popper,s=-1!==["bottom","top"].indexOf(n),a=s?"left":"top",p=s?"width":"height",u={start:Q({},a,i[a]),end:Q({},a,i[a]+i[p]-f[p])};e.offsets.popper=Z({},f,u[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,r=e.placement,i=e.offsets,f=i.popper,s=i.reference,a=r.split("-")[0];return n=C(+o)?[+o,0]:j(o,f,s,a),"left"===a?(f.top+=n[0],f.left-=n[1]):"right"===a?(f.top+=n[0],f.left+=n[1]):"top"===a?(f.left+=n[0],f.top-=n[1]):"bottom"===a&&(f.left+=n[0],f.top+=n[1]),e.popper=f,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||r(e.instance.popper);e.instance.reference===n&&(n=r(n));var o=m(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=o;var i=t.priority,f=e.offsets.popper,s={primary:function(e){var n=f[e];return f[e]<o[e]&&!t.escapeWithReference&&(n=R(f[e],o[e])),Q({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=f[n];return f[e]>o[e]&&!t.escapeWithReference&&(r=S(f[n],o[e]-("right"===e?f.width:f.height))),Q({},n,r)}};return i.forEach((function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";f=Z({},f,s[t](e))})),e.offsets.popper=f,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=F,f=-1!==["top","bottom"].indexOf(r),s=f?"right":"bottom",a=f?"left":"top",p=f?"width":"height";return n[s]<i(o[a])&&(e.offsets.popper[a]=i(o[a])-n[p]),n[a]>i(o[s])&&(e.offsets.popper[a]=i(o[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!W(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,i=r.popper,f=r.reference,s=-1!==["left","right"].indexOf(o),a=s?"height":"width",p=s?"top":"left",u=s?"left":"top",l=s?"bottom":"right",c=w(n)[a];f[l]-c<i[p]&&(e.offsets.popper[p]-=i[p]-(f[l]-c)),f[p]+c>i[l]&&(e.offsets.popper[p]+=f[p]+c-i[l]);var h=f[p]+f[a]/2-c/2-d(e.offsets.popper)[p];return h=R(S(i[a]-c,h),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[p]=Math.round(h),e.offsets.arrow[u]="",e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(T(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=m(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split("-")[0],r=y(o),i=e.placement.split("-")[1]||"",f=[];switch(t.behavior){case te:f=[o,r];break;case ne:f=P(o);break;case oe:f=P(o,!0);break;default:f=t.behavior}return f.forEach((function(s,a){if(o!==s||f.length===a+1)return e;o=e.placement.split("-")[0],r=y(o);var p=e.offsets.popper,u=e.offsets.reference,d=F,l="left"===o&&d(p.right)>d(u.left)||"right"===o&&d(p.left)<d(u.right)||"top"===o&&d(p.bottom)>d(u.top)||"bottom"===o&&d(p.top)<d(u.bottom),c=d(p.left)<d(n.left),h=d(p.right)>d(n.right),m=d(p.top)<d(n.top),g=d(p.bottom)>d(n.bottom),v="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&g,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g);(l||v||w)&&(e.flipped=!0,(l||v)&&(o=f[a+1]),w&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=Z({},e.offsets.popper,O(e.instance.popper,e.offsets.reference,e.placement)),e=x(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,f=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[f?"left":"top"]=i[t]-(s?r[f?"width":"height"]:0),e.placement=y(t),e.offsets.popper=d(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!W(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=E(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,i=e.offsets.popper,f=E(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==f&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,p=void 0===f?t.gpuAcceleration:f,u=l(r(e.instance.popper)),d={position:i.position},c={left:F(i.left),top:F(i.top),bottom:F(i.bottom),right:F(i.right)},h="bottom"===n?"top":"bottom",m="right"===o?"left":"right",g=N("transform");if(a="bottom"==h?-u.height+c.bottom:c.top,s="right"==m?-u.width+c.right:c.left,p&&g)d[g]="translate3d("+s+"px, "+a+"px, 0)",d[h]=0,d[m]=0,d.willChange="transform";else{var v="bottom"==h?-1:1,b="right"==m?-1:1;d[h]=a*v,d[m]=s*b,d.willChange=h+", "+m}var w={"x-placement":e.placement};return e.attributes=Z({},w,e.attributes),e.styles=Z({},d,e.styles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return M(e.instance.popper,e.styles),function(e,t){Object.keys(t).forEach((function(n){!1===t[n]?e.removeAttribute(n):e.setAttribute(n,t[n])}))}(e.instance.popper,e.attributes),e.offsets.arrow&&M(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,n,o,r){var i=b(0,t,e),f=v(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",f),M(t,{position:"absolute"}),n},gpuAcceleration:void 0}}},re}));
//# sourceMappingURL=index.65d9b390.js.map