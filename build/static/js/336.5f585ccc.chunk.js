"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[336],{8898:function(n,r,e){e.d(r,{O:function(){return i},Z:function(){return y}});var t,o,u,i,c=e(1413),a=e(5987),f=e(4942),l=e(168),s=e(6444),d=s.ZP.button(t||(t=(0,l.Z)(["\n  min-width: 16.5rem;\n  width: auto;\n  height: 5rem;\n  line-height: 5rem;\n  padding: 0 3.5rem 0 3.5rem;\n  font-size: 1.5rem;\n  overflow: hidden;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n \n  &:hover {\n    background-color: #fff;\n    color: black;\n    border: 1px solid black;\n  }\n\n  &:active {\n    box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);\n  }\n"]))),p=(0,s.ZP)(d)(o||(o=(0,l.Z)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    color: #fff;\n    border: none;\n  }\n"]))),v=(0,s.ZP)(d)(u||(u=(0,l.Z)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n"]))),h=e(184),g=["buttonType","children","isLoading"];!function(n){n.google="google-sign-in",n.inverted="inverted",n.base="base"}(i||(i={}));var y=function(n){var r=n.buttonType,e=n.children,t=n.isLoading,o=(0,a.Z)(n,g),u=function(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.base;return(n={},(0,f.Z)(n,i.base,d),(0,f.Z)(n,i.google,p),(0,f.Z)(n,i.inverted,v),n)[r]}(r);return(0,h.jsx)(u,(0,c.Z)((0,c.Z)({},o),{},{children:t?"...":e}))}},6336:function(n,r,e){e.r(r),e.d(r,{default:function(){return s}});var t=e(885),o=e(7700),u=e(3751),i=e(6871),c=e(9434),a=e(2924),f=e(2791),l=e(184),s=function(){var n=(0,i.UO)().category,r=(0,c.v9)(a.O),e=(0,f.useState)(r[n]),s=(0,t.Z)(e,2),d=s[0],p=s[1],v=(0,c.v9)(a.U);return(0,f.useEffect)((function(){p(r[n])}),[n,r]),v?(0,l.jsx)(u.Z,{}):(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"shop_category-container",children:d&&d.map((function(n){return(0,l.jsx)(o.Z,{product:n},n.id)}))})})}},7700:function(n,r,e){e.d(r,{Z:function(){return a}});var t=e(8898),o=e(9434),u=e(4166),i=e(6058),c=e(184),a=function(n){var r=n.product,e=(0,o.I0)(),a=(0,o.v9)(i.D1),f=r.name,l=r.price,s=r.imageUrl;return(0,c.jsxs)("div",{className:"product-card-container",children:[(0,c.jsx)("img",{src:s,alt:f}),(0,c.jsxs)("div",{className:"footer",children:[(0,c.jsx)("span",{className:"name",children:f}),(0,c.jsx)("span",{className:"price",children:l})]}),(0,c.jsx)(t.Z,{buttonType:t.O.inverted,type:"button",onClick:function(){e((0,u.dm)(a,r))},children:"Add to card"})]})}},6058:function(n,r,e){e.d(r,{D1:function(){return u},Ju:function(){return i},gK:function(){return c},z4:function(){return a}});var t=e(6916),o=function(n){return n.cartItems},u=(0,t.P1)([o],(function(n){return n.cartItems})),i=(0,t.P1)([o],(function(n){return n.isCartOpen})),c=(0,t.P1)([u],(function(n){return n.reduce((function(n,r){return n+r.price*r.quantity}),0)})),a=(0,t.P1)([u],(function(n){return n.reduce((function(n,r){return n+r.quantity}),0)}))},2924:function(n,r,e){e.d(r,{O:function(){return i},U:function(){return c}});var t=e(6916),o=function(n){return n.categories},u=(0,t.P1)([o],(function(n){return n.categories})),i=(0,t.P1)([u],(function(n){return n.reduce((function(n,r){var e=r.title,t=r.items;return n[e.toLowerCase()]=t,n}),{})})),c=(0,t.P1)([o],(function(n){return n.isLoading}))},6916:function(n,r,e){e.d(r,{P1:function(){return a}});var t="NOT_FOUND";var o=function(n,r){return n===r};function u(n,r){var e="object"===typeof r?r:{equalityCheck:r},u=e.equalityCheck,i=void 0===u?o:u,c=e.maxSize,a=void 0===c?1:c,f=e.resultEqualityCheck,l=function(n){return function(r,e){if(null===r||null===e||r.length!==e.length)return!1;for(var t=r.length,o=0;o<t;o++)if(!n(r[o],e[o]))return!1;return!0}}(i),s=1===a?function(n){var r;return{get:function(e){return r&&n(r.key,e)?r.value:t},put:function(n,e){r={key:n,value:e}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}(l):function(n,r){var e=[];function o(n){var o=e.findIndex((function(e){return r(n,e.key)}));if(o>-1){var u=e[o];return o>0&&(e.splice(o,1),e.unshift(u)),u.value}return t}return{get:o,put:function(r,u){o(r)===t&&(e.unshift({key:r,value:u}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,l);function d(){var r=s.get(arguments);if(r===t){if(r=n.apply(null,arguments),f){var e=s.getEntries(),o=e.find((function(n){return f(n.value,r)}));o&&(r=o.value)}s.put(arguments,r)}return r}return d.clearCache=function(){return s.clear()},d}function i(n){var r=Array.isArray(n[0])?n[0]:n;if(!r.every((function(n){return"function"===typeof n}))){var e=r.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return r}function c(n){for(var r=arguments.length,e=new Array(r>1?r-1:0),t=1;t<r;t++)e[t-1]=arguments[t];var o=function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var u,c=0,a={memoizeOptions:void 0},f=t.pop();if("object"===typeof f&&(a=f,f=t.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var l=a,s=l.memoizeOptions,d=void 0===s?e:s,p=Array.isArray(d)?d:[d],v=i(t),h=n.apply(void 0,[function(){return c++,f.apply(null,arguments)}].concat(p)),g=n((function(){for(var n=[],r=v.length,e=0;e<r;e++)n.push(v[e].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(g,{resultFunc:f,memoizedResultFunc:h,dependencies:v,lastResult:function(){return u},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),g};return o}var a=c(u)},5987:function(n,r,e){e.d(r,{Z:function(){return o}});var t=e(3366);function o(n,r){if(null==n)return{};var e,o,u=(0,t.Z)(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(u[e]=n[e])}return u}}}]);
//# sourceMappingURL=336.5f585ccc.chunk.js.map