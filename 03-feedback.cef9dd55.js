var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(0,r.register)("9OeKo",function(t,n){var r="Expected a function",o=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return o;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?o:+e}t.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),function(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw TypeError(r);function x(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function O(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function T(){var e,n,r,o=g();if(O(o))return h(o);f=setTimeout(T,(e=o-l,n=o-c,r=t-e,d?m(r,a-n):r))}function h(e){return(f=void 0,p&&o)?x(e):(o=i=void 0,u)}function j(){var e,n=g(),r=O(n);if(o=arguments,i=this,l=n,r){if(void 0===f)return c=e=l,f=setTimeout(T,t),s?x(e):u;if(d)return f=setTimeout(T,t),x(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},j.flush=function(){return void 0===f?u:h(g())},j}(e,t,{leading:o,maxWait:t,trailing:i})}});var o=r("9OeKo");const i=document.querySelector(".feedback-form"),a=document.querySelector('input[name="email"]'),u=document.querySelector('textarea[name="message"]'),f="feedback-form-state";i.addEventListener("input",(o&&o.__esModule?o.default:o)(function(){let e={email:a.value,message:u.value.trim()};localStorage.setItem(f,JSON.stringify(e))},500)),i.addEventListener("submit",function(e){e.currentTarget.reset(),localStorage.removeItem(f),a.value="",u.value="",console.log("Form Data:",formData)});
//# sourceMappingURL=03-feedback.cef9dd55.js.map
