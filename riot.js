/* Riot v3.6.0, @license MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.riot=t.riot||{})}(this,function(t){"use strict";function e(t){return Zt.test(t)}function n(t){return typeof t===$t}function r(t){return t&&typeof t===Rt}function i(t){return typeof t===Pt}function o(t){return typeof t===It}function a(t){return i(t)||null===t||""===t}function s(t){return Array.isArray(t)||t instanceof Array}function u(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return i(t[e])||n&&n.writable}function l(t){return Kt.test(t)}function c(t,e){return Array.prototype.slice.call((e||document).querySelectorAll(t))}function f(t,e){return(e||document).querySelector(t)}function p(){return document.createDocumentFragment()}function h(){return document.createTextNode("")}function d(t){return!!t.ownerSVGElement}function g(t){return"svg"===t?document.createElementNS(Ut,t):document.createElement(t)}function m(t,e){if(i(t.innerHTML)){var n=(new DOMParser).parseFromString(e,"application/xml"),r=t.ownerDocument.importNode(n.documentElement,!0);t.appendChild(r)}else t.innerHTML=e}function v(t,e){t.style.display=e?"":"none",t.hidden=!e}function y(t,e){t.removeAttribute(e)}function x(t){return Object.keys(t).reduce(function(e,n){return e+" "+n+": "+t[n]+";"},"")}function b(t,e){return t.getAttribute(e)}function _(t,e,n){var r=Vt.exec(e);r&&r[1]?t.setAttributeNS(Ht,r[1],n):t.setAttribute(e,n)}function w(t,e,n){t.insertBefore(e,n.parentNode&&n)}function O(t,e){if(t)for(var n;n=qt.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function N(t,e,n){if(t){var r,i=e(t,n);if(!1===i)return;for(t=t.firstChild;t;)r=t.nextSibling,N(t,e,i),t=r}}function j(t,e){for(var n=t?t.length:0,r=0;r<n;++r)e(t[r],r);return t}function C(t,e){return-1!==t.indexOf(e)}function E(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function T(t,e){return t.slice(0,e.length)===e}function A(t,e,n,r){return Object.defineProperty(t,e,L({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function L(t){for(var e,n=arguments,r=1;r<n.length;++r)if(e=n[r])for(var i in e)u(t,i)&&(t[i]=e[i]);return t}function k(t,e,n){var r=this.__.parent,i=this.__.item;if(!i)for(;r&&!i;)i=r.__.item,r=r.__.parent;if(u(n,"currentTarget")&&(n.currentTarget=t),u(n,"target")&&(n.target=n.srcElement),u(n,"which")&&(n.which=n.charCode||n.keyCode),n.item=i,e.call(this,n),se.autoUpdate&&!n.preventUpdate){var o=lt(this);o.isMounted&&o.update()}}function M(t,e,n,r){var i,o=k.bind(r,n,e);n[t]=null,i=t.replace(Dt,""),C(r.__.listeners,n)||r.__.listeners.push(n),n[St]||(n[St]={}),n[St][t]&&n.removeEventListener(i,n[St][t]),n[St][t]=o,n.addEventListener(i,o,!1)}function S(t,e,n){var r,i,a,s;t.tag&&t.tagName===n?t.tag.update():(i="VIRTUAL"===t.dom.tagName,t.tag&&(i&&(a=t.tag.__.head,s=h(),a.parentNode.insertBefore(s,a)),t.tag.unmount(!0)),o(n)&&(t.impl=Ot[n],r={root:t.dom,parent:e,hasImpl:!0,tagName:n},t.tag=ut(t.impl,r,t.dom.innerHTML,e),j(t.attrs,function(e){return _(t.tag.root,e.name,e.value)}),t.tagName=n,t.tag.mount(),i&&mt(t.tag,s||t.tag.root),e.__.onUnmount=function(){var e=t.tag.opts.dataIs,n=t.tag.parent.tags,r=t.tag.__.parent.tags;dt(n,e,t.tag),dt(r,e,t.tag),t.tag.unmount()}))}function I(t){return t?(t=t.replace(jt,""),Wt[t]&&(t=Wt[t]),t):null}function R(t){if(!this.root||!b(this.root,"virtualized")){var e,i,o,s=t.dom,u=I(t.attr),l=C([kt,Mt],u),c=t.root&&"VIRTUAL"===t.root.tagName,f=s&&(t.parent||s.parentNode),p="style"===u,h="class"===u;if(t._riot_id)t.isMounted?t.update():(t.mount(),c&&mt(t,t.root));else{if(t.update)return t.update();if(o=ie(t.expr,l?L({},Object.create(this.parent),this):this),e=!a(o),(i=r(o))&&(i=!h&&!p,h?o=ie(JSON.stringify(o),this):p&&(o=x(o))),!t.attr||t.isAttrRemoved&&e&&!1!==o||(y(s,t.attr),t.isAttrRemoved=!0),t.bool&&(o=!!o&&u),t.isRtag)return S(t,this,o);if((!t.wasParsedOnce||t.value!==o)&&(t.value=o,t.wasParsedOnce=!0,!i||l)){if(a(o)&&(o=""),!u)return o+="",void(f&&(t.parent=f,"TEXTAREA"===f.tagName?(f.value=o,Gt||(s.nodeValue=o)):s.nodeValue=o));n(o)?M(u,o,s,this):l?v(s,u===Mt?!o:o):(t.bool&&(s[u]=o),"value"===u&&s.value!==o&&(s.value=o),e&&!1!==o&&_(s,u,o),p&&s.hidden&&v(s,!1))}}}}function P(t){j(t,R.bind(this))}function $(t,e,n,r){var i=r?Object.create(r):{};return i[t.key]=e,t.pos&&(i[t.pos]=n),i}function H(t,e){for(var n=e.length,r=t.length;n>r;)n--,U.apply(e[n],[e,n])}function U(t,e){t.splice(e,1),this.unmount(),dt(this.parent,this,this.__.tagName,!0)}function V(t){var e=this;j(Object.keys(this.tags),function(n){st.apply(e.tags[n],[n,t])})}function B(t,e,n){n?yt.apply(this,[t,e]):w(t,this.root,e.root)}function z(t,e,n){n?vt.apply(this,[t,e]):w(t,this.root,e.root)}function F(t,e){e?vt.call(this,t):t.appendChild(this.root)}function D(t,e,n){y(t,At);var r,i=typeof b(t,Lt)!==It||y(t,Lt),a=ft(t),u=Ot[a],l=t.parentNode,c=h(),f=ot(t),d=b(t,Tt),g=[],m=[],v=!Ot[a],x="VIRTUAL"===t.tagName;return n=ie.loopKeys(n),n.isLoop=!0,d&&y(t,Tt),l.insertBefore(c,t),l.removeChild(t),n.update=function(){n.value=ie(n.val,e);var l=p(),h=n.value,y=!s(h)&&!o(h),b=c.parentNode;b&&(y?h=(r=h||!1)?Object.keys(h).map(function(t){return $(n,h[t],t)}):[]:r=!1,d&&(h=h.filter(function(t,r){return n.key&&!y?!!ie(d,$(n,t,r,e)):!!ie(d,L(Object.create(e),t))})),j(h,function(o,s){var c=i&&typeof o===Rt&&!r,p=m.indexOf(o),d=-1===p,y=!d&&c?p:s,_=g[y],w=s>=m.length,O=c&&d||!c&&!_;o=!r&&n.key?$(n,o,s):o,O?((_=new it(u,{parent:e,isLoop:!0,isAnonymous:v,tagName:a,root:t.cloneNode(v),item:o,index:s},t.innerHTML)).mount(),w?F.apply(_,[l||b,x]):z.apply(_,[b,g[s],x]),w||m.splice(s,0,o),g.splice(s,0,_),f&&ht(e.tags,a,_,!0)):y!==s&&c&&(C(h,m[y])&&(B.apply(_,[b,g[s],x]),g.splice(s,0,g.splice(y,1)[0]),m.splice(s,0,m.splice(y,1)[0])),n.pos&&(_[n.pos]=s),!f&&_.tags&&V.call(_,s)),_.__.item=o,_.__.index=s,_.__.parent=e,O||_.update(o)}),H(h,g),m=h.slice(),b.insertBefore(l,c))},n.unmount=function(){j(g,function(t){t.unmount()})},n}function K(t,e,n){var r=this;N(t,function(e,i){var o,a,s,u=e.nodeType,l=i.parent;if(!n&&e===t)return{parent:l};if(3===u&&"STYLE"!==e.parentNode.tagName&&ie.hasExpr(e.nodeValue)&&l.children.push({dom:e,expr:e.nodeValue}),1!==u)return i;var c="VIRTUAL"===e.tagName;if(o=b(e,At))return c&&_(e,"loopVirtual",!0),l.children.push(D(e,r,o)),!1;if(o=b(e,Tt))return l.children.push(Object.create(ue).init(e,r,o)),!1;if((a=b(e,Et))&&ie.hasExpr(a))return l.children.push({isRtag:!0,expr:a,dom:e,attrs:[].slice.call(e.attributes)}),!1;if(s=ot(e),c&&(b(e,"virtualized")&&e.parentElement.removeChild(e),s||b(e,"virtualized")||b(e,"loopVirtual")||(s={tmpl:e.outerHTML})),s&&(e!==t||n)){if(!c||b(e,Et)){var f={root:e,parent:r,hasImpl:!0};return l.children.push(ut(s,f,e.innerHTML,r)),!1}_(e,"virtualized",!0);var p=new it({tmpl:e.outerHTML},{root:e,parent:r},e.innerHTML);l.children.push(p)}return q.apply(r,[e,e.attributes,function(t,e){e&&l.children.push(e)}]),{parent:l}},{parent:{children:e}})}function q(t,n,r){var i=this;j(n,function(n){if(!n)return!1;var o,a=n.name,s=e(a);C(Ct,a)?o=Object.create(le).init(t,i,a,n.value):ie.hasExpr(n.value)&&(o={dom:t,expr:n.value,attr:a,bool:s}),r(n,o)})}function W(t,e,n){var r="o"===n[0],i=r?"select>":"table>";if(t.innerHTML="<"+i+e.trim()+"</"+i,i=t.firstChild,r)i.selectedIndex=-1;else{var o=de[n];o&&1===i.childElementCount&&(i=f(o,i))}return i}function Z(t,e){if(!ce.test(t))return t;var n={};return e=e&&e.replace(pe,function(t,e,r){return n[e]=n[e]||r,""}).trim(),t.replace(he,function(t,e,r){return n[e]||r||""}).replace(fe,function(t,n){return e||n||""})}function G(t,e,n){var r=t&&t.match(/^\s*<([-\w]+)/),i=r&&r[1].toLowerCase(),o=g(n?ve:me);return t=Z(t,e),ge.test(i)?o=W(o,t,i):m(o,t),o}function Q(t,e){var n=this,r=n.name,i=n.tmpl,o=n.css,a=n.attrs,s=n.onCreate;return Ot[r]||(J(r,i,o,a,s),Ot[r].class=this.constructor),gt(t,r,e,this),o&&ee.inject(),this}function J(t,e,r,i,o){return n(i)&&(o=i,/^[\w\-]+\s?=/.test(r)?(i=r,r=""):i=""),r&&(n(r)?o=r:ee.add(r)),t=t.toLowerCase(),Ot[t]={name:t,tmpl:e,attrs:i,fn:o},t}function X(t,e,n,r,i){return n&&ee.add(n,t),Ot[t]={name:t,tmpl:e,attrs:r,fn:i},t}function Y(t,e,n){function i(t){if(t.tagName){var r,o=b(t,Et);e&&o!==e&&(o=e,_(t,Et,e)),(r=gt(t,o||t.tagName.toLowerCase(),n))&&u.push(r)}else t.length&&j(t,i)}var a,s,u=[];if(ee.inject(),r(e)&&(n=e,e=0),a=o(t)?(t="*"===t?s=xt():t+xt(t.split(/, */)))?c(t):[]:t,"*"===e){if(e=s||xt(),a.tagName)a=c(e,a);else{var l=[];j(a,function(t){return l.push(c(e,t))}),a=l}e=0}return i(a),u}function tt(t,e,o){if(r(t))tt("__"+be+++"__",t,!0);else{var a=o?xe:ye;if(!e){if(i(a[t]))throw new Error("Unregistered mixin: "+t);return a[t]}a[t]=n(e)?L(e.prototype,a[t]||{})&&e:L(a[t]||{},e)}}function et(){return j(wt,function(t){return t.update()})}function nt(t){Ot[t]=null}function rt(t,e,n,r,i){if(!t||!n){var o=!n&&t?this:e||this;j(i,function(t){t.expr&&P.call(o,[t.expr]),r[E(t.name).replace(jt,"")]=t.expr?t.expr.value:t.value})}}function it(t,e,r){void 0===t&&(t={}),void 0===e&&(e={});var i,a=L({},e.opts),s=e.parent,u=e.isLoop,l=!!e.isAnonymous,c=se.skipAnonymousTags&&l,f=pt(e.item),p=e.index,h=[],g=[],v=[],x=e.root,b=e.tagName||ft(x),w="virtual"===b,N=!w&&!t.tmpl,E=[];c||oe(this),t.name&&x._tag&&x._tag.unmount(!0),this.isMounted=!1,A(this,"__",{isAnonymous:l,instAttrs:h,innerHTML:r,tagName:b,index:p,isLoop:u,isInline:N,listeners:[],virts:[],tail:null,head:null,parent:null,item:null}),A(this,"_riot_id",++we),A(this,"root",x),L(this,{opts:a},f),A(this,"parent",s||null),A(this,"tags",{}),A(this,"refs",{}),N||u&&l?i=x:(w||(x.innerHTML=""),i=G(t.tmpl,r,d(x))),A(this,"update",function(t){var e={},r=this.isMounted&&!c;return t=pt(t),L(this,t),rt.apply(this,[u,s,l,e,h]),r&&this.isMounted&&n(this.shouldUpdate)&&!this.shouldUpdate(t,e)?this:(u&&l&&at.apply(this,[this.parent,E]),L(a,e),r&&this.trigger("update",t),P.call(this,v),r&&this.trigger("updated"),this)}.bind(this)),A(this,"mixin",function(){var t=this;return j(arguments,function(e){var r,i,a=[],s=["init","__proto__"];e=o(e)?tt(e):e,r=n(e)?new e:e;var u=Object.getPrototypeOf(r);do{a=a.concat(Object.getOwnPropertyNames(i||r))}while(i=Object.getPrototypeOf(i||r));j(a,function(e){if(!C(s,e)){var i=Object.getOwnPropertyDescriptor(r,e)||Object.getOwnPropertyDescriptor(u,e),o=i&&(i.get||i.set);!t.hasOwnProperty(e)&&o?Object.defineProperty(t,e,i):t[e]=n(r[e])?r[e].bind(t):r[e]}}),r.init&&r.init.bind(t)()}),this}.bind(this)),A(this,"mount",function(){var e=this;x._tag=this,q.apply(s,[x,x.attributes,function(t,n){!l&&le.isPrototypeOf(n)&&(n.tag=e),t.expr=n,h.push(t)}]),g=[],O(t.attrs,function(t,e){g.push({name:t,value:e})}),q.apply(this,[x,g,function(t,e){e?v.push(e):_(x,t.name,t.value)}]),rt.apply(this,[u,s,l,a,h]);var n=tt(Nt);if(n&&!c)for(var r in n)n.hasOwnProperty(r)&&e.mixin(n[r]);if(t.fn&&t.fn.call(this,a),c||this.trigger("before-mount"),K.apply(this,[i,v,l]),this.update(f),!l&&!N)for(;i.firstChild;)x.appendChild(i.firstChild);if(A(this,"root",x),A(this,"isMounted",!0),!c){if(this.parent){var o=lt(this.parent);o.one(o.isMounted?"updated":"mount",function(){e.trigger("mount")})}else this.trigger("mount");return this}}.bind(this)),A(this,"unmount",function(e){var n,r=this,i=this.root,o=i.parentNode,a=wt.indexOf(this);return c||this.trigger("before-unmount"),O(t.attrs,function(t){T(t,jt)&&(t=t.slice(jt.length)),y(x,t)}),this.__.listeners.forEach(function(t){Object.keys(t[St]).forEach(function(e){t.removeEventListener(e,t[St][e])})}),-1!==a&&wt.splice(a,1),(o||w)&&(s?(n=lt(s),w?Object.keys(this.tags).forEach(function(t){dt(n.tags,t,r.tags[t])}):(dt(n.tags,b,this),s!==n&&dt(s.tags,b,this))):m(i,""),o&&!e&&o.removeChild(i)),this.__.virts&&j(this.__.virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),ct(v),j(h,function(t){return t.expr&&t.expr.unmount&&t.expr.unmount()}),this.__.onUnmount&&this.__.onUnmount(),c||(this.trigger("unmount"),this.off("*")),A(this,"isMounted",!1),delete this.root._tag,this}.bind(this))}function ot(t){return t.tagName&&Ot[b(t,Et)||b(t,Et)||t.tagName.toLowerCase()]}function at(t,e){var n=this;j(Object.keys(t),function(r){var o=!l(r)&&C(e,r);(i(n[r])||o)&&(o||e.push(r),n[r]=t[r])})}function st(t,e){var n,r=this.parent;r&&(s(n=r.tags[t])?n.splice(e,0,n.splice(n.indexOf(this),1)[0]):ht(r.tags,t,this))}function ut(t,e,n,r){var i=new it(t,e,n),o=e.tagName||ft(e.root,!0),a=lt(r);return A(i,"parent",a),i.__.parent=r,ht(a.tags,o,i),a!==r&&ht(r.tags,o,i),i}function lt(t){for(var e=t;e.__.isAnonymous&&e.parent;)e=e.parent;return e}function ct(t){j(t,function(t){t instanceof it?t.unmount(!0):t.tagName?t.tag.unmount(!0):t.unmount&&t.unmount()})}function ft(t,e){var n=ot(t),r=!e&&b(t,Et);return r&&!ie.hasExpr(r)?r:n?n.name:t.tagName.toLowerCase()}function pt(t){if(!(t instanceof it||t&&n(t.trigger)))return t;var e={};for(var r in t)Kt.test(r)||(e[r]=t[r]);return e}function ht(t,e,n,r,o){var a=t[e],u=s(a),l=!i(o);if(!a||a!==n)if(!a&&r)t[e]=[n];else if(a)if(u){var c=a.indexOf(n);if(c===o)return;-1!==c&&a.splice(c,1),l?a.splice(o,0,n):a.push(n)}else t[e]=[a,n];else t[e]=n}function dt(t,e,n,r){if(s(t[e])){var i=t[e].indexOf(n);-1!==i&&t[e].splice(i,1),t[e].length?1!==t[e].length||r||(t[e]=t[e][0]):delete t[e]}else delete t[e]}function gt(t,e,n,r){var i=Ot[e],o=Ot[e].class,a=r||(o?Object.create(o.prototype):{}),s=t._innerHTML=t._innerHTML||t.innerHTML,u=L({root:t,opts:n},{parent:n?n.parent:null});return i&&t&&it.apply(a,[i,u,s]),a&&a.mount&&(a.mount(!0),C(wt,a)||wt.push(a)),a}function mt(t,e){var n=p();vt.call(t,n),e.parentNode.replaceChild(n,e)}function vt(t,e){var n,r,i=this,o=h(),a=h(),s=p();for(this.root.insertBefore(o,this.root.firstChild),this.root.appendChild(a),this.__.head=r=o,this.__.tail=a;r;)n=r.nextSibling,s.appendChild(r),i.__.virts.push(r),r=n;e?t.insertBefore(s,e.__.head):t.appendChild(s)}function yt(t,e){for(var n,r=this,i=this.__.head,o=p();i;)if(n=i.nextSibling,o.appendChild(i),(i=n)===r.__.tail){o.appendChild(i),t.insertBefore(o,e.__.head);break}}function xt(t){if(!t){var e=Object.keys(Ot);return e+xt(e)}return t.filter(function(t){return!/[^-\w]/.test(t)}).reduce(function(t,e){var n=e.trim().toLowerCase();return t+",["+Et+'="'+n+'"]'},"")}var bt,_t,wt=[],Ot={},Nt="__global_mixin",jt="riot-",Ct=["ref","data-ref"],Et="data-is",Tt="if",At="each",Lt="no-reorder",kt="show",Mt="hide",St="__riot-events__",It="string",Rt="object",Pt="undefined",$t="function",Ht="http://www.w3.org/1999/xlink",Ut="http://www.w3.org/2000/svg",Vt=/^xlink:(\w+)/,Bt=typeof window===Pt?void 0:window,zt=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,Ft=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,Dt=/^on/,Kt=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|refs|parent|opts|trigger|o(?:n|ff|ne))$/,qt=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,Wt={viewbox:"viewBox"},Zt=/^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,Gt=0|(Bt&&Bt.document||{}).documentMode,Qt=Object.freeze({isBoolAttr:e,isFunction:n,isObject:r,isUndefined:i,isString:o,isBlank:a,isArray:s,isWritable:u,isReservedName:l}),Jt=Object.freeze({$$:c,$:f,createFrag:p,createDOMPlaceholder:h,isSvg:d,mkEl:g,setInnerHTML:m,toggleVisibility:v,remAttr:y,styleObjectToString:x,getAttr:b,setAttr:_,safeInsert:w,walkAttrs:O,walkNodes:N}),Xt={},Yt=[],te=!1;Bt&&(bt=function(){var t=g("style");_(t,"type","text/css");var e=f("style[type=riot]");return e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),_t=bt.styleSheet);var ee={styleNode:bt,add:function(t,e){e?Xt[e]=t:Yt.push(t),te=!0},inject:function(){if(Bt&&te){te=!1;var t=Object.keys(Xt).map(function(t){return Xt[t]}).concat(Yt).join("\n");_t?_t.cssText=t:bt.innerHTML=t}}},ne=function(){function t(t,e){for(;--e>=0&&/\s/.test(t[e]););return e}function e(e,s){var u=/.*/g,l=u.lastIndex=s++,c=u.exec(e)[0].match(o);if(c){var f=l+c[0].length,p=e[l=t(e,l)];if(l<0||~n.indexOf(p))return f;if("."===p)"."===e[l-1]&&(s=f);else if("+"===p||"-"===p)(e[--l]!==p||(l=t(e,l))<0||!a.test(e[l]))&&(s=f);else if(~i.indexOf(p)){for(var h=l+1;--l>=0&&a.test(e[l]););~r.indexOf(e.slice(l+1,h))&&(s=f)}}return s}var n="[{(,;:?=|&!^~>%*/",r=["case","default","do","else","in","instanceof","prefix","return","typeof","void","yield"],i=r.reduce(function(t,e){return t+e.slice(-1)},""),o=/^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/,a=/[$\w]/;return e}(),re=function(t){function e(t){return t}function n(t,e){return e||(e=b),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?l:"")}function r(t){if(t===v)return y;var e=t.split(" ");if(2!==e.length||h.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(d,"\\").split(" ")),e[4]=n(e[1].length>1?/{[\S\s]*?}/:y[4],e),e[5]=n(t.length>3?/\\({|})/g:y[5],e),e[6]=n(y[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+g,l),e[8]=t,e}function i(t){return t instanceof RegExp?s(t):b[t]}function o(t){(t||(t=v))!==b[8]&&(b=r(t),s=t===v?e:n,b[9]=s(y[9])),x=t}function a(t){var e;e=(t=t||{}).brackets,Object.defineProperty(t,"brackets",{set:o,get:function(){return x},enumerable:!0}),u=t,o(e)}var s,u,l="g",c=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,f=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,p=f.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,h=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),d=/(?=[[\]()*+?.^$|])/g,g=f.source+"|"+/(\/)(?![*\/])/.source,m={"(":RegExp("([()])|"+g,l),"[":RegExp("([[\\]])|"+g,l),"{":RegExp("([{}])|"+g,l)},v="{ }",y=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+g,l),v,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],x=void 0,b=[];return i.split=function(t,e,n){function r(t){d&&(t=d+t,d=""),e||a?f.push(t&&t.replace(n[5],"$1")):f.push(t)}function i(n,r,i){return i&&(r=ne(t,n)),e&&r>n+2&&(l="⁗"+h.length+"~",h.push(t.slice(n,r)),d+=t.slice(s,n)+l,s=r),r}n||(n=b);var o,a,s,u,l,c,f=[],p=n[6],h=[],d="";for(a=s=p.lastIndex=0;o=p.exec(t);){if(c=p.lastIndex,u=o.index,a){if(o[2]){var g=o[2],v=m[g],y=1;for(v.lastIndex=c;o=v.exec(t);)if(o[1]){if(o[1]===g)++y;else if(!--y)break}else v.lastIndex=i(o.index,v.lastIndex,o[2]);p.lastIndex=y?t.length:v.lastIndex;continue}if(!o[3]){p.lastIndex=i(u,c,o[4]);continue}}o[1]||(r(t.slice(s,u)),s=p.lastIndex,(p=n[6+(a^=1)]).lastIndex=s)}return t&&s<t.length&&r(t.slice(s)),f.qblocks=h,f},i.hasExpr=function(t){return b[4].test(t)},i.loopKeys=function(t){var e=t.match(b[9]);return e?{key:e[1],pos:e[2],val:b[0]+e[3].trim()+b[1]}:{val:t.trim()}},i.array=function(t){return t?r(t):b},Object.defineProperty(i,"settings",{set:a,get:function(){return u}}),i.settings="undefined"!=typeof riot&&riot.settings||{},i.set=o,i.skipRegex=ne,i.R_STRINGS=f,i.R_MLCOMMS=c,i.S_QBLOCKS=p,i.S_QBLOCK2=g,i}(),ie=function(){function t(t,r){return t?(a[t]||(a[t]=n(t))).call(r,e.bind({data:r,tmpl:t})):t}function e(e,n){e.riotData={tagName:n&&n.__&&n.__.tagName,_riot_id:n&&n._riot_id},t.errorHandler?t.errorHandler(e):"undefined"!=typeof console&&"function"==typeof console.error&&(console.error(e.message),console.log("<%s> %s",e.riotData.tagName||"Unknown tag",this.tmpl),console.log(this.data))}function n(t){var e=r(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function r(t){var e,n=re.split(t.replace(s,'"'),1),r=n.qblocks;if(n.length>2||n[0]){var o,a,l=[];for(o=a=0;o<n.length;++o)(e=n[o])&&(e=1&o?i(e,1,r):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(l[a++]=e);e=a<2?l[0]:"["+l.join(",")+'].join("")'}else e=i(n[1],0,r);return r.length&&(e=e.replace(u,function(t,e){return r[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function i(t,e,n){if(t=t.replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var r,i=[],a=0;t&&(r=t.match(l))&&!r.index;){var s,u,f=/,|([[{(])|$/g;for(t=RegExp.rightContext,s=r[2]?n[r[2]].slice(1,-1).trim().replace(/\s+/g," "):r[1];u=(r=f.exec(t))[1];)!function(e,n){var r,i=1,o=c[e];for(o.lastIndex=n.lastIndex;r=o.exec(t);)if(r[0]===e)++i;else if(!--i)break;n.lastIndex=i?t.length:o.lastIndex}(u,f);u=t.slice(0,r.index),t=RegExp.rightContext,i[a++]=o(u,1,s)}t=a?a>1?"["+i.join(",")+'].join(" ").trim()':i[0]:o(t,e)}return t}function o(t,e,n){var r;return t=t.replace(p,function(t,e,n,i,o){return n&&(i=r?0:i+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+f+n,i&&(r="."===(o=o[i])||"("===o||"["===o)):i&&(r=!h.test(o.slice(i)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var a={};t.hasExpr=re.hasExpr,t.loopKeys=re.loopKeys,t.clearCache=function(){a={}},t.errorHandler=null;var s=/\u2057/g,u=/\u2057(\d+)~/g,l=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,c={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},f='"in this?this:'+("object"!=typeof window?"global":"window")+").",p=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,h=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return t.version=re.version="v3.0.8",t}(),oe=function(t){t=t||{};var e={},n=Array.prototype.slice;return Object.defineProperties(t,{on:{value:function(n,r){return"function"==typeof r&&(e[n]=e[n]||[]).push(r),t},enumerable:!1,writable:!1,configurable:!1},off:{value:function(n,r){if("*"!=n||r)if(r)for(var i,o=e[n],a=0;i=o&&o[a];++a)i==r&&o.splice(a--,1);else delete e[n];else e={};return t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(r){var i,o,a,s=arguments,u=arguments.length-1,l=new Array(u);for(a=0;a<u;a++)l[a]=s[a+1];for(i=n.call(e[r]||[],0),a=0;o=i[a];++a)o.apply(t,l);return e["*"]&&"*"!=r&&t.trigger.apply(t,["*",r].concat(l)),t},enumerable:!1,writable:!1,configurable:!1}}),t},ae=Object.freeze({each:j,contains:C,toCamel:E,startsWith:T,defineProperty:A,extend:L}),se=L(Object.create(re.settings),{skipAnonymousTags:!0,autoUpdate:!0}),ue={init:function(t,e,n){y(t,Tt),this.tag=e,this.expr=n,this.stub=h(),this.pristine=t;var r=t.parentNode;return r.insertBefore(this.stub,t),r.removeChild(t),this},update:function(){this.value=ie(this.expr,this.tag),this.value&&!this.current?(this.current=this.pristine.cloneNode(!0),this.stub.parentNode.insertBefore(this.current,this.stub),this.expressions=[],K.apply(this.tag,[this.current,this.expressions,!0])):!this.value&&this.current&&(ct(this.expressions),this.current._tag?this.current._tag.unmount():this.current.parentNode&&this.current.parentNode.removeChild(this.current),this.current=null,this.expressions=[]),this.value&&P.call(this.tag,this.expressions)},unmount:function(){ct(this.expressions||[])}},le={init:function(t,e,n,r){return this.dom=t,this.attr=n,this.rawValue=r,this.parent=e,this.hasExp=ie.hasExpr(r),this},update:function(){var t=this.value,e=this.parent&&lt(this.parent),n=this.dom.__ref||this.tag||this.dom;this.value=this.hasExp?ie(this.rawValue,this.parent):this.rawValue,!a(t)&&e&&dt(e.refs,t,n),!a(this.value)&&o(this.value)?(e&&ht(e.refs,this.value,n,null,this.parent.__.index),this.value!==t&&_(this.dom,this.attr,this.value)):y(this.dom,this.attr),this.dom.__ref||(this.dom.__ref=n)},unmount:function(){var t=this.tag||this.dom,e=this.parent&&lt(this.parent);!a(this.value)&&e&&dt(e.refs,this.value,t)}},ce=/<yield\b/i,fe=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,pe=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,he=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,de={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},ge=Gt&&Gt<10?zt:Ft,me="div",ve="svg",ye={},xe=ye[Nt]={},be=0,_e=Object.freeze({Tag:Q,tag:J,tag2:X,mount:Y,mixin:tt,update:et,unregister:nt,version:"v3.6.0"}),we=0,Oe=Object.freeze({getTag:ot,inheritFrom:at,moveChildTag:st,initChildTag:ut,getImmediateCustomParentTag:lt,unmountAll:ct,getTagName:ft,cleanUpData:pt,arrayishAdd:ht,arrayishRemove:dt,mountTo:gt,makeReplaceVirtual:mt,makeVirtual:vt,moveVirtual:yt,selectTags:xt}),Ne=se,je={tmpl:ie,brackets:re,styleManager:ee,vdom:wt,styleNode:ee.styleNode,dom:Jt,check:Qt,misc:ae,tags:Oe},Ce=Q,Ee=J,Te=X,Ae=Y,Le=tt,ke=et,Me=nt,Se=oe,Ie=L({},_e,{observable:oe,settings:Ne,util:je});t.settings=Ne,t.util=je,t.Tag=Ce,t.tag=Ee,t.tag2=Te,t.mount=Ae,t.mixin=Le,t.update=ke,t.unregister=Me,t.version="v3.6.0",t.observable=Se,t.default=Ie,Object.defineProperty(t,"__esModule",{value:!0})});