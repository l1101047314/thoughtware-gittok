(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1320:function(t,e,r){"use strict";r.r(e);r(59);var n=r(39),o=(r(73),r(32)),a=(r(50),r(18)),i=(r(87),r(37)),c=(r(45),r(23)),u=(r(117),r(72)),l=(r(85),r(42)),f=r(0),s=r.n(f),p=r(229),h=r(7),y=r(218),m=r(149),d=r(136),v=(r(216),r(814)),g=r(887),b=(r(195),r(888)),w=r(972),O=[{value:"all",label:"全部应用"},{value:"darth",label:"Darth"},{value:"postin",label:"PostIn"},{value:"sward",label:"sward"},{value:"teston",label:"TestOn"},{value:"kanass",label:"Kanass"},{value:"matflow",label:"MatFlow"},{value:"gittork",label:"GitTork"},{value:"hadess",label:"Hadess"}],E=(r(71),r(31)),j=(r(60),r(15)),x=r(973);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===P(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return N(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function T(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */T=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:L(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="executing",y="completed",m={};function d(){}function v(){}function g(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(I([])));O&&O!==r&&n.call(O,i)&&(b=O);var E=g.prototype=d.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==P(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function L(e,r,n){var o=p;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=s(e,r,n);if("normal"===l.type){if(o=n.done?y:"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=s(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(P(e)+" is not iterable")}return v.prototype=g,o(E,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},j(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(E),l(E,u,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function I(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function A(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){I(a,n,o,i,c,"next",t)}function c(t){I(a,n,o,i,c,"throw",t)}i(void 0)}))}}var C=a.default.TextArea,F=function(){var t=A(T().mark((function t(e){return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/oplog/template/updateLogTemplate",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=A(T().mark((function t(e){return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/oplog/template/createLogTemplate",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(t){var e=t.getLogTemplatePage,r=t.visible,n=t.setVisible,o=t.bgroup,i=t.data,c=Object(p.a)().t,u=_(j.default.useForm(),1)[0];Object(f.useEffect)((function(){r&&(i?u.setFieldsValue(i):u.resetFields())}),[r]);var l=function(){n(!1)};return s.a.createElement(x.a,{visible:r,title:c("oplog-actions.edit"),onOk:function(){u.validateFields().then((function(t){i?F(S(S({},t),{},{id:i.id})).then((function(t){0===t.code?(l(),e()):E.default.error(t.msg)})):G(S(S({},t),{},{bgroup:o})).then((function(t){0===t.code?(l(),e()):E.default.error(t.msg)}))}))},onCancel:l},s.a.createElement(j.default,{form:u,preserve:!1,layout:"vertical"},s.a.createElement(j.default.Item,{name:"title",label:c("oplog_template.form.title"),rules:[{required:!0,message:c("oplog_template.form.titleRule")}]},s.a.createElement(a.default,{placeholder:c("oplog_template.form.titlePlaceholder")})),s.a.createElement(j.default.Item,{name:"link",label:c("oplog_template.form.link")},s.a.createElement(a.default,{placeholder:c("oplog_template.form.linkPlaceholder")})),s.a.createElement(j.default.Item,{name:"head",label:"头像"},s.a.createElement(a.default,{placeholder:c("头像")})),s.a.createElement(j.default.Item,{name:"actionEvent",label:"动作事件",rules:[{required:!0,message:"动作事件不能为空"}]},s.a.createElement(a.default,{placeholder:"动作事件"})),s.a.createElement(j.default.Item,{name:"actionProject",label:"动作项目",rules:[{required:!0,message:"动作项目不能为空"}]},s.a.createElement(a.default,{placeholder:"动作项目"})),s.a.createElement(j.default.Item,{name:"actionExtend",label:"动作扩展"},s.a.createElement(C,{rows:10,placeholder:c("oplog_template.form.contentPlaceholder")}))))};function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var R=["title"];function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){Y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===D(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function q(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function U(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function J(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */J=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new _(n||[]);return o(i,"_invoke",{value:P(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="executing",y="completed",m={};function d(){}function v(){}function g(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(N([])));O&&O!==r&&n.call(O,i)&&(b=O);var E=g.prototype=d.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==D(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function P(e,r,n){var o=p;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=s(e,r,n);if("normal"===l.type){if(o=n.done?y:"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=s(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(D(e)+" is not iterable")}return v.prototype=g,o(E,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},j(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(E),l(E,u,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function K(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function $(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){K(a,n,o,i,c,"next",t)}function c(t){K(a,n,o,i,c,"throw",t)}i(void 0)}))}}var B=function(){var t=$(J().mark((function t(e){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/oplog/template/findLogTemplatePage",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=$(J().mark((function t(e){var r;return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("id",e),t.next=4,h.Axios.post("/oplog/template/deleteLogTemplate",r);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(t){var e=t.bgroup,r=void 0===e?"darth":e,h=t.isCe,E=void 0===h||h,j=Object(p.a)().t,x=U(Object(f.useState)(""),2),P=x[0],L=x[1],S=U(Object(f.useState)(!1),2),k=S[0],_=S[1],N=U(Object(f.useState)(13),1)[0],T=U(Object(f.useState)({}),2),I=T[0],A=T[1],C={bgroup:r,pageParam:{pageSize:N,currentPage:1}},F=U(Object(f.useState)(C),2),G=F[0],D=F[1],M=U(Object(f.useState)([]),2),Y=M[0],H=M[1],K=U(Object(f.useState)(null),2),Q=K[0],X=K[1],Z=[{title:j("oplog_template.form.title"),dataIndex:["title"],key:"title",width:"45%"},{title:j("oplog_template.form.code"),dataIndex:["id"],width:"45%"},{title:j("oplog-actions.action"),dataIndex:"action",key:"action",width:"10%",render:function(t,e){return s.a.createElement(s.a.Fragment,null,r===e.bgroup&&s.a.createElement(c.default,{size:"middle"},s.a.createElement(l.default,{title:"编辑"},s.a.createElement(y.default,{onClick:function(){return et(e)},style:{fontSize:"var(--thoughtware-icon-size-16)"}})),s.a.createElement(l.default,{title:"删除"},s.a.createElement(u.default,{placement:"topRight",title:"你确定删除吗",onConfirm:function(){return rt(e.id)},okText:"确定",cancelText:"取消"},s.a.createElement(m.default,{style:{fontSize:"var(--thoughtware-icon-size-16)"}})))))}}];Object(f.useEffect)((function(){tt()}),[G]);var tt=function(){B(G).then((function(t){t.code||(A({totalRecord:t.data.totalRecord,totalPage:t.data.totalPage}),H(t.data.dataList))}))},et=function(t){_(!0),X(t)},rt=function(){var t=$(J().mark((function t(e){var r,n;return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(e);case 2:t.sent.code||(r=Object(w.a)(null==I?void 0:I.totalRecord,N,G.pageParam.currentPage),n=V(V({},G),{},{pageParam:{pageSize:N,currentPage:r}}),D(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement("div",{className:"thoughtware_oplogTemp"},s.a.createElement("div",{className:"thoughtware_oplogTemp_content"},s.a.createElement(g.a,{firstItem:"日志模板"},s.a.createElement(v.a,{type:"primary",icon:s.a.createElement(d.default,null),onClick:function(){X(null),_(!0)}},"创建")),s.a.createElement(o.default,{justify:"space-between",style:{paddingBottom:16,width:"100%"}},s.a.createElement(c.default,null,"darth"===r&&!E&&s.a.createElement(i.default,{options:O,placeholder:"产品",style:{width:240},onChange:function(t){var e={};e="all"===t?{pageParam:{pageSize:N,currentPage:1}}:V(V({},G),{},{pageParam:{pageSize:N,currentPage:1},bgroup:t}),D(e)},defaultValue:r}),s.a.createElement(a.default,{placeholder:j("oplog-title"),value:P,onChange:function(t){return L(t.target.value)},onPressEnter:function(t){return function(t){var e=t.target.value;G.title;var r=V(V({},q(G,R)),{},{pageParam:{pageSize:N,currentPage:1}});e&&(r.title=e),D(r)}(t)},style:{width:240}}))),s.a.createElement(n.default,{dataSource:Y,columns:Z,rowKey:function(t){return t.id},tableLayout:"fixed",pagination:!1}),s.a.createElement(b.a,{currentPage:G.pageParam.currentPage,changPage:function(t){var e=V(V({},G),{},{pageParam:{pageSize:N,currentPage:t}});D(e)},page:I}),s.a.createElement(z,{visible:k,setVisible:_,bgroup:r,data:Q,getLogTemplatePage:tt})))};function X(){return(X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}e.default=function(t){return s.a.createElement(Q,X({},t,{bgroup:"gittork",__source:{fileName:"/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/setting/security/LogTemplate.js",lineNumber:12,columnNumber:12}}))}},814:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(45);var n=r(23),o=r(0),a=r.n(o),i=function(t){var e=t.icon,r=t.type,o=t.title,i=t.onClick,c=t.isMar,u=t.disabled,l=t.children;return a.a.createElement("div",{className:"security-btn ".concat(r?"security-btn-".concat(r):""," ").concat(c?"security-btn-mar":""),onClick:u?null:i},a.a.createElement(n.default,null,e&&a.a.createElement("span",{className:"security-btn-icon"},e),l||o))}},888:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r.n(n),a=r(217),i=r(303),c=function(t){var e=t.currentPage,r=t.changPage,n=t.page,c=n.totalPage,u=void 0===c?1:c,l=n.totalRecord,f=void 0===l?1:l;return u>1&&o.a.createElement("div",{className:"security-page"},o.a.createElement("div",{className:"".concat(1===e?"security-page-ban":"security-page-allow"),onClick:function(){return 1===e?null:r(e-1)}},o.a.createElement(a.default,null)),o.a.createElement("div",{className:"security-page-current"},e),o.a.createElement("div",{className:"security-page-line"}," / "),o.a.createElement("div",null,u),o.a.createElement("div",{className:"".concat(e===u?"security-page-ban":"security-page-allow"),onClick:function(){return e===u?null:r(e+1)}},o.a.createElement(i.default,null)),o.a.createElement("div",{className:"security-page-record"},"  共",f,"条 "))}},972:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t,e,r){return t>=r*e?r:t<=(r-1)*e+1?1===r?1:r-1:r}},973:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));r(216);var n=r(194),o=r(0),a=r.n(o),i=r(814),c=["children"];function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var f=function(t){var e=t.children,r=l(t,c),o=a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{onClick:r.onCancel,title:"取消",isMar:!0}),a.a.createElement(i.a,{onClick:r.onOk,title:"确定",type:"primary"}));return a.a.createElement(n.default,u({style:{maxWidth:"calc(100vw - 120px)",maxHeight:"calc(100vh - 120px)",marginRight:"auto",marginLeft:"auto",position:"absolute",top:60,right:0,left:0,height:"100%",display:"flex",flexDirection:"column"},wrapClassName:"thoughtware_modal",closable:!1,destroyOnClose:!0,footer:o},r),e)}}}]);