function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var o,r,i,f,u,a,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(T,t),l?y(e):f}function S(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=i}function T(){var e=m();if(S(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-a);return d?p(n,i-(e-c)):n}(e))}function h(e){return u=void 0,v&&o?y(e):(o=r=void 0,f)}function w(){var e=m(),n=S(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(d)return u=setTimeout(T,t),y(a)}return void 0===u&&(u=setTimeout(T,t)),f}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},w.flush=function(){return void 0===u?f:h(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");document.querySelector(".feedback-form  input"),document.querySelector(".feedback-form  textarea");y.addEventListener("input",(function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&console.log(e)})),y.addEventListener("submit",e(t)((function(e){e.preventDefault();e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}),500));const j={};y.addEventListener("input",(e=>{j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))})),console.log(j);
//# sourceMappingURL=03-feedback.3d8bb2fb.js.map
