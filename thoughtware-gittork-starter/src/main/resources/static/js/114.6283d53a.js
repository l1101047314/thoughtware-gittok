(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1207:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(596),a=r(597),c=r(598),u=r(599),s=r(600),l=r(67),f=r(1080),h=r(676),p=r(7);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var m="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/repository/navigator/RepositoryAside.js";function d(){return(d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function v(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */v=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new k(n||[]);return o(a,"_invoke",{value:_(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="executing",m="completed",d={};function g(){}function b(){}function w(){}var E={};s(E,a,(function(){return this}));var j=Object.getPrototypeOf,O=j&&j(j(A([])));O&&O!==r&&n.call(O,a)&&(E=O);var x=w.prototype=g.prototype=Object.create(E);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==y(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?m:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(y(e)+" is not iterable")}return b.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},L(N.prototype),s(N.prototype,c,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new N(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function g(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function b(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){g(i,n,o,a,c,"next",t)}function c(t){g(i,n,o,a,c,"throw",t)}a(void 0)}))}}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return E(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=Object(l.inject)("systemRoleStore","repositoryStore")(Object(l.observer)((function(t){var e=t.match,r=t.repositoryStore,l=t.systemRoleStore,y=r.findRepositoryPage,g=r.repositoryInfo,E=r.setRepositoryInfo,j=r.findRepositoryByAddress,O=r.findRepositoryAuth,x=l.getInitProjectPermissions,L=e.params.namespace,N=e.params.name,_="".concat(e.params.namespace,"/").concat(e.params.name),S=w(Object(n.useState)(!0),2),I=S[0],P=S[1],k=w(Object(n.useState)([]),2),A=k[0],G=k[1];Object(n.useEffect)(b(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(_).then((function(e){0===e.code&&(e.data?(O(e.data.rpyId).then((function(e){0===e.code&&"false"===e.data&&t.history.push("/repository")})),y({pageParam:{currentPage:1,pageSize:15},userId:Object(p.getUser)().userId}).then((function(t){if(0===t.code){var r=t.data.dataList.filter((function(t){return t.rpyId!==e.data.rpyId}));r.unshift(e.data),G(r)}}))):t.history.push("/repository"))})),e.abrupt("return",(function(){E("")}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){j(L+"/"+N).then((function(e){var r;0===e.code?(x(Object(p.getUser)().userId,e.data.rpyId,"public"===(null===(r=e.data)||void 0===r?void 0:r.rules)),P(!1)):9e3===e.code&&t.history.push("/".concat(L+"/"+N,"/404"))}))}),[_]);var R=[{to:"/repository/".concat(L,"/").concat(N),title:"Code",icon:o.a.createElement(i.a,{__source:{fileName:m,lineNumber:92,columnNumber:18}})},{to:"/repository/".concat(_,"/commits/").concat(g&&g.defaultBranch),title:"Commits",icon:o.a.createElement(a.a,{__source:{fileName:m,lineNumber:97,columnNumber:19}})},{to:"/repository/".concat(_,"/branch"),title:"Branch",icon:o.a.createElement(c.a,{__source:{fileName:m,lineNumber:102,columnNumber:19}})},{to:"/repository/".concat(_,"/tag"),title:"标签",icon:o.a.createElement(u.a,{__source:{fileName:m,lineNumber:107,columnNumber:19}})},{to:"/repository/".concat(_,"/scanPlay"),title:"代码扫描",icon:o.a.createElement(s.a,{__source:{fileName:m,lineNumber:112,columnNumber:19}})}];return I?o.a.createElement(h.a,{__source:{fileName:m,lineNumber:118,columnNumber:16}}):o.a.createElement(f.a,d({},t,{firstRouters:R,list:A,info:g,repositoryAddress:_,asideType:"repository",__source:{fileName:m,lineNumber:121,columnNumber:13}}))})))}}]);