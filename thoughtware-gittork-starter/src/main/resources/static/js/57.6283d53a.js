(window.webpackJsonp=window.webpackJsonp||[]).push([[57,10,12,16],{1215:function(e,r,t){"use strict";t.r(r);var n=t(0),l=t.n(n),a=t(981);r.default=function(e){return l.a.createElement(a.a,{__source:{fileName:"/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/repositoryGroup/merge/Merge.js",lineNumber:12,columnNumber:12}})}},640:function(e,r,t){"use strict";t(45);var n=t(23),l=t(0),a=t.n(l),m=t(226),u="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/common/btn/Btn.js";r.a=function(e){var r=e.icon,t=e.type,l=e.title,i=e.onClick,c=e.isMar;return a.a.createElement("div",{className:"xcode-btn ".concat(t?"xcode-btn-".concat(t):""," ").concat(c?"xcode-btn-mar":""),onClick:i,__source:{fileName:u,lineNumber:16,columnNumber:13}},a.a.createElement(n.default,{__source:{fileName:u,lineNumber:20,columnNumber:17}},r&&a.a.createElement("span",{className:"xcode-btn-icon",__source:{fileName:u,lineNumber:22,columnNumber:34}},r),"加载中"!==l?l:a.a.createElement(m.a,{__source:{fileName:u,lineNumber:24,columnNumber:42}})))}},646:function(e,r,t){"use strict";t.d(r,"b",(function(){return m})),t.d(r,"c",(function(){return u})),t.d(r,"d",(function(){return i})),t.d(r,"a",(function(){return c}));t(71);var n=t(31),l=t(118),a=t.n(l),m=(a()().format("YYYY-MM-DD HH:mm:ss"),a()().format("HH:mm"),function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120}),u=function(e){var r=e,t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value",r),t.select(),document.execCommand("Copy"),n.default.success("复制成功"),t.remove()},i=function(e,r){return r?e.split("/repository/"+r):e.split("/")},c=function(e,r){return"blank"===r?{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}:"appoint"===r?{pattern:/^[a-zA-Z0-9_]([a-zA-Z0-9_\-.])*$/,message:"只能包含字母和数字、 '_'、 '.'和'-'，且只能以字母、数字或'_'开头"}:{pattern:/^[\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"".concat(e,"不能包含非法字符，如&,%，&，#……等")}}},651:function(e,r,t){"use strict";var n=t(0),l=t.n(n),a=t(229),m=t(217),u="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/common/breadcrumb/Breadcrumb.js";r.a=function(e){var r=e.firstItem,t=e.secondItem,n=e.goBack,i=e.children,c=Object(a.a)().t;return l.a.createElement("div",{className:"xcode-breadcrumb",__source:{fileName:u,lineNumber:17,columnNumber:13}},l.a.createElement("div",{className:"xcode-breadcrumb-content",__source:{fileName:u,lineNumber:18,columnNumber:17}},n&&l.a.createElement(m.default,{onClick:n,style:{color:"#0063FF",paddingRight:8},__source:{fileName:u,lineNumber:19,columnNumber:33}}),l.a.createElement("span",{className:t?"xcode-breadcrumb-span":"",__source:{fileName:u,lineNumber:20,columnNumber:21}},c(r)),t&&l.a.createElement("span",{className:"xcode-breadcrumb-secondItem",__source:{fileName:u,lineNumber:23,columnNumber:36}},"/  ",t)),l.a.createElement("div",{__source:{fileName:u,lineNumber:25,columnNumber:17}},i))}},664:function(e,r,t){"use strict";var n=t(0),l=t.n(n),a="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/common/emptyText/EmptyText.js";r.a=function(e){var r=e.title,t=e.type;return l.a.createElement("div",{style:{textAlign:"center",marginTop:30},__source:{fileName:a,lineNumber:15,columnNumber:13}},l.a.createElement("img",{src:"data:image/png;base64,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",alt:"maven",style:{width:50,height:50},__source:{fileName:a,lineNumber:16,columnNumber:17}}),!t&&l.a.createElement("div",{style:{fontSize:13,color:"#999",paddingTop:10},__source:{fileName:a,lineNumber:20,columnNumber:21}},r||"没有查询到数据"))}},671:function(e,r,t){var n={"./es":653,"./es-do":654,"./es-do.js":654,"./es-mx":655,"./es-mx.js":655,"./es-us":656,"./es-us.js":656,"./es.js":653,"./zh-cn":657,"./zh-cn.js":657};function l(e){var r=a(e);return t(r)}function a(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=a,e.exports=l,l.id=671},703:function(e,r,t){"use strict";t(216);var n=t(194),l=t(0),a=t.n(l),m=t(220),u=t(646),i=t(640),c="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/common/modal/Modal.js",o=["title","children"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function N(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,l,a,m,u=[],i=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=t.return&&(m=t.return(),Object(m)!==m))return}finally{if(c)throw l}}return u}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function f(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}r.a=function(e){var r=e.title,t=e.children,b=f(e,o),d=N(Object(l.useState)(0),2),E=d[0],_=d[1];return Object(l.useEffect)((function(){return _(Object(u.b)()),function(){window.onresize=null}}),[E]),window.onresize=function(){_(Object(u.b)())},a.a.createElement(n.default,s({style:{height:E,top:70},bodyStyle:{padding:0},className:"xcode"},b,{__source:{fileName:c,lineNumber:31,columnNumber:9}}),a.a.createElement("div",{className:"xcode-modal",__source:{fileName:c,lineNumber:37,columnNumber:13}},a.a.createElement("div",{className:"xcode-modal-up",__source:{fileName:c,lineNumber:38,columnNumber:17}},a.a.createElement("div",{__source:{fileName:c,lineNumber:39,columnNumber:21}},r),a.a.createElement(i.a,{title:a.a.createElement(m.default,{style:{fontSize:16},__source:{fileName:c,lineNumber:41,columnNumber:32}}),type:"text",onClick:b.onCancel,__source:{fileName:c,lineNumber:40,columnNumber:21}})),a.a.createElement("div",{className:"xcode-modal-content",__source:{fileName:c,lineNumber:46,columnNumber:17}},t)))}},751:function(e,r,t){"use strict";var n=t(0),l=t.n(n),a="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/common/tabs/Tabs.js";r.a=function(e){var r=e.tabLis,t=e.type,n=e.onClick;return l.a.createElement("div",{className:"xcode-tabs",__source:{fileName:a,lineNumber:15,columnNumber:9}},r.map((function(e){return l.a.createElement("div",{key:e.id,className:"xcode-tab ".concat(t===e.id?"xcode-active-tab":null),onClick:function(){return n(e)},__source:{fileName:a,lineNumber:18,columnNumber:21}},e.title)})))}},981:function(e,r,t){"use strict";t(59);var n=t(39),l=(t(50),t(18)),a=(t(45),t(23)),m=t(0),u=t.n(m),i=t(609),c=t(136),o=t(151),s=t(651),N=t(640),b=t(751),f=t(664),d=t(561),E=(t(7),"/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/merge/components/MergeDetails.js");function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,l,a,m,u=[],i=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=t.return&&(m=t.return(),Object(m)!==m))return}finally{if(c)throw l}}return u}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var p=function(e){var r=e.setDetails,t=Object(m.useRef)(),n=_(Object(m.useState)(1),2),a=n[0],i=n[1],c=_(Object(m.useState)(!1),2),o=c[0],f=c[1],g=_(Object(m.useState)(!1),2),p=g[0],y=g[1],A=_(Object(m.useState)([]),2),v=A[0],h=A[1];Object(m.useEffect)((function(){o&&t.current.focus()}),[o]);var k=function(e){return v.some((function(r){return r===e}))},I=function(e){k(e.id)?h(v.filter((function(r){return r!==e.id}))):h(v.concat(e.id))},x=[{id:1,title:"动态(".concat(9,")")},{id:2,title:"提交(".concat(1,")")},{id:3,title:"变化(".concat(7,")")}],C=function(e,r){return u.a.createElement("div",{className:"log-comment",__source:{fileName:E,lineNumber:125,columnNumber:17}},u.a.createElement("div",{className:"log-right-node",__source:{fileName:E,lineNumber:126,columnNumber:21}},r.map((function(e){return function(e){return u.a.createElement("div",{key:e.id,className:"log-node-item",__source:{fileName:E,lineNumber:102,columnNumber:13}},u.a.createElement("div",{className:"node-item-left",__source:{fileName:E,lineNumber:103,columnNumber:17}},u.a.createElement("div",{className:"node-left-line",__source:{fileName:E,lineNumber:104,columnNumber:21}}),u.a.createElement("div",{className:"left-avatar",__source:{fileName:E,lineNumber:105,columnNumber:21}})),u.a.createElement("div",{className:"node-item-right",__source:{fileName:E,lineNumber:109,columnNumber:17}},u.a.createElement("div",{className:"reply-user",__source:{fileName:E,lineNumber:110,columnNumber:21}},u.a.createElement("div",{className:"reply-user-user",__source:{fileName:E,lineNumber:111,columnNumber:25}},"莫凶凶"),u.a.createElement("div",{className:"reply-user-time",__source:{fileName:E,lineNumber:112,columnNumber:25}}," · ",e.time),u.a.createElement("div",{className:"reply-user-reply",__source:{fileName:E,lineNumber:113,columnNumber:25}}," · 回复")),u.a.createElement("div",{className:"reply-comment",__source:{fileName:E,lineNumber:115,columnNumber:21}},e.node)))}(e)}))),u.a.createElement("div",{className:"log-right-comment",__source:{fileName:E,lineNumber:131,columnNumber:21}},u.a.createElement("div",{className:"reply-input-user",__source:{fileName:E,lineNumber:132,columnNumber:25}}),u.a.createElement("div",{className:"reply-input",__source:{fileName:E,lineNumber:135,columnNumber:25}},k(e.id)?u.a.createElement(u.a.Fragment,null,u.a.createElement(l.default.TextArea,{ref:function(e){return e&&e.focus()},placeholder:"请输入评论",__source:{fileName:E,lineNumber:139,columnNumber:41}}),u.a.createElement("div",{className:"reply-input-btn",__source:{fileName:E,lineNumber:143,columnNumber:40}},u.a.createElement(N.a,{type:"common",title:"取消",isMar:!0,onClick:function(){return I(e)},__source:{fileName:E,lineNumber:144,columnNumber:44}}),u.a.createElement(N.a,{type:"primary",title:"确定",onClick:function(){return I(e)},__source:{fileName:E,lineNumber:150,columnNumber:44}}))):u.a.createElement(l.default,{placeholder:"请输入评论",onFocus:function(){return I(e)},__source:{fileName:E,lineNumber:158,columnNumber:37}}))))};return u.a.createElement("div",{className:"mergeDetails",__source:{fileName:E,lineNumber:196,columnNumber:9}},u.a.createElement("div",{className:"mergeDetails-content xcode-repository-width xcode",__source:{fileName:E,lineNumber:197,columnNumber:13}},u.a.createElement(s.a,{firstItem:"Merge Requests",secondItem:"34567",goBack:function(){return r(!1)},__source:{fileName:E,lineNumber:198,columnNumber:17}}),u.a.createElement("div",{className:"mergeDetails-head",__source:{fileName:E,lineNumber:199,columnNumber:17}},u.a.createElement("div",{className:"mergeDetails-head-left",__source:{fileName:E,lineNumber:200,columnNumber:21}},u.a.createElement("div",{className:"head-left-status status-1",__source:{fileName:E,lineNumber:201,columnNumber:25}},"已关闭"),u.a.createElement("div",{className:"head-left-time",__source:{fileName:E,lineNumber:202,columnNumber:25}},"2个月前"),u.a.createElement("div",{className:"head-left-user",__source:{fileName:E,lineNumber:203,columnNumber:25}},"admin")),u.a.createElement("div",{className:"mergeDetails-head-right",__source:{fileName:E,lineNumber:205,columnNumber:21}},u.a.createElement(N.a,{type:"common",title:"编辑",isMar:!0,__source:{fileName:E,lineNumber:206,columnNumber:25}}),u.a.createElement(N.a,{type:"common",title:"重新打开合并请求",__source:{fileName:E,lineNumber:211,columnNumber:25}}))),u.a.createElement(b.a,{type:a,tabLis:x,onClick:function(e){i(e.id)},__source:{fileName:E,lineNumber:217,columnNumber:17}}),u.a.createElement("div",{className:"mergeDetails-log",__source:{fileName:E,lineNumber:222,columnNumber:17}},u.a.createElement("div",{className:"mergeDetails-log-title",__source:{fileName:E,lineNumber:223,columnNumber:21}},u.a.createElement("div",{className:"log-left",__source:{fileName:E,lineNumber:224,columnNumber:25}},u.a.createElement("span",{className:"log-left-icon",__source:{fileName:E,lineNumber:225,columnNumber:29}},u.a.createElement(d.a,{__source:{fileName:E,lineNumber:225,columnNumber:61}})),u.a.createElement("span",{className:"log-left-line",__source:{fileName:E,lineNumber:226,columnNumber:29}})),u.a.createElement("div",{className:"log-title-right",__source:{fileName:E,lineNumber:228,columnNumber:25}},u.a.createElement("div",{className:"right-title-time",__source:{fileName:E,lineNumber:229,columnNumber:29}},u.a.createElement("div",{className:"right-title",__source:{fileName:E,lineNumber:230,columnNumber:33}},u.a.createElement("span",{className:"title-user",__source:{fileName:E,lineNumber:232,columnNumber:37}},"莫凶凶"),u.a.createElement("span",{className:"title-title",__source:{fileName:E,lineNumber:233,columnNumber:37}},"创建了合并请求，描述如下：")),u.a.createElement("div",{className:"right-time",__source:{fileName:E,lineNumber:235,columnNumber:33}},"01月05日 18:12")),u.a.createElement("div",{className:"right-desc",__source:{fileName:E,lineNumber:239,columnNumber:29}},o?u.a.createElement("div",{__source:{fileName:E,lineNumber:242,columnNumber:41}},u.a.createElement(l.default.TextArea,{ref:t,placeholder:"添加描述",__source:{fileName:E,lineNumber:243,columnNumber:45}}),u.a.createElement("div",{className:"right-desc-btn",__source:{fileName:E,lineNumber:247,columnNumber:45}},u.a.createElement(N.a,{type:"common",title:"取消",isMar:!0,onClick:function(){return f(!1)},__source:{fileName:E,lineNumber:248,columnNumber:49}}),u.a.createElement(N.a,{type:"primary",title:"确定",onClick:function(){return f(!1)},__source:{fileName:E,lineNumber:254,columnNumber:49}}))):u.a.createElement("div",{className:"right-desc-content",onClick:function(){return f(!0)},__source:{fileName:E,lineNumber:262,columnNumber:41}},"合并请求")))),u.a.createElement("div",{className:"mergeDetails-log-content",__source:{fileName:E,lineNumber:272,columnNumber:21}},[{id:1,type:"AUTH",title:"该代码评审已合并",time:"4天前"},{id:2,type:"POSS",title:"通过了该评审",time:"7天前",nodeData:[{id:"2-1",node:"daszzzs",time:"5天前 10:10"},{id:"3-2",node:"zzz",time:"4天前 10:10"}]},{id:3,type:"COMMENT",title:"发布了整体评论",time:"3天前",nodeData:[{id:"3-1",node:"dass",time:"3天前"},{id:"3-2",node:"合并请求",time:"4天前"}]}].map((function(e){return function(e){return u.a.createElement("div",{className:"log-content-item",key:e.id,__source:{fileName:E,lineNumber:170,columnNumber:13}},u.a.createElement("div",{className:"log-left",__source:{fileName:E,lineNumber:171,columnNumber:17}},u.a.createElement("span",{className:"log-left-icon",__source:{fileName:E,lineNumber:172,columnNumber:21}},u.a.createElement(d.a,{__source:{fileName:E,lineNumber:172,columnNumber:53}})),u.a.createElement("span",{className:"log-left-line",__source:{fileName:E,lineNumber:173,columnNumber:21}})),u.a.createElement("div",{className:"log-right",__source:{fileName:E,lineNumber:175,columnNumber:17}},u.a.createElement("div",{className:"log-right-desc",__source:{fileName:E,lineNumber:176,columnNumber:21}},u.a.createElement("div",{className:"desc-user-title",__source:{fileName:E,lineNumber:177,columnNumber:25}},u.a.createElement("span",{className:"desc-user",__source:{fileName:E,lineNumber:179,columnNumber:29}},"莫凶凶"),u.a.createElement("span",{className:"desc-title",__source:{fileName:E,lineNumber:180,columnNumber:29}},e.title)),u.a.createElement("div",{className:"desc-time",__source:{fileName:E,lineNumber:182,columnNumber:25}},e.time)),e.nodeData&&C(e,e.nodeData)))}(e)})),u.a.createElement("div",{className:"log-content-view",__source:{fileName:E,lineNumber:276,columnNumber:25}},u.a.createElement("div",{className:"view-user",__source:{fileName:E,lineNumber:277,columnNumber:29}}),u.a.createElement("div",{className:"view-input",__source:{fileName:E,lineNumber:280,columnNumber:29}},p?u.a.createElement(u.a.Fragment,null,u.a.createElement(l.default.TextArea,{ref:function(e){return e&&e.focus()},placeholder:"请输入评论",__source:{fileName:E,lineNumber:284,columnNumber:45}}),u.a.createElement("div",{className:"view-input-btn",__source:{fileName:E,lineNumber:288,columnNumber:45}},u.a.createElement(N.a,{type:"common",title:"取消",isMar:!0,onClick:function(){return y(!1)},__source:{fileName:E,lineNumber:289,columnNumber:49}}),u.a.createElement(N.a,{type:"primary",title:"确定",onClick:function(){return y(!1)},__source:{fileName:E,lineNumber:295,columnNumber:49}}))):u.a.createElement(l.default,{placeholder:"展开讲讲你的看法",onClick:function(){return y(!0)},__source:{fileName:E,lineNumber:303,columnNumber:41}})))))))},y=(t(216),t(194)),A=(t(87),t(37)),v=(t(60),t(15)),h=t(220),k=t(607),I=t(608),x=t(646),C=(t(703),"/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/merge/components/MergeAdd.js");function S(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,l,a,m,u=[],i=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=t.return&&(m=t.return(),Object(m)!==m))return}finally{if(c)throw l}}return u}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var w=function(e){var r=e.addVisible,t=e.setAddVisible,n=S(v.default.useForm(),1)[0],a=S(Object(m.useState)(0),2),i=a[0],c=a[1];Object(m.useEffect)((function(){return c(Object(x.b)()),function(){window.onresize=null}}),[i]),window.onresize=function(){c(Object(x.b)())};var o=u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,{onClick:function(){return t(!1)},title:"取消",isMar:!0,__source:{fileName:C,lineNumber:32,columnNumber:13}}),u.a.createElement(N.a,{onClick:function(){n.validateFields().then((function(e){n.resetFields()}))},title:"确定",type:"primary",__source:{fileName:C,lineNumber:37,columnNumber:13}}));return u.a.createElement(y.default,{visible:r,onCancel:function(){return t(!1)},closable:!1,footer:o,style:{height:i,top:60},bodyStyle:{padding:0},className:"xcode merge-add-modal",destroyOnClose:!0,__source:{fileName:C,lineNumber:53,columnNumber:9}},u.a.createElement("div",{className:"merge-add-up",__source:{fileName:C,lineNumber:63,columnNumber:13}},u.a.createElement("div",{__source:{fileName:C,lineNumber:64,columnNumber:17}},"新建合并请求"),u.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return t(!1)},__source:{fileName:C,lineNumber:65,columnNumber:17}},u.a.createElement(h.default,{__source:{fileName:C,lineNumber:66,columnNumber:21}}))),u.a.createElement("div",{className:"merge-add-content",__source:{fileName:C,lineNumber:69,columnNumber:13}},u.a.createElement(v.default,{form:n,layout:"vertical",autoComplete:"off",initialValues:{"1-2":2},__source:{fileName:C,lineNumber:70,columnNumber:17}},u.a.createElement("div",{className:"merge-add-branch",__source:{fileName:C,lineNumber:76,columnNumber:21}},u.a.createElement(v.default.Item,{label:"源分支",name:"1-1",rules:[{required:!0,message:"源分支不能为空"}],__source:{fileName:C,lineNumber:77,columnNumber:25}},u.a.createElement(A.default,{__source:{fileName:C,lineNumber:78,columnNumber:29}},u.a.createElement(A.default.Option,{value:2,__source:{fileName:C,lineNumber:79,columnNumber:33}},"master"),u.a.createElement(A.default.Option,{value:3,__source:{fileName:C,lineNumber:80,columnNumber:33}},"xcode-v1.0"),u.a.createElement(A.default.Option,{value:4,__source:{fileName:C,lineNumber:81,columnNumber:33}},"xcode-v2.0"))),u.a.createElement("div",{className:"add-branch-arrow",__source:{fileName:C,lineNumber:84,columnNumber:25}},u.a.createElement(k.a,{__source:{fileName:C,lineNumber:84,columnNumber:59}})),u.a.createElement(v.default.Item,{label:"目标分支",name:"1-2",rules:[{required:!0,message:"源分支不能为空"}],__source:{fileName:C,lineNumber:85,columnNumber:25}},u.a.createElement(A.default,{__source:{fileName:C,lineNumber:86,columnNumber:29}},u.a.createElement(A.default.Option,{value:2,__source:{fileName:C,lineNumber:87,columnNumber:33}},"master"),u.a.createElement(A.default.Option,{value:3,__source:{fileName:C,lineNumber:88,columnNumber:33}},"xcode-v1.0"),u.a.createElement(A.default.Option,{value:4,__source:{fileName:C,lineNumber:89,columnNumber:33}},"xcode-v2.0")))),u.a.createElement(v.default.Item,{label:"标题",name:"2",rules:[{required:!0,message:"分支名称不能为空"}],__source:{fileName:C,lineNumber:93,columnNumber:21}},u.a.createElement(l.default,{__source:{fileName:C,lineNumber:94,columnNumber:25}})),u.a.createElement(v.default.Item,{name:"5",label:"评审人",rules:[{required:!0,message:"评审人不能为空"}],__source:{fileName:C,lineNumber:96,columnNumber:21}},u.a.createElement(A.default,{mode:"multiple",dropdownRender:function(e){return u.a.createElement(u.a.Fragment,null,e,u.a.createElement(N.a,{type:"link",title:"邀请新成员",icon:u.a.createElement(I.a,{__source:{fileName:C,lineNumber:108,columnNumber:51}}),__source:{fileName:C,lineNumber:105,columnNumber:41}}))},__source:{fileName:C,lineNumber:101,columnNumber:25}},u.a.createElement(A.default.Option,{value:"red",__source:{fileName:C,lineNumber:113,columnNumber:29}},"admin"),u.a.createElement(A.default.Option,{value:"green",__source:{fileName:C,lineNumber:114,columnNumber:29}},"莫凶凶"))),u.a.createElement(v.default.Item,{label:"描述信息",name:"3",__source:{fileName:C,lineNumber:117,columnNumber:21}},u.a.createElement(l.default.TextArea,{__source:{fileName:C,lineNumber:118,columnNumber:25}})))))},O="/Users/limingliang/xcode-xpack/thoughtware-gittork-ui/src/merge/components/Merge.js";function Q(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,l,a,m,u=[],i=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=t.return&&(m=t.return(),Object(m)!==m))return}finally{if(c)throw l}}return u}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return U(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}r.a=function(e){var r=Q(Object(m.useState)(1),2),t=r[0],d=r[1],E=Q(Object(m.useState)(!1),2),_=E[0],g=E[1],y=Q(Object(m.useState)(!1),2),A=y[0],v=y[1],h=[{id:1,title:"全部(".concat(0,")")},{id:2,title:"已开启(".concat(0,")")},{id:3,title:"已合并(".concat(0,")")},{id:4,title:"已关闭(".concat(0,")")}],k=[{title:"请求标题",dataIndex:"name",key:"name",width:"25%",ellipsis:!0,render:function(e,r){return u.a.createElement("span",{className:"tables-title",onClick:function(){g(!0)},__source:{fileName:O,lineNumber:59,columnNumber:25}},u.a.createElement("span",{className:"tables-title-icon",__source:{fileName:O,lineNumber:60,columnNumber:29}},u.a.createElement(i.a,{__source:{fileName:O,lineNumber:60,columnNumber:65}})),u.a.createElement("span",{className:"tables-title-text",__source:{fileName:O,lineNumber:61,columnNumber:29}},e))}},{title:"描述",dataIndex:"desc",key:"desc",width:"15%",ellipsis:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",width:"15%",ellipsis:!0},{title:"合并分支",dataIndex:"master",key:"master",width:"20%",ellipsis:!0,render:function(e,r){return u.a.createElement(a.default,{__source:{fileName:O,lineNumber:86,columnNumber:25}},u.a.createElement("span",{__source:{fileName:O,lineNumber:87,columnNumber:29}},e),u.a.createElement("span",{__source:{fileName:O,lineNumber:88,columnNumber:29}},"--\x3e"),u.a.createElement("span",{__source:{fileName:O,lineNumber:89,columnNumber:29}},r.newMaster))}},{title:"更新时间",dataIndex:"updateTime",key:"updateTime",width:"15%",ellipsis:!0},{title:"状态",dataIndex:"status",key:"status",width:"10%",ellipsis:!0,render:function(e,r){return u.a.createElement("span",{className:"tables-status status-".concat(e),__source:{fileName:O,lineNumber:107,columnNumber:25}},"1"===e&&"已开启","2"===e&&"已关闭","3"===e&&"已合并")}}];return _?u.a.createElement(p,{setDetails:g,__source:{fileName:O,lineNumber:150,columnNumber:17}}):u.a.createElement("div",{className:"merge",__source:{fileName:O,lineNumber:156,columnNumber:9}},u.a.createElement("div",{className:"merge-content xcode-repository-width xcode",__source:{fileName:O,lineNumber:157,columnNumber:13}},u.a.createElement("div",{className:"merge-top",__source:{fileName:O,lineNumber:158,columnNumber:17}},u.a.createElement(s.a,{firstItem:"Merge Requests",__source:{fileName:O,lineNumber:159,columnNumber:21}}),u.a.createElement(N.a,{type:"primary",title:"新建合并请求",icon:u.a.createElement(c.default,{__source:{fileName:O,lineNumber:163,columnNumber:31}}),onClick:function(){return v(!0)},__source:{fileName:O,lineNumber:160,columnNumber:21}}),u.a.createElement(w,{addVisible:A,setAddVisible:v,__source:{fileName:O,lineNumber:166,columnNumber:21}})),u.a.createElement("div",{className:"merge-type",__source:{fileName:O,lineNumber:171,columnNumber:17}},u.a.createElement(b.a,{type:t,tabLis:h,onClick:function(e){d(e.id)},__source:{fileName:O,lineNumber:172,columnNumber:21}}),u.a.createElement("div",{className:"merge-type-input",__source:{fileName:O,lineNumber:177,columnNumber:21}},u.a.createElement(l.default,{allowClear:!0,placeholder:"请求标题",prefix:u.a.createElement(o.default,{__source:{fileName:O,lineNumber:182,columnNumber:37}}),style:{width:200},__source:{fileName:O,lineNumber:178,columnNumber:25}}))),u.a.createElement("div",{className:"merge-tables",__source:{fileName:O,lineNumber:187,columnNumber:17}},u.a.createElement(n.default,{bordered:!1,columns:k,dataSource:[],rowKey:function(e){return e.id},pagination:!1,locale:{emptyText:u.a.createElement(f.a,{title:"暂无合并请求",__source:{fileName:O,lineNumber:194,columnNumber:45}})},__source:{fileName:O,lineNumber:188,columnNumber:21}}))))}}}]);