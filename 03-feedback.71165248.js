function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,r,o,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function T(e){return l=e,f=setTimeout(j,t),c?b(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function j(){var e=v();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,o-(e-l)):n}(e))}function O(e){return f=void 0,g&&i?b(e):(i=r=void 0,a)}function w(){var e=v(),n=h(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return T(u);if(s)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},w.flush=function(){return void 0===f?a:O(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),{elements:{email:T,message:h}}=b;try{let e=JSON.parse(localStorage.getItem("feedback-form-state"));T.value=e.email,h.value=e.message}catch(e){console.log(e)}const j=e(t)((e=>{if(e.currentTarget){let e=JSON.stringify({email:T.value,message:h.value});localStorage.setItem("feedback-form-state",e)}}),500);b.addEventListener("input",j),b.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state");let t=JSON.stringify({email:T.value,message:h.value});console.log(t),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.71165248.js.map
