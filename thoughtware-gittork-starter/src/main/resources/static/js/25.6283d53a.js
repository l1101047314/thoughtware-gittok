(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1140:function(e,t,r){},771:function(e,t,r){"use strict";var n=r(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(772));t.default=o.default},772:function(e,t,r){"use strict";var n=r(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=u?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(0)),u=r(67),i=r(7),a=r(722);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}t.default=(0,u.inject)("systemRoleStore")((0,u.observer)((function(e){var t=e.projectRouters,r=e.outerPath,n=e.notFoundPath,u=e.domainId,f=e.systemRoleStore.domainPermissions,c=e.location.pathname,d=(0,i.getUser)().userId;return(0,o.useEffect)((function(){if(f){var o=f["".concat(d,"_").concat(u)];if(o&&o.length>0){var i=(0,a.SameValue)(o,t,"purviewCode");i&&c===r&&e.history.replace(i.id);var s=t.find((function(e){return e.id===c}));if(s)if(s.purviewCode)if(!o.includes(s.purviewCode))return e.history.push(n||"/index/404")}}}),[c,f]),e.children})))}}]);