(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1348:function(e,t,r){"use strict";r.r(t);r(74);var n,o,i,a,u,c=r(34),l=(r(101),r(59)),s=r(0),m=r.n(s),f=r(9),h=r(7);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */d=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),u=new C(n||[]);return o(a,"_invoke",{value:j(e,r,u)}),a}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",h="executing",v="completed",y={};function b(){}function N(){}function g(){}var w={};l(w,a,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(R([])));E&&E!==r&&n.call(E,a)&&(w=E);var x=g.prototype=b.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,a,u){var c=m(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==p(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function j(t,r,n){var o=f;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=S(u,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=m(t,r,n);if("normal"===l.type){if(o=n.done?v:"suspendedYield",l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function S(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=m(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function R(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(p(t)+" is not iterable")}return N.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:N,configurable:!0}),N.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===N||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},L(O.prototype),l(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=R,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function v(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){v(i,n,o,a,u,"next",e)}function u(e){v(i,n,o,a,u,"throw",e)}a(void 0)}))}}function b(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function g(e,t,r){return t&&N(e.prototype,t),r&&N(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}function _(e,t,r,n,o){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var E=new(o=_((n=g((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"recordCommitList",o,this),b(this,"recordOpenList",i,this),b(this,"findRecordOpenList",a,this),b(this,"findRecordCommitList",u,this)}))).prototype,"recordCommitList",[f.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=_(n.prototype,"recordOpenList",[f.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),a=_(n.prototype,"findRecordOpenList",[f.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return y(d().mark((function t(){var r,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={userId:Object(h.getUser)().userId},t.next=3,h.Axios.post("/recordOpen/findRecordOpenList",r);case 3:return 0===(n=t.sent).code&&(e.recordOpenList=n.data),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))}}),u=_(n.prototype,"findRecordCommitList",[f.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return y(d().mark((function t(){var r,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={userId:Object(h.getUser)().userId},t.next=3,h.Axios.post("/recordCommit/findRecordCommitList",r);case 3:return 0===(n=t.sent).code&&(e.recordCommitList=n.data),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))}}),n),x=r(1102),L=r(682),O=r(761),j=r(693);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var k="/Users/limingliang/xcode-xpack/web/thoughtware-gittok-ui/src/home/components/HomePage.js";function P(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */P=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),u=new C(n||[]);return o(a,"_invoke",{value:L(e,r,u)}),a}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",h="executing",p="completed",d={};function v(){}function y(){}function b(){}var N={};l(N,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(R([])));w&&w!==r&&n.call(w,a)&&(N=w);var _=b.prototype=v.prototype=Object.create(N);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,i,a,u){var c=m(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==S(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,r,n){var o=f;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=m(t,r,n);if("normal"===l.type){if(o=n.done?p:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=p,n.method="throw",n.arg=l.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=m(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function R(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(S(t)+" is not iterable")}return y.prototype=b,o(_,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=l(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(_),l(_,c,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=R,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function C(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function R(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){C(i,n,o,a,u,"next",e)}function u(e){C(i,n,o,a,u,"throw",e)}a(void 0)}))}}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t=E.findRecordOpenList,r=E.recordOpenList,n=E.findRecordCommitList,o=E.recordCommitList,i=G(Object(s.useState)(!0),2),a=i[0],u=i[1],f=G(Object(s.useState)(!0),2),h=f[0],p=f[1],d=G(Object(s.useState)(window.innerWidth),2),v=d[0],y=d[1];Object(s.useEffect)(R(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t().then((function(){return u(!1)})),n().then((function(){return p(!1)}));case 2:case"end":return e.stop()}}),e)}))),[]),window.onresize=function(){var e=window.innerWidth;y(e),console.log(e)};var b=function(t){e.history.push("/repository/".concat(t.address,"/tree"))},N=function(e){var t,r,n;return m.a.createElement(s.Fragment,{__source:{fileName:k,lineNumber:90,columnNumber:11}},m.a.createElement("div",{className:"houseRecent-border-flex",__source:{fileName:k,lineNumber:91,columnNumber:15}},m.a.createElement(O.a,{text:null==e||null===(t=e.repository)||void 0===t?void 0:t.name,colors:null==e?void 0:e.repository.color,__source:{fileName:k,lineNumber:92,columnNumber:19}}),m.a.createElement("div",{className:"houseRecent-border-text",__source:{fileName:k,lineNumber:93,columnNumber:19}},(null==(n=null==e||null===(r=e.repository)||void 0===r?void 0:r.name)?void 0:n.length)>17?m.a.createElement(l.default,{placement:"right",title:n,__source:{fileName:k,lineNumber:73,columnNumber:17}},m.a.createElement("div",{style:{width:155,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},__source:{fileName:k,lineNumber:74,columnNumber:21}},n)):m.a.createElement("div",{__source:{fileName:k,lineNumber:84,columnNumber:17}},n))),m.a.createElement("div",{className:"houseRecent-border-flex houseRecent-border-text-top",__source:{fileName:k,lineNumber:95,columnNumber:15}},m.a.createElement("div",{className:"houseRecent-border-desc",__source:{fileName:k,lineNumber:96,columnNumber:19}},m.a.createElement("span",{className:"title-color",__source:{fileName:k,lineNumber:97,columnNumber:23}},"分支"),m.a.createElement("span",{className:"desc-text",__source:{fileName:k,lineNumber:98,columnNumber:23}},null==e?void 0:e.branchNum)),m.a.createElement("div",{className:"houseRecent-border-desc",__source:{fileName:k,lineNumber:100,columnNumber:19}},m.a.createElement("span",{className:"title-color",__source:{fileName:k,lineNumber:101,columnNumber:23}},"成员"),m.a.createElement("span",{className:"desc-text",__source:{fileName:k,lineNumber:102,columnNumber:23}},null==e?void 0:e.memberNum))))};return m.a.createElement("div",{className:"homePage gittok-width",__source:{fileName:k,lineNumber:110,columnNumber:9}},m.a.createElement(c.default,{sm:{span:"24"},md:{span:"24"},lg:{span:"24"},xl:{span:"20",offset:"2"},xxl:{span:"18",offset:"3"},__source:{fileName:k,lineNumber:111,columnNumber:13}},m.a.createElement("div",{className:"homePage-content",__source:{fileName:k,lineNumber:117,columnNumber:17}},m.a.createElement("div",{className:"houseRecent",__source:{fileName:k,lineNumber:118,columnNumber:17}},m.a.createElement("div",{className:"houseRecent-title",__source:{fileName:k,lineNumber:119,columnNumber:21}},m.a.createElement(x.a,{title:"常用仓库",__source:{fileName:k,lineNumber:120,columnNumber:25}})),a?m.a.createElement(j.b,{type:"table",__source:{fileName:k,lineNumber:124,columnNumber:25}}):r&&r.length>0?m.a.createElement("div",{className:"houseRecent-repository",__source:{fileName:k,lineNumber:127,columnNumber:29}},r.map((function(e,t){return v>=1700&&t<5&&m.a.createElement("div",{key:t,className:"houseRecent-border houseRecent-border-width-20",onClick:function(){return b(e.repository)},__source:{fileName:k,lineNumber:132,columnNumber:49}},N(e))||v<1700&&t<4&&m.a.createElement("div",{key:t,className:"houseRecent-border houseRecent-border-width-25",onClick:function(){return b(e.repository)},__source:{fileName:k,lineNumber:136,columnNumber:45}},N(e))}))):m.a.createElement(L.a,{title:"暂无访问的仓库",__source:{fileName:k,lineNumber:144,columnNumber:29}})),m.a.createElement("div",{className:"newCommit",__source:{fileName:k,lineNumber:148,columnNumber:17}},m.a.createElement(x.a,{title:"最近提交",__source:{fileName:k,lineNumber:149,columnNumber:21}}),h?m.a.createElement(j.b,{type:"table",__source:{fileName:k,lineNumber:152,columnNumber:28}}):o&&o.length>0?o.map((function(t,r){return m.a.createElement("div",{key:r,className:"newCommit-lab newCommit-cursor",onClick:function(){return r=null==t?void 0:t.repository,void e.history.push("/repository/".concat(r.address,"/commits/master"));var r},__source:{fileName:k,lineNumber:157,columnNumber:40}},m.a.createElement("div",{className:"newCommit-lab-style",__source:{fileName:k,lineNumber:158,columnNumber:44}},m.a.createElement(O.a,{text:null==t?void 0:t.repository.name,colors:null==t?void 0:t.repository.color,__source:{fileName:k,lineNumber:159,columnNumber:48}}),m.a.createElement("div",{__source:{fileName:k,lineNumber:160,columnNumber:48}},m.a.createElement("div",{className:"option-commit-nav",__source:{fileName:k,lineNumber:161,columnNumber:52}},m.a.createElement("span",{__source:{fileName:k,lineNumber:162,columnNumber:56}},"".concat(t.groupName)),m.a.createElement("span",{className:"newCommit-text-sym",__source:{fileName:k,lineNumber:163,columnNumber:56}},"/"),m.a.createElement("span",{className:"newCommit-text-name",__source:{fileName:k,lineNumber:164,columnNumber:56}},"".concat(null==t?void 0:t.repository.name))),m.a.createElement("div",{className:"text-desc",__source:{fileName:k,lineNumber:166,columnNumber:53}},m.a.createElement("div",{__source:{fileName:k,lineNumber:167,columnNumber:57}},t.commitId.substring(0,8),":"),m.a.createElement("div",{__source:{fileName:k,lineNumber:168,columnNumber:57}},null==t?void 0:t.commitMsg)))),m.a.createElement("div",{className:"newCommit-time",__source:{fileName:k,lineNumber:172,columnNumber:44}},null==t?void 0:t.commitTimeBad))})):m.a.createElement("div",{className:"newCommit-no",__source:{fileName:k,lineNumber:177,columnNumber:32}},m.a.createElement(L.a,{title:"暂无提交记录",__source:{fileName:k,lineNumber:178,columnNumber:36}}))))))}}}]);