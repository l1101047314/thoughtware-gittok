(window.webpackJsonp=window.webpackJsonp||[]).push([[65,16,28],{1346:function(e,t,r){"use strict";r.r(t);r(87);var n=r(37),o=(r(50),r(18)),i=(r(60),r(15)),a=r(0),u=r.n(a),c=r(7),l=r(67),s=r(640),f=r(676),m=r(646),p=r(651),d=r(803),h=r(710);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/repository/repository/components/RepositoryAdd.js";function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */w=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),u=new S(n||[]);return o(a,"_invoke",{value:L(e,r,u)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",p="executing",d="completed",h={};function y(){}function v(){}function g(){}var N={};l(N,a,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(I([])));E&&E!==r&&n.call(E,a)&&(N=E);var x=g.prototype=y.prototype=Object.create(N);function j(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,a,u){var c=f(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==b(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,r,n){var o=m;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(t,r,n);if("normal"===l.type){if(o=n.done?d:"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,h;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function G(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(b(t)+" is not iterable")}return v.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},j(O.prototype),l(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),G(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}function _(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function E(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){_(i,n,o,a,u,"next",e)}function u(e){_(i,n,o,a,u,"throw",e)}a(void 0)}))}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(l.inject)("repositoryStore")(Object(l.observer)((function(e){var t=e.repositoryStore,r=e.location,l=t.createRpy,b=t.isLoading,v=t.findRepositoryByName,N=t.createOpenRecord,_=t.getAddress,j=t.address,O=h.a.findCanCreateRpyGroup,L=x(Object(a.useState)([]),2),k=L[0],P=L[1],G=x(i.default.useForm(),1)[0],S=x(Object(a.useState)("public"),2),I=S[0],T=S[1],z=x(Object(a.useState)(""),2),A=z[0],C=z[1],F=x(Object(a.useState)(null),2),U=F[0],D=F[1],R=x(Object(a.useState)([]),2),H=R[0],Y=R[1],B=x(Object(a.useState)(),2),M=B[0],V=B[1];Object(a.useEffect)(E(w().mark((function e(){var t,n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({userId:Object(c.getUser)().userId});case 2:return 0===(t=e.sent).code&&V(t.data),e.next=6,O();case 6:0===(n=e.sent).code&&(Z(n.data),P(n.data)),r.search&&$(n.data,t.data),_();case 10:case"end":return e.stop()}}),e)}))),[]);var $=function(e,t){var n=r.search.substring(6),o=e.filter((function(e){return e.name===n}));if(o.length&&(D(o[0]),t)){var i=t.filter((function(e){return e.groupId===o[0].groupId}));V(i)}},q=function(){var e=E(w().mark((function e(t){var r,n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==Object(c.getUser)().userId){e.next=6;break}return e.next=3,v({name:A,userId:t});case 3:r=e.sent,e.next=9;break;case 6:return e.next=8,v({name:A,groupId:t});case 8:r=e.sent;case 9:0===r.code&&(V(r.data),G.validateFields(["name"]),G.validateFields(["address"])),t&&(n=k.filter((function(e){return t==e.groupId}))[0],D(n));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){var t=e.length>0&&e.map((function(e){return{label:e.name,value:e.groupId}}));t&&Y(t)},J=[{label:"用户",options:[{label:Object(c.getUser)().name?Object(c.getUser)().name:Object(c.getUser)().phone,value:Object(c.getUser)().userId}]},{label:"仓库组",options:H}],K=u.a.createElement(i.default,{form:G,autoComplete:"off",layout:"vertical",initialValues:{group:U?U.groupId:Object(c.getUser)().userId},__source:{fileName:y,lineNumber:150,columnNumber:9}},u.a.createElement(i.default.Item,{label:"仓库名称",name:"name",rules:[{required:!0,message:"请输入名称"},{max:30,message:"请输入1~31位以内的名称"},Object(m.a)("名称","appoint"),function(e){e.getFieldValue;return{validator:function(e,t){var r=[];return M&&(r=M&&M.map((function(e){return e.name}))),r.includes(t)?Promise.reject("名称已经存在"):Promise.resolve()}}}],__source:{fileName:y,lineNumber:156,columnNumber:13}},u.a.createElement(o.default,{style:{background:"#fff"},onChange:function(e){C(e.target.value),G.setFieldsValue({address:e.target.value}),G.validateFields(["address"])},__source:{fileName:y,lineNumber:178,columnNumber:17}})),u.a.createElement("div",{className:"repository-add-path",__source:{fileName:y,lineNumber:182,columnNumber:13}},u.a.createElement(i.default.Item,{label:u.a.createElement("span",{className:"must",__source:{fileName:y,lineNumber:183,columnNumber:36}},"仓库路径"),rules:[{required:!0,message:"请输入路径"}],__source:{fileName:y,lineNumber:183,columnNumber:17}},u.a.createElement(o.default,{style:{background:"#fff"},disabled:!0,value:j,__source:{fileName:y,lineNumber:184,columnNumber:21}})),u.a.createElement(i.default.Item,{name:"group",label:u.a.createElement("span",{style:{opacity:0},__source:{fileName:y,lineNumber:186,columnNumber:48}},"仓库组"),__source:{fileName:y,lineNumber:186,columnNumber:17}},u.a.createElement(n.default,{style:{background:"#fff",width:150,height:30,margin:"0 3px"},defaultValue:U?U.groupId:Object(c.getUser)().userId,onChange:function(e){return q(e)},options:J,__source:{fileName:y,lineNumber:187,columnNumber:21}})),u.a.createElement(i.default.Item,{className:"path-tips rpy-add",label:u.a.createElement("span",{style:{opacity:0},__source:{fileName:y,lineNumber:196,columnNumber:28}},"归属"),name:"address",rules:[{required:!0,message:"请输入路径"},{max:30,message:"请输入1~31位以内的名称"},Object(m.a)("路径","appoint"),function(e){e.getFieldValue;return{validator:function(e,t){var r=U?U.name:Object(c.getUser)().name+"/"+t,n=[];return M&&(n=M&&M.map((function(e){return e.address}))),n.includes(r)?Promise.reject("路径已经存在"):Promise.resolve()}}}],__source:{fileName:y,lineNumber:194,columnNumber:17}},u.a.createElement(o.default,{style:{background:"#fff"},__source:{fileName:y,lineNumber:218,columnNumber:21}}))),u.a.createElement(d.a,{powerType:I,setPowerType:T,powerTitle:"仓库",__source:{fileName:y,lineNumber:221,columnNumber:13}}),u.a.createElement(i.default.Item,{name:"remarks",label:"仓库描述",__source:{fileName:y,lineNumber:239,columnNumber:13}},u.a.createElement(o.default.TextArea,{style:{background:"#fff"},__source:{fileName:y,lineNumber:240,columnNumber:17}}))),Q=function(){e.history.go(-1)};return u.a.createElement("div",{className:"xcode repository-add",__source:{fileName:y,lineNumber:253,columnNumber:9}},u.a.createElement("div",{className:"repository-add-content",__source:{fileName:y,lineNumber:254,columnNumber:13}},u.a.createElement("div",{className:"repository-add-top",__source:{fileName:y,lineNumber:255,columnNumber:17}},u.a.createElement(p.a,{firstItem:"新建仓库",goBack:Q,__source:{fileName:y,lineNumber:256,columnNumber:21}})),u.a.createElement("div",{className:"repository-add-bottom",__source:{fileName:y,lineNumber:258,columnNumber:17}},u.a.createElement("div",{className:"repository-add-new",__source:{fileName:y,lineNumber:259,columnNumber:21}},K,u.a.createElement(s.a,{onClick:Q,title:"取消",isMar:!0,__source:{fileName:y,lineNumber:261,columnNumber:25}}),u.a.createElement(s.a,{onClick:function(){G.validateFields().then((function(t){var r;U?r=U.name:(r=Object(c.getUser)().name,Object(c.getUser)().name||(r=Object(c.getUser)().phone?Object(c.getUser)().phone:Object(c.getUser)().email)),l(g(g({},t),{},{group:{groupId:null==U?void 0:U.groupId},address:r+"/"+t.address,rules:I})).then((function(n){0===n.code&&e.history.push("/repository/".concat((U?U.name:r)+"/"+t.address,"/tree")),N(n.data)}))}))},type:"primary",title:"确认",__source:{fileName:y,lineNumber:262,columnNumber:25}})))),b&&u.a.createElement(f.a,{__source:{fileName:y,lineNumber:268,columnNumber:30}}))})))},301:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},640:function(e,t,r){"use strict";r(45);var n=r(23),o=r(0),i=r.n(o),a=r(226),u="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/common/btn/Btn.js";t.a=function(e){var t=e.icon,r=e.type,o=e.title,c=e.onClick,l=e.isMar;return i.a.createElement("div",{className:"xcode-btn ".concat(r?"xcode-btn-".concat(r):""," ").concat(l?"xcode-btn-mar":""),onClick:c,__source:{fileName:u,lineNumber:16,columnNumber:13}},i.a.createElement(n.default,{__source:{fileName:u,lineNumber:20,columnNumber:17}},t&&i.a.createElement("span",{className:"xcode-btn-icon",__source:{fileName:u,lineNumber:22,columnNumber:34}},t),"加载中"!==o?o:i.a.createElement(a.a,{__source:{fileName:u,lineNumber:24,columnNumber:42}})))}},646:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return l}));r(71);var n=r(31),o=r(118),i=r.n(o),a=(i()().format("YYYY-MM-DD HH:mm:ss"),i()().format("HH:mm"),function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120}),u=function(e){var t=e,r=document.createElement("input");document.body.appendChild(r),r.setAttribute("value",t),r.select(),document.execCommand("Copy"),n.default.success("复制成功"),r.remove()},c=function(e,t){return t?e.split("/repository/"+t):e.split("/")},l=function(e,t){return"blank"===t?{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}:"appoint"===t?{pattern:/^[a-zA-Z0-9_]([a-zA-Z0-9_\-.])*$/,message:"只能包含字母和数字、 '_'、 '.'和'-'，且只能以字母、数字或'_'开头"}:{pattern:/^[\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"".concat(e,"不能包含非法字符，如&,%，&，#……等")}}},671:function(e,t,r){var n={"./es":653,"./es-do":654,"./es-do.js":654,"./es-mx":655,"./es-mx.js":655,"./es-us":656,"./es-us.js":656,"./es.js":653,"./zh-cn":657,"./zh-cn.js":657};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=671},676:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}));r(695);var n=r(693),o=r(0),i=r.n(o),a="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/common/loading/Loading.js",u=function(e){return i.a.createElement("div",{className:"xcode-container",__source:{fileName:a,lineNumber:13,columnNumber:9}},i.a.createElement("div",{className:"xcode-shape",__source:{fileName:a,lineNumber:14,columnNumber:13}}),i.a.createElement("div",{className:"xcode-shape",__source:{fileName:a,lineNumber:15,columnNumber:13}}),i.a.createElement("div",{className:"xcode-shape",__source:{fileName:a,lineNumber:16,columnNumber:13}}))},c=function(e){var t=e.size,r=e.type;return"list"===r?i.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:a,lineNumber:31,columnNumber:17}},i.a.createElement(n.a,{size:t||"default ",__source:{fileName:a,lineNumber:32,columnNumber:21}})):"table"===r?i.a.createElement("div",{style:{textAlign:"center",paddingTop:30},__source:{fileName:a,lineNumber:37,columnNumber:18}},i.a.createElement(n.a,{size:t||"default ",__source:{fileName:a,lineNumber:38,columnNumber:21}})):i.a.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},__source:{fileName:a,lineNumber:42,columnNumber:13}},i.a.createElement(n.a,{size:t||"default ",__source:{fileName:a,lineNumber:43,columnNumber:17}}))}},710:function(e,t,r){"use strict";r(71);var n,o,i,a,u,c,l,s,f,m,p,d,h,b=r(31),y=r(8),v=r(7);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */N=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),u=new S(n||[]);return o(a,"_invoke",{value:L(e,r,u)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",p="executing",d="completed",h={};function b(){}function y(){}function v(){}var w={};l(w,a,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(I([])));E&&E!==r&&n.call(E,a)&&(w=E);var x=v.prototype=b.prototype=Object.create(w);function j(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,a,u){var c=f(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==g(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,r,n){var o=m;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(t,r,n);if("normal"===l.type){if(o=n.done?d:"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,h;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function G(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(g(t)+" is not iterable")}return y.prototype=v,o(x,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},j(O.prototype),l(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),G(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){E(i,n,o,a,u,"next",e)}function u(e){E(i,n,o,a,u,"throw",e)}a(void 0)}))}}function j(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,P(n.key),n)}}function L(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function k(e,t,r){return(t=P(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===g(t)?t:String(t)}function G(e,t,r,n,o){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var S=new(o=G((n=L((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"groupType",o,this),j(this,"groupList",i,this),j(this,"groupInfo",a,this),j(this,"setGroupInfo",u,this),j(this,"setGroupType",c,this),j(this,"createGroup",l,this),j(this,"deleteGroup",s,this),j(this,"updateGroup",f,this),j(this,"findGroupByName",m,this),j(this,"findRepositoryGroupPage",p,this),j(this,"findAllGroup",d,this),j(this,"findCanCreateRpyGroup",h,this)}))).prototype,"groupType",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),i=G(n.prototype,"groupList",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),a=G(n.prototype,"groupInfo",[y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),u=G(n.prototype,"setGroupInfo",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.groupInfo=t}}}),c=G(n.prototype,"setGroupType",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.groupType=t}}}),l=G(n.prototype,"createGroup",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=x(N().mark((function e(t){var r;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Axios.post("/rpyGroup/createGroup",_(_({},t),{},{user:{id:Object(v.getUser)().userId}}));case 2:return 0===(r=e.sent).code?b.default.info("创建成功",.5):b.default.info(r.msg),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),s=G(n.prototype,"deleteGroup",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=x(N().mark((function e(t){var r,n;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("groupId",t),e.next=4,v.Axios.post("/rpyGroup/deleteGroup",r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),f=G(n.prototype,"updateGroup",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=x(N().mark((function e(t){var r;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Axios.post("/rpyGroup/updateGroup",t);case 2:return 0===(r=e.sent).code&&b.default.success("更新成功"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),m=G(n.prototype,"findGroupByName",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=x(N().mark((function t(r){var n,o;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("groupName",r),t.next=4,v.Axios.post("/rpyGroup/findGroupByName",n);case 4:return 0===(o=t.sent).code&&(e.groupInfo=o.data),t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),p=G(n.prototype,"findRepositoryGroupPage",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=x(N().mark((function t(r){var n;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.Axios.post("/rpyGroup/findRepositoryGroupPage",r);case 2:return 0===(n=t.sent).code&&(e.groupList=n.data&&n.data),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),d=G(n.prototype,"findAllGroup",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return x(N().mark((function t(){var r;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.Axios.post("/rpyGroup/findAllGroup");case 2:return 0===(r=t.sent).code&&(e.groupList=r.data&&r.data),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))}}),h=G(n.prototype,"findCanCreateRpyGroup",[y.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return x(N().mark((function t(){var r,n;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("userId",Object(v.getUser)().userId),t.next=4,v.Axios.post("/rpyGroup/findCanCreateRpyGroup",r);case 4:return 0===(n=t.sent).code&&(e.groupList=n.data&&n.data),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))}}),n);t.a=S},803:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(595),a=r(594),u="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/repository/repository/components/RepositoryPower.js";t.a=function(e){var t=e.set,r=e.powerType,n=e.setPowerType,c=e.powerTitle,l=[{id:"public",title:"全局",icon:o.a.createElement(i.a,{__source:{fileName:u,lineNumber:12,columnNumber:18}}),desc:"公共项目，全部成员可见。不支持TFVC等某些功能。"},{id:"private",title:"私有",icon:o.a.createElement(a.a,{__source:{fileName:u,lineNumber:18,columnNumber:18}}),desc:"只有您授予访问权限的人才能查看此项目。"}];return o.a.createElement("div",{className:"repository-power",__source:{fileName:u,lineNumber:24,columnNumber:9}},o.a.createElement("div",{className:"repository-power-title",__source:{fileName:u,lineNumber:25,columnNumber:13}},c,"权限"),o.a.createElement("div",{className:"repository-power-content",__source:{fileName:u,lineNumber:26,columnNumber:13}},l.map((function(e){return o.a.createElement("div",{key:e.id,className:"repository-power-item ".concat(t?"repository-power-set":"repository-power-noSet"," ").concat(r===e.id?"repository-power-select":""),onClick:function(){return n(e.id)},__source:{fileName:u,lineNumber:29,columnNumber:32}},o.a.createElement("div",{className:"power-item",__source:{fileName:u,lineNumber:34,columnNumber:29}},o.a.createElement("div",{__source:{fileName:u,lineNumber:35,columnNumber:33}},o.a.createElement("div",{className:"power-title power-icon",__source:{fileName:u,lineNumber:36,columnNumber:37}},e.icon),o.a.createElement("div",{className:"power-title power-name",__source:{fileName:u,lineNumber:37,columnNumber:37}},e.title)),r===e.id&&o.a.createElement("div",{className:"power-select-show",__source:{fileName:u,lineNumber:40,columnNumber:60}})),o.a.createElement("div",{className:"power-desc",__source:{fileName:u,lineNumber:43,columnNumber:29}}," ",e.desc," "))}))))}}}]);